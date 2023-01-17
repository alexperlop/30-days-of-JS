import { countriesFile } from "./countries.js"
// una función callback, el nombre de la función puede ser cualquier nombre
const callback = (n) => {
    return n ** 2
}

// función que toma otra función como callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))
// Función de orden superior que devuelve otra función
const higherOrder = (n) => {
    const doSomething = (m) => {
        const doWhatEver = (t) => {
            return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))
const numbers = [1, 2, 3, 4, 5]
const sumArray = (arr) => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArray(numbers))

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const arrayOfNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];

// Explique la diferencia entre forEach, map, filter, and reduce.
// El método forEach sirve para iterar arrays al igual un bucle for, while, do while...etc. 
// Mientras que el método map además de iterar genera un nuevo array modificando el array que itera.
// El método filter filtra un array según una condición y el método reduce itera un array generando devolviendo un acumulador a raíz de un valor inicial

// Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
const str = 'Hola '
const callbackFn = () => str
const callbackExample = () => {
    return `${callbackFn()} encantado de conocerte`
}
console.log(callbackExample())
// Utiliza forEach para mostrar con console.log cada país del array de países.
console.log('Utiliza forEach para mostrar con console.log cada país del array de países.')
countries.forEach(country => console.log(country))
// Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
console.log('Utiliza forEach para mostrar con console.log cada nombre del array de nombres.')
names.forEach(name => console.log(name))
// Utiliza forEach para mostrar con console.log cada número del array de números.
console.log('Utiliza forEach para mostrar con console.log cada número del array de números.')
numbers.forEach(number => console.log(number))
// Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
const countriesToUpperCase = countries.map(country => country.toUpperCase())
console.log('Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.', countriesToUpperCase)
// Utilice map para crear un array de longitudes de países a partir del array de países.
const countriesLength = countries.map(country => country.length)
console.log('Utilice map para crear un array de longitudes de países a partir del array de países.', countriesLength)
// Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
const countriesLengthToSquared = countriesLength.map(length => length ** 2)
console.log('Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.', countriesLengthToSquared)
// Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
const namesToUpperCase = names.map(name => name.toUpperCase())
console.log('Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.', namesToUpperCase)
// Utilice map para asignar el array de productos a sus correspondientes precios.
console.log('Utilice map para asignar el array de productos a sus correspondientes precios.')
const priceToProducts = products.map(product => console.log(`El siguiente producto: ${product.product} tiene un precio de ${product.price}€`))
// Utilice filter para filtrar los países que contienen land.
const landCountries = countries.filter(country => country.includes('land'))
console.log('Utilice filter para filtrar los países que contienen land.', landCountries)
// Utilice filter para filtrar los países que tienen seis caracteres.
const sixLengthCountries = countries.filter(country => country.length === 6)
console.log('Utilice filter para filtrar los países que tienen seis caracteres.', sixLengthCountries)
// Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
const countriesMoreThanSix = countries.filter(country => country.length >= 6)
console.log('Utilice filter para filtrar los países que contengan seis letras o más en el array de países', countriesMoreThanSix)
// Utilice filter para filtrar los países que empiezan por "E";
const countriesStartWithE = countries.filter(country => country[0] === 'E')
console.log('Utilice filter para filtrar los países que empiezan por "E";', countriesStartWithE)
// Utilice filter para filtrar sólo los precios con valores.
const productsWithPrice = products.filter(product => typeof (product.price) === 'number')
console.log('Utilice filter para filtrar sólo los precios con valores.', productsWithPrice)
// Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
const getStringLists = (array) => array.filter(item => typeof (item) === 'string')
console.log('Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.', getStringLists(['pepe', 'juan', 1, true, 'manuel']))
// Usa reduce para sumar todos los números del array de números.
const sumNumber = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0)
console.log('Usa reduce para sumar todos los números del array de números.', sumNumber(arrayOfNum))
// Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
console.log(countries.reduce((acc, cur) => {
    cur === 'IceLand' ? acc += `y ${cur} son países del norte de Europa` : acc += `${cur}, `
    return acc
}))
// Explique la diferencia entre some y every
// every: Comprueba si todos los elementos son similares en un aspecto. Devuelve un booleano
// some: Comprueba si algunos de los elementos son similares en un aspecto. Retorna un booleano
// Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
console.log('Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.', names.some((name) => name.length > 7))
// Utilice every para comprobar si todos los países contienen la palabra land.
console.log('Utilice every para comprobar si todos los países contienen la palabra land.', countries.every(country => country.includes('land')))
// Explique la diferencia entre find y findIndex.
// find: Retorna el primer elemento que cumple la condición
// findIndex: Retorna la posición del primer elemento que cumple la condición
// Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
console.log(' Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.', countries.find(country => country.length === 6))
// Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
console.log(' Utilice find para encontrar la posición del primer país que contenga sólo seis letras en el array de países.', countries.findIndex(country => country.length === 6))
// Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
console.log('Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.', countries.findIndex(country => country === 'Norway'))
// Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
console.log('Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.', countries.findIndex(country => country === 'Russia'))
// Ejercicios: Nivel 2
// Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
let total = 0
products.map((product) => {
    Object.values(product).filter((item) => {
        if (typeof item === 'number') {
            total += item
        }
    })
})
console.log('Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).', total)
// Encuentre la suma del precio de los productos usando sólo reduce(callback)).
const totalReduce = () => {
    return products.reduce((acc, cur) => acc += +cur.price, 0)
}
console.log('Encuentre la suma del precio de los productos usando sólo reduce(callback)).', totalReduce())
// Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
const categorizeCountries = (countries) => {
    return countries.filter(country => country.name.includes('land') || country.name.includes('ia') || country.name.includes('stan') || country.name.includes('island'))
}
console.log('Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej "land", "ia", "island","stan")).', categorizeCountries(countriesFile))
// Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.
const getFirstLetterCountries = (countries) => {
    let array = countries.reduce((acc, cur) => {
        let firstLetter = cur.name.slice(0, 1)
        acc[firstLetter] = acc[firstLetter] ? acc[firstLetter] + 1 : 1
        return acc
    }, {})

    const result = Object.keys(array).map(key => ({
        letter: key,
        count: array[key]
    }))


    return result
}
console.log('Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.', getFirstLetterCountries(countriesFile))
// Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.
const getFirstTenCountries = (countries) => {
    return countries.slice(0, 10).map(country => country.name)
}
console.log('Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.', getFirstTenCountries(countriesFile))
// Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.
const getLastTenCountries = (countries) => {
    let index = countries.length
    return countries.slice(index - 10, index).map(country => country.name)
}
console.log('Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.', getLastTenCountries(countriesFile))
// Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)
const mostRepeatedLetter = (countries) => {
    return Math.max(...countries.map(letter => letter.count))
}
console.log('Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)', mostRepeatedLetter(getFirstLetterCountries(countriesFile)))
// Ejercicios: Nivel 3
// Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población, por capital, por población
const sortCountries = (countries, param) => {
    const newArray = countries.map(country => country[param])
    return newArray.sort()
}
console.log('Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre', sortCountries(countriesFile, 'name'))
console.log('Utiliza la información de los países, en la carpeta de datos. Ordena los países por capital', sortCountries(countriesFile, 'capital'))
console.log('Utiliza la información de los países, en la carpeta de datos. Ordena los países por población', sortCountries(countriesFile, 'population'))

// *** Encuentre las 10 lenguas más habladas:
const mostSpokenLanguages = (countries, num) => {
    const newArray = countries.reduce((acc, cur) => {
        cur.languages.map(language => acc[language] = acc[language] ? acc[language] + 1 : 1)
        // acc[cur.languages] = acc[cur.languages] ? acc[cur.languages] + 1 : 1
        return acc
    }, {})

    const result = Object.keys(newArray).map(key => ({
        language: key,
        count: newArray[key]
    }))
    return result.sort((a, b) => {
        return b.count - a.count
    }).slice(0, num)
}
console.log('Encuentre las 10 lenguas más habladas', mostSpokenLanguages(countriesFile, 10))
console.log('Encuentre las 3 lenguas más habladas', mostSpokenLanguages(countriesFile, 3))

// *** Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.
const mostPopulatedCountries = (countries, num) => {
    return countries.map((item) => ({
        'country': item.name,
        'population': item.population
    })).sort((a, b) => b.population - a.population).slice(0, num)
}
mostPopulatedCountries(countriesFile, 10)

// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000},
// {country: 'Indonesia', population: 258705000},
// {country: 'Brazil', population: 206135893},
// {country: 'Pakistan', population: 194125062},
// {country: 'Nigeria', population: 186988000},
// {country: 'Bangladesh', population: 161006790},
// {country: 'Russian Federation', population: 146599183},
// {country: 'Japan', population: 126960000}
// ]

mostPopulatedCountries(countries, 3)
// [
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
// {country: 'United States of America', population: 323947000}
// ]
// ```
// *** Intenta desarrollar un programa que calcule la medida de tendencia central de una muestra(mean, median, mode) y medida de la variabilidad(range, variance, standard deviation). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puede crear un objeto llamado estadísticas y crear todas las funciones que hacen cálculos estadísticos como método para el objeto estadísticas. Comprueba el resultado que aparece a continuación.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const count = (array) => array.length
const sum = (array) => array.reduce((acc, cur) => acc + cur, 0)
const min = (array) => Math.min(...array)
const max = (array) => Math.max(...array)
const range = (array) => max(ages) - min(ages)
const mean = (array) => {
    const sort = array.sort()
    const medium = Math.floor(array.length / 2)
    return sort[medium] % 2 == 0 ? sort[Math.floor(array.length / 2)] : sort[Math.floor(array.length / 2)] + 1
}
const median = (array) => {
    const sum = array.reduce((acc, cur) => acc + cur, 0)
    return Math.floor(sum / array.length)
}
const mode = (array) => {
    const newArray = array.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1
        return acc
    }, {})

    return Object.keys(newArray).map(key => ({
        mode: key,
        count: newArray[key]
    }))
}
const variance = (array) => {
    const newArray = array.map(number => (number - median(array)) ** 2)
    return newArray.reduce((acc, cur) => acc + cur, 0) / array.length
}
const std = (array) => {
    const newArray = array.map(number => (median(array) - number) ** 2)
    const sum = newArray.reduce((acc, cur) => acc + cur, 0)
    return Math.sqrt(sum / array.length).toFixed(2)
}
const freqDist = (array) => { }
const statistics = {
    count,
    sum,
    min,
    max,
    range,
    mean,
    median,
    mode,
    variance,
    std,
}
console.log('Count:', statistics.count(ages)) // 25
console.log('Sum: ', statistics.sum(ages)) // 744
console.log('Min: ', statistics.min(ages)) // 24
console.log('Max: ', statistics.max(ages)) // 38
console.log('Range: ', statistics.range(ages)) // 14
console.log('Mean: ', statistics.mean(ages)) // 30
console.log('Median: ', statistics.median(ages)) // 29
console.log('Mode: ', statistics.mode(ages)) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.variance(ages)) // 18.12
console.log('Standard Deviation: ', statistics.std(ages)) // 4.26
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2