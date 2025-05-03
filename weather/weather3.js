const apiKey = "00a6d06711729c075b1cb6f14547914a"; 

async function getWeather() {
  const city = document.getElementById("city-input").value;
  const weatherCard = document.getElementById("weather-card");

  if (!city) {
    weatherCard.innerHTML = "<p>Please enter a place name.</p>";
    return;
  }

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=${apiKey}`);
    const data = await res.json();

    if (data.cod === 200) {
      weatherCard.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
        <p>🌡 Temp: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬 Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      weatherCard.innerHTML = `<p>No weather data found for that place.</p>`;
    }
  } catch (error) {
    weatherCard.innerHTML = `<p>Something went wrong. Try again.</p>`;
  }
}
