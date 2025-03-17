let totalSeconds = 0;
let timer;
let time = document.getElementById("timer");
let runningState = false;

document.getElementById("start").addEventListener("click", () => {
    if(runningState == true){
        return;
    }
    startTimer();
})

function startTimer() {
    let h = parseInt(document.getElementById("hours").value) || 0;
    let m = parseInt(document.getElementById("minutes").value) || 0;
    let s = parseInt(document.getElementById("seconds").value) || 0;

    totalSeconds = (h * 3600) + (m * 60) + (s);

    if (totalSeconds <= 0) {
        Swal.fire({
            text: "Enter Valid Input !",
            position: 'center',
            showConfirmButton: true,
            icon: "error",
        });
    }

    timer = setInterval(()=>{
        runningState = true;
        if(totalSeconds == -1){
            clearInterval(timer);
        }else {
            displayTime();
            totalSeconds--;
        }
    }, 1000);
}

function displayTime(){
    let hrs = Math.floor(totalSeconds / 3600);
    let mins = Math.floor((totalSeconds % 3600) / 60);
    let secs = totalSeconds % 60;

    time.innerHTML = `${hrs.toString().padStart(2, "0")} : ${mins.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`
}

document.getElementById("reset").addEventListener("click", ()=>{
    clearInterval(timer);
    runningState = false;
    document.getElementById("timer").innerHTML = `00 : 00 : 00`;
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
})

document.getElementById("pause").addEventListener("click", ()=>{
    clearInterval(timer);
    runningState = false;
})