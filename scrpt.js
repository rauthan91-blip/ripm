// Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navMenu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Current Year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
        return;
    }

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const message = document.getElementById("message").value.trim();

    // Replace with the college's actual WhatsApp number.
    const collegeWhatsApp = "919876543210";

    const enquiry =
        "College Admission Enquiry\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + (email || "Not provided") + "\n" +
        "Course: " + course + "\n" +
        "Message: " + (message || "No additional message");

    const whatsappURL =
        "https://wa.me/" + collegeWhatsApp +
        "?text=" + encodeURIComponent(enquiry);

    document.getElementById("formStatus").textContent =
        "WhatsApp is opening. Send the prepared message there to complete your enquiry.";

    window.open(whatsappURL, "_blank", "noopener");

    form.reset();
});