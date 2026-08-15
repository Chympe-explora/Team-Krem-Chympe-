(function () {
  "use strict";
  var C = window.KC_CONTENT || {};

  // ---------------------------------------------------------------
  // Small helpers
  // ---------------------------------------------------------------
  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function setText(id, value) {
    var node = document.getElementById(id);
    if (node && value !== undefined) node.textContent = value;
  }
  function setHTML(id, value) {
    var node = document.getElementById(id);
    if (node && value !== undefined) node.innerHTML = value;
  }
  function setImg(id, src, alt) {
    var node = document.getElementById(id);
    if (!node) return;
    if (src) node.src = src;
    if (alt !== undefined) node.alt = alt;
  }
  function escapeHTML(s) {
    return String(s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; });
  }
  // Turns "text {emphasis} text\nmore" into safe HTML with <em> and <br>
  function richText(s) {
    if (!s) return "";
    var escaped = escapeHTML(s);
    escaped = escaped.replace(/\{([^}]+)\}/g, "<em>$1</em>");
    escaped = escaped.replace(/\n/g, "<br>");
    return escaped;
  }
  function waLink(number, message) {
    return "https://wa.me/" + encodeURIComponent(number || "") + (message ? "?text=" + encodeURIComponent(message) : "");
  }

  // ---------------------------------------------------------------
  // Render: site-wide (logo, brand name, footer)
  // ---------------------------------------------------------------
  function renderSite() {
    var site = C.site || {};
    document.title = (site.name || "Krem Chympe") + " — Chympe Cave & Waterfall, East Jaintia Hills";
    document.querySelectorAll(".js-brand-name").forEach(function (n) { n.textContent = site.name || ""; });
    document.querySelectorAll(".js-logo").forEach(function (n) { if (site.logo) n.src = site.logo; n.alt = (site.name || "") + " logo"; });
    setText("footerAddress", site.footerAddress);

    var wa = waLink(site.whatsappNumber, site.whatsappMessage);
    document.querySelectorAll(".js-wa-link").forEach(function (n) { n.href = wa; });
    setText("navButtonLabel", C.navButtonLabel);

    var ig = document.getElementById("igLink");
    if (ig) { ig.href = site.instagramUrl || "#"; }
    setText("igHandle", site.instagramHandle);

    var galleryIg = document.getElementById("galleryIgLink");
    if (galleryIg) { galleryIg.href = site.instagramUrl || "#"; }
  }

  // ---------------------------------------------------------------
  // Render: nav links + mobile menu (built from the same array)
  // ---------------------------------------------------------------
  function renderNav() {
    var links = C.navLinks || [];
    var desktop = document.getElementById("navLinks");
    var mobile = document.getElementById("mobileMenuLinks");
    if (desktop) desktop.innerHTML = "";
    if (mobile) mobile.innerHTML = "";
    links.forEach(function (l) {
      if (desktop) {
        var a = el("a", null, escapeHTML(l.label));
        a.href = l.href;
        desktop.appendChild(a);
      }
      if (mobile) {
        var a2 = el("a", null, escapeHTML(l.label));
        a2.href = l.href;
        mobile.appendChild(a2);
      }
    });
  }

  // ---------------------------------------------------------------
  // Render: hero
  // ---------------------------------------------------------------
  function renderHero() {
    var h = C.hero || {};
    setText("heroEyebrow", h.eyebrow);
    setHTML("heroHeadline", richText(h.headline));
    setText("heroSub", h.subtext);
    setText("heroScrollLabel", h.scrollLabel);
  }

  // ---------------------------------------------------------------
  // Render: the place
  // ---------------------------------------------------------------
  function renderPlace() {
    var p = C.place || {};
    setText("placeEyebrow", p.eyebrow);
    setText("placeHeading", p.heading);
    var copy = document.getElementById("placeParagraphs");
    if (copy) {
      copy.innerHTML = "";
      (p.paragraphs || []).forEach(function (t) { copy.appendChild(el("p", null, escapeHTML(t))); });
    }
    var facts = document.getElementById("placeFacts");
    if (facts) {
      facts.innerHTML = "";
      (p.facts || []).forEach(function (f) {
        var row = el("div", "field-note");
        row.appendChild(el("dt", null, escapeHTML(f.label)));
        row.appendChild(el("dd", null, escapeHTML(f.value)));
        facts.appendChild(row);
      });
    }
  }

  // ---------------------------------------------------------------
  // Render: founder
  // ---------------------------------------------------------------
  function renderFounder() {
    var f = C.founder || {};
    setText("founderEyebrow", f.eyebrow);
    setText("founderQuote", f.quote);
    var copy = document.getElementById("founderParagraphs");
    if (copy) {
      copy.innerHTML = "";
      (f.paragraphs || []).forEach(function (t) { copy.appendChild(el("p", null, escapeHTML(t))); });
    }
    setText("founderName", (f.name || "") + (f.title ? " — " + f.title : ""));

    var markWrap = document.getElementById("founderMarkWrap");
    if (markWrap) {
      markWrap.innerHTML = "";
      if (f.photo) {
        var img = el("img");
        img.src = f.photo;
        img.alt = f.photoAlt || "";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.borderRadius = "26px";
        markWrap.appendChild(img);
      } else {
        markWrap.appendChild(el("span", null, escapeHTML(f.photoCardText || "")));
      }
    }
  }

  // ---------------------------------------------------------------
  // Render: activities
  // ---------------------------------------------------------------
  function renderActivities() {
    var a = C.activities || {};
    setText("activitiesEyebrow", a.eyebrow);
    setText("activitiesHeading", a.heading);
    setText("activitiesIntro", a.intro);

    var grid = document.getElementById("activityGrid");
    if (grid) {
      grid.innerHTML = "";
      (a.cards || []).forEach(function (card, i) {
        var num = String(i + 1).length < 2 ? "0" + (i + 1) : String(i + 1);
        var wrap = el("div", "activity-card reveal");
        var img = el("img");
        img.src = card.image; img.alt = card.alt || card.title || "";
        var label = el("div", "activity-card-label",
          '<div class="eyebrow">' + num + '</div><h3>' + escapeHTML(card.title) + "</h3>");
        wrap.appendChild(img);
        wrap.appendChild(label);
        grid.appendChild(wrap);
      });
    }

    var also = document.getElementById("alsoHereChips");
    if (also) {
      also.innerHTML = '<span class="label">' + escapeHTML(a.alsoHereLabel || "") + "</span>";
      (a.alsoHere || []).forEach(function (t) { also.appendChild(el("span", "chip", escapeHTML(t))); });
    }
  }

  // ---------------------------------------------------------------
  // Render: gallery
  // ---------------------------------------------------------------
  function renderGallery() {
    var g = C.gallery || {};
    setText("galleryEyebrow", g.eyebrow);
    setText("galleryHeading", g.heading);
    var grid = document.getElementById("galleryGrid");
    if (grid) {
      grid.innerHTML = "";
      (g.images || []).forEach(function (im) {
        var item = el("div", "gallery-item reveal");
        var img = el("img");
        img.src = im.src; img.alt = im.alt || "";
        img.setAttribute("data-full", im.src);
        item.appendChild(img);
        grid.appendChild(item);
      });
    }
  }

  // ---------------------------------------------------------------
  // Render: safety & season
  // ---------------------------------------------------------------
  function renderSafety() {
    var s = C.safety || {};
    setText("safetyEyebrow", s.eyebrow);
    setText("safetyHeading", s.heading);
    var list = document.getElementById("safetyList");
    if (list) {
      list.innerHTML = "";
      (s.included || []).forEach(function (t) {
        list.appendChild(el("li", null, '<span class="dot"></span> ' + escapeHTML(t)));
      });
    }
    setText("seasonEyebrow", s.seasonEyebrow);
    setText("seasonHeading", s.seasonHeading);
    var copy = document.getElementById("seasonParagraphs");
    if (copy) {
      copy.innerHTML = "";
      (s.seasonParagraphs || []).forEach(function (t) { copy.appendChild(el("p", null, escapeHTML(t))); });
    }
    setText("seasonTag", s.seasonTag);
  }

  // ---------------------------------------------------------------
  // Render: contact
  // ---------------------------------------------------------------
  function renderContact() {
    var c = C.contact || {};
    setText("contactEyebrow", c.eyebrow);
    setText("contactHeading", c.heading);
    setText("contactParagraph", c.paragraph);
    setText("contactWaLabel", c.whatsappButtonLabel);
  }

  function renderAll() {
    renderSite();
    renderNav();
    renderHero();
    renderPlace();
    renderFounder();
    renderActivities();
    renderGallery();
    renderSafety();
    renderContact();
  }

  // =================================================================
  // Interactivity (unrelated to content — no need to edit any of this)
  // =================================================================
  function initInteractivity() {
    var nav = document.getElementById("siteNav");
    function onScroll() {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var menuBtn = document.getElementById("menuBtn");
    var mobileMenu = document.getElementById("mobileMenu");
    function closeMenu() {
      mobileMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
    menuBtn.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });

    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach(function (elx) { io.observe(elx); });
    } else {
      revealEls.forEach(function (elx) { elx.classList.add("in"); });
    }

    document.querySelectorAll(".collapse-toggle").forEach(function (btn) {
      var ids = (btn.getAttribute("data-collapse-target") || "").split(/\s+/).filter(Boolean);
      var targets = ids.map(function (id) { return document.getElementById(id); }).filter(Boolean);
      var label = btn.querySelector(".collapse-toggle-label");
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("aria-expanded") !== "true";
        btn.setAttribute("aria-expanded", next ? "true" : "false");
        targets.forEach(function (t) { t.classList.toggle("is-open", next); });
        if (label) label.textContent = next ? "Hide Details" : "View Full Details";
      });
    });

    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightboxImg");
    var lightboxClose = document.getElementById("lightboxClose");
    document.querySelectorAll(".gallery-item img").forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImg.src = img.getAttribute("data-full") || img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });
    function closeLightbox() { lightbox.classList.remove("open"); document.body.style.overflow = ""; }
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLightbox(); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    initInteractivity();
  });
})();
