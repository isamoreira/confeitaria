document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let counter = 0;
    const length = carousel.children.length;

    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter > length - 1) {
            counter = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = length - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        const size = carousel.children[0].clientWidth;
        carousel.style.transform = `translateX(${-size * counter}px)`;
    }
});
