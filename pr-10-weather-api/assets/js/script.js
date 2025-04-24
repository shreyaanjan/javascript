let check = document.getElementById("check");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let weatherDesc = document.getElementById("weatherDesc");
let loc = document.getElementById("location");
let feelsLike = document.getElementById("feelsLike");
let humidity = document.getElementById("humidity");
let backBtn = document.getElementById("backBtn");
let searchCard = document.querySelector(".searchCard");
let weatherCard = document.querySelector(".weatherCard");
let cityName = document.getElementById("ctName");

check.addEventListener("click", () => {
    let cityName = document.getElementById("ctName").value.trim();
    let cityKey = `8b67dc217ab453a940a3b0e62ad8f4ba`;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${cityKey}`;

    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if (res.cod !== 200) {
                Swal.fire({
                    icon: "warning",
                    text: "Please Enter Valid City Name.",
                    position: 'bottom-right',
                    toast: 'true',
                    showConfirmButton: false,
                    timer: 1500,
                });
                document.getElementById("ctName").value = "";
                return;
            }
            temp.innerHTML = `${res.main.temp}&#8451;`;
            icon.src = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
            weatherDesc.innerHTML = res.weather[0].description;
            loc.innerHTML = `<i class="bi bi-geo-alt me-1"></i>${res.name}`;
            feelsLike.innerHTML = `${res.main.feels_like}&#8451;`;
            humidity.innerHTML = `${res.main.humidity}%`;
            console.log(res);

            searchCard.classList.add("d-none");
            weatherCard.classList.remove("d-none");
        })
})

backBtn.addEventListener("click", () => {
    searchCard.classList.remove("d-none");
    weatherCard.classList.add("d-none");
    cityName.value = "";
})