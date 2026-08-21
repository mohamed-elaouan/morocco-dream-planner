export const getChatEndpoint = (supabaseUrl?: string): string | null => {
  const baseUrl = supabaseUrl?.trim().replace(/\/$/, "");
  return baseUrl ? `${baseUrl}/functions/v1/chat` : null;
};
