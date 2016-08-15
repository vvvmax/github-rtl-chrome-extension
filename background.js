

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

  chrome.tabs.executeScript({
	file: 'jquery.js',
  });

 chrome.tabs.executeScript({
	file: 'myscript.js',
  });

   
});
