// JavaScript Arrow Functions
// Arrow functions are a shorter way to write functions.

console.log("1. A regular function and an arrow function");

// Regular function
function regularGreeting() {
    console.log("Hello from a regular function!");
}

// Arrow function
const arrowGreeting = () => {
    console.log("Hello from an arrow function!");
};

regularGreeting();
arrowGreeting();


console.log("\n2. Arrow function with no parameters");

// Empty parentheses are required when there are no parameters.
const sayGoodMorning = () => {
    console.log("Good morning!");
};

sayGoodMorning();


console.log("\n3. Arrow function with one parameter");

// Parentheses are optional when there is only one parameter.
const greetStudent = inputname => {
    console.log("Hello, " + inputname + "!");
};

greetStudent("Maria");


console.log("\n4. Arrow function with two parameters");

// Parentheses are required when there are two or more parameters.
const addNumbers = (number1, number2) => {
    return number1 + number2;
};

let myresult = addNumbers(5, 3);
console.log("Result:", myresult); // Output: Result: 8

console.log("5 + 3 =", addNumbers(5, 3));


console.log("\n5. Short arrow function with an automatic return");

// If the function has one expression, we can remove the braces and return.
const multiply = (number1, number2) => number1 * number2;

console.log("4 x 6 =", multiply(4, 6));


console.log("\n6. Arrow function with more than one statement");

// Use braces when the function needs multiple statements.
// When braces are used, write return if a value should be returned.
const calculateTotal = (price, quantity) => {
    const total = price * quantity;
    return total;
};

console.log("Total price: $" + calculateTotal(10, 3));


console.log("\n7. Returning an object");

// Put parentheses around an object when using the short return syntax.
const createStudent = (name, grade) => ({
    name: name,
    grade: grade
});

const student = createStudent("Alex", 90);
console.log(student);


console.log("\n8. Arrow functions with arrays");

const numbers = [1, 2, 3, 4, 5];

// forEach performs an action for every item.
numbers.forEach(number => {
    console.log("Number:", number);
});

// map creates a new array by changing every item.
const doubledNumbers = numbers.map(number => number * 2);
console.log("Doubled numbers:", doubledNumbers);

// filter creates a new array containing matching items.
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers);


console.log("\n9. Practice problem");

// Problem:
// Write an arrow function named square that returns a number multiplied
// by itself. Then use map to square every number in [2, 3, 4].
// Expected output: [4, 9, 16]

// Try writing your answer here before reading the sample solution.


console.log("\n10. Sample solution");

const square = number => number * number;
const values = [2, 3, 4];
const squaredValues = values.map(number => square(number));

console.log("Squared values:", squaredValues);

const astudent = {
    name: "Maria",

    // Use a standard function here
    introduce: function () {
        console.log("My name is " + this.name);
    }
};

astudent.introduce(); // My name is Maria

const bstudent = {
    name: "Maria",

    introduce: () => {
        console.log("My name is " + this.name);
    }
};

bstudent.introduce(); // Usually undefined