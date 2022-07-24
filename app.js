const data = countries;

const countryContainer = document.querySelector(".country_container");
let output = "";

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const { name, capital, population, flag } = country;
  output += `<div class="box">
                 <h2>${name}</h2>
                 <p>Capital: ${capital}</p>
                 <p>Population: ${population}</p>
                 <img src="${flag}" height="200" width="200" alt="${name}">
             </div>`;
}

countryContainer.innerHTML = output
