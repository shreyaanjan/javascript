window.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-code = "${e.keyCode}"]`)
    if(!audio) return;

    let code = document.querySelector(`.col[data-code = "${e.keyCode}"]`)

    audio.currentTime = 0;
    audio.play();
})