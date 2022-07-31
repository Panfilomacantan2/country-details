const data = countries;

const buttonItems = document.querySelectorAll(".category_item");
let searchValue = undefined;
let filteredCountries;

const countryContainer = document.querySelector(".country_container");
let searchInput = document.querySelector("#search_input");
let output = "";

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const { name, capital, languages, population, flag, region, area } = country;
  output += `<div class="box">
               <img src="${flag}" height="200" width="200" alt="${name}" class="country_image">
                 <h2 class="country_name">${name}</h2>
                 <p class="country_capital">Capital: ${capital}</p>
                 <p class="country_population">Population: ${population}</p>      
                 <p class="country_languages">Languages: ${languages}</p>  
                 <p class="country_region">Region: ${region}</p>    
                 <p class="country_area">Area: ${area}</p>      
             </div>`;
}

countryContainer.innerHTML = output;

searchInput.addEventListener("keyup", (e) => {
  let output = "";
  searchValue = e.target.value.trim().toLowerCase();
  const filterCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchValue)
  );

  //   const { name, capital, population, flag } = filterCountries;
  filterCountries.forEach((country) => {
    const { name, capital, languages, population, flag, region, area } =
      country;
    output += `<div class="box">
                <img src="${flag}" height="200" width="200" alt="${name}" class="country_image">
                  <h2 class="country_name">${name}</h2>
                  <p class="country_capital">Capital: ${capital}</p>
                  <p class="country_population">Population: ${population}</p>      
                  <p class="country_languages">Languages: ${languages}</p>      
                  <p class="country_region">Region: ${region}</p>      
                  <p class="country_area">Area: ${area}</p>      
              </div>`;
  });

  countryContainer.innerHTML = output;

  console.log(filterCountries);
});
