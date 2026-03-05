//filter method
let marks = [85, 92, 78, 60, 95, 40,90];
let passed = marks.filter(mark => mark >= 75);
console.log("Marks: ", marks);
console.log("Passed marks: ", passed);
//Array of object name and score of perticular student
let students = [
    { name: "Chaithanya", score: 85 },
    { name: "shalini", score: 92 },
    { name: "kavana", score: 78 },
    { name: "Pavi", score: 60 },
    { name: "Pallavi", score: 95 },
    { name: "sanju", score: 40 },
    { name: "akshatha", score: 90 }
];
console.log("Students: ", students);
let passedStudents = students.filter(student => student.score >= 70);
console.log("Passed Students: ", passedStudents);
let failedStudents = students.filter(student => student.score < 70);
console.log("Failed Students: ", failedStudents);
//qualified students name who scored above 70
let qualifiedStudents = students.filter(student => student.score > 70).map(student => student.name);
console.log("Qualified Students: ",qualifiedStudents);