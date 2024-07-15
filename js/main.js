const toggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");

toggler.onclick = function () {
     shayan();
};
function shayan() {
     navbar.classList.toggle("navbar__expanded");
}

const tabs = document.querySelectorAll(".services-item");
const tabContents = document.querySelectorAll(".service-feature");
tabs.forEach((tab) => {
     tab.addEventListener("click", (e) => {
          const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

          // REMOVE PREVIOUS ACTIVED CLASSES
          tabs.forEach((tab) => tab.classList.remove("active"));
          tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

          // ADD NEW ACTIVE CLASSES
          tab.classList.add("active");
          targeTabContent.classList.add("active");
     });
});
