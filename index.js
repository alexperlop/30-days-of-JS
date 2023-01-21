import { countriesFile } from "./countries.js"
// Ejercicios: Nivel 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
};
const users = [
    {
        name: "Brook",
        scores: 75,
        skills: ["HTM", "CSS", "JS"],
        age: 16,
    },
    {
        name: "Alex",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "David",
        scores: 75,
        skills: ["HTM", "CSS"],
        age: 22,
    },
    {
        name: "John",
        scores: 85,
        skills: ["HTML"],
        age: 25,
    },
    {
        name: "Sara",
        scores: 95,
        skills: ["HTM", "CSS", "JS"],
        age: 26,
    },
    {
        name: "Martha",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "Thomas",
        scores: 90,
        skills: ["HTM", "CSS", "JS"],
        age: 20,
    },
];
// Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(`Desestructurar y asignar los elementos del array de constantes para e = ${e}, pi = ${pi}, gravedad = ${gravity}, humanBodyTemp = ${humanBodyTemp}, waterBoilingTemp = ${waterBoilingTemp}`)
// Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries
console.log(`Desestructurar y asignar los elementos del array de países a fin = ${fin}, est = ${est}, sw = ${sw}, den = ${den}, nor = ${nor}`)
// Desestructurar el objeto rectángulo por sus propiedades o keys.
const { width, height, area, perimeter } = rectangle
console.log(`Desestructurar el objeto rectángulo por sus propiedades o keys width = ${width} height = ${height} area=${area} perimeter = ${perimeter}`)
// Ejercicios: Nivel 2
// Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración
console.log('Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración:')
users.map(user => {
    console.log(user.name, user.scores, user.skills, user.age)
})
// Encuentra las personas que tienen menos de dos habilidades
const lessThanTwoSkills = (users) => users.filter(user => user.skills.length < 2)

console.log('Encuentra las personas que tienen menos de dos habilidades', lessThanTwoSkills(users))
// Ejercicios: Nivel 3
// Desestructurar el objeto países imprimir nombre, capital, población e idiomas de todos los países
const allDataFromCountries = (countries) => {
    return countries.map(({ name, capital, languages, population }) => {
        console.log(`Desestructurar el objeto países imprimir nombre: ${name}, capital: ${capital}, población: ${population} e idiomas: ${languages} de todos los países`)
    })
}
allDataFromCountries(countriesFile)

// Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en un array de arrays que puede no ser fácil de leer. 
// Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, 
// array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, jsScore] = student
console.log(name, skills, jsScore);
// David (4) ["HTM", "CSS", "JS", "React"] 90 95
// Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto estructurado.
const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
const convertArrayToObject = (array) => array.map((item) => {
    const [name, skills, score] = item
    return {
        name,
        skills,
        score
    }
})
console.log(convertArrayToObject(students))
// [
//   {
//     name: "David",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [98, 85, 90, 95],
//   },
//   {
//     name: "John",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [85, 80, 85, 80],
//   }
// ];
// Copie el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente 
// Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end
// Añadir Express con nivel 9 a los conjuntos de habilidades del back end
// Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
// Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos
const studentOne = {
    name: "David",
    age: 25,
    skills: {
        frontEnd: [
            { skill: "HTML", level: 10 },
            { skill: "CSS", level: 8 },
            { skill: "JS", level: 8 },
            { skill: "React", level: 9 },
        ],
        backEnd: [
            { skill: "Node", level: 7 },
            { skill: "GraphQL", level: 8 },
        ],
        dataBase: [{ skill: "MongoDB", level: 7.5 }],
        dataScience: ["Python", "R", "D3.js"],
    },
}
// La salida del objeto copiado debería tener este aspecto:
// const frontCopy = [...studentOne.skills.frontEnd, { skill: 'BootStrap', level: 8 }]
// const backCopy = [...studentOne.skills.backEnd, { skill: 'Express', level: 9 }]
// const dataBaseCopy = [...studentOne.skills.dataBase, { skill: 'SQL', level: 8 }]
// const dataScienceCopy = [...studentOne.skills.dataScience, 'SQL']
// const { name: nombre, age } = studentOne
// const newStudent = {
//     name,
//     age,
//     skills: {
//         frontEnd: frontCopy,
//         backEnd: backCopy,
//         dataBase: dataBaseCopy,
//         dataScience: dataScienceCopy
//     }
// }
const newStudent = { ...studentOne }
studentOne.skills.frontEnd.push({ skill: 'BootStrap', level: 8 })
studentOne.skills.backEnd.push({ skill: 'Express', level: 9 })
studentOne.skills.dataBase.push({ skill: 'SQL', level: 8 })
studentOne.skills.dataScience.push('SQL')
console.log("🚀 ~ file: index.js:142 ~ newStudent", newStudent)
console.log("🚀 ~ file: index.js:142 ~ studentOne", studentOne)

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }