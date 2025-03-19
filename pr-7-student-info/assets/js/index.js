class Student{
    constructor(name, grid, contactNo, emailId, dob){
        this.name = name;
        this.grid = grid;
        this.contactNo = contactNo;
        this.emailId = emailId;
        this.dob = dob;
    }
}

class studentManage{
    constructor(){
        this.students = [];
    }

    create(studentObj){
        this.students.push(studentObj);
        this.display();
    }

    display(){
        let studentList = document.getElementById("studentTable");
        studentList.innerHTML = "";

        this.students.forEach((student, idx) => {
            let row = `<tr>
                <td class="p-3">${student.name}</td>
                <td class="p-3">${student.grid}</td>
                <td class="p-3">${student.contactNo}</td>
                <td class="p-3">${student.emailId}</td>
                <td class="p-3">${student.dob}</td>
                <td class="p-3 d-flex flex-wrap align-items-center justify-content-evenly">
                    <button class="btn btn-warning" onclick="updateStudent(${idx})"><i class="bi bi-pencil-square"></i></button>
                    <button class="btn btn-danger" onclick="deleteStudent(${idx})"><i class="bi bi-trash"></i></button>
                </td>
            </tr>`;
            studentList.innerHTML += row;
        })
    }

    update(idx, studentUpdate){
        this.students[idx] = studentUpdate;
        this.display();
    }

    delete(idx){
        this.students.splice(idx, 1);
        this.display();
    }
}

const manage = new studentManage();
let updateIdx = null;

function createUpdateStudent(){
    let studentName = document.querySelector("#name").value.trim();
    let gridNo = document.querySelector("#grid").value.trim();
    let contactNo = document.querySelector("#number").value.trim();
    let mailId = document.querySelector("#mail").value.trim();
    let dob = document.querySelector("#dob").value.trim();

    if(studentName === "" || gridNo === "" || contactNo === "" || mailId === "" || dob === ""){
        Swal.fire({
            text: "Please Fill Out The Form Correctly !",
            icon: "error"
        });
        return;
    }

    let student = new Student(studentName, gridNo, contactNo, mailId, dob);

    if(updateIdx === null){
        manage.create(student);
    } else {
        manage.update(updateIdx,student);
        updateIdx = null;
        document.getElementById("submit").textContent = "Submit";
    }
    resetForm();
}

function deleteStudent(idx){
    manage.delete(idx);
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("grid").value = "";
    document.getElementById("number").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("dob").value = "";
}

function updateStudent(idx){
    let student = manage.students[idx];

    document.getElementById("name").value = student.name;
    document.getElementById("grid").value = student.grid;
    document.getElementById("number").value = student.contactNo;
    document.getElementById("mail").value = student.emailId;
    document.getElementById("dob").value = student.dob;

    updateIdx = idx;
    document.getElementById("submit").textContent = "Update";
}

document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault();
    createUpdateStudent();
})