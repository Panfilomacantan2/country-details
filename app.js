const data = countries;

const countryContainer = document.querySelector(".country_container");
let searchInput = document.querySelector("#search_input");
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

countryContainer.innerHTML = output;

searchInput.addEventListener("keyup", (e) => {
  let output = "";
  const searchValue = e.target.value.trim().toLowerCase();
  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchValue)
  );

  //   const { name, capital, population, flag } = filterCountries;
  filterCountries.forEach((country) => {
    const { name, capital, population, flag } = country;
    output += `<div class="box">
                 <h2>${name}</h2>
                 <p>Capital: ${capital}</p>
                 <p>Population: ${population}</p>
                 <img src="${flag}" height="200" width="200" alt="${name}">
             </div>`;
  });

  countryContainer.innerHTML = output;

  console.log(filterCountries);
});
