const menuButton = document.querySelector('.menu-button');
const menuItems = document.querySelector('.menu-items');
menuButton.addEventListener('click', function() {
  menuItems.classList.toggle('active');
});