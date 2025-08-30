export const WHATSAPP_NUMBER =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_WHATSAPP_NUMBER) ||
  (typeof process !== "undefined" && process.env?.VITE_PUBLIC_WHATSAPP_NUMBER) ||
  "15551234567";

export const whatsappLink = (message: string) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};
