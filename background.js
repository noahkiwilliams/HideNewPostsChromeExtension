chrome.tabs.onActivated.addListener((activeInfo) => {
	chrome.tabs.get(activeInfo.tabId, (tab) => {
	  if (tab && tab.url && tab.url.startsWith('https://x.com/')) {
		chrome.scripting.executeScript({
		  target: { tabId: activeInfo.tabId },
		  files: ['content.js']
		});
	  }
	});
  });
  
  // Also, listen for updates to ensure the script runs if the page is refreshed or navigated within the same tab
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith('https://x.com/')) {
	  chrome.scripting.executeScript({
		target: { tabId: tabId },
		files: ['content.js']
	  });
	}
  });