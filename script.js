// Go to Login Page
function goToLogin() {
    window.location.href = "login.html";
}

// Login Function
function loginUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (username === "sufyan" && password === "1234") {
        window.location.href = "dashboard.html";
    } else {
        error.textContent = "Invalid Username or Password!";
    }
}

// Logout Function
function logout() {
    window.location.href = "index.html";
}
