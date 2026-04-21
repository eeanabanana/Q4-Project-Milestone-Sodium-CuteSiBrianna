const words = ["CAT"];
function checkWordTutorialMode() {
    let input = document.getElementById("userWord").value.toUpperCase();
    let result = document.getElementById("result");

    if (words.includes(input)) {
        result.innerHTML = "Correct! You found " + input + " Proceed to Play!";
        result.style.color = "green";
        C.style.color="green";
        
    } else {
        result.innerHTML = "Not in the puzzle. Try again!";
        result.style.color = "red";
    }

    document.getElementById("userWord").value = "";
}