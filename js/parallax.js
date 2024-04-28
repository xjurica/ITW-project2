let main_heading = document.getElementById('main-heading');
let left_hill = document.getElementById('left-hill');
let right_hill = document.getElementById('right-hill');
let left_bird = document.getElementById('left-bird');
let right_birds = document.getElementById('right-birds');
let hills_foreground = document.getElementById('hills-foreground');
let hills_middleground = document.getElementById('hills-middleground');
let hills_background = document.getElementById('hills-background');
let clouds = document.getElementById('sky');

let desert_heading = document.getElementById('desert-heading');
let desert_section = document.getElementById('desert-section');
let desert_birds_right = document.getElementById('desert-birds-right');
let desert_birds_left = document.getElementById('desert-birds-left');
let desert_sun = document.getElementById('desert-sun');

let sierra_heading = document.getElementById('sierra-heading');
let sierra_section = document.getElementById('sierra-section');
let sierra_trees_left = document.getElementById('sierra-trees-left');
let sierra_trees_right = document.getElementById('sierra-trees-right');

let cascade_heading = document.getElementById('cascade-heading');
let cascade_section = document.getElementById('cascade-section');

let washington_heading = document.getElementById('washington-heading');
let washington_section = document.getElementById('washington-section');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    let desertSectionTop = desert_section.getBoundingClientRect().top + window.scrollY;
    let sierraSectionTop = sierra_section.getBoundingClientRect().top + window.scrollY;
    let cascadeSectionTop = cascade_section.getBoundingClientRect().top + window.scrollY;
    let washingtonSectionTop = washington_section.getBoundingClientRect().top + window.scrollY;

    main_heading.style.marginTop = value * 1 + 'px';
    right_hill.style.left = value * 0.25 + 'px';
    left_hill.style.left = value * -0.25 + 'px';
    right_hill.style.top = value * -0.18 + 'px';
    left_hill.style.top = value * -0.18 + 'px';
    left_bird.style.top = value * 0.15 + 'px';
    right_birds.style.top = value * 0.3 + 'px';
    hills_foreground.style.top = value * -0.18 + 'px';
    hills_middleground.style.top = value * 0.22 + 'px';
    hills_background.style.top = value * 0.25 + 'px';
    clouds.style.top = value * 0.4 + 'px';

    if (value > desertSectionTop) {
        desert_heading.style.marginTop = (value - desertSectionTop) * 1 + 'px';
        desert_birds_right.style.top = (value - desertSectionTop) * 0.3 + 'px';
        desert_birds_right.style.left = (value - desertSectionTop) * 0.5 + 'px';
        desert_birds_left.style.top = (value - desertSectionTop) * -0.5 + 'px';
        desert_birds_left.style.left = (value - desertSectionTop) * -0.5 + 'px';
        desert_sun.style.top = (value - desertSectionTop) * -0.7 + 'px';
    }

    if (value > sierraSectionTop) {
        sierra_heading.style.marginTop = (value - sierraSectionTop) * 1 + 'px';
        sierra_trees_left.style.left = (value - sierraSectionTop) * -0.3 + 'px';
        sierra_trees_right.style.left = (value - sierraSectionTop) * 0.3 + 'px';
    }

    if (value > cascadeSectionTop) {
        cascade_heading.style.marginTop = (value - cascadeSectionTop) * 1.3 + 'px';
    }

    if (value > washingtonSectionTop) {
        washington_heading.style.marginTop = (value - washingtonSectionTop) * 1.3 + 'px';
    }

    if (value > 0) {
        this.document.documentElement.classList.add('scrolled');
    } else {
        document.documentElement.classList.remove('scrolled');
    }
});