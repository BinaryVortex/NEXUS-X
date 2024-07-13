document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search");
  const menuList = document.getElementById("menu-list");
  const menuItems = menuList.getElementsByTagName("li");

  searchInput.addEventListener("input", function() {
      const filter = searchInput.value.toLowerCase();
      for (let i = 0; i < menuItems.length; i++) {
          const item = menuItems[i].getElementsByTagName("a")[0];
          const textValue = item.textContent || item.innerText;
          if (textValue.toLowerCase().indexOf(filter) > -1) {
              menuItems[i].style.display = "";
          } else {
              menuItems[i].style.display = "none";
          }
      }
  });
});
