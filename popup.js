// Check if the current tab is X.com and if the content script is active
function checkExtensionStatus() {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	  if (tabs.length > 0 && tabs[0].url && tabs[0].url.startsWith('https://x.com/')) {
		// If the URL matches, we assume the extension is active
		document.getElementById('active-indicator').style.display = 'inline-block';
		document.getElementById('inactive-indicator').style.display = 'none';
		document.getElementById('status-text').innerText = 'Active on X.com';
	  } else {
		document.getElementById('active-indicator').style.display = 'none';
		document.getElementById('inactive-indicator').style.display = 'inline-block';
		document.getElementById('status-text').innerText = 'Not active';
	  }
	});
  }
  
  // When the popup loads, check the status
  document.addEventListener('DOMContentLoaded', function() {
	checkExtensionStatus();
  });