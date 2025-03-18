document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.querySelector(".input-group input[type='password']");
    const eyeIcon = document.querySelector(".eye-icon");

    eyeIcon.addEventListener("click", function() {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.textContent = "🙈"; // Change icon
        } else {
            passwordInput.type = "password";
            eyeIcon.textContent = "👁"; // Change icon
        }
    });
});
function login() {
    // Example: Simple check (Replace this with actual authentication)
    alert("Login successful!");
    window.location.href = "index.html"; // Redirect to main page
}