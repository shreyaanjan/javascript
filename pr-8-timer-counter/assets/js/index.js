let totalSeconds = 0;
let timer;
let time = document.getElementById("timer");
let runningState = false;
let confettiRunning;

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
        return;
    }

    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";

    timer = setInterval(updateTime, 1000);
    runningState = true;
}

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    runningState = false;
    document.getElementById("timer").innerHTML = `00:00:00`;
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
})

document.getElementById("pause").addEventListener("click", () => {
    const pauseButton = document.getElementById("pause");

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
    if (totalSeconds >= 0) {
        flag = true;
        let hrs = Math.floor(totalSeconds / 3600);
        let min = Math.floor((totalSeconds % 3600) / 60);
        let sec = totalSeconds % 60;
        hrs = hrs.toString().padStart(2, '0');
        min = min.toString().padStart(2, '0');
        sec = sec.toString().padStart(2, '0');
        totalSeconds--;
        document.getElementById("timer").innerText = `${hrs}:${min}:${sec}`;
    } else {
        clearInterval(timer);
        showModal()
        runningState = false;
        return
    }
}

function showModal() {
    const myModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    myModal.show();
    let audio = document.getElementById("sound");

    confettiRunning = setInterval(() => {
        const end = Date.now() + 1 * 1000;
        const colors = ["#bb0000", "#ffffff"];

        function startConfetti() {
            (function frame() {
                if (!confettiRunning) return;
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors,
                });

                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors,
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }
        startConfetti();
    }, 500);
    audio.currentTime = 0;
    audio.play();
}

document.querySelector(".close").addEventListener("click", () => {
    clearInterval(confettiRunning)
});