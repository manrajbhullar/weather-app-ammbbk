document.getElementById("getCity").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let city = document.getElementById("city").value;
    let apiKey = "234ee86a03f5f82634a2b815436b72db";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(jsonData => {
        let data = jsonData;
        
        let location = data.name + ", " + data.sys.country
        document.getElementById("location").innerText = location;

        let iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("icon").src = iconUrl;

        let temp = data.main.temp.toFixed(1) + " °C";
        document.getElementById("temp").innerText = temp;
        
        let condition = data.weather[0].main;
        document.getElementById("condition").innerText = condition;

        let feelsLike = "Feels Like: " + data.main.feels_like.toFixed(1) + " °C";
        document.getElementById("feelsLike").innerText = feelsLike;

        let tempMin = "Min: " + data.main.temp_min.toFixed(1) + " °C";
        document.getElementById("tempMin").innerText = tempMin;

        let tempMax = "Max: " + data.main.temp_max.toFixed(1) + " °C";
        document.getElementById("tempMax").innerText = tempMax;

        let humidity = "Humidity: " + data.main.humidity + " %";
        document.getElementById("humidity").innerText = humidity;

        let wind = "Wind Speed: " + data.wind.speed.toFixed(1) + " KPH";
        document.getElementById("wind").innerText = wind;
        
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("location").innerText = "City not found";
        document.getElementById("icon").src = "";
        document.getElementById("condition").innerText = ""; 
        document.getElementById("temp").innerText = "";
        document.getElementById("feelsLike").innerText = "";
        document.getElementById("tempMin").innerText = ""; 
        document.getElementById("tempMax").innerText = ""; 
        document.getElementById("humidity").innerText = ""; 
        document.getElementById("wind").innerText = ""; 
    });

});