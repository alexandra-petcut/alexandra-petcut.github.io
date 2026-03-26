// ==========================================
// 1. MOBILE MENU TOGGLE
// ==========================================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
  });
});

// ==========================================
// 2. SCROLL REVEAL (sections fade in)
// ==========================================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => observer.observe(el));

// ==========================================
// 3. STICKY NAV SHADOW ON SCROLL
// ==========================================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ==========================================
// 4. CONTACT FORM FAKE SUBMIT
// ==========================================
const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");

if (form && sendBtn) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendBtn.textContent = "Sent!";
    sendBtn.style.background = "#6a9f7d";
    sendBtn.style.borderColor = "#6a9f7d";

    setTimeout(() => {
      sendBtn.textContent = "Send Message";
      sendBtn.style.background = "";
      sendBtn.style.borderColor = "";
      form.reset();
    }, 2500);
  });
}
