console.log('background.js loaded');


chrome.scripting.executeScript({
target: { tabId: tab.id },
files: ["content.js"]
});
