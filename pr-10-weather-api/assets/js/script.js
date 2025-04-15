let check = document.getElementById("check");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let weatherDesc = document.getElementById("weatherDesc");
let loc = document.getElementById("location");
let feelsLike = document.getElementById("feelsLike");
let humidity = document.getElementById("humidity");

check.addEventListener("click", ()=>{
    let cityName = document.getElementById("ctName").value;
    let cityKey = `8b67dc217ab453a940a3b0e62ad8f4ba`;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${cityKey}`;
    
    fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        temp.innerHTML = `${res.main.temp}&#8451;`;
        icon.src =  `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
        weatherDesc.innerHTML = res.weather[0].description;
        loc.innerHTML = res.name;
        feelsLike.innerHTML = `${res.main.feels_like}&#8451;`;
        humidity.innerHTML = `${res.main.humidity}%`;
        console.log(res);
    })
})