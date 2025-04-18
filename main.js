// JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");
    const menuButton = document.querySelector(".nav-responsive");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("responsive");
    });

    document.querySelectorAll("#nav ul li").forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("responsive");
        });
    });
});


