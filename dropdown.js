document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const closeIcon = document.querySelector(".close-icon");

    menu.addEventListener("click", function() {
        dropdownMenu.classList.toggle("show");
        menu.classList.toggle("active");
    });

    closeIcon.addEventListener("click", function(event) {
        dropdownMenu.classList.remove("show");
        menu.classList.remove("active");
        event.stopPropagation();
    });
});
