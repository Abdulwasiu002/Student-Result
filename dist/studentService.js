import { student1 } from "./types.js";
// Temporary In-Memory //
const students = [];
function addStudent(student) {
    students.push(student);
}
function addScore(student, score) {
    student.scores.push(score);
}
function calculateTotal(scores) {
    return scores.reduce((total, score) => total + score, 0);
}
function calculateAverage(scores) {
    const total = calculateTotal(scores);
    return total / scores.length;
}
function assignGrade(average) {
    if (average >= 70) {
        return "A";
    }
    if (average >= 60) {
        return "B";
    }
    if (average >= 50) {
        return "C";
    }
    if (average >= 45) {
        return "D";
    }
    if (average >= 40) {
        return "E";
    }
    if (average >= 70) {
        return "A";
    }
    else
        (average < 40);
    return "F";
}
function displayResult(student) {
    const total = calculateTotal(student.scores);
    const average = calculateAverage(student.scores);
    const grade = assignGrade(average);
    console.log("---STUDENT RESULT---");
    console.log(`Name: ${student.name}`);
    console.log(`Registration number: ${student.regNo}`);
    console.log(`Scores: ${student.scores}`);
    console.log(`Total score: ${total}`);
    console.log(`Average: ${average}`);
    console.log(`Grade: ${grade}`);
}
displayResult(student1);
//# sourceMappingURL=studentService.js.map