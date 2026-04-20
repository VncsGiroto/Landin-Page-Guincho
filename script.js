window.dataLayer = window.dataLayer || [];

function trackContactClick(contactType, location, href) {
  var payload = {
    event: "contact_click",
    contact_type: contactType,
    contact_location: location,
    destination: href,
    timestamp: new Date().toISOString()
  };

  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "contact_click", {
      contact_type: contactType,
      contact_location: location,
      destination: href
    });
  }

  if (window.console && typeof window.console.info === "function") {
    window.console.info("[tracking] contact_click", payload);
  }
}

document.querySelectorAll(".contact-track").forEach(function (element) {
  element.addEventListener("click", function () {
    trackContactClick(
      element.dataset.contactType || "unknown",
      element.dataset.contactLocation || "unspecified",
      element.getAttribute("href") || ""
    );
  });
});
