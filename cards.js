var cards = [{
    "color": "black",
    "value": "ace",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "2",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "3",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "4",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "5",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "6",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "7",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "8",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "9",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "10",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "jack",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "queen",
    "house": "spades",
    "joker": false
}, {
    "color": "black",
    "value": "king",
    "house": "spades",
    "joker": false
}, {
    "color": "red",
    "value": "ace",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "2",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "3",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "4",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "5",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "6",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "7",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "8",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "9",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "10",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "jack",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "queen",
    "house": "hearts",
    "joker": false
}, {
    "color": "red",
    "value": "king",
    "house": "hearts",
    "joker": false
}, {
    "color": "black",
    "value": "ace",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "2",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "3",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "4",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "5",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "6",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "7",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "8",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "9",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "10",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "jack",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "queen",
    "house": "clubs",
    "joker": false
}, {
    "color": "black",
    "value": "king",
    "house": "clubs",
    "joker": false
}, {
    "color": "red",
    "value": "ace",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "2",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "3",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "4",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "5",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "6",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "7",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "8",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "9",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "10",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "jack",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "queen",
    "house": "diamonds",
    "joker": false
}, {
    "color": "red",
    "value": "king",
    "house": "diamonds",
    "joker": false
}];
var arr = cards.slice();
var curr = 0;
var isRunning = false;
var togg;
var selectedCard;
var revealed = false;

function startDeal() {
    if (!isRunning && arr.length >= 2) {
        togg = window.setInterval(deal, 500);
        isRunning = true;
    }
}

function stopDeal() {
    if (isRunning) {
        isRunning = false;
        var x = curr == 0 ? arr.length - 1 : curr - 1;
        //   document.getElementById("result").innerHTML = "selected : " + arr[x].value +"_of_"+arr[x].house;
        selectedCard=arr[x];
        // arr[x] = arr[arr.length - 1];
        // arr.pop();
        window.clearInterval(togg);
        curr = 0;
    }
}

function getCardName(card) {
    if (card.joker) {
        return card.color + "_joker";
    } else {
        return card.value + "_of_" + card.house;
    }
}

function deal() {
    if (isRunning && arr.length != 0) {
        var cardName = getCardName(arr[curr]);
        document.getElementById("numberValue").innerHTML = "<img src='images/" + cardName + ".svg'>";
        curr++;
        if (curr == arr.length) {
            curr = 0;
        }
        //document.getElementById("debug").innerHTML = cardName;
    }
}

function shuffle() {
    arr.sort(() => Math.random() - 0.5);
    if(revealed){
        showAll();
    }
}
function revertOriginal() {
    arr=cards.slice();
    if(revealed){
        showAll();
    }
}
function flipBack() {
        revealed=false;
        document.getElementById("deck").innerHTML = "";
        for (i = 0; i < arr.length; i++) {
            var cardName = getCardName(arr[i]);
            document.getElementById("deck").innerHTML += "<div style='position:absolute;left:" + (i * 38) + "px'><img src='images/background.png'></div>";       
    }
}

function showAll() {
        revealed=true;
        document.getElementById("deck").innerHTML = "";
        for (i = 0; i < arr.length; i++) {
            var cardName = getCardName(arr[i]);
            document.getElementById("deck").innerHTML += "<div id= '" + cardName + "' style='position:absolute;left:" + (i * 38) + "px'><img src='images/" + cardName + ".svg' height='244' width='169'></div>";
        }
}