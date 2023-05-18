const navEl = document.getElementById('nav-mobile-menu');
const nav = document.getElementsByTagName("nav");

navEl.addEventListener("click",  () => {
    nav[1].classList.toggle("active");
})

