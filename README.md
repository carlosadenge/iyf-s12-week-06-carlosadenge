# Week 6 – Asynchronous JavaScript: Weather Dashboard

**Student:** Carlos Adenge  
**Repository:** iyf-s12-week-06-carlosadenge

## Live Demo
[View Live Site](https://carlosadenge.github.io/iyf-s12-week-06-carlosadenge)

## About This Project
This is my Week 6 project for the IYF Weekend Academy Season 12.  
I learned asynchronous JavaScript (callbacks, promises, async/await) and built a live Weather Dashboard using the OpenWeatherMap API.

## Features
- Search weather by city name
- Shows temperature, description, humidity, wind speed and “feels like”
- Loading state while fetching data
- Clear error messages (city not found, API problems)
- Default city (Nairobi) loads on page open
- Responsive clean UI

## How to Run Locally
1. Clone this repository
2. Copy `config.example.js` to `config.js`
3. Open `config.js` and paste your OpenWeatherMap API key:
   ```js
   const API_KEY = "your_real_key_here";
