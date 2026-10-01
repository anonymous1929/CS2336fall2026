// Introduction to JSON
// JSON means JavaScript Object Notation.
// It is a text format used to store and exchange data.


console.log("1. A regular JavaScript object");

const student = {
    name: "Maria",
    age: 20,
    isEnrolled: true
};

console.log(student);
console.log("Student name:", student.name);


// console.log("\n2. JSON text");

// JSON is text, so the entire value is inside a JavaScript string.
// JSON property names and string values must use double quotes.
const studentJSON = `{
    "name": "Alex",
    "age": 21,
    "isEnrolled": true
}`;

console.log(studentJSON);
console.log("Data type:", typeof studentJSON); // string


console.log("\n3. Convert JSON text into a JavaScript object");

// JSON.parse() converts JSON text into a JavaScript value.
const parsedStudent = JSON.parse(studentJSON);

console.log(parsedStudent);
console.log("Student name:", parsedStudent.name);
console.log("Data type:", typeof parsedStudent); // object


console.log("\n4. Convert a JavaScript object into JSON text");

// JSON.stringify() converts a JavaScript value into JSON text.
const course = {
    courseName: "Web Programming",
    room: 101,
    isOnline: false
};

const courseJSON = JSON.stringify(course);

console.log(courseJSON);
console.log("Data type:", typeof courseJSON); // string


console.log("\n5. Make JSON text easier to read");

// The third argument adds indentation spaces.
const formattedCourseJSON = JSON.stringify(course, null, 2);
console.log(formattedCourseJSON);


console.log("\n6. JSON containing an array");

const classJSON = `{
    "course": "CIS 2336",
    "students": ["Maria", "Alex", "John"]
}`;

const classData = JSON.parse(classJSON);

console.log("Course:", classData.course);
console.log("First student:", classData.students[0]);

classData.students.forEach(name => {
    console.log("Student:", name);
});


// console.log("\n7. JSON containing a nested object");

// const employeeJSON = `{
//     "name": "Lisa",
//     "address": {
//         "city": "Houston",
//         "state": "Texas"
//     }
// }`;

// const employee = JSON.parse(employeeJSON);

// console.log("Employee:", employee.name);
// console.log("City:", employee.address.city);


// console.log("\n8. Change parsed data and convert it back to JSON");

// parsedStudent.age = 22;
// parsedStudent.major = "Computer Information Systems";

// const updatedStudentJSON = JSON.stringify(parsedStudent, null, 2);
// console.log(updatedStudentJSON);


// console.log("\n9. Important JSON rules");

// // 1. Property names must use double quotes.
// // 2. Text values must use double quotes.
// // 3. JSON cannot contain comments.
// // 4. JSON cannot contain functions.
// // 5. Do not place a comma after the last property.

// console.log("JSON must follow strict formatting rules.");


// console.log("\n10. Practice problem");

// // Given the JSON text below:
// // 1. Convert it into a JavaScript object.
// // 2. Print the product name.
// // 3. Change the price to 30.
// // 4. Convert the object back into formatted JSON text.

// const productJSON = `{
//     "name": "Keyboard",
//     "price": 25,
//     "inStock": true
// }`;

// // Try writing your answer here before reading the sample solution.


// console.log("\n11. Sample solution");

// const product = JSON.parse(productJSON);
// console.log("Product name:", product.name);

// product.price = 30;

// const updatedProductJSON = JSON.stringify(product, null, 2);
// console.log(updatedProductJSON);
