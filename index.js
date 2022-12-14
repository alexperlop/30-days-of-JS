// Ejercicios: Nivel 1
// Declare una función fullName e imprima su nombre completo.
const fullName = (name, lastName) => `${name} ${lastName}`
// Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
console.log('Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo', fullName('Ale', 'Perez'))
// Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
const addNumbers = (a, b) => a + b
console.log('Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.', addNumbers(2, 2))
// El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
const areaOfRectangle = (length, width) => length * width
console.log('El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.', areaOfRectangle(100, 200))
// El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
const perimeterOfRectangle = (length, width) => 2 * (length + width)
console.log('El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.', perimeterOfRectangle(100, 200))
// El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
const volumeOfRectPrism = (length, width, height) => length * width * height
console.log('El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.', volumeOfRectPrism(100, 200, 300))
// El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
const pi = 3.1416
const areaOfCircle = (r) => pi * (r * r)
console.log('El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.', areaOfCircle(10))
// La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
const circumOfCircle = (r) => 2 * (pi * r)
console.log('La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.', circumOfCircle(10))
// La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.
const density = (mass, volume) => mass / volume
console.log('La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.', density(200, 500))
// La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento.
const speed = (distance, time) => distance / time
console.log('La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.', speed(1000, 10))
// El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
const weight = (mass, gravity) => mass * gravity
console.log('El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.', weight(200, 20))
// La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
const convertCelsiusToFahrenheit = (degree) => (degree * (9 / 5)) + 32
console.log('La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.', convertCelsiusToFahrenheit(32))
// El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
const imc = (kg, height) => kg / (height * height)
console.log('El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.', imc(80, 180))
// Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
// Peso bajo: IMC inferior a 18,5
// Peso normal: IMC de 18,5 a 24,9
// Sobrepeso: IMC de 25 a 29,9
// Obeso: IMC es 30 o más
// Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
const checkSeason = (month) => {
    if (month === 'January' || month === 'February' || month === 'December') return 'Invierno'
    if (month === 'March' || month === 'April' || month === 'May') return 'Primavera'
    if (month === 'June' || month === 'July' || month === 'August') return 'Verano'
    if (month === 'September' || month === 'Octuber' || month === 'November') return 'Otoño'
}
console.log('Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.', checkSeason('March'))
// Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
const findMax = (...num) => {
    let length = num.length
    let max
    for (let i = 0; i < length; i++) {
        max = num.find(n => n >= num[i])
    }
    return max
}
console.log('Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.', findMax(0, -10, -2))
// console.log(findMax(0, 10, 5));
// 10;
// console.log(findMax(0, -10, -2));
// 0;
// Ejercicios: Nivel 2
// La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
const solveLinEquation = (a, b, c) => {
    return `x = (${-b}y ${-c})/${a}}`
}
console.log('La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.', solveLinEquation(3, 4, 5))
// La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
const solveQuadEquation = (a, b, c) => {
    return `x = ${-b} +/- ${Math.sqrt((b * b) - 4 * a * c)}/${2 * a}`
}
console.log('La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.', solveQuadEquation(8, 5, 10))
// console.log(solveQuadratic()); // {0}
// console.log(solveQuadratic(1, 4, 4)); // {-2}
// console.log(solveQuadratic(1, -1, -2)); // {2, -1}
// console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)); //{2, -2}
// console.log(solveQuadratic(1, -1, 0)); //{1, 0}
// Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.
const printArray = (array) => {
    array.map(num => console.log(num))
}
console.log('Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array')
printArray([1, 2, 3])
// Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.
const showDateTime = () => `${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()} `
console.log('Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.', showDateTime())
// showDateTime()
// 08/01/2020 04:08
// Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
const swapValues = (a, b) => {
    let x = b
    let y = a
    return a, b
}
// swapValues(3, 4); // x => 4, y=>3
// swapValues(4, 5); // x = 5, y = 4
console.log('Declare una función llamada swapValues. Esta función intercambia el valor de x a y.', swapValues(1, 2))
// Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).
const reverseArray = (array) => {
    const reverseArray = []
    array.map(num => reverseArray.unshift(num))
    return reverseArray
}
console.log('Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse())', reverseArray([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
// ['C', 'B', 'A']
// Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.
const capitalizeArray = (...array) => array
console.log(capitalizeArray(1, 2, 4))
// Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.
const addItem = (item) => {
    let array = []
    array.push(item)
}
console.log('Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento', addItem(5))
// Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
const array = [1, 2, 3, 4, 5]
const removeItem = (index) => {
    array.splice(index, 1)
    return array
}
console.log('Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.', removeItem(3))
// Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
const sumOfNumbers = (...num) => {
    let sum = 0
    num.map(item => sum += item)
    return sum
}
console.log('Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.', sumOfNumbers(1, 2, 3))
// Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
const sumOfOdds = (...num) => {
    let sum = 0
    num.map(item => item % 2 !== 0 ? sum += item : sum)
    return sum
}
console.log('Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.', sumOfOdds(1, 2, 3, 4))
// Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
const sumOfEven = (...num) => {
    let sum = 0
    num.map(item => item % 2 === 0 ? sum += item : sum)
    return sum
}
console.log('Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.', sumOfEven(1, 2, 3, 4))
// Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
let evens = 0
let odds = 0
const evensAndOdds = (num) => {
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            evens += 1
        } else {
            odds += 1
        }
    }
}
console.log('Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.', evensAndOdds(100))
console.log(`El número de impares son ${odds}.`)
console.log(`El número de pares son ${evens}.`)

// Escriba una función randomUserIp que genere una ip de usuario aleatoria.
const randomUserIp = () => `${Math.random(256)}.${Math.random(256)}.${Math.random(256)}.${Math.random(256)}`
console.log('Escriba una función randomUserIp que genere una ip de usuario aleatoria.', randomUserIp())
// Escriba una función randomMacAddress que genere una dirección mac aleatoria.
const randomMacAddress = () => {
    let hexDigits = "0123456789ABCDEF";
    let macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}
console.log('Escriba una función randomMacAddress que genere una dirección mac aleatoria.', randomMacAddress())
// Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
const randomHexaNumberGenerator = () => `#${[...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`
console.log('Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.', randomHexaNumberGenerator());
// '#ee33df'
// Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.
const userIdGenerator = () => Math.random().toString(36).slice(6)
console.log('Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.', userIdGenerator());
// 41XTDbE
// Ejercicios: Nivel 3
// Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.
const userIdGeneratedByUser = (length, quantity) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let num = Math.floor(Math.random() * 26)
    let id = ''
    if (quantity > 1) {
        id = []
        for (let i = 0; i < quantity; i++) {
            let pass = ''
            for (let j = 0; j <= length; j++) {
                num = Math.floor(Math.random() * 26)
                pass += alphabet[num] + num
            }
            id.push(pass.substring(0, length))
        }
    } else {
        for (let i = 0; i <= length; i++) {
            num = Math.floor(Math.random() * 26)
            id += alphabet[num] + num
        }
        id.length > length ? id = id.substring(0, length) : id
    }

    return id
}
console.log('Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.', userIdGeneratedByUser(5, 1))
// Escriba una función llamada rgbColorGenerator que genera colores rgb
const rgbColorGenerator = () => `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
console.log('Escriba una función llamada rgbColorGenerator que genera colores rgb', rgbColorGenerator())
// rgb(125,244,255)
// Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.
const arrayOfHexaColors = (length) => {
    const array = []
    const generateLetter = () => {
        let letter = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let number = (Math.random() * 15).toFixed(0);
        return letter[number];
    }
    for (let j = 0; j < length; j++) {
        let color = ''
        for (let i = 0; i <= 6; i++) {
            color += generateLetter()
        }
        array.push(`#${color}`)
    }
    return array
}
console.log('Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.', arrayOfHexaColors(3))
// Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.
const arrayOfRgbColors = (length) => {
    const array = []
    for (let i = 0; i < length; i++) {
        array.push(rgbColorGenerator())
    }
    return array
}
console.log('Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.', arrayOfRgbColors(2))
// Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.
const convertHexaToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[1], 16)})` : null
}
console.log('Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.', convertHexaToRgb("#0033ff"))
// Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
const convertRgbToHexa = (r, g, b) => {
    const componentToHex = (c) => {
        let hex = c.toString(16)
        return hex.length == 1 ? "0" + hex : hex
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}
console.log(' Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.', convertRgbToHexa(0, 51, 255))
// Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.
const generateColors = (type, number) => type === 'hexa' ? arrayOfHexaColors(number) : arrayOfRgbColors(number)
console.log(' Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.', generateColors("hexa", 3))
// console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors("hexa", 1)); // '#b334ef'
console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
// Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
const shuffleArray = (array) => {
    return array.sort((a, b) => 0.5 - Math.random());
}
console.log('Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada', shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.
const factorial = (num) => {
    let result = num
    for (let i = 1; i < result; i++) {
        num *= i
    }
    return num
}
console.log('Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.', factorial(5))
// Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
const isEmpty = (param) => {
    let boolean
    if (param) {
        boolean = true
        if (typeof (param) === 'object' && Object.entries(param).length === 0 || param.length === 0) {
            boolean = false
        }
    } else {
        boolean = false
    }
    return boolean
}

console.log('Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no. vacio', isEmpty())
console.log('Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no. 1', isEmpty(1))
console.log('Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no. hello', isEmpty('hello'))
console.log('Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no. { name: "Alex" }', isEmpty({ name: 'Alex' }))
console.log('Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.[1, 2]', isEmpty([1, 2]))
console.log('Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.empty ""', isEmpty(''))
console.log('Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no. array []', isEmpty([]))
console.log('Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no. obj {}', isEmpty({}))


// Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.
const sum = (...num) => {
    let sum = 0
    num.map(item => sum += item)
    return sum
}
console.log('Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.', sum(1, 2, 3, 4))

// Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
const sumOfArrayItems = (num) => {
    let sum = 0
    num.map(item => sum += item)
    return typeof (sum) !== 'number' ? 'Los elementos del array no son números' : sum
}
console.log('Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.', sumOfArrayItems(['l', 2]))
// Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
const average = (array) => {
    let sum = 0
    let average = 0
    array.map(item => {
        sum += item
    })
    average = sum / array.length
    return typeof (sum) !== 'number' ? 'Los elementos del array no son números' : average
}
console.log('Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.', average([2, 4, 6, 8, 10]))
// Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.
const modifyArray = (array) => {
    if (array.length < 5) return 'elemento no encontrado'
    array[4] = array[4].toUpperCase()
    return array
}

console.log('Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna "elemento no encontrado".', modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'
// Escribe una función llamada isPrime, que verifica si un número es un número primo.
const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return `${number} es un número compuesto`
        }
    }
    return number !== 1 ? `${number} es un número primo` : `este es el numero ${number}`
}
console.log('Escribe una función llamada isPrime, que verifica si un número es un número primo', isPrime(7))
// Escriba una función que verifique si todos los elementos son únicos en un array.
const unique = (array) => new Set(array).size !== array.length ? 'Hay número iguales' : 'Todos son únicos'
console.log('Escriba una función que verifique si todos los elementos son únicos en un array.', unique([1, 1, 2, 3, 4]))
// Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
const sameType = (array) => {
    let result = true
    let type = typeof (array[0])
    array.map(item => {
        if (typeof (item) !== type) {
            result = false
        }
    })
    return result ? `Todos son del mismo tipo: ${type}` : `Los elementos son de distinto tipo`
}
console.log('Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.', sameType(['a', 'b', 3, 'c']))
// El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.
const isValidVariable = (variable) => {
    const regex = '^([a-zA-Z_$][a-zA-Z\d_$]*)$';
    if (variable === undefined || variable === null) {
        return "El elemento puede ser undefined o null"
    } else {
        if ((variable).match(regex)) return " Es un nombre de variable válido";
        else return " Es un nombre de varible no válido";
    }
}
const variableName = prompt('Escriba un nombre de variable, y chequearemos si esté es válido',)
console.log('El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.', isValidVariable(variableName))
// Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.
const sevenRandomNumbers = () => {
    let array = []
    while (array.length < 7) {
        let number = Math.floor(Math.random() * 9)
        array.push(number)
        if (unique(array) === 'Hay número iguales') array.pop()
    }
    return array
}
console.log('Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.', sevenRandomNumbers())
// [(1, 4, 5, 7, 9, 8, 0)];
// Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido 🎉 ¡FELICITACIONES! 🎉
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
const reverseCountries = (array) => {
    const copy = [...array]
    array.reverse()
    console.log('esta es la copia del array original', copy)
    return array
}
console.log('Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido', reverseCountries(countries))