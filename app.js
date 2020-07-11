const navSlide = () => {
    
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li')
const main = document.querySelector('.main')
const footer = document.querySelector('footer')


//Toggle Nav
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');



    //Animate Links
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
            main.style.opacity = 1;
            footer.style.opacity = 1;
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            main.style.opacity = 0;
            footer.style.opacity = 0;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');

})



}


navSlide();