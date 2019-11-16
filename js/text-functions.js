var listOfElements;
var copyString = "";

function copyToClipBoard() {
    listOfElements = document.querySelectorAll('.copyable')
    const el = document.createElement('textarea');
    listOfElements.forEach(createClipBoardString);
}

function createClipBoardString(element) {
    //TODO
}