// Ejercicios: Nivel 1
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
// Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
for (let i = 0; i <= 10; i++) {
    console.log('Itera de 0 a 10 usando el bucle for', i)
}
let j = 0
while (j < 10) {
    j++
    console.log('Itera de 0 a 10 usando el bucle while', j)
}
let k = 0
do {
    k++
    console.log('Itera de 0 a 10 usando el bucle do while', k)
} while (k < 10)

// Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
for (let l = 10; l >= 0; l--) {
    console.log('Itera 10 to 0 usando el bucle for', l)
}

let m = 10
while (m >= 0) {
    console.log('Itera 10 to 0 usando el bucle while', m)
    m--
}
let n = 10
do {
    console.log('Itera 10 to 0 usando el bucle do while', n)
    n--
} while (n >= 0)
// Itera de 0 a n usando el bucle for
let number = prompt('Escriba un numero del uno al diez',)
for (let index = 0; index <= +number; index++) {
    console.log('Itera de 0 a n usando el bucle for', index)
}
// Escribe un bucle que haga el siguiente patrón usando console.log():
for (let i = 0; i <= 7; i++) {
    let symbol = '#'
    symbol = symbol.repeat(i)
    console.log('Itera de 0 a n usando el bucle for', symbol)
}
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// Usa un bucle para imprimir el siguiente patrón:
for (let i = 0; i <= 10; i++) {
    console.log(`Usa un bucle para imprimir el siguiente patrón: ${i} x ${i} = ${i * i}`,)
}
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// Usando un bucle imprime el siguiente patrón:
for (let i = 0; i <= 10; i++) {
    console.log('Usa un bucle para imprimir el siguiente patrón: i    i^2   i^3', i, Math.pow(i, 2), Math.pow(i, 3))
}
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
for (let i = 0; i <= 100; i++) {
    console.log('Usa el bucle for para iterar de 0 a 100 e imprima solo números pares', i % 2 ? '' : i)
}
// Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for (let i = 0; i <= 100; i++) {
    console.log('Usa el bucle for para iterar de 0 a 100 e imprima solo números pares', i % 2 ? i : '')
}
// Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return 'es compuesto'
        }
    }
    return number !== 1 ? number : ''
}
for (let i = 0; i <= 100; i++) {
    console.log(`Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos ${i} : ${isPrime(i)}`)
}
// Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let total = 0;
for (let i = 0; i <= 100; i++) {
    total += i
}
console.log('Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números', total)
// La suma de todos los números de 0 a 100 es 5050.
// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
let odd = 0
let even = 0
for (let i = 0; i <= 100; i++) {
    i % 2 ? even += i : odd += i
}
console.log(` Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares: ${odd} y la suma de todos los impares ${even}.`)
// La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.
// Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
const arrayOfNum = []
arrayOfNum.push(odd, even)
console.log('Imprimir suma de pares y suma de impares como un array', arrayOfNum)
//   [2550, 2500]
// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
const matriz = []
for (let i = 0; i <= 5; i++) {
    let randomNum = Math.floor(Math.random() * (10 - 1))
    matriz.push(randomNum)
}
console.log('Desarrolla un pequeño script que genera una matriz de 5 números aleatorios', matriz)
// Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
const diffNum = []
for (let i = 0; i <= 5; i++) {
    let randomNum = Math.floor(Math.random() * (10 - 1))
    diffNum.push(randomNum)
    let hasDuplicated = new Set(diffNum).size < diffNum.length
    if (hasDuplicated) {
        diffNum.splice(i, 1)
        randomNum = Math.floor(Math.random() * (10 - 1))
        diffNum.push(randomNum)
    }
}
console.log('Desarrolla un pequeño script que genera una matriz de 5 números aleatorios.Los números debe ser únicos', diffNum)
// Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
const id = Math.random().toString(36).slice(6)
console.log('Desarrolla un pequeño script que genera un id aleatorio de seis caracteres', id)
// 5j2khz
// Ejercicios: Nivel 2
// Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
const idRandom = Math.random().toString(36).slice(2)
console.log('Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios', idRandom)
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Escribe un script que genere un número hexadecimal aleatorio.
let color = ''
const generateLetter = () => {
    let letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
}
for (let i = 0; i <= 6; i++) {
    color += generateLetter()
}
console.log(`Escribe un script que genere un número hexadecimal aleatorio #${color}`)
// '#ee33df'
// Escribe un script que genere un número de color rgb aleatorio.
const generarteNumber = (num) => (Math.random() * num).toFixed(0)

console.log(`Escribe un script que genere un número de color rgb aleatorio: rgb(${generarteNumber(255)},${generarteNumber(255)},${generarteNumber(255)})`)
// rgb(240,180,80)
// Usando el array countries anterior, crea un array como el siguiente.
console.log('Usando el array countries anterior, crea un array como el siguiente: ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]')
const countryToUpperCase = countries.map(country => country.toLocaleUpperCase())
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Usando el array countries anterior, crea un array para saber la longitud de cada país.
const countryLength = countryToUpperCase.map(country => country.length)
console.log('Usando el array countries anterior, crea un array para saber la longitud de cada país', countryLength)
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Utiliza el array countries para crear la siguiente array de arrays
const countryDetail = countries.map(country => [country, country.slice(0, 3).toUpperCase(), country.length])
console.log('Utiliza el array countries para crear la siguiente array de arrays', countryDetail)
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.
const arrayOfCountry = []
countries.map(country => country.includes('land') ? arrayOfCountry.push(country) : console.log('Todos estos países no tienen la palabra land'))
console.log('En el array countries anterior, verifica si hay un país que contenga la palabra "land". Si hay países que contienen "land", imprimelo cono array. Si no hay ningún país que contenga la palabra "land", imprima "Todos estos países no tienen la palabra land"', arrayOfCountry)
// ['Finland','Ireland', 'Iceland']
// En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.
const countryIA = []
countries.map(country => country.substring(country.length - 2, country.length) === 'ia' ? countryIA.push(country) : console.log('Estos países no terminan con ia'))
console.log('En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) "ia". Si hay países que terminan con "ia", imprimelo como un array. Si no hay ningún país que contenga la palabra "ia", imprime "Estos países no terminan con ia".', countryIA)
// ['Albania', 'Bolivia','Ethiopia']
// Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.
let maxCharacter = countries.map(country => country.length)
let index = maxCharacter.indexOf(Math.max(...maxCharacter))
console.log('Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres', countries[index])
// Ethiopia
// Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.
const fiveCharacter = countries.find(country => country.length === 5)
console.log('Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres', fiveCharacter)
// ['Japan', 'Kenya']
// Encuentra la palabra más larga en el array webTechs
maxCharacter = webTechs.map(tech => tech.length)
index = maxCharacter.indexOf(Math.max(...maxCharacter))
console.log('Encuentra la palabra más larga en el array webTechs', webTechs[index])
// Utiliza el array de webTechs para crear la el siguiente array de arrays:
const webTechsDetail = webTechs.map(tech => [tech, tech.length])
console.log('Utiliza el array de webTechs para crear la el siguiente array de arrays', webTechsDetail)
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
const mern = mernStack.map(tech => tech.substring(0, 1))
console.log('Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack', mern.join(''))
// Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log('Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.', techs[i])
}
// Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
let fruits = ['banana', 'orange', 'mango', 'lemon']
const length = fruits.length
for (let i = 0; i <= length; i++) {
    if (i) {
        fruits.push(fruits[length - i])
    }
}
fruits.splice(0, length)
console.log(' Este es un array de frutas, ["banana", "orange", "mango", "lemon"] invierte el orden usando un bucle sin usar el método reverse().', fruits)
// Imprime todos los elementos del array como se muestra a continuación:

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];
fullStack.map((array) => array.map(tech => console.log(tech.toUpperCase())))
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
// Ejercicios: Nivel 3
// Copia el array countries (Evita mutaciones)
// Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
const sortedCountries = countries.map(country => country)
console.log('Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries', sortedCountries)
// Ordena el array webTechs y el array mernStack
console.log('Ordena el array webTechs', webTechs.sort())
console.log('Ordena el array mernStack', mernStack.sort())
// Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const countriesLand = []
countries.map(country => { if (country.includes('land')) countriesLand.push(country) })
console.log('Extrae todos los países que contengan la palabra "land" del array countries e imprimela como un array', countriesLand)
// Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
maxCharacter = countries.map(country => country.length)
index = maxCharacter.indexOf(Math.max(...maxCharacter))
console.log('Encuentra el país que contiene la mayor cantidad de caracteres en el array countries', countries[index])
// Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
console.log('Extrae todos los países que contienen la palabra "land" del array countries e imprimela como un array', countriesLand)
// Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
console.log('Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array', countries.find(country => country.length === 4) || 'No hay país con 4 caracteres')
// Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
// Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
console.log('Invertir el array countries y poner en mayúscula cada país y almacenalo en un array', countries.reverse())