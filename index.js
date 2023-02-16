// Ejercicios: Nivel 1
// Crear una closure que tenga una función interna
const firstClosure = () => {
    const str = 'My first closure'
    const closure = () => str
    return closure
}
const closure = firstClosure()
console.log('Crear una closure que tenga una función interna', closure())
// Ejercicios: Nivel 2
// Crear una closure que tenga tres funciones internas
const secondClosure = () => {
    let count = 0
    const plusOne = () => {
        count++
        return count
    }
    const minusOne = () => {
        count--
        return count
    }
    const sayHi = () => 'Hi there!'

    return {
        plusOne,
        minusOne,
        sayHi
    }
}
const closureTwo = secondClosure()
console.log('Crear una closure que tenga tres funciones internas', closureTwo.plusOne(), closureTwo.minusOne(), closureTwo.sayHi())
// Ejercicios: Nivel 3
// Crear una función de salida de personAccount. Tiene variables internas de nombre, apellido, ingresos y gastos. Tiene las funciones internas totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos con su descripción.
const personAccount = () => {
    const name = 'Alex'
    const surname = 'Fergusson'
    const incomes = [200, 35, 700]
    const expenses = [100, 500, 2700]

    const totalIncome = () => {
        return incomes.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    }
    const totalExpense = () => {
        return expenses.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    }
    const accountInfo = () => {
        return {
            expenses: expenses,
            incomes: incomes,
            totalExpenses: totalExpense,
            totalIncome: totalIncome
        }
    }
    const addIncome = (income) => {
        incomes.push(income)
    }
    const addExpense = (expense) => {
        expenses.push(expense)
    }
    const accountBalance = () => {
        const balance = totalIncome() - totalExpense()
        return balance < 0 ? `Las pérdidas son de ${balance}` : `Las ganancias son de ${balance}`
    }

    return {
        name,
        surname,
        incomes,
        expenses,
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance,
    }
}
const person = personAccount()
person.addIncome(730)
console.log(person.incomes)
person.addExpense(210)
console.log(person.expenses)
console.log(person.totalIncome())
console.log(person.totalExpense())
console.log(person.accountInfo())
console.log(person.accountBalance())
