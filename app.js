function handleInput() {
    const inputNumber = document.getElementById("inputNumber").value;
    const output = document.getElementById("output");
    if (inputNumber < 0) {
        output.textContent = "Enter a positive value";
    } else if (inputNumber % 2 === 0) {
        output.textContent = `The next 3 even numbers are: ${+inputNumber + 2}, ${+inputNumber + 4}, ${+inputNumber + 6}`;
    } else {
        output.textContent = `The next 3 odd numbers are: ${+inputNumber + 2}, ${+inputNumber + 4}, ${+inputNumber + 6}`;
    }
}