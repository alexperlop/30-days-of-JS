// Ejercicios:Nivel 1
// Mostrar la matriz de países como una tabla
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
]
console.table(countries)
// Mostrar el objeto user como una tabla
const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
};
console.table(user);
// Utilice console.group() para agrupar los registros
console.group("Countries");
console.log(countries);
console.groupEnd();
console.group("Users");
console.log(user);
console.groupEnd();
// Ejercicios:Nivel 2
// 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, 'Esto es un mensaje de aserción ')
// Escribe un mensaje de advertencia utilizando console.warn()
console.warn('Esto es un mensaje de advertencia')
// Escribe un mensaje de error utilizando console.error()
console.error('Esto es un mensaje de error')
// Ejercicios:Nivel 3
// Comprueba la diferencia de velocidad entre los siguientes bucles: while, for, for of, forEach
console.time("Regular for loop")
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd("Regular for loop")

console.time("for of loop")
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd("for of loop")

console.time("forEach loop")
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd("forEach loop")