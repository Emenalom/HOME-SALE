function toggleMenu() {
    const menu = document.querySelector(".menu-container");
    if (menu.style.left === "0px") {
        menu.style.left = "-100%";
    } else {
        menu.style.left = "0px";
    }
}

