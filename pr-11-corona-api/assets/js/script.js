let ans = document.getElementById("ans");

document.getElementById("check").addEventListener("click", () => {
    let ctName = document.getElementById("ctName").value;

    const URL = `https://api.rootnet.in/covid19-in/stats/latest`;

    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            let states = res.data.regional;
            console.log(states);

            for (let i = 0; i < states.length; i++) {
                if (states[i].loc.toLowerCase() === ctName.toLowerCase()) {
                    console.log(states[i]);

                    ans.innerHTML +=
                        "Total Confirmed : " + states[i].totalConfirmed + "<br>" +
                        "Deaths : " + states[i].deaths + "<br>"
                    return;
                }
            }
            ans.innerHTML = `State not Found. Please Check the Spelling.`
        })
})