let taskContent = document.getElementById("taskContent");
let addBtn = document.getElementById("addTask");

let tasksArr = []
addBtn.addEventListener("click", ()=>{
    let tasksIp = document.getElementById("tasksIp").value;
    let priority = document.getElementById("priority").value;

    let taskObj = {tasksIp, priority};

    tasksArr.push(taskObj);
    console.log(tasksArr);
    display();
    document.getElementById("tasksIp").value = "";
    document.getElementById("priority").value = "";
})

function display(){
    taskContent.innerHTML = "";
    tasksArr.forEach((taskDetails, idx)=>{
        taskContent.innerHTML += `
            <tr>
                <td>${taskDetails.tasksIp}</td>
                <td>${taskDetails.priority == 1 ? "Low Priority" : taskDetails.priority == 2 ? "Medium Priority" : "High Priority"}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteTask(${idx})"><i class="bi bi-x"></i></button>
                </td>
            </tr>
        `
    })    
}

function deleteTask(idx){
    tasksArr.splice(idx, 1);
    display();
}