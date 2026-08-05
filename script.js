// Habib Fashion JavaScript

document.addEventListener("DOMContentLoaded", () => {
    console.log("Habib Fashion Loaded!");

    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
