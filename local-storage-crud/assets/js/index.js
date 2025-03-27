document.addEventListener("DOMContentLoaded", () => {
    let editIndex = JSON.parse(localStorage.getItem("editIndex"));
    let editStudent = JSON.parse(localStorage.getItem("editStudent"));

    if (editIndex !== null) {
        document.getElementById("name").value = editStudent.name;
        document.getElementById("mail").value = editStudent.mail;
        document.getElementById("course").value = editStudent.course;
        document.querySelector(`input[value=${editStudent.gender}]`).checked = true;
        document.getElementById("register").innerHTML = "Update";
    }
})

document.getElementById("register").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let course = document.getElementById("course").value;
    let gender = document.querySelector(`input[type="radio"]:checked`).value;

    let studentsObj = { name, mail, course, gender }

    let studentsArr = JSON.parse(localStorage.getItem("students")) || [];

    studentsArr.push(studentsObj);

    localStorage.setItem("students", JSON.stringify(studentsArr));

    window.location = "./student-details.html"
})