import { countriesFile } from './countries.js'

let countriesData = countriesFile
let dataLength = countriesData.length
const firstParagraph = document.querySelector('#current-data');
firstParagraph.innerHTML = `Currently, we have ${dataLength} countries in our database.`;
const pagination = document.querySelector('#total-pages')
let totalPages = Math.ceil(dataLength / 12)
let initialPage = 0
let finalPage = 12
const nextButton = document.querySelector('#next')
const previousButton = document.querySelector('#previous')
const pages = document.querySelector('#pages')
let initialPaginationOptions = [1, 2, 3]
const searchInput = document.querySelector('#search')
const searchButton = document.querySelector('#search-button')
const container = document.querySelector('.cards-container')
const nameBtn = document.querySelector('#filter-name')
const capitalBtn = document.querySelector('#filter-capital')
const populationBtn = document.querySelector('#filter-population')
const statisticsBtn = document.querySelector('#filter-statistics')
const chartContainer = document.querySelector('#charts')
let nameController = false
let capitalController = false
let populationController = false
const nameArrowUp = nameBtn.querySelector('.bi-arrow-up ')
const nameArrowDown = nameBtn.querySelector('.bi-arrow-down')
const capitalArrowUp = capitalBtn.querySelector('.bi-arrow-up ')
const capitalArrowDown = capitalBtn.querySelector('.bi-arrow-down')
const populationArrowUp = populationBtn.querySelector('.bi-arrow-up ')
const populationArrowDown = populationBtn.querySelector('.bi-arrow-down')
const chartPopulationBtn = document.querySelector('#charts-population')
const chartLanguagesBtn = document.querySelector('#charts-language')
const chartText = document.querySelector('.chart-text')

let chartFilter = 'population'

const getImages = async ({ flag }) => {
    const response = await fetch(flag)
    const blob = await response.blob()
    return URL.createObjectURL(blob)
}

const paintHTMLCountries = ({ countries }) => {
    countries.map((country) => {
        container.innerHTML += `<div class="card">
            <img src="${getImages({ flag: country.flag }) && './src/images/icon-image-not-found-free-vector.jpeg'}" alt="${country.name}" class="country-img">
            <div class="card-body">
                <h2>${country.name}</h2>
                <p><strong>Population:</strong>${country.population.toLocaleString()}</p>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p>
                    <strong>
                    Languages:
                        <ul>
                            ${country.languages?.map(language => `<li>${language}</li>`).join('')}
                        </ul>
                    </strong>
                </p>
            </div>
        </div>`
    })
    pagination.innerHTML = `<p><strong>... ${totalPages}</strong></p>`
}
paintHTMLCountries({ countries: countriesFile.slice(initialPage, finalPage) })

const paintPaginationNumbers = ({ currentPage = 1, numberOptions = initialPaginationOptions } = {}) => {
    numberOptions.map((number) => {
        pages.innerHTML += `<p><strong class=${+number === +currentPage ? 'current-page' : ''}>${number}</strong></p>`
    })
}
paintPaginationNumbers({ numberOption: initialPaginationOptions })

const paintPageSelected = ({ e, countries = countriesData }) => {
    const pageNumber = +e?.target?.innerText
    if (!pageNumber) return
    if (+pageNumber === 1 && +pageNumber === totalPages) return
    if (+pageNumber === 1 && +pageNumber !== totalPages) {
        initialPaginationOptions[0] = 1
        initialPaginationOptions[1] = 2
        initialPaginationOptions[2] = 3
    } else if (+pageNumber === totalPages - 1) {
        const prevPage = +pageNumber - 1
        const nextPage = +pageNumber + 1
        initialPaginationOptions[0] = prevPage
        initialPaginationOptions[1] = pageNumber
        initialPaginationOptions[2] = nextPage
        pagination.display = 'none'
    } else if (+pageNumber === totalPages && +pageNumber !== 1) {
        initialPaginationOptions[0] = totalPages - 2
        initialPaginationOptions[1] = totalPages - 1
        initialPaginationOptions[2] = totalPages
        pagination.display = 'none'
    } else if (totalPages > 3) {
        const prevPage = +pageNumber - 1
        const nextPage = +pageNumber + 1
        initialPaginationOptions[0] = prevPage
        initialPaginationOptions[1] = pageNumber
        initialPaginationOptions[2] = nextPage
        pagination.display = 'block'
    }
    pages.innerHTML = ''
    paintPaginationNumbers({ currentPage: pageNumber })
    container.innerHTML = ''
    paintHTMLCountries({ countries: countries.slice((pageNumber - 1) * 12, pageNumber * 12) })

}
pages.addEventListener('click', (e) => paintPageSelected({ e }))


const nextPage = () => {
    const currentPage = +document.querySelector('.current-page').innerText
    if (currentPage === totalPages) return
    const nextPage = currentPage + 1
    paintPageSelected({ e: { target: { innerText: nextPage } }, countries: countriesData })
}
const previousPage = () => {
    const currentPage = +document.querySelector('.current-page').innerText
    if (currentPage === 1) return
    const previousPage = currentPage - 1
    paintPageSelected({ e: { target: { innerText: previousPage } }, countries: countriesData })
}

const searchCountry = ({ e }) => {
    e.preventDefault()
    let paginationOptions = [];
    const { value } = e.target
    countriesData = countriesFile.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
    container.innerHTML = ''
    const dataLength = countriesData.length
    totalPages = Math.ceil(dataLength / 12)
    TODO: // Refresh data when deleting the search input

    pages.innerHTML = ''
    if (totalPages > 3) {
        paginationOptions.push(1, 2, 3)
        displayPagination()
    } else if (totalPages > 2) {
        paginationOptions.push(1, 2, 3)
        hidePagination()
    } else if (totalPages > 1) {
        paginationOptions.push(1, 2)
        hidePagination()
    } else if (totalPages === 1) {
        hidePagination()
    } else if (totalPages === 0) {
        container.innerHTML = 'No hay resultados para tu búsqueda: ' + value
        hidePagination()
    }
    paintHTMLCountries({ countries: countriesData.slice(0, 12) })
    resetTableCountries()
    paintTableCountries({ countries: countriesData.slice(0, 12), filter: chartFilter })
    paintPaginationNumbers({ numberOptions: paginationOptions })

}

const reset = () => {
    container.innerHTML = ''
    pages.innerHTML = ''
    countriesData = countriesFile.sort((a, b) => a.name.localeCompare(b.name))
    dataLength = countriesData.length
    totalPages = Math.ceil(dataLength / 12)
    paintHTMLCountries({ countries: countriesData.slice(initialPage, finalPage) })
    paintPaginationNumbers({ numberOption: initialPaginationOptions })
}

const displayPagination = () => {
    pagination.style.display = 'block'
    nextButton.style.display = 'block'
    previousButton.style.display = 'block'
}

const hidePagination = () => {
    pagination.style.display = 'none'
    nextButton.style.display = 'none'
    previousButton.style.display = 'none'
}

const resetArrowButtons = () => {
    nameArrowUp.style.display = 'none'
    nameArrowDown.style.display = 'none'
    capitalArrowUp.style.display = 'none'
    capitalArrowDown.style.display = 'none'
    populationArrowUp.style.display = 'none'
    populationArrowDown.style.display = 'none'
}


const sortByName = () => {
    nameController = !nameController

    if (nameController) {
        countriesData.sort((a, b) => {
            if (a.name === '' && b.name !== '') {
                return 1;
            } else if (a.name !== '' && b.name === '') {
                return -1;
            }
            return a.name.localeCompare(b.name);
        })
        resetArrowButtons()
        nameArrowUp.style.display = 'inline-block'
    } else {
        countriesData.sort((a, b) => {
            if (a.name === '' && b.name !== '') {
                return -1;
            } else if (a.name !== '' && b.name === '') {
                return 1;
            }
            return b.name.localeCompare(a.name);
        })
        resetArrowButtons()
        nameArrowDown.style.display = 'inline-block'
    }
    container.innerHTML = ''
    paintHTMLCountries({ countries: countriesData.slice(0, 12) })
}

const sortByCapital = (e) => {
    e.preventDefault()
    capitalController = !capitalController
    if (capitalController) {
        countriesData.sort((a, b) => {
            if (a.capital === '' && b.capital !== '') {
                return 1;
            } else if (a.capital !== '' && b.capital === '') {
                return -1;
            }
            return a.capital.localeCompare(b.capital);
        })
        resetArrowButtons()
        capitalArrowUp.style.display = 'inline-block'
    } else {
        countriesData.sort((a, b) => {
            if (a.capital === '' && b.capital !== '') {
                return -1;
            } else if (a.capital !== '' && b.capital === '') {
                return 1;
            }
            return b.capital.localeCompare(a.capital);
        })
        resetArrowButtons()
        capitalArrowDown.style.display = 'inline-block'
    }
    container.innerHTML = ''
    paintHTMLCountries({ countries: countriesData.slice(0, 12) })
}

const sortByPopulation = (e) => {
    e.preventDefault()
    populationController = !populationController
    if (populationController) {
        countriesData.sort((a, b) => b.population - a.population)
        resetArrowButtons()
        populationArrowDown.style.display = 'inline-block'
    } else {
        countriesData.sort((a, b) => a.population - b.population)
        resetArrowButtons()
        populationArrowUp.style.display = 'inline-block'
    }
    container.innerHTML = ''
    paintHTMLCountries({ countries: countriesData.slice(0, 12) })
}

searchInput.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() === 'backspace' && e.target.value === '') {
        reset()
        return
    }
    if (e.target.value.trim() === '' || e.target.value === null || e.target.value === undefined) return
    searchCountry({ e })
})

const getMostPopulatedCountry = ({ countries, filter }) => {
    return countries.sort((a, b) => b[`${filter}`] - a[`${filter}`])[0][`${filter}`]
}

getMostPopulatedCountry({ countries: countriesFile, filter: chartFilter })

const getTenMostSpokenLanguages = ({ countries }) => {
    const mostSpoken = countries.reduce((acc, country) => {
        country.languages.forEach(language => {
            if (acc[language]) {
                acc[language] += 1
            } else {
                acc[language] = 1
            }
        })
        return acc
    }, {})
    return Object.entries(mostSpoken).sort((a, b) => b[1] - a[1]).slice(0, 10)
}
getTenMostSpokenLanguages({ countries: countriesFile })

const paintTableCountries = ({ countries, filter }) => {
    return countries.map(country => {
        chartContainer.innerHTML += `
            <div class="chart-table">
                <span class="country-col">${filter === 'population' ? country.name : country[0]}</span>
                <span class="chart-col">
                <div class="chart" 
                    style="width: ${(filter === 'population' ? country[`${filter}`] / getMostPopulatedCountry({ countries: countriesFile, filter }) : country[1] / getTenMostSpokenLanguages({ countries: countriesFile })[0][1]) * 100}%; 
                    background-color: orange; height:100%;"
                >
                </div>
                </span>
                <span class="number-col">${filter === 'population' ? country.population.toLocaleString() : country[1]}</span>
            </div>`
    })
}

const resetTableCountries = () => {
    chartContainer.innerHTML = ''
}

paintTableCountries({ countries: countriesFile.slice(0, 12), filter: chartFilter })

nextButton.addEventListener('click', nextPage)
previousButton.addEventListener('click', previousPage)
nameBtn.addEventListener('click', (e) => sortByName(e))
capitalBtn.addEventListener('click', (e) => sortByCapital(e))
populationBtn.addEventListener('click', (e) => sortByPopulation(e))
statisticsBtn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.charts-container').scrollIntoView({ behavior: 'smooth' });
})
chartPopulationBtn.addEventListener('click', () => {
    chartFilter = 'population'
    chartText.innerHTML = 'The most populated countries'
    resetTableCountries()
    paintTableCountries({ countries: countriesData.slice(0, 12), filter: chartFilter })
})
chartLanguagesBtn.addEventListener('click', () => {
    chartFilter = 'languages'
    resetTableCountries()
    chartText.innerHTML = 'The most spoken languages'
    paintTableCountries({ countries: getTenMostSpokenLanguages({ countries: countriesFile }).slice(0, 12), filter: chartFilter })
})