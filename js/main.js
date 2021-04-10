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
