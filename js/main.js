// BaZiReader Landing Page JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all functionality
  initNavigation();
  initScrollEffects();
  initAnimations();
  initCTATracking();
  initSmoothScrolling();
  initFormValidation();
  initPerformanceOptimizations();
});

// Navigation functionality
function initNavigation() {
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  const navLinks = document.querySelectorAll(".nav__link");
  const header = document.querySelector(".header");

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.classList.toggle("nav-open");
    });

    // Close menu when clicking on links
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("nav-open");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("nav-open");
      }
    });
  }

  // Header scroll effect
  if (header) {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      // Hide/show header on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;
    });
  }
}

// Scroll effects and animations
function initScrollEffects() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".feature-card, .testimonial, .pricing-card, .section__header");

  animateElements.forEach((el) => {
    observer.observe(el);
  });

  // Subtle fade effect for hero section instead of parallax
  const heroImage = document.querySelector(".hero__img");
  if (heroImage) {
    window.addEventListener(
      "scroll",
      throttle(function () {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector(".hero");
        const heroHeight = heroSection.offsetHeight;
        const opacity = Math.max(0.3, 1 - (scrolled / heroHeight) * 0.7);

        // Only apply fade effect, no transform
        heroImage.style.opacity = opacity;
      }, 16)
    );
  }
}

// Counter animations for statistics
function initAnimations() {
  const stats = document.querySelectorAll(".stat__number");

  const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      // Format number based on content
      if (element.textContent.includes("%")) {
        element.textContent = Math.floor(current) + "%";
      } else if (element.textContent.includes("+")) {
        element.textContent = Math.floor(current).toLocaleString("vi-VN") + "+";
      } else if (element.textContent.includes("/")) {
        element.textContent = element.textContent; // Keep original for 24/7
      } else {
        element.textContent = Math.floor(current).toLocaleString("vi-VN");
      }
    }, 16);
  };

  // Observe stats for counter animation
  const statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const text = element.textContent;

          if (text.includes("10,000+")) {
            animateCounter(element, 10000);
          } else if (text.includes("95%")) {
            animateCounter(element, 95);
          }

          statsObserver.unobserve(element);
        }
      });
    },
    { threshold: 0.5 }
  );

  stats.forEach((stat) => {
    if (stat.textContent.includes("10,000+") || stat.textContent.includes("95%")) {
      statsObserver.observe(stat);
    }
  });
}

// CTA button tracking and analytics
function initCTATracking() {
  const ctaButtons = document.querySelectorAll('a[href="https://app.BaZiReader.com"]');

  ctaButtons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      // Track CTA clicks
      const buttonLocation = getButtonLocation(button);

      // Google Analytics tracking (if available)
      if (typeof gtag !== "undefined") {
        gtag("event", "click", {
          event_category: "CTA",
          event_label: buttonLocation,
          value: 1,
        });
      }

      // Facebook Pixel tracking (if available)
      if (typeof fbq !== "undefined") {
        fbq("track", "Lead", {
          content_name: "BaZiReader CTA",
          content_category: buttonLocation,
        });
      }

      console.log(`CTA clicked: ${buttonLocation}`);
    });
  });
}

function getButtonLocation(button) {
  if (button.closest(".hero")) return "Hero Section";
  if (button.closest(".nav")) return "Navigation";
  if (button.closest(".pricing")) return "Pricing Section";
  if (button.closest(".cta")) return "Bottom CTA";
  return "Other";
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Form validation (if contact forms are added later)
function initFormValidation() {
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      // Basic validation
      if (validateForm(data)) {
        submitForm(data);
      }
    });
  });
}

function validateForm(data) {
  // Add validation logic here
  return true;
}

function submitForm(data) {
  // Add form submission logic here
  console.log("Form submitted:", data);
}

// Performance optimizations
function initPerformanceOptimizations() {
  // Lazy loading for images
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => {
    imageObserver.observe(img);
  });

  // Preload critical resources
  preloadCriticalResources();

  // Optimize scroll performance
  let ticking = false;

  function updateScrollEffects() {
    // Batch scroll-related updates
    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(updateScrollEffects);
      ticking = true;
    }
  });
}

function preloadCriticalResources() {
  // Preload hero image
  const heroImg = new Image();
  heroImg.src = "images/hero-illustration.svg";

  // Preload critical CSS
  const criticalCSS = document.createElement("link");
  criticalCSS.rel = "preload";
  criticalCSS.as = "style";
  criticalCSS.href = "css/style.css";
  document.head.appendChild(criticalCSS);
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Error handling
window.addEventListener("error", function (e) {
  console.error("JavaScript error:", e.error);

  // Send error to analytics if available
  if (typeof gtag !== "undefined") {
    gtag("event", "exception", {
      description: e.error.toString(),
      fatal: false,
    });
  }
});

// Service Worker registration for PWA capabilities
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function (registration) {
        console.log("ServiceWorker registration successful");
      })
      .catch(function (err) {
        console.log("ServiceWorker registration failed");
      });
  });
}

// Export functions for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initNavigation,
    initScrollEffects,
    initAnimations,
    validateForm,
    debounce,
    throttle,
  };
}
