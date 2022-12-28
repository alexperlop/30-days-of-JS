// Ejercicios: Nivel 1
// Crear un objeto vacío llamado dog
const dog = {}
// Imprime el objeto dog en la consola
console.log('Crear un objeto vacío llamado dog e Imprime el objeto dog en la consola', dog)
// Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = 'Tulum'
dog.leg = 4
dog.color = 'brown'
dog.age = 4
dog.bark = false
// Obtener name, legs, color, age y el valor de bark del objeto dog
console.log(` Obtener name ${dog.name}, legs: ${dog.leg}, color: ${dog.color}, age: ${dog.age} y el valor de bark: ${dog.bark} del objeto dog`)
// Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = 'golden'
dog.getDogInfo = () => { }
// Ejercicios: Nivel 2
// Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
const mostSkillPerson = (people) => {
    const skillsLength = []
    const arrayPeople = Object.entries(people)
    arrayPeople.map(item => skillsLength.push(item[1].skills.length))
    const max = Math.max(...skillsLength)
    const index = skillsLength.indexOf(max)
    const name = Object.keys(people)
    return name[index]
}
console.log('Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.', mostSkillPerson(users))
// Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.
const getConnectedUsers = (people) => {
    const connectedPeople = []
    const arrayPeople = Object.entries(people)
    arrayPeople.map(item => item[1].isLoggedIn && connectedPeople.push(item[1].isLoggedIn))
    return connectedPeople.length
}
console.log('Contar los usuarios conectados', getConnectedUsers(users))
const getUsersOverFifty = (people) => {
    const overFifty = []
    const arrayPeople = Object.entries(people)
    arrayPeople.map(item => item[1].points > 50 && overFifty.push(item[1].points))
    return overFifty.length
}
console.log('contar los usuarios que tienen más de 50 puntos del siguiente objeto', getUsersOverFifty(users))
// Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
const getMernDeveloper = (developers) => {
    const mern = []
    const arrayDevs = Object.entries(developers)
    arrayDevs.map(item => item[1].skills.includes('MERN') && mern.push(item[0]))
    return mern.length !== 0 ? mern : 'No hay desarrolladores con esta skill'
}
console.log('Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios', getMernDeveloper(users))
// Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
const copyUsers = Object.assign(users)
copyUsers.Pedro = {}
console.log(' Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original', copyUsers)
// Obtener todas las claves o propiedades del objeto usuarios
console.log('Obtener todas las claves o propiedades del objeto usuarios', Object.keys(users))
// Obtener todos los valores del objeto usuarios
console.log('Obtener todos los valores del objeto usuarios', Object.values(users))
// Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.
const countries = {
    name: 'Spain',
    city: 'Madrid',
    population: '48M',
    language: 'spanish'
}
console.log(`Utilice el objeto países para imprimir el nombre del país: ${countries.name}, la capital: ${countries.city}, la población: ${countries.population} y los idiomas: ${countries.language}.`)
// Ejercicios: Nivel 3
// Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.
const personAccount = {
    firstName: '',
    lastName: '',
    incomes: [
        {
            description: '',
            income: ''
        }
    ],
    expenses: [
        {
            description: '',
            expense: ''
        }
    ],
    totalIncome: () => { },
    totalExpense: () => { },
    accountInfo: () => { },
    addIncome: () => { },
    addExpense: () => { },
    accountBalance: () => { }
}
// **** Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()

const usersTwo = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];
// Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB. 
// a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
const signUp = (user) => {
    if (typeof (user) !== 'object') return

    const arrayUsers = Object.entries(users)
    const userKey = Object.keys(user)
    return arrayUsers.find(client => client[1].email === user[userKey].email) ? 'Ya tienes una cuenta asociada' : true
}
console.log('a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.', signUp({
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    }
}))
// b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación
const signIn = (user) => {
    const arrayUsers = Object.entries(users)
    const userKey = Object.keys(user)

    const noLoggedIn = arrayUsers.filter(client => client[1].isLoggedIn !== true && client[1].email === user[userKey].email)

    return noLoggedIn.length !== 0 ? true : false
}
console.log('b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación', signIn({
    Alex: {
        email: 'alex07@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    }
}))
// El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades. 
// a. Crear una función llamada rateProduct que califique el producto
const rateProduct = (rate, product) => {
    const obj = products.filter(item => item._id === product._id)
    console.log("🚀 ~ file: index.js ~ line 257 ~ rateProduct ~ obj", obj)
    obj[0].ratings.push(rate)
    return products
}
console.log('a. Crear una función llamada rateProduct que califique el producto', rateProduct(
    { userId: "fg12cy", rate: 7 },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    }))
// b. Crear una función llamada averageRating que calcule la valoración media de un producto
const averageRating = (product) => {
    const obj = products.filter(item => item._id === product._id)
    let arrayOfRate = 0
    obj[0].ratings.map(item => arrayOfRate += item.rate)
    return Math.floor(arrayOfRate / obj[0].ratings.length)
}
console.log(' b. Crear una función llamada averageRating que calcule la valoración media de un producto', averageRating(
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    }
))
// Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like
const likeProduct = (userID, product) => {
    const obj = products.filter(item => item._id === product._id)
    obj[0].likes.includes(userID) ? obj[0].likes.splice(userID) : obj[0].likes.push(userID)
    return products
}
console.log('Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like', likeProduct("sd3rty", {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: [..."sd3rty"],
}))