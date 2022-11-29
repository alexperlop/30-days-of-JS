// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
//   ];

//   const webTechs = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Redux",
//     "Node",
//     "MongoDB",
//   ];
//   Declara un array vacío.
let array = []
console.log('Declara un array vacío', array)
//   Declara un array com mas de 5 elementos.
console.log('Declara un array com mas de 5 elementos', array = Array(5))
//   Encuentra la longitud de tu array.
console.log('Encuentra la longitud de tu array', array.length)
//   Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
console.log('Obtenga el primer elemento', array[0])
console.log('Obtenga el elemento del medio', array[array.length / 2])
console.log('Obtenga el elemento del medio', array.at(-1))
//   Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
const mixedDataTypes = [
    "Albania",
    5,
    true,
    "Denmark",
    {
        name: 'Ale',
        age: 28
    },
    3
]
console.log('Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array', mixedDataTypes)
console.log('Encuentre la longitud del array, el tamaño del array debe ser mayor que 5', mixedDataTypes.length)
//   Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log('Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon')
//   Imprima el array usando console.log().
console.log('Imprima el array usando console.log()', itCompanies)
//   Imprima el número de empresas en el array.
console.log('Imprima el número de empresas en el array', itCompanies.length)
//   Imprime la primer empresa , la intermedia y la última empresa
console.log('Imprime la primer empresa', itCompanies[0])
console.log('Imprima la intermedia', itCompanies[Math.floor((itCompanies.length) / 2)])
console.log('Imprima la última empresa', itCompanies.at(-1))

//   Imprime cada empresa.
itCompanies.forEach(company => console.log('Imprime cada empresa', company))
//   Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
itCompanies.forEach(company => console.log('Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos', company.toUpperCase()))
//   Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
let sentence = []
itCompanies.forEach((company) => company === itCompanies.at(-1) ? sentence.push(`y ${company} son grandes empresas de TI`) : sentence.push(company))
console.log('Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.', sentence.toString())
//   Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let introducedCompany = prompt('Introduce y compruebe si existe una determinada empresa en el array itCompanies',)
console.log(itCompanies.includes(introducedCompany ? introducedCompany : '') ? introducedCompany : 'la empresa no existe')
//   Ordene el array usando el método sort()
//   Filtre las empresas que tienen más de una 'o' sin el método filter()
itCompanies.forEach(company => console.log('Filtre las empresas que tienen más de una "o" sin el método filter()', company.includes('oo') && company))
//   Ordene el array usando el método sort()
console.log('Ordene el array usando el método sort()', itCompanies.sort())
//   Invierte la array usando el método reverse()
console.log('Invierte la array usando el método reverse()', itCompanies.reverse())
//   Cortar las primeras 3 empresas del array
console.log('Cortar las primeras 3 empresas del array', itCompanies.slice(0, 3))
//   Cortar las últimas 3 empresas del array
console.log('Cortar las últimas 3 empresas del array', itCompanies.slice(4, 7))
//   Cortar la empresa o empresas intermedias de TI del array
console.log('Cortar la empresa o empresas intermedias de TI del array', itCompanies.slice((Math.floor(itCompanies.length / 2)), (Math.floor(itCompanies.length / 2)) + 1))
//   Eliminar la primera empresa de TI del array
console.log('Eliminar la primera empresa de TI del array', itCompanies.splice(0, 1))
//   Eliminar la empresa o empresas intermedias de TI del array
console.log('Eliminar la empresa o empresas intermedias de TI del array', itCompanies.splice((Math.floor(itCompanies.length / 2)), (Math.floor(itCompanies.length / 2)) + 1))
//   Elimine la última empresa de TI del array
console.log('Elimine la última empresa de TI del array', itCompanies.splice(0, 1))
//   Eliminar todas las empresas de TI
console.log('Eliminar todas las empresas de TI', itCompanies.splice())

//   Ejercicios: Nivel 2
//   Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js
import { countries } from './countries.js'
console.log("🚀 ~ file: index.js ~ line 97 ~ countries", countries)
import { webTechs } from './web_techs.js'
console.log("🚀 ~ file: index.js ~ line 99 ~ webTechs", webTechs)
//   Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
console.log('Primero elimine todos los signos de puntuación', text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))
console.log('cambie de string a array', text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' '))
console.log('cuente el número de palabras en el array', text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(' ').length)

//   13
//   En el siguiente carrito de compras agregue, elimine, edite artículos

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//   Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
shoppingCart.unshift('Meat')
console.log(' Agregue "Meat" al comienzo de su carrito de compras si aún no se ha agregado', shoppingCart)
//   Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
shoppingCart.push('Sugar')
console.log('Agregue "Sugar" al final de su carrito de compras si aún no se ha agregado', shoppingCart)

//   Elimine 'Honey' si es alérgico a la miel (honey)
const answer = confirm('Es usted alergico a la miel?')
answer && shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
console.log('Elimine "Honey" si es alérgico a la miel (honey)', shoppingCart)
//   Modificar Tea a 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log('Modificar Tea a "Green Tea"', shoppingCart)
//   En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.
console.log('En el array de países, verifique si "Ethiopia" existe en el array si existe', countries.includes('Ethiopia'))
console.log('Si "Ethiopia" existe en el array , imprima "ETHIOPIA". Si no existe agregar a la lista de países')
countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')
//   En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
console.log('En el array webTechs, verifique si Sass existe en el array', webTechs.includes('Sass'))
console.log('Si "Sass" existe en el array , imprima "Sass es un preproceso de CSS". Si no existe agregar a la lista e imprime')
webTechs.includes('Sass') ? console.log('Sass es un preproceso de CSS') : webTechs.push('Sass')
console.log(webTechs)
//   Concatene las siguientes dos variables y guardelas en una variable fullStack.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);
//   ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

//   Ejercicios: Nivel 3
//   El siguiente es un array de 10 edades de estudiantes:

//   ```js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//   ```

//   - Ordene el array y encuentre la edad mínima y máxima
console.log('ages array ', ages)
console.log('Ordene el array ', ages.sort())
console.log(`Encuentre la edad mínima: ${Math.min(...ages)} y máxima: ${Math.max(...ages)}`)
//   - Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
console.log('Encuentre la edad media', (Math.max(...ages) + Math.min(...ages)) / 2)
//   - Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
let averageAge = 0;
ages.forEach(person => averageAge += person)
console.log('Encuentre la edad promedio', averageAge / ages.length)
//   - Encuentre el rango de las edades (max menos min)
console.log('Encuentre el rango de las edades (max menos min)', Math.max(...ages) - Math.min(...ages))
//   - Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
console.log('Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_', Math.abs(Math.min(...ages), Math.max(...ages)))
//   1.Cortar los diez primeros países de la array de países
console.log('Cortar los diez primeros países de la array de países', countries.slice(0, 10))
//   Encuentre el país o países de en medio en el array de países
console.log('Encuentre el país o países de en medio en el array de países', countries[Math.floor(countries.length / 2) - 1], countries[Math.floor(countries.length / 2)])
//   Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
console.log('Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.', countries)
console.log(countries.length % 2 === 0 ? 'el array es par' : 'el array es impar')
countries.length % 2 === 0 ? countries.slice(0, Math.floor(countries.length / 2)) : countries.push('Spain')
console.log(countries)