// api = 'http://coronavirus-tracker-api.herokuapp.com/v2/locations';
// api = 'https://corona.lmao.ninja/v2/countries';

window.onload = () => getData()

function getData() {
    fetch('https://corona.lmao.ninja/v2/countries')
        .then(responce => responce.json())
        .then(data => {
            document.getElementById("country").innerHTML = data[94].country;
            document.getElementById("flag").src = data[94].countryInfo.flag;
            document.getElementById("active").innerHTML = data[94].active;
            document.getElementById("total").innerHTML = data[94].cases;
            document.getElementById("critical").innerHTML = data[94].critical;
            document.getElementById("death").innerHTML = data[94].deaths;
            document.getElementById("recover").innerHTML = data[94].recovered;
            document.getElementById("test").innerHTML = data[94].tests;
            document.getElementById("todayDeaths").innerHTML = data[94].todayDeaths;
            document.getElementById("todayRecovered").innerHTML = data[94].todayRecovered;
            document.getElementById("todayCases").innerHTML = data[94].todayCases;
            document.getElementById("tests").innerHTML = data[94].tests;
            document.getElementById("population").innerHTML = data[94].population;

            let btn = document.getElementById("btn");
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const country = document.getElementById("search").value;
                if (country != "") {
                    for (let i = 0; i < data.length; i++) {
                        const element = data[i].country;
                        let equal = country.toUpperCase() === element.toUpperCase()
                        if (equal) {
                            document.getElementById("country").innerHTML = data[i].country;
                            document.getElementById("flag").src = data[i].countryInfo.flag;
                            document.getElementById("active").innerHTML = data[i].active;
                            document.getElementById("total").innerHTML = data[i].cases;
                            document.getElementById("critical").innerHTML = data[i].critical;
                            document.getElementById("death").innerHTML = data[i].deaths;
                            document.getElementById("recover").innerHTML = data[i].recovered;
                            document.getElementById("test").innerHTML = data[i].tests;
                            document.getElementById("todayDeaths").innerHTML = data[i].todayDeaths;
                            document.getElementById("todayRecovered").innerHTML = data[i].todayRecovered;
                            document.getElementById("todayCases").innerHTML = data[i].todayCases;
                            document.getElementById("undefined").innerHTML = data[i].undefined;
                            document.getElementById("population").innerHTML = data[i].population;
                        }
                        document.getElementById('search').value = '';
                    }
                }
                else {
                    alert("Please Input Country Name")
                }
            })
        })
}
