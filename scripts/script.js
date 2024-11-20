// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navbarList = document.getElementById("nav-list");

hamburger.addEventListener("click", () => {
  navbarList.style.display =
    navbarList.style.display === "flex" ? "none" : "flex";
});
