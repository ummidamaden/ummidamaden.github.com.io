document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Add class when it becomes visible
        } else {
          entry.target.classList.remove('show'); // Remove class if it goes out of view
        }
      });
    });
  
    element = document.querySelector('.cards-holder');
    observer.observe(element);
  });