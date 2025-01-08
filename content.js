function hideButton() {
  // CSS selector based on the attributes provided
  const button = document.querySelector('button[aria-label="New posts are available. Push the period key to go to the them."]');
  
  if (button) {
    button.style.display = 'none';
  }
}

function watchForButton() {
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            hideButton();
          }
        });
      }
    });
  });

  // Configuration of the observer:
  const config = { childList: true, subtree: true };

  // Start observing the entire document for changes
  observer.observe(document.documentElement, config);

  // Check for the button on initial load or when the script is re-run
  hideButton();
}

// Start observing once the DOM content has loaded or when the script is executed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', watchForButton);
} else {
  watchForButton();
}