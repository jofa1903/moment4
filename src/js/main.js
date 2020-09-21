// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links')
//     const navLinks = document.querySelectorAll('.nav-links li')

//     burger.addEventListener('click', () => {
//         // nav toggle
//         nav.classList.toggle('nav-active');
//         // animate links
//         navLinks.forEach((link, index) => {
//             if(link.style.animation){
//                 link.style.animation = '';
//             } else{
//                 links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7  + 1.5}s`;
//             }
            
//         });
//     });

// }

// navSlide();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});