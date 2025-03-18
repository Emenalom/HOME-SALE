document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menu-btn").addEventListener("click", function() {
        alert("Menu button clicked!");
    });

    document.querySelector(".search-btn").addEventListener("click", function() {
        alert("Search button clicked!");
    });

    document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", function() {
            alert("Viewing details...");
        });
    });
});
