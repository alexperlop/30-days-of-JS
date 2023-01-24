// Ejercicios Nivel 1
// Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.
class Animal {
    constructor(name, age, color, legs) {
        this.age = age
        this.name = name
        this.color = color
        this.legs = legs
    }
    makeNoise(noise) {
        console.log(noise)
    }
}
// Cree una clase hijo de Perro y Gato a partir de la Clase Animal.
class Cat extends Animal {

}
// Ejercicios Nivel 2
// Sobrescribir el método que se crea en la clase Animal.
class Dog extends Animal {
    makeNoise() {
        console.log('soy un perro WOOOFF!')
    }
}
// Ejercicios Nivel 3
// Intentemos desarrollar un programa que calcule la medida de tendencia central de una muestra (media, mediana, moda) y la medida de variabilidad (rango, variación, desviación estándar). 
// Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. 
// Puedes crear una clase llamada Statistics y crear todas las funciones que hacen cálculos estadísticos como método para la clase Statistics. 
// Comprueba el resultado que aparece a continuación.
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics {
    count(array) {
        return array.length
    }
    sum(array) {
        return array.reduce((acc, cur) => acc + cur, 0)
    }
    min(array) {
        return Math.min(...array)
    }
    max(array) {
        return Math.max(...array)
    }
    range(array) {
        return this.max(ages) - this.min(ages)
    }
    mean(array) {
        const sort = array.sort()
        const medium = Math.floor(array.length / 2)
        return sort[medium] % 2 == 0 ? sort[Math.floor(array.length / 2)] : sort[Math.floor(array.length / 2)] + 1
    }
    median(array) {
        const sum = array.reduce((acc, cur) => acc + cur, 0)
        return Math.floor(sum / array.length)
    }
    mode(array) {
        const newArray = array.reduce((acc, cur) => {
            acc[cur] = acc[cur] ? acc[cur] + 1 : 1
            return acc
        }, {})

        return Object.keys(newArray).map(key => ({
            mode: key,
            count: newArray[key]
        }))
    }
    variance(array) {
        const newArray = array.map(number => (number - this.median(array)) ** 2)
        return newArray.reduce((acc, cur) => acc + cur, 0) / array.length
    }
    std(array) {
        const newArray = array.map(number => (this.median(array) - number) ** 2)
        const sum = newArray.reduce((acc, cur) => acc + cur, 0)
        return Math.sqrt(sum / array.length).toFixed(2)
    }
}
const calc = new Statistics()
console.log('Count:', calc.count(ages)) // 25
console.log('Sum: ', calc.sum(ages)) // 744
console.log('Min: ', calc.min(ages)) // 24
console.log('Max: ', calc.max(ages)) // 38
console.log('Range: ', calc.range(ages)) // 14
console.log('Mean: ', calc.mean(ages)) // 30
console.log('Median: ', calc.median(ages)) // 29
console.log('Mode: ', calc.mode(ages)) // {'mode': 26, 'count': 5}
console.log('Variance: ', calc.variance(ages)) // 17.5
console.log('Standard Deviation: ', calc.std(ages)) // 4.2
// // el resultado debería ser el siguiente
// console.log(statistics.describe())
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
// Crea una clase llamada PersonAccount. 
// Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. 
// Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.
class PersonAccount {
    constructor(name, surname, expenses = [], incomes = []) {
        this.name = name
        this.surname = surname
        this.expenses = expenses
        this.incomes = incomes
    }
    totalIncome() {
        return this.incomes.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    }
    totalExpense() {
        return this.expenses.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    }
    accountInfo() {
        return {
            expenses: this.expenses,
            incomes: this.incomes,
            totalExpenses: this.totalExpense,
            totalIncome: this.totalIncome
        }
    }
    addIncome(income) {
        this.incomes.push(income)
    }
    addExpense(expense) {
        this.expenses.push(expense)
    }
    accountBalance() {
        const balance = this.totalIncome() - this.totalExpense()
        return balance < 0 ? `Las pérdidas son de ${balance}` : `Las ganancias son de ${balance}`
    }
}
const personOne = new PersonAccount('ale', 'perez', [200, 35, 700], [100, 500, 2700])
console.log('personOne.incomes', personOne.incomes)
console.log('personOne.expenses', personOne.expenses)
console.log('personOne.name', personOne.name)
console.log('personOne.age', personOne.surname)
console.log('personOne.totalIncome', personOne.totalIncome())
console.log('personOne.totalExpense', personOne.totalExpense())
console.log('personOne.addIncome', personOne.addIncome(3000))
console.log('personOne.addExpense', personOne.addExpense(80))
console.log('personOne.accountBalance', personOne.accountBalance())
console.log('personOne.accountInfo', personOne.accountInfo())
console.log('personOne', personOne)