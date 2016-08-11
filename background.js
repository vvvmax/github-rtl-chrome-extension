
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' to rtl!');
  chrome.tabs.executeScript({
    code: 'document.getElementsByClassName("markdown-body")[0].style.direction="rtl"'
  });
});
