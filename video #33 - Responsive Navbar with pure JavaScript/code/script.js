
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');

allEventListner();

function allEventListner(){
    navToggler.addEventListener('click', togglerClick);
}

function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}