(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initMobileDrawer();
    initFinder();
    initGalleryFilters();
    initContactForm();
  });

  function initContactForm() {
    var form = document.querySelector(".contact-form");
    var success = document.getElementById("cf-success");
    if (!form || !success) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // UI-only demo: nothing is sent anywhere.
      form.reset();
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  function initGalleryFilters() {
    var chips = document.querySelectorAll(".filters .chip");
    var tiles = document.querySelectorAll("#gallery-grid .tile");
    if (!chips.length || !tiles.length) return;

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var filter = chip.getAttribute("data-filter");

        chips.forEach(function (c) {
          c.classList.toggle("is-active", c === chip);
          c.setAttribute("aria-selected", c === chip ? "true" : "false");
        });

        tiles.forEach(function (tile) {
          var cat = tile.getAttribute("data-category");
          var show = filter === "all" || cat === filter;
          tile.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  function initFinder() {
    var btn = document.querySelector(".finder__submit");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(btn.getAttribute("data-scroll-to") || "#services");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function initHeaderScroll() {
    var header = document.getElementById("header");
    if (!header) return;

    var onScroll = function () {
      if (window.scrollY > 20) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileDrawer() {
    var toggle = document.querySelector(".nav-toggle");
    var drawer = document.getElementById("mobile-drawer");
    var backdrop = document.querySelector(".drawer-backdrop");
    var closeBtn = document.querySelector(".drawer__close");

    if (!toggle || !drawer || !backdrop) return;

    var openDrawer = function () {
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      backdrop.hidden = false;
      requestAnimationFrame(function () {
        backdrop.classList.add("is-open");
      });
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };

    var closeDrawer = function () {
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      backdrop.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      setTimeout(function () { backdrop.hidden = true; }, 250);
    };

    toggle.addEventListener("click", openDrawer);
    backdrop.addEventListener("click", closeDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

    drawer.querySelectorAll("a[href^='#']").forEach(function (link) {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) {
        closeDrawer();
      }
    });
  }
})();
