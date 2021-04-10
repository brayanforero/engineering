// SHOW MENU HANDLER
const showMenu = (toogleId, navId) => {
  const toogle = document.getElementById(toogleId);
  const nav = document.getElementById(navId);

  if (!toogle && !nav) return console.err("Elements Not Found");

  toogle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
};

showMenu("nav-toogle", "nav-menu");
// ACITVE LINK AND REMOVE MENU
const navLinks = document.querySelectorAll(".nav__link");
const linkAction = (e) => {
  navLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");
  document.getElementById("nav-menu").classList.remove("show");
};
navLinks.forEach((i) => i.addEventListener("click", linkAction));
