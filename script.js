function handleNavigation(section) {
    // "Backend logic": logging or fetching data could be done here
    console.log(`Navigating to section: ${section}`);
  
    // Update main content dynamically based on section
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-desc');
  
    switch (section) {
      case 'home':
        title.textContent = 'Welcome to RMMC Main';
        desc.textContent = 'Your one-stop solution for modern web interfaces and sleek designs. Explore our features and get started today!';
        break;
      case 'about':
        title.textContent = 'About RMMC';
        desc.textContent = 'RMMC is dedicated to providing the best web design and development experience. Our team focuses on innovation and quality.';
        break;
      case 'contact':
        title.textContent = 'Contact Us';
        desc.textContent = 'Reach out to us via email at contact@rmmc.com or call us at (123) 456-7890.';
        break;
      default:
        title.textContent = 'Welcome to RMMC Main';
        desc.textContent = 'Your one-stop solution for modern web interfaces and sleek designs. Explore our features and get started today!';
    }
  }
  
  // Simulate backend function for Get Started button
  function handleGetStarted() {
    // "Backend logic": could be user registration, API calls, etc.
    console.log('Get Started button clicked.');
  
    // For demo, show an alert
    alert('Thank you for getting started with RMMC! We will guide you through the next steps.');
  }
  
