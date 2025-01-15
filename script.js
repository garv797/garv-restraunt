// script.js

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("fav dish");

    // Focus effect for the search input
    searchInput.addEventListener("focus", () => {
        searchInput.style.backgroundColor = "#fff4cc"; // Light yellow
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.backgroundColor = "white";
    });

    // Animation for the main text
    const mainText = document.querySelector("main p");
    mainText.style.opacity = 0;
    mainText.style.transform = "translateY(20px)";

    setTimeout(() => {
        mainText.style.transition = "opacity 1s, transform 1s";
        mainText.style.opacity = 1;
        mainText.style.transform = "translateY(0)";
    }, 500);

    // Navigation link hover effect (scaling)
    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.2s";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
});
