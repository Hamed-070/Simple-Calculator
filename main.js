let text = ""; // Keep this as a string

function addValue(a) { //This is gonna add a number (as string) when the button gets clicked
    text += a;
    document.getElementById("show").value = text;
}

function setEmpty() { //Set the show Tag empty 
    text = "";
    document.getElementById("show").value = "";
}

function calculate() { //Calculate the text (Numbers)
    try {
        let result = eval(text); //Eval a function for number opration for srting eval('9*2+2') === 20
        document.getElementById("show").value = result;
        text = result.toString();
    } catch (e) {
        document.getElementById("show").value = "Error!";
        text = "";
    }
}


document.addEventListener("keydown", function(event) { // Listen for keyboard events
    const key = event.key;

    if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "%", "."].includes(key)) {
        addValue(key);
    } else if (key === "Enter") {
        event.preventDefault();  // Prevent form submission if any
        calculate();
    } else if (key.toLowerCase() === "c") {
        setEmpty();
    } else if (key === "Backspace") {
        event.preventDefault(); // Prevent default back navigation in browsers
        text = text.slice(0, -1);
        document.getElementById("show").value = text;
    }
});



