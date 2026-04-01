
const wordseasy = ["FRUITS", "APPLE", "ORANGE", "MANGO", "APRICOT", "PEAR", "MELON", "CHERRY", "KIWI", "LIME", "PLUM", "LEMON", "FIG"];

function checkWordEasyMode() {
    let input = document.getElementById("userWord").value.toUpperCase();
    let result = document.getElementById("result");

    if (wordseasy.includes(input)) {
        result.innerHTML = "Correct! You found " + input;
        result.style.color = "green";
    } else {
        result.innerHTML = "Not in the puzzle. Try again!";
        result.style.color = "red";
    }

    document.getElementById("userWord").value = "";
}

const wordsmedium = ["BASIL", "CARDAMOM", "CAYENNE", "CINNAMON", "CLOVES", "CORIANDER", "CUMIN", "CURRY", "DILL", "GARLIC", "GINGER", "MINT", "NUTMEG", "OREGANO", "PAPRICA", "SAGE", "SUMAC", "THYME", "TURMERIC", "VANILLA"];

function checkWordMediumMode() {
    let input = document.getElementById("userWord").value.toUpperCase();
    let result = document.getElementById("resultOfMedium");

    if (wordsmedium.includes(input)) {
        resultOfMedium.innerHTML = " Correct! You found " + input;
        resultOfMedium.style.color = "green";
    } else {
        resultOfMedium.innerHTML = " Not in the puzzle. Try again!";
        resultOfMedium.style.color = "red";
    }

    document.getElementById("userWord").value = "";
}

const campingWords = ["AIR MATTRESS", "ANIMALS", "BATTERIES", "CABIN", "CAMPFIRE", "CAMPSITE", "CANOEING", "CHIPMUNK", "COMPASS", "FLASHLIGHT", "HAMMOCK", "HIKING", "INSECT REPELLENT", "ISLAND", "KAYAK", "LANTERN", "MARSHMALLOW", "MEMORIES", "MOSQUITOES", "MOUNTAINS", "NATURE", "OUTDOOR COOKING", "RACCOON", "RESERVATION", "ROASTING STICKS", "S'MORES", "SLEEPING BAG", "SUMMER", "SWIMMING", "TENT", "TRAILER", "VACATION"];
function checkWordHardMode() {
    let input = document.getElementById("userWord").value.toUpperCase();
    let result = document.getElementById("resultOfHard");

    if (wordsHard.includes(input)) {
        resultOfHard.innerHTML = " Correct! You found " + input;
        resultOfHard.style.color = "green";
    } else {
        resultOfHard.innerHTML = " Not in the puzzle. Try again!";
        resultOfHard.style.color = "red";
    }

    document.getElementById("userWord").value = "";
}

