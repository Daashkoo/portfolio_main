const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("navbar-links");

hamburger.addEventListener("click", () => {
  navbarLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});
