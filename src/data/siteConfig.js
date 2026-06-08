export const WHATSAPP_NUMBER = "2348136631545";

export function makeWhatsAppLink(message = "I want to buy") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  default: "I want to buy",
  starter: "I want to buy",
  popular: "I want to buy",
  value: "I want to buy",
};
