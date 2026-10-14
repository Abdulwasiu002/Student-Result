import type  { Student } from "./types.js";
import   { student1, student2, student3, } from "./types.js";


type grade = "A" | "B" | "C" | "D" | "E" | "F";

// Temporary In-Memory //
const students: Student[] = [];


function addStudent(student: Student): void {
students.push(student);
}

function addScore(student: Student, score: number): void {
 student.scores.push(score)
}

function calculateTotal(scores: number[]): number {
    return scores.reduce((total, score) => total + score, 0);
} 

function calculateAverage(scores: number[]): number{
   const total= calculateTotal(scores);
    return total / scores.length;
}

function assignGrade(average: number): grade {
if (average >= 70){
    return "A";
}

if (average >= 60){
    return "B";
}

if (average >= 50){
    return "C";
}

if (average >= 45){
    return "D";
}

if (average >= 40){
    return "E";
}

 else {
    return "F"; 
}

}


function displayResult(student: Student): void {
    const total = calculateTotal(student.scores);
    const average = calculateAverage(student.scores);
    const grade = assignGrade(average);

console.log("--------STUDENT RESULT--------");
console.log(`Name: ${student.name}`);
console.log(`Registration number: ${student.regNo}`);
console.log(`Scores: ${student.scores}`);
console.log(`Total score: ${total}`);
console.log(`Average: ${average}`);
console.log(`Grade: ${grade}`)
}

displayResult(student1);

displayResult(student2);

displayResult(student3);

