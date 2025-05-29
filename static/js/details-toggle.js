document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-detail-btn');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const figcaption = this.closest('.toggle-figcaption');
        if (!figcaption) return;
  
        const detailTextElement = figcaption.querySelector('.detail-text');
        const faIcon = this.querySelector('i.triangle-icon');
        const buttonTextSpan = this.querySelector('.button-text');
  
        if (detailTextElement) {
          const isExpanded = this.getAttribute('aria-expanded') === 'true';
  
          if (isExpanded) {
            detailTextElement.style.display = 'none';
            this.setAttribute('aria-expanded', 'false');
            if (faIcon) {
              faIcon.classList.remove('fa-caret-down');
              faIcon.classList.add('fa-caret-right');
            }
            // if (buttonTextSpan) {
            //   buttonTextSpan.textContent = ' Show Details';
            // }
          } else {
            detailTextElement.style.display = 'block';
            this.setAttribute('aria-expanded', 'true');
            if (faIcon) {
              faIcon.classList.remove('fa-caret-right');
              faIcon.classList.add('fa-caret-down');
            }
            // if (buttonTextSpan) {
            //   buttonTextSpan.textContent = ' Hide Details';
            // }
          }
        }
      });
    });
  });