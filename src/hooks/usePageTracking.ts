import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Automatically tracks page views on every route change.
 * Must be rendered inside <BrowserRouter>.
 *
 * Uses a ref to prevent duplicate tracking of the same path
 * (e.g. React strict-mode double-mount in development).
 */
export const usePageTracking = (): void => {
  const location = useLocation();
  const lastTrackedPath = useRef<string>("");

  useEffect(() => {
    const fullPath = location.pathname + location.search;

    // Prevent duplicate tracking for the same path
    if (fullPath === lastTrackedPath.current) return;

    lastTrackedPath.current = fullPath;
    trackPageView(fullPath);
  }, [location]);
};
