/*!
 * Start Bootstrap - Freelancer (Bootstrap 5 - Vanilla JS version)
 * Migrated from jQuery to vanilla JavaScript
 */
(function() {
  "use strict";

  // Smooth scrolling for anchor links
  document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();

          // Close navbar collapse on mobile
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
              toggle: false
            });
            bsCollapse.hide();
          }

          // Smooth scroll to target
          const offset = 71; // Navbar height offset
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Activate Bootstrap scrollspy
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#mainNav',
    offset: 80
  });

  // Navbar shrink function
  function navbarShrink() {
    const navbarCollapsible = document.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  }

  // Shrink the navbar on initial load
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Handle modal opening from URL hash - dynamic discovery
  if (window.location.hash) {
    const hash = window.location.hash;
    const modalElement = document.querySelector(hash);

    // Check if element exists and is a Bootstrap modal
    if (modalElement && modalElement.classList.contains('modal')) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Floating label form groups (if contact form is enabled)
  const floatingLabelGroups = document.querySelectorAll('.floating-label-form-group');
  floatingLabelGroups.forEach(group => {
    // Handle input/change events
    group.addEventListener('input', function(e) {
      const input = e.target;
      if (input.value && input.value.length > 0) {
        group.classList.add('floating-label-form-group-with-value');
      } else {
        group.classList.remove('floating-label-form-group-with-value');
      }
    });

    // Handle focus events
    group.addEventListener('focus', function() {
      group.classList.add('floating-label-form-group-with-focus');
    }, true);

    // Handle blur events
    group.addEventListener('blur', function() {
      group.classList.remove('floating-label-form-group-with-focus');
    }, true);
  });

})();
