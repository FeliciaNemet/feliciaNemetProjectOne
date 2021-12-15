// Make a button that toggles between light and dark
document.querySelector(`.toggle`).addEventListener(`click`,(event) => {
    const element = document.querySelector(`body`);
    element.classList.toggle("dark-mode");
});
// Make a popup ad
window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});

// Make a close for popup  ad
document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
});
