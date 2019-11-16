var environmentButtons = document.querySelectorAll('.radio-button-class');
var databaseButtons = document.querySelectorAll('.radio-button-db');
var taskButtons = document.querySelectorAll('.radio-button-task');
var exclusions = document.querySelectorAll('.radio-button-exclusions');

for (i = 0; i < environmentButtons.length; i++) {
    environmentButtons[i].addEventListener('change', function () {
        var text = document.createTextNode(this.value);
        document.getElementById("envrionment-target").innerHTML = this.value;
    });
}

for (i = 0; i < databaseButtons.length; i++) {
    databaseButtons[i].addEventListener('change', function() {
        var text = document.createTextNode(this.value);
        document.getElementById("database-target").innerHTML = this.value;
    })
}

for(i = 0 ; i < taskButtons.length ;i++) {
    taskButtons[i].addEventListener('change', function() {
        var text = document.createTextNode(this.value);
        document.getElementById("task-target").innerHTML = this.value;
    });
}

for(i = 0 ; i < taskButtons.length ;i++) {
    exclusions[i].addEventListener('change', function() {
        var text = document.createTextNode(this.value);
        document.getElementById("exclusions-target").innerHTML = this.value;
    });
}