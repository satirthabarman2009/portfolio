document.getElementById("submitBtn").addEventListener("click", function() {
  // Get Gmail from the home input
  const userEmail = document.getElementById("gmail").value.trim();
  
  // If input is empty, alert the user
  if (userEmail === "") {
    alert("Please enter your Gmail before proceeding!");
    return;
  }
  
  // Scroll to the Contact section smoothly
  const contactSection = document.getElementById("Contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
  
  // Delay a bit to allow scrolling, then fill the email box
  setTimeout(() => {
    const emailBox = document.getElementById("emailBox");
    if (emailBox) {
      emailBox.value = userEmail;
      emailBox.focus(); // optional: focuses the input automatically
    }
  }, 800); // slight delay so it fills after scroll finishes
});
document.querySelector(".contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh
  
  const name = document.getElementById("nameBox").value.trim();
  const email = document.getElementById("emailBox").value.trim();
  const message = document.getElementById("messageBox").value.trim();
  
  // ✅ Replace with your WhatsApp number including country code (no + sign)
  const phoneNumber = "917477347794"; // Example: 919876543210 for India
  
  // Format message for WhatsApp
  const whatsappMessage = `Hello, I am ${name} (%20${email})%0A${message}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  
  // Open WhatsApp chat in a new tab
  window.open(whatsappURL, "_blank");
});
// Smooth scroll helper function
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// ---- HOME PAGE ARROW ----
const homeArrow = document.querySelector("#Home .scrollBtn");
if (homeArrow) {
  homeArrow.addEventListener("click", () => scrollToSection("About"));
}

// ---- ABOUT PAGE ARROWS ----
const aboutArrows = document.querySelectorAll("#About .aboutScrollBtn");
if (aboutArrows.length === 2) {
  // First ↓ arrow → Skills
  aboutArrows[0].addEventListener("click", () => scrollToSection("Skills"));
  // Second ↑ arrow → Home
  aboutArrows[1].addEventListener("click", () => scrollToSection("Home"));
}

// ---- SKILLS PAGE ARROWS ----
const skillArrows = document.querySelectorAll("#Skills .aboutScrollBtn");
if (skillArrows.length === 2) {
  // First ↓ arrow → Contact
  skillArrows[0].addEventListener("click", () => scrollToSection("Contact"));
  // Second ↑ arrow → About
  skillArrows[1].addEventListener("click", () => scrollToSection("About"));
}

// ---- CONTACT PAGE ARROW ----
const contactArrow = document.getElementById("contactScroll");
if (contactArrow) {
  contactArrow.addEventListener("click", () => scrollToSection("Skills"));
}
// ----- NAVBAR ACTIVE SECTION HIGHLIGHT -----
const navLinks = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");

// Function to update active link based on scroll
window.addEventListener("scroll", () => {
  let current = "";

  // Identify which section is in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Remove active class and add to current section link
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});