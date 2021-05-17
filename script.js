// menu toggle
const menuToggle = document.querySelector('.menu-toggle input');

menuToggle.addEventListener('click', function() {
    const burger = document.querySelector('nav ul');
    const nav = document.querySelector('.nav');
    burger.classList.toggle('slide');
    nav.classList.toggle('hilang');
});

// scrolling
const home = document.querySelector('nav ul li:first-child');
home.addEventListener('click', function() {
    window.location.href = '#gambar'
});

const cars = document.querySelector('nav ul li:nth-child(2)');
cars.addEventListener('click', function() {
    window.location.href = '#cars'
});

const term = document.querySelector('nav ul li:nth-child(3)');
term.addEventListener('click', function() {
    window.location.href = '#tc'
});

const about = document.querySelector('nav ul li:last-child');
about.addEventListener('click', function() {
    window.location.href = '#about'
});


// slideshow
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }
// end of slideshow