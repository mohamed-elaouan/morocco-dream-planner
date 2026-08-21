import { type ComponentType, Suspense, useEffect, useRef, useState } from "react";

type DeferredSectionProps = {
  id: string;
  load: () => Promise<{ default: ComponentType }>;
  minHeight?: string;
};

/** Loads below-the-fold home sections shortly before they enter the viewport. */
const DeferredSection = ({ id, load, minHeight = "18rem" }: DeferredSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [Section, setSection] = useState<ComponentType | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "700px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad || Section) return;
    let cancelled = false;
    load().then((module) => {
      if (!cancelled) setSection(() => module.default);
    });
    return () => {
      cancelled = true;
    };
  }, [Section, load, shouldLoad]);

  return (
    <div id={id} ref={containerRef} style={Section ? undefined : { minHeight }}>
      {Section ? <Suspense fallback={null}><Section /></Suspense> : null}
    </div>
  );
};

export default DeferredSection;
