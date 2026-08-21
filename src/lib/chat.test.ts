import { describe, expect, it } from "vitest";
import { getChatEndpoint } from "./chat";

describe("chat configuration", () => {
  it("creates the edge-function endpoint from a configured Supabase URL", () => {
    expect(getChatEndpoint("https://example.supabase.co/")).toBe("https://example.supabase.co/functions/v1/chat");
  });

  it("does not create a broken endpoint when configuration is absent", () => {
    expect(getChatEndpoint()).toBeNull();
  });
});
