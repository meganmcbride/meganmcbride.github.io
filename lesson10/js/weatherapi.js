const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=c1ed581fad3ad1154a8a70dafc61d847&units=imperial';

fetch(requestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const main = jsonObject['main']

    document.getElementById("current-temp").innerHTML = main['temp']

    const weather = jsonObject['weather']

    const imagesrc = 'https://openweathermap.org/img/w/' + weather[0].icon + '.png';

    const desc = weather[0].description;

    

    document.getElementById("imagesrc").innerHTML = imagesrc;

    document.getElementById("icon").alt = desc;

    document.getElementById("icon").src = imagesrc;




  });
