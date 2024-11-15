
const burgericonElement = document.getElementById("burgericon");
const mobilemenuElement = document.getElementById("menu-mobile");

const showMenu = () => {
  mobilemenuElement.classList.toggle("hide");
};

burgericonElement.addEventListener("click", showMenu);