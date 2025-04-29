let studentsArr = JSON.parse(localStorage.getItem("students")) || [];

function deleteStudents(idx){
    studentsArr.splice(idx, 1)
    localStorage.setItem("students", JSON.stringify(studentsArr));
    display();
}

function updateStudents(idx){
    let student = studentsArr[idx]
    localStorage.setItem("editIdx", idx);
    localStorage.setItem("editStudent", JSON.stringify(student));
    window.location = "./index.html";
}

function display(){
    document.getElementById("studentContent").innerHTML = "";
    studentsArr.forEach((detail, idx)=>{
        document.getElementById("studentContent").innerHTML += `
            <tr>
                <td>${detail.name}</td>
                <td>${detail.mail}</td>
                <td>${detail.contact}</td>
                <td>${detail.course == 1 ? "Full Stack Development" : detail.course == 2 ? "UI/UX" : "AI/ML"}</td>
                <td>${detail.gender}</td>
                <td>
                    <button class="btn btn-success" onclick="updateStudents(${idx})"><i class="bi bi-pencil-square"></i></button>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="deleteStudents(${idx})"><i class="bi bi-trash"></i></button>
                </td>
            </tr>
        `
    })
}
display();