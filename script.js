document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Menu Toggle
    const navMenu = document.querySelector("nav ul");
    const menuToggle = document.createElement("button");
    menuToggle.textContent = "☰ Menu";
    menuToggle.classList.add("menu-toggle");

    document.querySelector("header").insertBefore(menuToggle, navMenu);

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });
    

    // Fade-in Animation on Scroll
    const sections = document.querySelectorAll("section");

    const revealSections = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run once on page load

    // Contact Form Handling
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            status.textContent = "All fields are required!";
            status.style.color = "red";
            return;
        }

        setTimeout(() => {
            status.textContent = "Message sent successfully!";
            status.style.color = "green";
            form.reset();
        }, 1000);
    });
    // Function to display project details
    function showTeaPlantation() {
        document.getElementById("project-title").innerText = "Tea Plantation";
        document.getElementById("project-image").src = "images/tea-plantation.jpg";
        document.getElementById("project-description").innerText = "Our tea plantations are known for their high-quality tea leaves, grown in perfect conditions. We use sustainable farming techniques to ensure the environment is preserved while producing the finest tea.";
        document.getElementById("project-details").style.display = "block";
    }

    function showCoffeePlantation() {
        document.getElementById("project-title").innerText = "Coffee Plantation";
        document.getElementById("project-image").src = "images/coffee-plantation.jpg";
        document.getElementById("project-description").innerText = "Our coffee plantations focus on growing the highest quality coffee beans. We pride ourselves on using ethical and sustainable farming practices that yield exceptional flavor.";
        document.getElementById("project-details").style.display = "block";
    }

    function showDairyFarming() {
        document.getElementById("project-title").innerText = "Dairy Farming";
        document.getElementById("project-image").src = "images/dairy-farming.jpg";
        document.getElementById("project-description").innerText = "Our dairy farms produce fresh, healthy milk and a variety of dairy products. We prioritize animal welfare and sustainability in our farming practices.";
        document.getElementById("project-details").style.display = "block";
    }

    function showMaizeFarming() {
        document.getElementById("project-title").innerText = "Maize Farming";
        document.getElementById("project-image").src = "images/maize-farming.jpg";
        document.getElementById("project-description").innerText = "We take great pride in growing maize for various purposes, from food to industrial use. Our maize fields are grown using sustainable farming practices to ensure high yields and environmental health.";
        document.getElementById("project-details").style.display = "block";
    }

    // Function to close project details view
    function closeDetails() {
        document.getElementById("project-details").style.display = "none";
    }
});
let hover =document.getElementById("#team")
hover.addEventListener("mouseover",() =>{
    hover.style.backgroundColor="red";
});
window.addEventListener("load", ()=> {
    alert("The page loaded")
    console.log("page loaded")
  })

  