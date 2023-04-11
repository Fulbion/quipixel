// Toggle nav menu
const toggleBtn = document.querySelector(".toggle-nav");
const toggleBtnIcon = document.querySelector("i.toggle-nav");
const dropDownNav = document.querySelector(".dropdown-nav");

toggleBtn.onclick = function () {
    dropDownNav.classList.toggle("open");
    const isOpen = dropDownNav.classList.contains("open");
    
    toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    toggleBtnIcon.classList.add("toggle-nav")
};