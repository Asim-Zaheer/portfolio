const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6d62dd005msh1570d8da8da340fp1e9d08jsn1608ed174025",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      console.log(response);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});

getweather("karachi");

// FOR DUBAI

const options1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6d62dd005msh1570d8da8da340fp1e9d08jsn1608ed174025",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai",
  options1
)
  .then((response) => response.json())
  .then((response) => {
    cloud.innerHTML = response.cloud_pct;
    temperature.innerHTML = response.temp;
    feels.innerHTML = response.feels_like;
    humi.innerHTML = response.humidity;
    min.innerHTML = response.min_temp;
    max.innerHTML = response.max_temp;
    windS.innerHTML = response.wind_speed;
    windD.innerHTML = response.wind_degrees;
    sunR.innerHTML = response.sunrise;
    sunS.innerHTML = response.sunset;

    console.log(response);
  })
  .catch((err) => console.error(err));

// FOR TURKEY
const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6d62dd005msh1570d8da8da340fp1e9d08jsn1608ed174025",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=turkey",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    cloudtur.innerHTML = response.cloud_pct;
    temptur.innerHTML = response.temp;
    feelstur.innerHTML = response.feels_like;
    humi_tur.innerHTML = response.humidity;
    mintur.innerHTML = response.min_temp;
    maxtur.innerHTML = response.max_temp;
    windStur.innerHTML = response.wind_speed;
    windDtur.innerHTML = response.wind_degrees;
    sunRtur.innerHTML = response.sunrise;
    sunStur.innerHTML = response.sunset;

    console.log(response);
  })
  .catch((err) => console.error(err));

//   FOR KOREA 
const options3 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a6d62dd005msh1570d8da8da340fp1e9d08jsn1608ed174025",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=korea",
    options3
  )
    .then((response) => response.json())
    .then((response) => {
        cloudkorea.innerHTML = response.cloud_pct;
        tempkorea.innerHTML = response.temp;
        feelskorea.innerHTML = response.feels_like;
        humi_korea.innerHTML = response.humidity;
        minkorea.innerHTML = response.min_temp;
        maxkorea.innerHTML = response.max_temp;
        windSkorea.innerHTML = response.wind_speed;
        windDkorea.innerHTML = response.wind_degrees;
        sunRkorea.innerHTML = response.sunrise;
        sunSkorea.innerHTML = response.sunset;
  
      console.log(response);
    })
    .catch((err) => console.error(err));
  
// FOR SAUDI ARBIA 
const options4 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a6d62dd005msh1570d8da8da340fp1e9d08jsn1608ed174025",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=maldives",
    options4
  )
    .then((response) => response.json())
    .then((response) => {
        cloudsaudi.innerHTML = response.cloud_pct;
        tempsaudi.innerHTML = response.temp;
        feelssaudi.innerHTML = response.feels_like;
        humi_saudi.innerHTML = response.humidity;
        minsaudi.innerHTML = response.min_temp;
        maxsaudi.innerHTML = response.max_temp;
        windSsaudi.innerHTML = response.wind_speed;
        windDsaudi.innerHTML = response.wind_degrees;
        sunRsaudi.innerHTML = response.sunrise;
        sunSsaudi.innerHTML = response.sunset;
      console.log(response);
    })
    .catch((err) => console.error(err));