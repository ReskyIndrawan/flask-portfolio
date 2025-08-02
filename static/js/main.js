document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeSidebar = document.getElementById("closeSidebar");

  // Open sidebar
  menuBtn.addEventListener("click", function () {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  // Close sidebar
  function closeSidebarFunc() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  closeSidebar.addEventListener("click", closeSidebarFunc);
  overlay.addEventListener("click", closeSidebarFunc);

  // Close sidebar on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSidebarFunc();
    }
  });
});
