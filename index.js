import { countriesFile } from './countries.js'
// Ejercicios:Nivel 1
// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// const countries = ["Finland", "Sweden", "Norway"];
// crear un set vacío
const companies = new Set()
console.log('crear un set vacío', companies)
// Crear un set que contenga de 0 a 10 utilizando el bucle
let numArray = new Set()
for (let i = 0; i <= 10; i++) {
    numArray.add(i);
}
console.log('Crear un set que contenga de 0 a 10 utilizando el bucle', numArray)
// Eliminar un elemento de set
numArray.delete(0)
console.log('Eliminar un elemento de set', numArray)

// Limpia set
numArray.clear()
console.log('Limpiar set', numArray)
// Crear un set de 5 elementos string a partir de un array
const stringArray = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"]
const stringSet = new Set(stringArray)
console.log('Crear un set de 5 elementos string a partir de un array', stringSet)
// Crear un map de países y el número de caracteres de un país
const countries = [
    "Finland",
    "Sweden",
    "Norway"
]
let map = new Map()
countries.map(country => {
    map.set(
        country,
        country.length
    )
})
console.log('Crear un map de países y el número de caracteres de un país', map)
// Ejercicios:Nivel 2
// Encontrar a unión b
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];
let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log('Encontrar a unión b', C);
// Encontrar a intersección b

let filter = a.filter((num) => B.has(num));
let intersection = new Set(filter);

console.log('Encontrar a intersección b', intersection);
// Encontrar a con b
let difference = a.filter((num) => !B.has(num));
let distinct = new Set(difference);

console.log('Encontrar a diferencias b', distinct);
// Ejercicios:Nivel 3
// Cuántos idiomas hay en el archivo de objetos de países.
const numOfLanguages = (array) => {
    const newArray = array.reduce((acc, cur) => {
        cur.languages.map(language => acc[language] = acc[language] ? acc[language] + 1 : 1)
        return acc
    }, {})
    return Object.entries(newArray).length
}
console.log('Cuántos idiomas hay en el archivo de objetos de países', numOfLanguages(countriesFile))
// *** Utiliza los datos de los países para encontrar las 10 lenguas más habladas:
const tenFirstLanguages = (array, num) => {
    const newArray = array.reduce((acc, cur) => {
        cur.languages.map(language => acc[language] = acc[language] ? acc[language] + 1 : 1)
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
console.log('Utiliza los datos de los países para encontrar las 10 lenguas más habladas', tenFirstLanguages(countriesFile, 10))

// // El resultado debería ser el siguiente
// console.log(tenFirstLanguages(countries, 10))[
//   ({ English: 91 },
//   { French: 45 },
//   { Arabic: 25 },
//   { Spanish: 24 },
//   { Russian: 9 },
//   { Portuguese: 9 },
//   { Dutch: 8 },
//   { German: 7 },
//   { Chinese: 5 },
//   { Swahili: 4 },
//   { Serbian: 4 })
// ];

// // El resultado debería ser el siguiente
console.log(tenFirstLanguages(countriesFile, 3))
//   ({ English: 91 }, { French: 45 }, { Arabic: 25 })
// ];