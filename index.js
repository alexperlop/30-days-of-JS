import { countriesFile } from './countries.js'

let countriesData = countriesFile
let dataLength = countriesData.length
const firstParagraph = document.querySelector('#current-data');
firstParagraph.innerHTML = `Currently, we have ${dataLength} countries in our database.`;
const getImages = async ({ flag }) => {
    const response = await fetch(flag)
    const blob = await response.blob()
    return URL.createObjectURL(blob)
}
const paintHTMLCountries = ({ countries }) => {
    const container = document.querySelector('.cards-container')
    countries.map((country) => {
        container.innerHTML += `<div class="card">
            <img src="${getImages({ flag: country.flag }) && './src/images/icon-image-not-found-free-vector.jpeg'}" alt="${country.name}" class="country-img">
            <div class="card-body">
                <h2>${country.name}</h2>
                <p><strong>Population:</strong>${country.population}</p>
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
}
let initialPage = 0
let finalPage = 12
paintHTMLCountries({ countries: countriesFile.slice(initialPage, finalPage) })
const pagination = document.querySelector('#total-pages')
let totalPages = Math.ceil(dataLength / 12)
pagination.innerHTML = `<p><strong>... ${totalPages}</strong></p>`
const nextButton = document.querySelector('#next')
const previousButton = document.querySelector('#previous')
const pages = document.querySelector('#pages')
let initialPaginationOptions = [1, 2, 3]
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
        pagination.innerHTML = ''
    } else if (+pageNumber === totalPages && +pageNumber !== 1) {
        initialPaginationOptions[0] = totalPages - 2
        initialPaginationOptions[1] = totalPages - 1
        initialPaginationOptions[2] = totalPages
        pagination.innerHTML = ''
    } else if (totalPages > 3) {
        console.log("🚀 ~ file: index.js:71 ~ paintPageSelected ~ totalPages:", totalPages)
        const prevPage = +pageNumber - 1
        const nextPage = +pageNumber + 1
        initialPaginationOptions[0] = prevPage
        initialPaginationOptions[1] = pageNumber
        initialPaginationOptions[2] = nextPage
        pagination.innerHTML = `<p><strong>... ${totalPages}</strong></p>`
    }
    pages.innerHTML = ''
    paintPaginationNumbers({ currentPage: pageNumber })
    const container = document.querySelector('.cards-container')
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

nextButton.addEventListener('click', nextPage)
previousButton.addEventListener('click', previousPage)

const searchInput = document.querySelector('#search')
const searchButton = document.querySelector('#search-button')

searchInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    const { value } = e.target
    countriesData = countriesFile.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase()))
    const container = document.querySelector('.cards-container')
    container.innerHTML = ''
    const dataLength = countriesData.length
    console.log("🚀 ~ file: index.js:116 ~ searchInput.addEventListener ~ dataLength:", dataLength)
    pages.innerHTML = ''
    totalPages = Math.ceil(dataLength / 12)
    let initialPaginationOptions = []
    if (totalPages === 0) {
        pagination.innerHTML = ''
    } else {
        initialPaginationOptions = [1]
        if (totalPages > 3) {
            initialPaginationOptions.push(2, 3)
            paintPaginationNumbers({ numberOptions: initialPaginationOptions })
            pagination.innerHTML = `<p><strong>... ${totalPages}</strong></p>`
        } else if (totalPages > 2) {
            initialPaginationOptions.push(2, 3)
            paintPaginationNumbers({ numberOptions: initialPaginationOptions })
            pagination.innerHTML = ''
        } else if (totalPages > 1) {
            initialPaginationOptions.push(2)
            paintPaginationNumbers({ numberOptions: initialPaginationOptions })
            pagination.innerHTML = ''

        } else if (totalPages <= 1) {
            pagination.innerHTML = ''
        }
    }

    paintHTMLCountries({ countries: countriesData.slice(0, 12) })
})





