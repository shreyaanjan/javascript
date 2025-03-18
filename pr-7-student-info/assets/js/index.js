class Student{
    constructor(name, grid, contactNo, emailId){
        this.name = name;
        this.grid = grid;
        this.contactNo = contactNo;
        this.emailId = emailId;
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
                <td class="p-3">
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

function createUpdateStudent(){
    let studentName = document.querySelector("#name").value.trim();
    let gridNo = document.querySelector("#grid").value.trim();
    let contactNo = document.querySelector("#number").value.trim();
    let mailId = document.querySelector("#mail").value.trim();

    if(studentName === "" || gridNo === "" || contactNo === "" || mailId === ""){
        Swal.fire({
            text: "Please Fill Out The Form Correctly !",
            icon: "error"
        });
        return;
    }

    let student = new Student(studentName, gridNo, contactNo, mailId);
    manage.create(student);
}

function deleteStudent(idx){
    manage.delete(idx);
}

document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault();
    createUpdateStudent();
})