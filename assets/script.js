const themeToggleButton = document.getElementById('theme-toggle');
    
    // Function to apply theme based on user preference or local storage
    function applyTheme() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else {
        document.documentElement.setAttribute('data-theme', prefersDarkScheme ? 'dark' : 'light');
      }
    }

    // Function to toggle theme
    function toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    }

    // Initialize theme
    applyTheme();

    // Add event listener to button
    themeToggleButton.addEventListener('click', toggleTheme);