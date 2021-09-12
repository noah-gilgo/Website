function howOldAmI() {
    var myBirthday = 905382600000; // My birthday measured in milliseconds elapsed since the start of January 1st, 1970.
    var now = Date.now();
    return Math.floor((now - myBirthday) / 31556952000);
}
