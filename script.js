// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');

  mobileMenuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
  });

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const filter = button.getAttribute('data-filter');

      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      button.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});