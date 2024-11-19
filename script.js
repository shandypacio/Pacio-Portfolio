console.log("Script loaded successfully");

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow');
  } else {
    navbar.classList.remove('bg-white', 'shadow');
  }
});
