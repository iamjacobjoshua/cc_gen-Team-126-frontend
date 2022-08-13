/* THE CARD DETAILS */

var a;
function showHideDetails() {
    if (a==0) {
        document.getElementById("cardDetails").style.display="inline";
        return a=1;
    }

    else {
        document.getElementById("cardDetails").style.display="none";
        return a=0;
    }
}

/* THE CARD COLOURS */

var a;
function showHideColour() {
    if (a==0) {
        document.getElementById("cardColours").style.display="grid";
        return a=1;
    }

    else {
        document.getElementById("cardColours").style.display="none";
        return a=0;
    }
}

/* THE CARD NUMBER */

var numberBox = document.getElementById("numberBox");

numberBox.onkeyup = numberBox.onkeypress = function(){
    document.getElementById("prevNumber").innerHTML = this.value;
}

/* THE CARD HOLDER */

var cardHolder = document.getElementById("holderName");

cardHolder.onkeyup = cardHolder.onkeypress = function(){
    document.getElementById("prevName").innerHTML = this.value;
}

/* THE CARD EXPIRY */

var cardExpiry = document.getElementById("mExpiryTime");

cardExpiry.onkeyup = cardExpiry.onkeypress = function(){
    document.getElementById("prevMonth").innerHTML = this.value;
}

var cardExpiry = document.getElementById("yExpiryTime");

cardExpiry.onkeyup = cardExpiry.onkeypress = function(){
    document.getElementById("prevYear").innerHTML = this.value;
}