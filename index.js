import { countriesFile } from './countries.js'

const openTab = (evt, tabName) => {
    const btnText = tabName.toLowerCase()
    // Obtener todos los contenidos de pestaña y ocultarlos
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Obtener todos los botones de pestaña y quitarles la clase "active"
    const tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostrar el contenido de la pestaña seleccionada
    document.getElementById(btnText).style.display = "flex";

    // Añadir la clase "active" al botón de la pestaña seleccionada
    evt.classList.add("active");
}

const tab = document.querySelector('.tab')

tab.addEventListener('click', (e) => {
    openTab(e.target, e.target.innerText)
})


document.querySelector('.countries-length').innerText = `Currently we have ${countriesFile.length} countries`

const tenMostSpokenLanguage = (countries) => {
    const newArray = countries.reduce((acc, cur) => {
        cur.languages.map(language => acc[language] = acc[language] ? acc[language] + 1 : 1)
        return acc
    }, {})

    const result = Object.keys(newArray).map(key => ({
        language: key,
        count: newArray[key]
    }))
    return result.sort((a, b) => {
        return b.count - a.count
    }).slice(0, 10)
}

const tenMostPopulatedCountries = (countries) => {
    return countries.map((item) => ({
        'country': item.name,
        'population': item.population
    })).sort((a, b) => b.population - a.population).slice(0, 10)
}

const languages = document.querySelector('#languages ul')
const population = document.querySelector('#population ul')
const languagesLength = tenMostSpokenLanguage(countriesFile).length
const populationLength = tenMostPopulatedCountries(countriesFile).length
console.log("🚀 ~ file: index.js:70 ~ languages:", languages)
console.log("🚀 ~ file: index.js:58 ~ population:", population)

const arrayCounts = []
tenMostSpokenLanguage(countriesFile).forEach((country) => {
    arrayCounts.push(country.count)
})

for (let i = 0; i < languagesLength; i++) {
    const country = tenMostSpokenLanguage(countriesFile)
    const li = document.createElement('li')
    languages.appendChild(li)
    li.innerHTML = `<span>${country[i].language}</span><progress value='${country[i].count}' max='${Math.max(...arrayCounts)}'></progress ><span>${country[i].count}</span>`
}

const arrayPopulation = []
tenMostPopulatedCountries(countriesFile).forEach((country) => {
    arrayPopulation.push(country.population)
})
console.log("🚀 ~ file: index.js:74 ~ arrayPopulation:", arrayPopulation)

for (let i = 0; i < populationLength; i++) {
    const country = tenMostPopulatedCountries(countriesFile)
    console.log("🚀 ~ file: index.js:78 ~ country:", country)
    const li = document.createElement('li')
    population.appendChild(li)
    li.innerHTML = `<span>${country[i].country}</span><progress value='${country[i].population}' max='${Math.max(...arrayPopulation)}'></progress ><span>${new Intl.NumberFormat('en-US').format(country[i].population)}</span>`
}