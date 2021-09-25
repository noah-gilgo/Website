function howOldAmI() {
    var myBirthday = 905382600000; // My birthday measured in milliseconds elapsed since the start of January 1st, 1970.
    var now = Date.now();
    return Math.floor((now - myBirthday) / 31556952000);
}

function addText() {
    // Functions like this make me really want to learn Angular
    if(!document.getElementById) return;
    var sentence = document.changeform.sentence.value;
    var node = document.createTextNode(" " + sentence);
    document.getElementById("paragraph1").appendChild(node);
    document.changeform.sentence.value="";
}
