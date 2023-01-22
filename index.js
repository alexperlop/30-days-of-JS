// Ejercicios: Nivel 1
// Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 
const incomes = 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'
const pattern = /\d+/g
console.log(incomes.match(pattern).reduce((acc, cur) => +acc + +cur, 0))
// La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas.
const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"]
const numArray = points.map(item => +item)
const sortedPoints = numArray.sort((a, b) => a - b)
const distance = sortedPoints.at(-1) - sortedPoints[0]
console.log(distance)
// sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
// distance = 12;
// Escribir un patrón que identifique si una cadena es una variable JavaScript válida
const startNum = /\d/
const containSpecialChar = /-/
const is_valid_variable = (word) => !(startNum.test(word[0]) || containSpecialChar.test(word))

console.log(is_valid_variable('first_name')) // True
console.log(is_valid_variable('first-name')) // False
console.log(is_valid_variable('1first_name')) // False
console.log(is_valid_variable('firstname')) // True
// Ejercicios: Nivel 2
// Escriba una función llamada tenMostFrequentWords que obtenga las diez palabras más frecuentes de una cadena?
const tenMostFrequentWords = (sentence, num = 10) => {
    const separate = sentence.match(/[A-Za-z]+/g)
    const result = separate.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1
        return acc
    }, {})
    return Object.keys(result).map(key => ({
        word: key,
        count: result[key]
    })).sort((a, b) => b.count - a.count).slice(0, num)
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph, 10));
// [{word:'love', count:6},
// {word:'you', count:5},
// {word:'can', count:3},
// {word:'what', count:2},
// {word:'teaching', count:2},
// {word:'not', count:2},
// {word:'else', count:2},
// {word:'do', count:2},
// {word:'I', count:2},
// {word:'which', count:1}
// ]
// Ejercicios: Nivel 3
// Escribe una función que limpie el texto. Limpia el siguiente texto. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanText = (text) => text.replace(/[^\w\s]/gi, '')
console.log(cleanText(sentence));
//  I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher
//  ```
// 2. Escriba una función que encuentre las palabras más frecuentes. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.
const mostFrequentWords = (sentence, num) => tenMostFrequentWords(cleanText(sentence), num)
// ```js
console.log(mostFrequentWords(sentence, 3))