type FormValues = Record<string, FormDataEntryValue>;

const value = (values: FormValues, key: string, fallback = "") => String(values[key] ?? fallback);

export const buildConsultingPayload = (values: FormValues, selectedDate: string) => ({
  name: value(values, "name"),
  email: value(values, "email"),
  phone: value(values, "phone", "Not provided"),
  "Service Requested": "Private Travel Consulting",
  "Selected Date": selectedDate,
  "Consultation Details": value(values, "message"),
});

export const buildReservationPayload = (values: FormValues, dateRange: string) => ({
  name: value(values, "name"),
  email: value(values, "email"),
  phone: value(values, "phone"),
  tour: value(values, "tour"),
  date_range: dateRange,
  guests: value(values, "guests"),
  message: value(values, "message"),
});
