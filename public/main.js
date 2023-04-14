const topMenu = document.getElementById("cf-top-menu");
const iconToggleTopMenu = document.getElementById("cf-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (iconToggleTopMenu.contains(e.target)) {
    topMenu.classList.toggle("hidden");
    topMenu.classList.toggle("cf-top-menu-vert-expanded");
    // alert("clicked");
  } else {
    // alert("clicked outside");

    if (topMenu.classList.contains("cf-top-menu-vert-expanded")) {
      topMenu.classList.toggle("hidden");
      topMenu.classList.toggle("cf-top-menu-vert-expanded");
    }
  }
});
