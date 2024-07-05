document.addEventListener("DOMContentLoaded", function() {
    var nav = document.getElementById('main-nav');
    var sections = document.querySelectorAll('.section');
  
    window.addEventListener('scroll', function() {
      var current = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
          current = section.getAttribute('id');
        }
      });
  
      if (current) {
        document.querySelectorAll('#main-nav a').forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href').slice(1) === current) {
            a.classList.add('active');
          }
        });
      }
  
      // Change background color of nav on scroll
      var scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        nav.style.backgroundColor = '#555'; // Change background color
      } else {
        nav.style.backgroundColor = '#333'; // Default background color
      }
    });
  });
  