const PIXEL_ID = "1531678725026639";

export function initFacebookPixel() {
  if (typeof window === "undefined" || window.fbq) return;

  window.fbq = function () {
    if (window.fbq.callMethod) {
      window.fbq.callMethod.apply(window.fbq, arguments);
    } else {
      window.fbq.queue.push(arguments);
    }
  };

  if (!window._fbq) {
    window._fbq = window.fbq;
  }

  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = "2.0";
  window.fbq.queue = [];

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

export function trackWhatsAppClick() {
  if (typeof window === "undefined" || !window.fbq) return;

  window.fbq("track", "Contact");
  window.fbq("trackCustom", "WhatsAppButtonClick");
}
