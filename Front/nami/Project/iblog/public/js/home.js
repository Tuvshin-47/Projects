document.addEventListener('DOMContentLoaded', function () {
  // Select all menu items with submenus
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach((item) => {
    const header = item.querySelector('.menu-header'); // The parent div containing <a> and <img>
    const icon = item.querySelector('.dropdown-icon'); // The dropdown icon
    const submenu = item.querySelector('.submenu'); // The submenu div

    if (header && icon && submenu) {
      icon.src = './img/down.svg'; // Make sure it starts as down

      header.addEventListener('click', function (e) {
        // Prevent default anchor behavior (if you don't need it to navigate)
        e.preventDefault();

        // Toggle active class for dropdown behavior
        item.classList.toggle('active');

        // Toggle icon based on submenu state
        if (item.classList.contains('active')) {
          icon.src = './img/down.svg'; // Change to up arrow when active
        } else {
          icon.src = './img/down.svg'; // Change back to down arrow when inactive
        }
      });
    }
  });
});
const signinButton = document.querySelector('.signin');
signinButton.addEventListener('click', function () {
  window.location.href = 'index.html';
});
const registerButtons = document.querySelectorAll('.register');
registerButtons.forEach((button) => {
  button.addEventListener('click', function () {
    window.location.href = 'signup2.html';
  });
});
