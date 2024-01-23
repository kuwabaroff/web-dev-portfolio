let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "css/light-main.css") {
        theme.href = "css/dark-main.css";
    } else {
        theme.href = "css/light-main.css";
    }
}