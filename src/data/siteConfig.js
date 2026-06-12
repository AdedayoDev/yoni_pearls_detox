export const WHATSAPP_NUMBER = "2347050704719";

export function makeWhatsAppLink(message = "I want to buy") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  default: "I want to buy Yoni Pearls",
  starter: "I want to buy Yoni Pearls",
  popular: "I want to buy Yoni Pearls",
  value: "I want to buy Yoni Pearls",
};
