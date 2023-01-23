// Manejo de Errores
// Ejercicios:Nivel 1
// Practica
try {
    // código que puede arrojar un error
} catch (err) {
    // código a ejecutar si se produce un error
} finally {
    // código que se ejecutará independientemente de que se produzca un error o no
}
// Ejercicios:Nivel 2
// Practica
try {
    let lastName = "Yetayeh"
    let fullName = fistName + " " + lastName
} catch (err) {
    console.log("Name of the error", err.name)
    console.log("Error message", err.message)
} finally {
    console.log("In any case I will be executed")
}
// Ejercicios:Nivel 3
// Practica
const throwErrorExampleFun = () => {
    let message
    let x = prompt("Enter a number: ")
    try {
        if (x == "") throw "empty"
        if (isNaN(x)) throw "not a number"
        x = Number(x)
        if (x < 5) throw "too low"
        if (x > 10) throw "too high"
    } catch (err) {
        console.log(err)
    }
};
throwErrorExampleFun();

// Tipo de Error

// ReferenceError: Se ha producido una referencia ilegal. Se lanza un ReferenceError si utilizamos una variable que no ha sido declarada.
// let firstName = "Asabeneh";
// let fullName = firstName + " " + lastName;
// console.log(fullName);
// Uncaught ReferenceError: lastName is not defined
//     at <anonymous>:2:35

// SyntaxError: Se ha producido un error de sintaxis
// let square = 2 x 2
// console.log(square)
// console.log('Hello, world")
// Uncaught SyntaxError: Unexpected identifier

// TypeError: Se ha producido un error sobre el tipo
// let num = 10;
// console.log(num.toLowerCase());
// Uncaught TypeError: num.toLowerCase is not a function
//     at <anonymous>:2:17