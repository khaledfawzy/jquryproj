document.querySelectorAll('.customToggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
      const currentInner = this.nextElementSibling;
      const allInners = document.querySelectorAll('.customInner');
      
      allInners.forEach(inner => {
        if (inner !== currentInner) {
          inner.style.maxHeight = '0';
          setTimeout(() => inner.style.display = 'none', 500); // Add delay to match transition time
        }
      });

      if (currentInner.style.maxHeight === '0px' || currentInner.style.maxHeight === '') {
        currentInner.style.display = 'block';
        setTimeout(() => currentInner.style.maxHeight = currentInner.scrollHeight + 'px', 0); // Wait for next frame to apply height
      } else {
        currentInner.style.maxHeight = '0';
        setTimeout(() => currentInner.style.display = 'none', 500); // Add delay to match transition time
      }
    });
  });