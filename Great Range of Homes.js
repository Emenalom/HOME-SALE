function searchHomes() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let homes = document.querySelectorAll(".home");

    homes.forEach(home => {
        if (home.innerText.toLowerCase().includes(query)) {
            home.style.display = "block";
        } else {
            home.style.display = "none";
        }
    });
}