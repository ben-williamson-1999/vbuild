const {clipboard} = require('electron');

var copyButton = document.querySelector('.copy-button');
copyButton.addEventListener('click', function (event) {
    copyTextToClipboard();
});

function copyTextToClipboard() {
    var elems = document.getElementsByClassName("copyable");
    var arr = [];
    for (var i = 0; i < elems.length; i++) {
        arr.push(elems[i].innerHTML);
    }
    var text = arr.join(' ');
    clipboard.writeText(text);
}