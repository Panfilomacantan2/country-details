const data = countries;

const firstCountry = countries[6];

const { area, name, capital, population, flag, languages } = firstCountry;

console.log({ area, name, capital, population, flag, languages });

// document.body.innerHTML += `<img src="${flag}" alt="${name}">`;

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const { name, capital, population, flag } = country;
  document.body.innerHTML += `<div>
        <h2>${name}</h2>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <img src="${flag}" height="200" width="200" alt="${name}">
    </div>`;
}
