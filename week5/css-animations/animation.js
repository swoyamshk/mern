function setProgress(value) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${value}%`;
}


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const activeItem = document.querySelector('.accordion-item.active');

            if (activeItem && activeItem !== this.parentElement) {
                activeItem.classList.remove('active');
                activeItem.querySelector('.accordion-content').style.maxHeight = null;
            }

            this.parentElement.classList.toggle('active');
            const accordionContent = this.nextElementSibling;

            if (this.parentElement.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
});
