document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const closeIcon = document.querySelector(".close-icon");

    // Toggle dropdown menu when menu icon is clicked
    menu.addEventListener("click", function() {
        dropdownMenu.classList.toggle("show");
        menu.classList.toggle("active"); // Toggle active class for the menu icon styling if needed
    });

    // Close dropdown menu when close icon is clicked
    closeIcon.addEventListener("click", function(event) {
        dropdownMenu.classList.remove("show");
        menu.classList.remove("active"); // Remove active class when closing
        event.stopPropagation(); // Prevent click from bubbling up
    });
});
