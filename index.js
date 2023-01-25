const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
    firstName: "Asabeneh",
    lastName: "Yetayehe",
    age: 250,
    isMarried: true,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
// Ejercicios Nivel 1
// Cambiar el array de habilidades a JSON usando JSON.stringify()
console.log('Cambiar el array de habilidades a JSON usando JSON.stringify()', JSON.stringify(skills))
// Stringify la variable de la edad
console.log('Stringify la variable de la edad', JSON.stringify(age))
// Stringify la variable isMarried
console.log('Stringify la variable isMarried', JSON.stringify(isMarried))
// Stringify el objeto estudiante
console.log('Stringify el objeto estudiante', JSON.stringify(student))
// Ejercicios Nivel 2
// Stringify el objeto estudiantes con sólo las propiedades firstName, lastName y skills
console.log('Stringify el objeto estudiantes con sólo las propiedades firstName, lastName y skills', JSON.stringify(student, ["firstName", "lastName", "skills"]))
// Ejercicios Nivel 3
// Parsear el txt JSON a objeto.
console.log('Parsear el txt JSON a objeto', JSON.parse(txt))
// Encuentra el usuario que tiene muchas habilidades de la variable almacenada en txt.
const mostSkills = (obj) => {
    const newObj = JSON.parse(obj)
    const skillsLength = []
    const arrayPeople = Object.entries(newObj)
    arrayPeople.map(item => {
        skillsLength.push(item[1].skills.length)
    })
    const max = Math.max(...skillsLength)
    const index = skillsLength.indexOf(max)
    const name = Object.keys(newObj)
    return name[index]
}
console.log('Encuentra el usuario que tiene muchas habilidades de la variable almacenada en txt.', mostSkills(txt))

