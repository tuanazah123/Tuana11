const apiKey = "ba9154d440a14442e8f73405d317962e";

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('userLocation').value.trim
    if (city === '') return alert("Shkruaj një qytet");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},XK&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            const result = document.getElementById('weatherResult');
            result.style.display = 'block';
            result.innerHTML = `
              <h2>${data.name}</h2>
              <p>${data.weather[0].description}</p>
              <p>🌡 Temperatura: ${data.main.temp}°C</p>
              <p>💧 Lagështia: ${data.main.humidity}%</p>
              <p>🌬 Era: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(() => alert("Nuk u gjet qyteti!"));
});

