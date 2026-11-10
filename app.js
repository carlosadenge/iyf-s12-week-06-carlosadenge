// ============================================
// WEATHER DASHBOARD - Carlos Adenge
// Week 6: Asynchronous JavaScript
// ============================================

const API_KEY = "YOUR_API_KEY";   // ← Replace with your real key
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const weatherCard = document.getElementById("weather-card");

const cityName = document.getElementById("city-name");
const dateEl = document.getElementById("date");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feels-like");

// ---------- FETCH WEATHER ----------
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("City not found. Please check the spelling.");
        }
        throw new Error("Failed to fetch weather data.");
    }

    return response.json();
}

// ---------- DISPLAY WEATHER ----------
function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    dateEl.textContent = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;

    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} m/s`;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;

    weatherCard.classList.remove("hidden");
}

// ---------- UI HELPERS ----------
function showLoading() {
    loading.classList.remove("hidden");
    errorDiv.classList.add("hidden");
    weatherCard.classList.add("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove("hidden");
    weatherCard.classList.add("hidden");
}

// ---------- FORM SUBMIT ----------
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const city = cityInput.value.trim();
    if (city === "") return;

    showLoading();

    try {
        const data = await getWeather(city);
        displayWeather(data);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
});

// Optional: load a default city on page load
async function loadDefault() {
    showLoading();
    try {
        const data = await getWeather("Nairobi");
        displayWeather(data);
    } catch (error) {
        showError("Could not load default city.");
    } finally {
        hideLoading();
    }
}

loadDefault();
