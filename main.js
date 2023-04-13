const mobileNav = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".btn-mobile-nav");

menuBtn.addEventListener("click", function () {
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
});
