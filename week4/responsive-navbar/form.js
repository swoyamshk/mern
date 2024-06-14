document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navbar');
    const navItems = document.getElementById('navItems');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
        navItems.classList.toggle('show');
    });
});
