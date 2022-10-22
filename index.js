// Ejercicios: Nivel 1
// Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName, lastName, country, city, age, isMarried, year;
firstName = typeof ('Alex');
lastName = typeof ('Perez');
country = typeof ('Spain');
city = typeof ('Sevilla');
age = typeof ('28');
isMarried = typeof (false);
year = typeof ('2022');
// Verifique si typeof '10' es igual a 10
console.log('Verifique si typeof "10" es igual a 10', typeof ('10') === 10)
// Verifique si parseInt('9.8') es igual a 10
console.log("Verifique si parseInt('9.8') es igual a 10", parseInt('9.8') === 10)
// Verifique cualquier valor booleano true o false.
console.log('Verifique cualquier valor booleano true o false.', 1 < 2)
// Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log('Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.', 1 < 2)
console.log('Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.', 1 === 1)
console.log('Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.', 'Alex' === 'Alex')
// Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log('Escriba tres declaraciones de JavaScript que proporcionen un valor falso', 1 > 2)
console.log('Escriba tres declaraciones de JavaScript que proporcionen un valor falso', 1 != 1)
console.log('Escriba tres declaraciones de JavaScript que proporcionen un valor falso', 'Alex' != 'Alex')
// Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

// 4 > 3 // true 
console.log("🚀 ~ file: index.js ~ line 28 ~ 4 > 3 ", 4 > 3)
// 4 >= 3 // true
console.log("🚀 ~ file: index.js ~ line 30 ~ 4 >= 3", 4 >= 3)
// 4 < 3 // false
console.log("🚀 ~ file: index.js ~ line 32 ~ 4 < 3", 4 < 3)
// 4 <= 3 // false
console.log("🚀 ~ file: index.js ~ line 34 ~ 4 <= 3", 4 <= 3)
// 4 == 4 // true
console.log("🚀 ~ file: index.js ~ line 36 ~ 4 == 4", 4 == 4)
// 4 === 4 // true
console.log("🚀 ~ file: index.js ~ line 38 ~ 4 === 4", 4 === 4)
// 4 != 4 // false
console.log("🚀 ~ file: index.js ~ line 40 ~ 4 != 4", 4 != 4)
// 4 !== 4 // false
console.log("🚀 ~ file: index.js ~ line 42 ~ 4 !== 4 ", 4 !== 4)
// 4 != '4' // false
console.log("🚀 ~ file: index.js ~ line 44 ~ 4 != '4'", 4 != '4')
// 4 == '4' // true
console.log("🚀 ~ file: index.js ~ line 46 ~ 4 == '4'", 4 == '4')
// 4 === '4'// false
console.log("🚀 ~ file: index.js ~ line 48 ~ 4 === '4'", 4 === '4')
// Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
let python = 'python';
let jargon = 'jargon';
console.log('Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa', jargon.length != python.length)
// Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()

// 4 > 3 && 10 < 12//true
console.log("🚀 ~ file: index.js ~ line 56 ~  4 > 3 && 10 < 12", 4 > 3 && 10 < 12)
// 4 > 3 && 10 > 12//false
console.log("🚀 ~ file: index.js ~ line 58 ~ 4 > 3 && 10 > 12", 4 > 3 && 10 > 12)
// 4 > 3 || 10 < 12 // true
console.log("🚀 ~ file: index.js ~ line 60 ~ 4 > 3 || 10 < 12", 4 > 3 || 10 < 12)
// 4 > 3 || 10 > 12 //true
console.log("🚀 ~ file: index.js ~ line 62 ~ 4 > 3 || 10 > 12", 4 > 3 || 10 > 12)
// !(4 > 3)//false
console.log("🚀 ~ file: index.js ~ line 64 ~ !(4 > 3)", !(4 > 3))
// !(4 < 3)//true
console.log("🚀 ~ file: index.js ~ line 66 ~ !(4 < 3)", !(4 < 3))
// !(false)//true
console.log("🚀 ~ file: index.js ~ line 68 ~ !(false)", !(false))
// !(4 > 3 && 10 < 12)//false
console.log("🚀 ~ file: index.js ~ line 70 ~ !(4 > 3 && 10 < 12)", !(4 > 3 && 10 < 12))
// !(4 > 3 && 10 > 12)//true
console.log("🚀 ~ file: index.js ~ line 72 ~ !(4 > 3 && 10 > 12)", !(4 > 3 && 10 > 12))
// !(4 === '4')//true
console.log("🚀 ~ file: index.js ~ line 74 ~ !(4 === '4')", !(4 === '4'))
// No hay 'on' tanto en dragon como en python
console.log("🚀 ~ file: index.js ~ line 76 ~ No hay 'on' tanto en dragon como en python", 'python'.includes('on') && 'dragon'.includes('on'))
// Utilice el objeto Date para realizar las siguientes actividades
const fecha = new Date();
// ¿Qué año es hoy?
console.log("¿Qué año es hoy?", fecha.getFullYear())
// ¿Qué mes es hoy con un número?
console.log("¿Qué mes es hoy con un número?", fecha.getMonth())
// ¿Qué fecha es hoy?
console.log("¿Qué fecha es hoy?", fecha.getDate())
// ¿Qué día es hoy con un número?
console.log("¿Qué día es hoy con un número?", fecha.getDay())
// ¿Cuál es la hora actual?
console.log("¿Cuál es la hora actual?", fecha.getHours())
// ¿Cuántos minutos hay actualmente?
console.log("¿Cuántos minutos hay actualmente?", fecha.getMinutes())
// Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log("Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora", Date.now())
// Ejercicios: Nivel 2
// Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
// Ingrese base: 20
// Ingrese altura: 10
// El área del triángulo es: 100
let size = prompt('Por favor, ingrese la base y la altura del triángulo, con un espacio entre ambas cifras',)
size = size?.split(' ');
size = 0.5 * size[0] * size[1];
console.log("🚀 ~ file: index.js ~ line 98 ~ size", size)
// Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
// Ingrese lado a: 5
// Ingrese lado b: 4
// Ingrese lado c: 3
// El perimetro del triangulo es: 12
let dimension = prompt('Por favor, ingrese el lado a, el lado b y el lado c del triángulo, con un espacio entre cifras',)
dimension = dimension?.split(' ');
dimension = parseInt(dimension[0]) + parseInt(dimension[1]) + parseInt(dimension[2]);
console.log("🚀 ~ file: index.js ~ line 110 ~ dimension", dimension)
// Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
let area = prompt('Por favor, ingrese el ancho y el alto del triángulo, con un espacio entre cifras',)
area = area?.split(' ');
area = parseInt(area[0]) * parseInt(area[1]);
let perimetro = 2 * (area);
console.log("🚀 ~ file: index.js ~ line 115 ~ area", area)
console.log("🚀 ~ file: index.js ~ line 116 ~ area", perimetro)
// Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
let radio = prompt('Por favor, ingrese el radio de un círculo',)
const pi = 3.14;
let circulo = pi * (radio * radio);
console.log("🚀 ~ file: index.js ~ line 122 ~ circulo", circulo)
let circunferencia = 2 * pi * radio;
console.log("🚀 ~ file: index.js ~ line 124 ~ circunferencia", circunferencia)

// Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
const hour = prompt('Porfavor ingrese el numero de horas semanales',)
const rate = prompt('Porfavor ingrese la tarifa por horas',)
// Ingrese horas: 40
// Introduce la tarifa por hora: 28
// Su ganancia semanal es 1120
console.log("🚀 ~ file: index.js ~ line 132 ~ Su ganancia semanal es:", hour * rate)

// Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
const name = prompt('Porfavor ingrese su nombre',);
console.log('Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto', name.length > 7 ? 'largo' : 'corto');
// Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
const lastNameOne = prompt('Porfavor ingrese su primer apellido',);
console.log('Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto', name.length > lastNameOne.length ? 'Tu nombre, es más largo que tu apellido' : 'Tu apellido, es más largo que tu nombre');

// Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
const ageUser = prompt('Porfavor ingrese su edad',);
let birthYear = fecha.getFullYear() - ageUser;
console.log((fecha.getFullYear() - birthYear) < 18 ? `Espere ${18 - (fecha.getFullYear() - birthYear)} años para conducir` : 'Puede conducir');
// Introduzca el año de nacimiento: 1995
// Tienes 25 años. Tienes la edad suficiente para conducir.

// Introduzca el año de nacimiento: 2005
// Tienes 15 años. Podrás conducir después de 3 años.
// Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
console.log('El número de segundos que puede vivir',)
// Ingrese el número de años de vida: 100
//  Viviste 3153600000 segundos.
// Cree un formato de hora legible por humanos usando el objeto Date.

// YYYY-MM-DD HH:mm
const calendar = new Date().toLocaleDateString('es-es', { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" });
const [date, time] = calendar.split(',');
const [d, m, y] = date.split('/');
console.log('YYYY-MM-DD HH:mm', `${y}-${m}-${d} ${time}`)
// DD-MM-YYYY HH:mm
console.log('DD-MM-YYYY HH:mm', `${d}-${m}-${y}- ${time}`)
// DD/MM/YYYY HH:mm
console.log('DD/MM/YYYY HH:mm', new Date().toLocaleDateString('es-es', { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" }))
// Ejercicios: Nivel 3
// Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
// YYY-MM-DD HH:mm eg. 2020-01-02 07:05*
console.log('YYYY-MM-DD HH:mm', `${y}-${m}-${d} ${time}`)

