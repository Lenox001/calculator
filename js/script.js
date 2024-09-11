let display = document.getElementById("display");

function handleClick(obj) {
    let inputNum = obj.innerHTML;
    if (inputNum === "=") {
        try{
        display.innerHTML = eval(display.innerHTML);
        


        }catch (error) {
            display.innerHTML = "Invalid expression";
        }
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