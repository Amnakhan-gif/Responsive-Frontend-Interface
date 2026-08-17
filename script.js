// =====================================================
// LEARNSPACE - PROJECT 1
// Basic JavaScript Interactivity
// =====================================================


// ================= MOBILE NAVIGATION =================

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.textContent = "☰";

    });

});


// ================= ACTIVE NAVIGATION =================

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// ================= COURSE LINKS =================

const courseLinks = document.querySelectorAll(".course-link");

courseLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Course details will be available soon. Keep learning! 🚀"
        );

    });

});