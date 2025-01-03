function hideNewPostsButton() {
    const buttons = document.querySelectorAll('button[aria-label="New posts are available. Push the period key to go to the them."]');
    
    buttons.forEach(button => {
      if (button) {
        button.style.display = 'none';
      }
    });
  }
  
  hideNewPostsButton();
  
  document.addEventListener('DOMNodeInserted', hideNewPostsButton);