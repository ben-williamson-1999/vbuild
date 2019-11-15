var environmentButtons = document.querySelectorAll('.radio-button-class');
var databaseButtons = document.querySelectorAll('.radio-button-db')

for (i = 0; i < environmentButtons.length; i++) {
    environmentButtons[i].addEventListener('change', function () {
        document.querySelector('#target').value = this.value;
    });
}

for (i = 0; i < databaseButtons.length; i++) {
    databaseButtons[i].addEventListener('change', function() {
        var text = document.createTextNode(this.value)
        document.getElementById("target1").appendChild(text);
        //document.querySelector('#target1').value = this.value;
    })
}

