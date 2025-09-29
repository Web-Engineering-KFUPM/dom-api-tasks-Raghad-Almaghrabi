/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:

*/

document.getElementById("t1-msg").textContent = "Hello, World!";
/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:

*/
// Feature 2: Interaction Corner
const button = document.getElementById("t2-btn");
const status = document.getElementById("t2-status");

button.addEventListener("click", function () {
    status.textContent = "You clicked the button!";
});


/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/

// Feature 3: Inspiring Quote Board
const quoteBtn = document.getElementById("t3-loadQuote");
const quoteEl = document.getElementById("t3-quote");
const authorEl = document.getElementById("t3-author");

quoteBtn.addEventListener("click", function () {
    fetch("https://dummyjson.com/quotes/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            quoteEl.textContent = data.quote;
            authorEl.textContent = data.author;
        })
        .catch(function (error) {
            console.error("Error fetching quote:", error);
            quoteEl.textContent = "Could not load quote.";
            authorEl.textContent = "";
        });
});


/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

// Feature 4: Dammam Weather Now
const weatherBtn = document.getElementById("t4-loadWx");
const tempEl = document.getElementById("t4-temp");
const humEl = document.getElementById("t4-hum");
const windEl = document.getElementById("t4-wind");

weatherBtn.addEventListener("click", function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=9c29da573838fd8cdd561179419142d7")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            tempEl.textContent = data.main.temp + " °C";
            humEl.textContent = data.main.humidity + " %";
            windEl.textContent = data.wind.speed + " m/s";
        })
        .catch(function (error) {
            console.error("Error fetching weather:", error);
            tempEl.textContent = "-";
            humEl.textContent = "-";
            windEl.textContent = "-";
        });
});
