let check = document.getElementById("check");
let ans = document.getElementById("ans");
let icon = document.getElementById("icon");

check.addEventListener("click", ()=>{
    let cityName = document.getElementById("ctName").value;
    let cityKey = `8b67dc217ab453a940a3b0e62ad8f4ba`;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${cityKey}`;
    
    fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        ans.innerHTML = res.main.temp;
        icon.src =  `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
    })
})