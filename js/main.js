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

// SCROLL REVELA ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: false,
});

// SCROLL HOME
sr.reveal(".home__title");
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

// SCROLL ABOUT

sr.reveal(".about__img", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

// SCROLL SKILLS
sr.reveal(".skills__subtitle", { delay: 200 });
sr.reveal(".skills__text", { delay: 200 });
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 200 });

// SCROLL WORKS
sr.reveal(".work__img", { interval: 200 });
