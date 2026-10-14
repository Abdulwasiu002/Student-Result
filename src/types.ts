//---Student Result Management System---//

export interface Student {
    id: number;
    name: string;
    regNo: string;
    scores: number[]
}


export const student1: Student = {
    id: 1,
    name: "Ibrahim",
    regNo: "CSE/024",
    scores: [43, 69, 45, 55, 72]
}


export const student2: Student = {
    id: 2,
    name: "Yunus",
    regNo: "CSE/028",
    scores: [65, 70, 79, 81, 73]
}


export const student3: Student = {
    id: 3,
    name: "Mercy",
    regNo: "CSE/032",
    scores: [25, 40, 35, 45, 50]
}



//console.log("--------STUDENT RESULT MANAGEMENT SYSTEM-------");
//console.log(student1);
//console.log(student2);
//console.log(student3);

