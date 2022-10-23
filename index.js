
// Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
let age = prompt("Ingrese su edad:",);
age >= 18 ? alert('Tiene la edad suficiente para conducir') : alert('No tiene la edad suficiente para conducir')

// Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
age < 30 ? alert('Eres menor que yo') : alert('Eres mayor que yo')

    // let a = 4;
    // let b = 3;
    //   4 es mayor que 3
    // Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
    (age % 2) == 0 ? alert('El número es par') : alert('El número es impar')

// Ejercicios: Nivel 2
// Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
let qualification = prompt('Introduzca su puntuación del 1 al 100',)
if (qualification >= 80) {
    alert('Su nota es un A')
} else if (qualification >= 70 && qualification < 80) {
    alert('Su nota es un B')
} else if (qualification >= 60 && qualification < 70) {
    alert('Su nota es un C')
} else if (qualification >= 50 && qualification < 60) {
    alert('Su nota es un D')
} else if (qualification >= 0 && qualification < 50) {
    alert('Su nota es un F')
}
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
// Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
let season = prompt('Introduzca el nombre del mes en el que estamos',)
season.toLocaleLowerCase()
if (season === 'octubre' || season === 'noviembre' || season === 'septiembre') {
    alert('Es otoño')
} else if (season === 'diciembre' || season === 'enero' || season === 'febrero') {
    alert('Es invierno')
} else if (season === 'marzo' || season === 'abril' || season === 'mayo') {
    alert('Es primavera')
} else {
    alert('Es verano')
}
// Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo, Abril o Mayo, la temporada es Primavera
// Junio, Julio o Agosto, la temporada es Verano

// Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
let day = prompt('Introduzca el día de la semana',);
day.toLocaleLowerCase()
if (day === 'sábado' || day === 'domingo') {
    alert(`El ${day} es fin de semana`)
} else {
    alert(`El ${day} es día laborable`)
}

// Ejercicios: Nivel 3
// Escribe un programa que diga el número de días en un mes.
// Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.
const getDays = (year, month) => {
    let monthNumber = new Date(`${month} 1, ${year}`).getMonth() + 1;
    alert(new Date(year, monthNumber, 0).getDate())
};
let month = prompt('Introduzca el nombre del mes',)
let year = prompt('Introduzca el año',)
getDays(year, month)
