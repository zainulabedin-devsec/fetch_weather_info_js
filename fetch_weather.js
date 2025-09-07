async function showWeatherDetails(event) {
      event.preventDefault();

      const city = document.getElementById('city').value;
      const apiKey = "439d4b804bc8187953eb36d2a8c26a02"; // free sample API key
      const apiUrl = `https://openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`City not found (Status: ${response.status})`);
        }

        const data = await response.json();

        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      } catch (error) {
        document.getElementById('weatherInfo').innerHTML =
          `<p style="color:red;">❌ Error: ${error.message}</p>`;
      }
    }

    document.getElementById('weatherForm')
      .addEventListener('submit', showWeatherDetails);
  