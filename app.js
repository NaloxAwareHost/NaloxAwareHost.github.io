//mobile navbar toggle button
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// mobile navbar dropdown button
const navbarDropdownButton = document.querySelector('.navbar__dropdown__button');
const navbarDropdownContent = document.querySelector('.navbar__dropdown__content');

navbarDropdownButton.addEventListener('click', function() {
    navbarDropdownContent.classList.toggle('visible');
});

//slide in animations for content, triggered by scrolling to it
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(
        (element)=>{
            if(element.isIntersecting){
                element.target.classList.add('should__animate__slide-in');
                element.target.classList.remove('invisible');
            }
        }
    );
}, { threshold: [0.3] });

var contents=document.getElementsByClassName('main__content');
Array.from(contents).forEach(element => {
    element.classList.add('invisible'); //set elements opacity to 0 so the animation looks better
    observer.observe(element);
});
