let studentsArr = JSON.parse(localStorage.getItem("students")) || [];
let editStudent = JSON.parse(localStorage.getItem("editStudent")) || []

let editIdx = JSON.parse(localStorage.getItem("editIdx")) || ''
let isEdit = false;
const clearAll = ()=>{
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("contact").value = "";
    document.getElementById("course").value = "";
}

if(editIdx == '' ){
    clearAll()
    // document.querySelector(`input[type="radio"]:checked`).value = "";
}else{
    document.getElementById("name").value = editStudent.name;
    document.getElementById("mail").value = editStudent.mail;
    document.getElementById("contact").value = editStudent.contact;
    document.getElementById("course").value = editStudent.course;
    // document.querySelector(`input[type="radio"]:checked`).value = editStudent.gender;
    isEdit = true;
    
}

submitBtn.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let contact = document.getElementById("contact").value;
    let course = document.getElementById("course").value;
    let gender = document.querySelector(`input[type="radio"]:checked`).value;

    if(isEdit){
        let studentsObj = { name, mail, contact, course, gender };
        studentsArr.splice(editIdx, 1, studentsObj)
        localStorage.setItem("students", JSON.stringify(studentsArr));
        window.location = "./students.html"
        localStorage.removeItem("editIdx")
        localStorage.removeItem("editStudent")
        isEdit = false;
        clearAll()
        return;
    }

    let studentsObj = { name, mail, contact, course, gender };
    studentsArr.push(studentsObj);
    localStorage.setItem("students", JSON.stringify(studentsArr));
    window.location = "./students.html"
    clearAll()
})
