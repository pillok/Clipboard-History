let history = [];

chrome.runtime.onStartup.addListener(function () {});

let input = document.createElement("textarea");
document.body.appendChild(input);
let tempArea = document.createElement("textarea");
document.body.appendChild(tempArea);

let inputCopy = document.createElement("textarea");
document.body.appendChild(inputCopy);
let tempAreaPaste = document.createElement("textarea");
document.body.appendChild(tempAreaPaste);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.msg === "HISTORY") {
    sendResponse(history);
  } else if (message.msg === "COPY") {
    let index = message.ind;
    let indValContent = history[index].content;
    copyText(indValContent);
    sendResponse(history);
  }
});

setInterval(async () => {
  let current = getClipboardCurrent();
  if (current != "") {
    if (history.length === 0 || history[0].content != current) {
      let currentClipboard = { dateAndTime: new Date(), content: current };
      history.unshift(currentClipboard);
    }
  }
}, 250);

function getClipboardCurrent() {
  tempArea.select();
  tempArea.focus();
  document.execCommand("paste");
  let val = tempArea.value;
  tempArea.value = "";
  return val;
}

function copyText(text) {
  tempAreaPaste.innerText = text;
  tempAreaPaste.select();
  document.execCommand("copy");
}
