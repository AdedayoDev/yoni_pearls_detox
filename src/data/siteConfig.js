export const WHATSAPP_NUMBER = "2348107006660";

export function makeWhatsAppLink(
  messageEncoded = "Hi%2C%20I%20want%20to%20order%20Yoni%20Pearls",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${messageEncoded}`;
}

export const WHATSAPP_MESSAGES = {
  default: "Hi%2C%20I%20want%20to%20order%20Yoni%20Pearls",
  starter: "Hi%2C%20I%20want%20to%20order%20the%201%20Pearl%20Starter%20Pack",
  popular: "Hi%2C%20I%20want%20to%20order%20the%203%20Pearl%20Popular%20Pack",
  value: "Hi%2C%20I%20want%20to%20order%20the%206%20Pearl%20Value%20Pack",
};
