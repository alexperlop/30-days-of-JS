import { countriesFile } from './countries.js'

const searchByFirstLetter = (letter) => {
    const countries = countriesFile.filter(country => country.name.toLocaleLowerCase().startsWith(letter))
    return countries
}

const searchAnyCountry = (word) => {
    const countries = countriesFile.filter(country => country.name.toLocaleLowerCase().includes(word))
    return countries
}

const clearList = () => {
    if (document.querySelector('.result-list').hasChildNodes()) {
        document.querySelector('.result-list').innerHTML = ''
    }
}

const orderCountriesByName = (countries, boolean) => {
    if (boolean) {
        const orderCountries = countries.reverse()
        clearList()
        for (let i = 0; i < orderCountries.length; i++) {
            const li = document.createElement('li')
            li.textContent = orderCountries[i]
            document.querySelector('.result-list').appendChild(li)
        }
        document.querySelector('.order').innerHTML = '<i class="bi bi-sort-alpha-down"></i>'
    } else {
        const orderCountries = countries.sort()
        clearList()
        for (let i = 0; i < orderCountries.length; i++) {
            const li = document.createElement('li')
            li.textContent = orderCountries[i]
            document.querySelector('.result-list').appendChild(li)
        }
        document.querySelector('.order').innerHTML = '<i class="bi bi-sort-alpha-up-alt"></i>'
    }
}


document.querySelector('.total-countries').textContent = `Total countries: ${countriesFile.length}`

document.querySelector('.starting-word').addEventListener('click', () => {
    clearList()
    const letter = document.querySelector('.search-input').value.slice(0, 1)
    if (letter) {
        const countries = searchByFirstLetter(letter)
        for (let i = 0; i < countries.length; i++) {
            const li = document.createElement('li')
            li.textContent = countries[i].name
            document.querySelector('.result-list').appendChild(li)
        }
        document.querySelector('.text-content').style.cssText = 'display: flex'
        document.querySelector('.countries').textContent = `Countries start with ${letter.toUpperCase()}: `
        document.querySelector('.countries-length').textContent = countries.length
    }
})

document.querySelector('.search').addEventListener('click', () => {
    clearList()
    const country = document.querySelector('.search-input').value
    if (country) {
        const countries = searchAnyCountry(country)
        for (let i = 0; i < countries.length; i++) {
            const li = document.createElement('li')
            li.textContent = countries[i].name
            document.querySelector('.result-list').appendChild(li)
        }
        document.querySelector('.text-content').style.cssText = 'display: flex'
        document.querySelector('.countries').textContent = ` Countries that contains ${country}: `
        document.querySelector('.countries-length').textContent = countries.length
    }
})

let boolean = false
document.querySelector('.order').addEventListener('click', () => {
    const countries = [...document.querySelector('.result-list').children].map(country => country.textContent)
    boolean = !boolean
    if (countries.length > 0) orderCountriesByName(countries, boolean)
})
