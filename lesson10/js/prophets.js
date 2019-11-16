const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)

  .then(function (response)
  {

    return response.json();
    
  })
  
  .then(function (jsonObject)
  {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ )
    {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthDateP = document.createElement('p');
        let birthPlaceP = document.createElement('p');
        let portraitImg = document.createElement('img')


        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birthDateP.textContent = "Date of Birth: " + prophets[i].birthdate;
        birthPlaceP.textContent = "Place of Birth: " + prophets[i].birthplace;
        portraitImg.src = prophets[i].imageurl;
        portraitImg.alt = prophets[i].name + ' ' + prophets[i].lastname + " - " + (i + 1);



        card.appendChild(h2);
        card.appendChild(birthDateP);
        card.appendChild(birthPlaceP);
        card.appendChild(portraitImg);


        document.querySelector('div.cards').appendChild(card);

    }


  });

  

