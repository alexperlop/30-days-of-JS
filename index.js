// Ejercicios: Nivel 1
// Guarda tu nombre, apellido, edad, país y ciudad en tu navegador localStorage.
localStorage.setItem('name', 'Pepe')
console.log('Guarda tu nombre', localStorage.getItem('name'))
localStorage.setItem('surname', 'Pepitez')
console.log('Guarda tu apellido', localStorage.getItem('surname'))
localStorage.setItem('age', '24')
console.log('Guarda tu edad', localStorage.getItem('age'))
localStorage.setItem('country', 'Spain')
console.log('Guarda tu país', localStorage.getItem('country'))
localStorage.setItem('city', 'Seville')
console.log('Guarda tu ciudad', localStorage.getItem('city'))
// Ejercicios: Nivel 2
// Cree un objeto estudiante. El objeto estudiante tendrá el nombre, el apellido, la edad, las habilidades, el país, las claves inscritas y los valores para las claves. Almacena el objeto estudiante en el localStorage de tu navegador.
let student = {
    name: 'Alex',
    surname: 'Fergusson',
    age: 22,
    skills: ['HTML5', 'CSS3', 'JS', 'React', 'NextJS'],
    keys: [
        {
            key: 'netflix',
            value: '12345'
        }
    ]
}
student = JSON.stringify(student)
localStorage.setItem('student', student)
student = JSON.parse(student)
console.log(' Cree un objeto estudiante. El objeto estudiante tendrá el nombre, el apellido, la edad, las habilidades, el país, las claves inscritas y los valores para las claves. Almacena el objeto estudiante en el localStorage de tu navegador.', localStorage.getItem('student'))
// Ejercicios: Nivel 3
// Crear un objeto llamado personAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.
let personAccount = {
    name: 'Alex',
    surname: 'Fergusson',
    incomes: [200, 35, 700],
    expenses: [100, 500, 2700],
    totalIncome: () => {
        return incomes.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    },
    totalExpense: () => {
        return expenses.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    },
    accountInfo: () => {
        return {
            expenses: expenses,
            incomes: incomes,
            totalExpenses: totalExpense,
            totalIncome: totalIncome
        }
    },
    addIncome: (income) => {
        incomes.push(income)
    },
    addExpense: (expense) => {
        expenses.push(expense)
    },
    accountBalance: () => {
        const balance = totalIncome() - totalExpense()
        return balance < 0 ? `Las pérdidas son de ${balance}` : `Las ganancias son de ${balance}`
    }
}
personAccount = JSON.stringify(personAccount)
localStorage.setItem('personAccount', personAccount)
personAccount = JSON.parse(personAccount)
console.log('Crear un objeto llamado personAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.', localStorage.getItem('personAccount'))