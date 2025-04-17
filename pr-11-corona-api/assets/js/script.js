let result = document.getElementById("result");
let con = document.getElementById("confirm");
let recover = document.getElementById("recover");
let death = document.getElementById("death");
let loc = document.getElementById("location");

document.getElementById("check").addEventListener("click", () => {
    let ctName = document.getElementById("ctName").value;

    const URL = `https://api.rootnet.in/covid19-in/stats/latest`;

    document.getElementById("ctName").value = "";

    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            let states = res.data.regional;
            let found = false;
            console.log(states);

            for (let i = 0; i < states.length; i++) {
                if (states[i].loc.toLowerCase() === ctName.toLowerCase()) {
                    loc.innerHTML = "Location : " + states[i].loc;
                    con.innerHTML = "Total Confirmed : " + states[i].totalConfirmed;
                    death.innerHTML = "Deaths : " + states[i].deaths;
                    recover.innerHTML = "Recovered : " + states[i].discharged;
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                loc.innerHTML = `Location : State not Found !`;
                con.classList.add("d-none");
                death.classList.add("d-none");
                recover.classList.add("d-none");
            }else {
                con.classList.remove("d-none");
                death.classList.remove("d-none");
                recover.classList.remove("d-none");
            }
        })
})