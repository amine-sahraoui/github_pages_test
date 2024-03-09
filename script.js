function myFunc() {
    var button = document.getElementById("myButton");
    var text = button.innerHTML.split(" ");

    if (isNaN(text[0])) {
        button.innerHTML = "0 " + button.innerHTML + " again";

    } else {
        text[0] = String(Number(text[0]) + 1)
        button.innerHTML = text.join(" ")
    }
}