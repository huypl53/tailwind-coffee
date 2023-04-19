// Authoer: http://github.com/huypl53
//

const topmenu = document.getElementById("cf-top-menu");
const toggleTopMenutIcon = document.getElementById("cf-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenutIcon.contains(e.target)) {
    // Click to Toggle top menu icon
    topmenu.classList.toggle("hidden");
    topmenu.classList.toggle("cf-top-menu-expanded");
  } else {
    // Click outside from Toggle top menu icon
    if (topmenu.classList.contains("cf-top-menu-expanded")) {
      topmenu.classList.toggle("cf-top-menu-expanded");
      topmenu.classList.toggle("hidden");
    }
  }
});
