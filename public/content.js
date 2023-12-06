// let history = []

function genId(length=10) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

// let port = chrome.runtime.connect({name: genId()});
// port.onMessage.addListener((message) => {
//     if(message.type === 'init') {
//         history = message.history;
//         console.log(history);
//     }
//     else {
//         history.push(message);
//         console.log(message);
//     }
// });