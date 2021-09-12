/*function isImposter(amogus) {
    if(!amogus) {
        alert("It's just a sussy baka and it cannot be that bad");
    } else {
        alert("I'm feeling like imposter; I might just be a monster");
    }
}*/

function ternaryOperator(condition, op1, op2) {
    //why did I make this
    if(condition) {
        return op1;
    } else {
        return op2;
    }
}

function howOldAmI() {
    myBirthday = 905382600000 // My birthday measured in milliseconds elapsed since the start of January 1st, 1970.
    howOldIAm = new Date(Date.now - myBirthday);
    return (howOldIAm.getYear() - 1970);
}
