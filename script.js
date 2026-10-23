// Zorvan Digital website interactions
// IMPORTANT: Replace these placeholders with your real business contact details before publishing.
const WHATSAPP_NUMBER = ""; // Example format: 923489397502(country code, no + or spaces)
const BUSINESS_EMAIL = "avhi9767@gmail.com";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const whatsappButton = document.querySelector("#whatsappButton");
if (whatsappButton) {
  if (WHATSAPP_NUMBER.trim()) {
    whatsappButton.href = `https://wa.me/${WHATSAPP_NUMBER.trim()}`;
  } else {
    whatsappButton.href = "https://wa.me/";
    whatsappButton.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Please add your real WhatsApp number in script.js before publishing this website.");
    });
  }
}

// Update the email CTA from the same configuration value.
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.href = `mailto:${BUSINESS_EMAIL}?subject=Project%20enquiry`;
});
