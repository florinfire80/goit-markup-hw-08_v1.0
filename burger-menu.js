(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("burger__is-hidden");
  }
})();

// const hamburgerMenu = document.querySelector(".hamburger-menu");
// const headerNav = document.querySelector(".header-nav");

// hamburgerMenu.addEventListener("click", function () {
//   headerNav.classList.toggle("show-menu");
// });

// =================================================

// const hamburgerMenu = document.querySelector(".hamburger-menu");
// const modal = document.querySelector(".modal");
// const closeBtn = document.querySelector(".close-btn");

// hamburgerMenu.addEventListener("click", function () {
//   modal.style.display = "block";
// });

// closeBtn.addEventListener("click", function () {
//   modal.style.display = "none";
// });

// window.addEventListener("click", function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// });
