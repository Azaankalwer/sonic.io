//Navigation 
const toggler = document.querySelector(".toggler");

const navbar = document.querySelector(".navigation");

toggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
})