const PATTERN = /^[A-Za-z0-9_]+$/;

function validateForm() {
    const username = document.getElementById("username").value.trim();
    const welcome = document.getElementById("welcome");

    if (username === "" || !PATTERN.test(username)) {
        return false;
    }

    welcome.innerHTML = "Welcome, " + username + "!";

    return false; 
}