const operator = prompt("Enter operation: '+', '-', '*', '/' ");
const Number1 = parseInt(prompt("Enter your first number: "));
const Number2 = parseInt(prompt("Enter your second number: "));

let result;
if (operator == '+') {
    result = Number1 + Number2;
}
else if (operator == '-') {
    result = Number1 - Number2;
}
else if (operator == '*') {
    result = Number1 * Number2;
}
else {
    result = Number1 / Number2
}

alert(`${Number1} ${operator} ${Number2} = ${result}`);
