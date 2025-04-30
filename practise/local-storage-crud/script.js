document.addEventListener("DOMContentLoaded", ()=>{
    let editIdx = JSON.parse(localStorage.getItem("editIdx"));
    let editStudent = JSON.parse(localStorage.getItem("editStudent"));

    if(editIdx !== null){
        document.getElementById("name").value = editStudent.name;
        document.getElementById("mail").value = editStudent.mail;
        document.getElementById("contact").value = editStudent.contact;
        document.getElementById("course").value = editStudent.course;
        document.querySelector(`input[value=${editStudent.gender}]`).checked = true;
        document.getElementById("submitBtn").innerHTML = "Update";
    }
})

document.getElementById("submitBtn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let contact = document.getElementById("contact").value;
    let course = document.getElementById("course").value;
    let gender = document.querySelector(`input[type="radio"]:checked`).value;

    let studentArr = JSON.parse(localStorage.getItem("students")) || [];
    let editIdx = JSON.parse(localStorage.getItem("editIdx"));
    let studentObj = { name, mail, contact, course, gender };

    if(editIdx !== null){
        studentArr[editIdx] = studentObj;

        localStorage.removeItem("editIdx");
        localStorage.removeItem("editStudent");
        clearAll();
    } else {
        studentArr.push(studentObj);
    }

    localStorage.setItem("students", JSON.stringify(studentArr));

    window.location = "./students.html"
})

function clearAll() {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("course").value = "";
    document.querySelector(`input[type="radio"]:checked`).value = "";
}