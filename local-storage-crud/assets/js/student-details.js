document.addEventListener("DOMContentLoaded",()=>{
    localStorage.removeItem("editIndex");
    localStorage.removeItem("editStudent");
})

let heading = document.getElementById("heading");
let studentsArr = JSON.parse(localStorage.getItem("students")) || [];

function display() {
    document.getElementById("studentData").innerHTML = "";

    studentsArr.forEach((studentInfo, idx) => {
        document.getElementById("studentData").innerHTML += `
                <tr>
                <td>${idx + 1}</td>
                <td>${studentInfo.name}</td>
                <td>${studentInfo.mail}</td>
                <td>${studentInfo.course == 1 ? `Full Stack Development` : studentInfo.course == 2 ? `UI / UX Designing` : `AI / ML and Data Science`}</td>
                <td>${studentInfo.gender}</td>
                <td>
                     <button class="btn btn-warning" onclick="editStudentData(${idx})"><i class="bi bi-pencil-square"></i></button>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="deleteStudentData(${idx})"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
        `
    });
}

function deleteStudentData(idx) {
    studentsArr.splice(idx, 1);
    localStorage.setItem("students", JSON.stringify(studentsArr))
    display();
}

function editStudentData(idx) {
    let student = studentsArr[idx];
    localStorage.setItem("editIndex", idx);
    localStorage.setItem("editStudent", JSON.stringify(student));

    window.location = "./index.html"
}

if (studentsArr.length === 0) {
    heading.innerHTML = "No Student Data Found !";
    document.querySelector("table").innerHTML = "";
} else {
    heading.innerHTML = "Student's Information : ";
    display();
}