const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const hamburgerBtn = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

dropdownBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        const dropdownId = btn.getAttribute("data-dropdown");
        const dropdown = document.getElementById(dropdownId);
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";

        // Close other dropdowns
        document.querySelectorAll(".dropdown").forEach(d => {
            if (d.id !== dropdownId) d.style.display = "none";
        });

        e.stopPropagation();
    });
});

document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
});

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});
