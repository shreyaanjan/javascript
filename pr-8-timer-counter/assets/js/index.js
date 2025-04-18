let totalSeconds = 0;
let timer;
let time = document.getElementById("timer");
let runningState = false;
let confettiRunning;
let newFlag = false;
let paused = false;
let newQuote = document.getElementById("newQuote")
let newAuthor = document.getElementById("newAuthor")

let quotes = [
    { quote: "All that glitters is not gold.", author: "- William Shakespeare" },
    { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "- Albert Einstein" },
    { quote: "No one can make you feel inferior without your consent.", author: "- Eleanor Roosevelt" },
    { quote: "Whatever you are, be a good one.", author: "- Abraham Lincoln" },
    { quote: "Be yourself; everyone else is already taken.", author: "- Oscar Wilde" },
    { quote: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "- Nelson Mandela" },
    { quote: "You don’t have to be great to start, but you have to start to be great.", author: "- Zig Ziglar" },
    { quote: "It is during our darkest moments that we must focus to see the light.", author: "- Aristotle" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "- C.S. Lewis" },
    { quote: "To live is the rarest thing in the world. Most people just exist.", author: "- Oscar Wilde" }
]

document.getElementById("start").addEventListener("click", () => {
    if (runningState) return;
    startTimer();
    newFlag = true;
})

function startTimer() {
    if (!paused) {
        let h = parseInt(document.getElementById("hours").value) || 0;
        let m = parseInt(document.getElementById("minutes").value) || 0;
        let s = parseInt(document.getElementById("seconds").value) || 0;
        totalSeconds = (h * 3600) + (m * 60) + (s);

        if (totalSeconds <= 0) {
            Swal.fire({
                text: "Enter Time Parameters !",
                position: 'center',
                showConfirmButton: true,
                icon: "error",
            });
            return;
        }
    }

    timer = setInterval(() => {
        if (totalSeconds == -1) {
            clearInterval(timer);
            showModal();
            runningState = false;
        } else {
            updateTime();
            totalSeconds--;
        }
    }, 1000);
    runningState = true;
    paused = false;
}

document.getElementById("reset").addEventListener("click", () => {
    const pauseButton = document.getElementById("pause");
    clearInterval(timer);
    runningState = false;
    paused = false;
    document.getElementById("timer").innerHTML = `00:00:00`;
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    pauseButton.innerHTML = "Pause";
    newFlag = false;
})

document.getElementById("pause").addEventListener("click", () => {
    const pauseButton = document.getElementById("pause");

    if (totalSeconds <= 0) {
        Swal.fire({
            text: "Enter Time Parameters !",
            position: 'center',
            showConfirmButton: true,
            icon: "error",
        });
        return;
    }

    if (newFlag) {
        if (runningState) {
            clearInterval(timer);
            runningState = false;
            paused = true;
            pauseButton.innerHTML = 'Play';
        } else {
            startTimer();
            pauseButton.innerHTML = 'Pause';
        }
    }
})

function updateTime() {
    let hrs = Math.floor(totalSeconds / 3600);
    let min = Math.floor((totalSeconds % 3600) / 60);
    let sec = totalSeconds % 60;

    document.getElementById("timer").innerText =
        `${hrs.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function showModal() {
    const myModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    myModal.show();
    let val = parseInt(Math.random() * 10)
    newQuote.innerHTML = quotes[val].quote;
    newAuthor.innerHTML = quotes[val].author;

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
    newFlag = false;
    const pauseButton = document.getElementById("pause");
    pauseButton.innerHTML = "Pause";
    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
}

document.querySelector(".close").addEventListener("click", () => {
    clearInterval(confettiRunning)
});