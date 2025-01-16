//mobile navbar toggle button
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//bio panels for team members
function openBio(name, role, content, imageAddress) {
    const panel = document.getElementById('bio-panel');
    document.getElementById('bio-name').textContent = name;
    document.getElementById('bio-role').textContent = role;
    document.getElementById('bio-content').textContent = content;
    document.getElementById('bio-image').src = imageAddress;
  
    panel.classList.add('open');
}

function closeBio() {
    const panel = document.getElementById('bio-panel');
    panel.classList.remove('open');
}

//slide in animations for content, triggered by scrolling to it
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(
        (element)=>{
            if(element.isIntersecting){
                element.target.classList.add('should__animate__slide-in');
                element.target.classList.remove('invisible');
                console.log(element.target.className);
            }
        }
    );
}, { threshold: [0.3] });

var contents=document.getElementsByClassName('main__content');
Array.from(contents).forEach(element => {
    element.classList.add('invisible'); //set elements opacity to 0 so the animation looks better
    observer.observe(element);
});
