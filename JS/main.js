const apiKey = "8fd7cb8b22c86f7c0771ec12c5a089c9";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");


let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;


async function checkWeather(city) {
    if (!city) return; 

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#8451";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchButton.addEventListener("click", () => {
    const city = searchInput.value;


    const hasNumbers = /\d/;
    if (hasNumbers.test(city)) {
        alert("Вы ввели некорректно. Напишите название города правильно"); 
        return; 
    }


    checkWeather(city);
    localStorage.setItem("lastCity", city); 
    searchInput.value = "";
});

window.addEventListener("load", () => {
    count++;
    localStorage.setItem("count", count); 

    console.log(`Страница была перезагружена ${count} раз.`); 


    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
        checkWeather(lastCity);
    }
    
});

