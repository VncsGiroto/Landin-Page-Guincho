window.dataLayer = window.dataLayer || [];
document.documentElement.classList.add("js-enhanced");

var reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
var saveDataEnabled = Boolean(
  navigator.connection &&
  navigator.connection.saveData
);
var lowBandwidthConnection = Boolean(
  navigator.connection &&
  typeof navigator.connection.effectiveType === "string" &&
  /^(slow-2g|2g)$/.test(navigator.connection.effectiveType)
);
var performanceLite = reduceMotionQuery.matches || saveDataEnabled || lowBandwidthConnection;

if (performanceLite) {
  document.documentElement.classList.add("performance-lite");
}

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

if (!performanceLite) {
  var revealTargets = [
    ".hero__content > *",
    ".hero__visual > *",
    ".trust-strip article",
    ".section-heading",
    ".service-card",
    ".coverage__grid > *",
    ".gallery__grid img",
    ".final-cta__box > *",
    ".site-footer__content > *"
  ];

  var revealElements = [];

  revealTargets.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (element, index) {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", String(index * 70) + "ms");
      revealElements.push(element);
    });
  });

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add("is-visible");
    });
  }
}
