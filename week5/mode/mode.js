document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    const body = document.body;

    const storedTheme = localStorage.getItem('theme');

    const menuIcon = document.querySelector('.menu-icon');

    const sideNav = document.querySelector('.side-nav');

    const closeBtn = document.querySelector('.close-btn');



    if (storedTheme) {

        body.classList.add(storedTheme);

    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

        body.classList.add('dark');

    }



    themeToggleBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            body.classList.toggle('dark');

            if (body.classList.contains('dark')) {

                localStorage.setItem('theme', 'dark');

            } else {

                localStorage.setItem('theme', 'light');

            }

        });

    });



    menuIcon.addEventListener('click', () => {

        sideNav.style.width = '250px';

    });



    closeBtn.addEventListener('click', () => {

        sideNav.style.width = '0';

    });



 

    const slides = document.querySelectorAll('.carousel-slide');

    const prevBtn = document.querySelector('.carousel-control.prev');

    const nextBtn = document.querySelector('.carousel-control.next');

    let currentSlide = 0;



    const showSlide = (index) => {

        slides.forEach((slide, i) => {

            slide.classList.toggle('active', i === index);

        });

    };



    prevBtn.addEventListener('click', () => {

        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;

        showSlide(currentSlide);

    });



    nextBtn.addEventListener('click', () => {

        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;

        showSlide(currentSlide);

    });



   

    showSlide(currentSlide);

});

