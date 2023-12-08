document.addEventListener("DOMContentLoaded", (event) => {
  const menuButton = document.querySelector(".menu-button");
  const container = document.querySelector(".container");

  menuButton.addEventListener("click", () => {
    container.classList.toggle("show-sidebar");
  });
});
