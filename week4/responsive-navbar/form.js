document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navbar');
    const hamburger =document.getElementsByClassName('ri-menu-line');
    const closeLine = document.getElementsByClassName('ri-close-line');
    const buttonContainer = document.getElementById('navItems');

    menuToggle.addEventListener('click', function () {

        nav.classList.toggle('show');
        hamburger.classList.toggle('show');
        closeLine.classList.toggle('hide');
        buttonContainer.classList.toggle('hide');
    });
});
