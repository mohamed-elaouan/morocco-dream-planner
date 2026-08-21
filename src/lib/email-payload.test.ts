import { describe, expect, it } from "vitest";
import { buildConsultingPayload, buildReservationPayload } from "./email-payload";

describe("cPanel email payloads", () => {
  it("keeps the consulting field names expected by the PHP endpoint", () => {
    expect(buildConsultingPayload({ name: "Ada", email: "ada@example.com", message: "Help" }, "Apr 10, 2027")).toEqual({
      name: "Ada",
      email: "ada@example.com",
      phone: "Not provided",
      "Service Requested": "Private Travel Consulting",
      "Selected Date": "Apr 10, 2027",
      "Consultation Details": "Help",
    });
  });

  it("keeps the reservation field names expected by the PHP endpoint", () => {
    expect(buildReservationPayload({ name: "Ada", email: "ada@example.com", tour: "Desert Escape", guests: "2", message: "Hello" }, "Apr 10 - Apr 14")).toMatchObject({
      name: "Ada",
      email: "ada@example.com",
      tour: "Desert Escape",
      date_range: "Apr 10 - Apr 14",
      guests: "2",
      message: "Hello",
    });
  });
});
