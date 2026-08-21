import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-XN68JPEWR0";//Q7ZWFVFJB5

let isInitialized = false;
let pendingPageView: { path: string; title?: string } | null = null;

/**
 * Initialize Google Analytics 4.
 * Safe to call multiple times — only the first call takes effect.
 */
export const initGA = (): void => {
  if (isInitialized) return;

  ReactGA.initialize(MEASUREMENT_ID, {
    // In development you can set testMode: true to prevent
    // real hits while still seeing console logs.
    // testMode: import.meta.env.DEV,
  });

  isInitialized = true;

  if (pendingPageView) {
    const { path, title } = pendingPageView;
    pendingPageView = null;
    trackPageView(path, title);
  }

  if (import.meta.env.DEV) {
    console.log("[Analytics] GA4 initialized with ID:", MEASUREMENT_ID);
  }
};

/**
 * Track a page view. Call this on every route change.
 */
export const trackPageView = (path: string, title?: string): void => {
  if (!isInitialized) {
    pendingPageView = { path, title };
    return;
  }

  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: title || document.title,
  });

  if (import.meta.env.DEV) {
    console.log("[Analytics] Page view:", path);
  }
};

/**
 * Track a custom event (button click, form submit, etc.).
 *
 * @example
 *   trackEvent("User", "login", "Google");
 *   trackEvent("CTA", "click_reserve", "Hero Section");
 *   trackEvent("Form", "submit_contact");
 */
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
): void => {
  if (!isInitialized) return;

  ReactGA.event({
    category,
    action,
    label,
    value,
  });

  if (import.meta.env.DEV) {
    console.log("[Analytics] Event:", { category, action, label, value });
  }
};
