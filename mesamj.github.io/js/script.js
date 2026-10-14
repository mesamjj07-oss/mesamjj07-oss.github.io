
fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        // Home
        document.getElementById("studentName").textContent = data.name;
        document.getElementById("tagline").textContent = data.tagline;
        document.getElementById("introduction").textContent = data.introduction;

        // About Me
        document.getElementById("biography").textContent = data.biography;
        document.getElementById("graduation").textContent = data.year;
        document.getElementById("careerGoal").textContent = data.careerGoal;
        document.getElementById("interests").textContent = data.interests;

        // Educational Background
        document.querySelector(".school-name").textContent = data.school;

        document.querySelectorAll(".education-card p").forEach(function (p) {
            if (p.textContent.includes("Year Level:")) {
                p.innerHTML = "<strong>Year Level:</strong> " + data.year;
            }

            if (p.textContent.includes("Major:")) {
                p.innerHTML = "<strong>Major:</strong> " + data.major;
            }
        });

        // Personal Strengths
        const strengthCards = document.querySelectorAll(".strength-card");

        data.strengths.forEach(function (strength, index) {
            if (strengthCards[index]) {
                strengthCards[index].querySelector("h3").textContent =
                    strength.title;

                strengthCards[index].querySelector("p").textContent =
                    strength.description;
            }
        });

        // Skills
        const skillCards = document.querySelectorAll(".skill-card");

        data.skills.forEach(function (skill, index) {
            if (skillCards[index]) {
                skillCards[index].querySelector("h3").textContent =
                    skill.name;

                skillCards[index].querySelector("p").textContent =
                    skill.description;
            }
        });

        // Projects
data.projects.forEach(function (project, index) {
    const number = index + 1;

    const title = document.getElementById("projectTitle" + number);
    const description = document.getElementById("projectDescription" + number);
    const link = document.getElementById("projectLink" + number);

    if (title && description && link) {
        title.textContent = project.title;
        description.textContent = project.description;
        link.href = project.link;
    }
});


        // Contact Information
        const email = document.getElementById("contactEmail");
        email.textContent = data.email;
        email.href = "mailto:" + data.email;

        document.getElementById("contactLocation").textContent =
            data.location;

        document.getElementById("linkedinLink").href = data.linkedin;

        // Footer
        document.getElementById("footerText").textContent = data.footer;

    })
    .catch(function (error) {
        console.log("Error loading JSON:", error);
    });


// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close Menu After Clicking a Link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("visitorName").value;

    document.getElementById("formFeedback").textContent =
        "Thank you, " + visitorName + "! Your message has been received.";

    contactForm.reset();
});


// Back to Top
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
