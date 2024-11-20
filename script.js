console.log("Script loaded successfully");

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow');
  } else {
    navbar.classList.remove('bg-white', 'shadow');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          

          const targetId = link.getAttribute("href").substring(1); 
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              targetSection.classList.remove("animated-section");

              setTimeout(() => {
                  targetSection.classList.add("animated-section");
              }, 50);

              targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
      });
  });
});
