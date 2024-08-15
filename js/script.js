let display = document.getElementById("display");

function handleClick(obj) {
    let inputNum = obj.innerHTML;
    if (inputNum === "=") {
        display.innerHTML = eval(display.innerHTML);
    } else if (inputNum === "C") {
        display.innerHTML = "0";
    } else {
        if (display.innerHTML === "0") {
            display.innerHTML = inputNum;
        } else {
            display.innerHTML += inputNum;
        }
    }
}
