const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";
// Ejercicios: Nivel 1
// Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.
const getCountry = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.map(({ name, capital, languages, area, population } = contry) => {
            console.log(name, capital, languages, area, population)
        })
    } catch (error) {
        console.error(error)
    }
}
getCountry(countriesAPI)
// Ejercicios: Nivel 2
// Imprime todos los nombres de los gatos en la variable catNames.
const getCatNames = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log("🚀 ~ file: index.js:24 ~ getCatNames ~ data", data)
        data.map(({ name } = cat) => {
            console.log(name)
        })
    } catch (error) {
        console.error(error)
    }
}
getCatNames(catsAPI)
// Ejercicios: Nivel 3
// Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
const getWeightedAverage = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.map(({ name, weight } = cat) => console.log(`${name}:${weight.metric}`))
    } catch (error) {
        console.error(error)
    }
}
getWeightedAverage(catsAPI)
// Lee la api de países y descubre los 10 países más grandes
getCatNames(catsAPI)
// Ejercicios: Nivel 3
const getBiggestTenCountries = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const biggestTen = data.sort((a, b) => b.population - a.population)
        console.log('Los 10 países más grandes', biggestTen.slice(0, 10))
    } catch (error) {
        console.error(error)
    }
}
getBiggestTenCountries(countriesAPI)
// Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales.
const getTotalLanguages = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const result = data.reduce((acc, cur) => {
            cur.languages.map(language => acc[language.name] = acc[language.name] ? acc[language.name] + 1 : 1)
            return acc
        }, {})
        console.log("🚀 ~ file: index.js:71 ~ totalLanguages ~ totalLanguages", Object.keys(result).length)
    } catch (error) {
        console.error(error)
    }
}
getTotalLanguages(countriesAPI)