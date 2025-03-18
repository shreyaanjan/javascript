let totalSeconds = 0;
let timer;
let time = document.getElementById("timer");
let runningState = false;

document.getElementById("start").addEventListener("click", () => {
    if (runningState == true) {
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

    timer = setInterval(updateTime, 1000);
    runningState = true;
}

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    runningState = false;
    document.getElementById("timer").innerHTML = `00 : 00 : 00`;
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
})

document.getElementById("pause").addEventListener("click", () => {
    const pauseButton = document.getElementById("pause");
    const icon = pauseButton.querySelector("i");

    if (runningState) {
        clearInterval(timer);
        runningState = false;
        pauseButton.innerHTML = 'Play';
    } else {
        timer = setInterval(updateTime, 1000);
        runningState = true;
        pauseButton.innerHTML = 'Pause';
    }
})

function updateTime() {
    if (totalSeconds > 0) {
        flag = true;
        totalSeconds--;
        let hrs = Math.floor(totalSeconds / 3600);
        let min = Math.floor((totalSeconds % 3600) / 60);
        let sec = totalSeconds % 60;
        hrs = hrs.toString().padStart(2, '0');
        min = min.toString().padStart(2, '0');
        sec = sec.toString().padStart(2, '0');
        document.getElementById("timer").innerText = `${hrs}:${min}:${sec}`;
    } else {
        clearInterval(timer);
    }
}

function showModal() {
    const myModal = new bootstrap.Modal(document.getElementById('timeUpModal'));
    myModal.show();

    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 150,
            origin: { y: 0.4 },
            colors: ["#00FFFC", "#FC00FF", "#fffc00"],
            shapes: ["circle", "square"],
        });
    }, 300);
}