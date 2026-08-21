import { act, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DeferredSection from "./DeferredSection";

describe("DeferredSection", () => {
  it("does not import a section until its placeholder approaches the viewport", async () => {
    let onIntersect: IntersectionObserverCallback | undefined;

    class IntersectionObserverMock {
      constructor(callback: IntersectionObserverCallback) {
        onIntersect = callback;
      }

      disconnect = vi.fn();
      observe = vi.fn();
      unobserve = vi.fn();
      takeRecords = vi.fn(() => []);
      root = null;
      rootMargin = "700px 0px";
      thresholds = [0];
    }

    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
    const load = vi.fn(async () => ({
      default: () => <p>Deferred content</p>,
    }));

    render(<DeferredSection id="deferred" load={load} />);

    expect(load).not.toHaveBeenCalled();
    expect(screen.queryByText("Deferred content")).not.toBeInTheDocument();

    act(() => {
      onIntersect?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    });

    await waitFor(() => expect(load).toHaveBeenCalledTimes(1));
    expect(await screen.findByText("Deferred content")).toBeInTheDocument();
  });
});
