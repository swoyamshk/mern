document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navItems = document.getElementById('navItems');

    menuToggle.addEventListener('click', function() {
        navItems.classList.toggle('show');
    });
});