//  Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
const challenge = '30 días de JavaScript';
// Imprima la cadena en la consola del navegador usando console.log()
console.log(challenge)
// Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log('length: ', challenge.length)
// Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log('toUpperCase', challenge.toUpperCase())
// Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log('toLowerCase', challenge.toLowerCase())
// Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log('substr', challenge.substr(0, 3))
console.log('substring', challenge.substring(0, 2))
// Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log('substring', challenge.substring(3, challenge.length))
// Verifique si la cadena contiene una palabra Script usando el método includes()
console.log('includes', challenge.includes('Script'))
// Divide la cadena en un array usando el método split()
console.log('split', challenge.split(''))
// Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log('split', challenge.split(' '))
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
const rrss = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log('split', rrss.split(','))
// Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log('replace', challenge.replace('JavaScript', 'Python'));
// ¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log('charAt', challenge.charAt(15));
// ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log('charCodeAt', challenge.charCodeAt('J'));
// Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log('indexOf', challenge.indexOf('a'));
// Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log('lastIndexOf', challenge.lastIndexOf('a'));
// Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
const phrase = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log('indexOf', phrase.indexOf('porque'));
// Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log('lastIndexOf', phrase.lastIndexOf('porque'));
// Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log('search', phrase.search('porque'));
// Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
const whiteSpace = ' 30 dias de JS '
console.log('trim', whiteSpace.trim());
// Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log('startsWith', challenge.startsWith('3'));
// Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log('endsWith', challenge.endsWith('t'));
// Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log('match', challenge.match(/a/gi));
// Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
const days = '30 días de';
console.log('concat', days.concat(' JavaScript'));
// Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log('repeat', challenge.repeat(2));
// Usando console.log() imprima la siguiente declaración:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
const johnHolmes = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log('johnHolmes', johnHolmes)
// Usando console.log() imprima la siguiente cita de la Madre Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
const sentece = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('sentece', sentece)
// Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
console.log('typeof', typeof ('10') != 10 ? +'10' : 10)
// Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
console.log('parseFloat', parseFloat('9.8') != 10 ? Math.round(+'9.8') : Math.round(9.8))
// Verifique si 'on' se encuentra tanto en Python como en la jerga
const python = 'Python';
console.log('includes', python.includes('on'))
// Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
const jerga = 'Espero que este curso no esté lleno de jerga';
console.log('includes', jerga.includes('jargon'))
// Genere un número aleatorio entre 0 y 100 inclusive.
console.log('Math.random()', Math.random() * 101)
// Genere un número aleatorio entre 50 y 100 inclusive.
console.log('Math.random()', Math.random() * (101 - 50) + 50)
// Genere un número aleatorio entre 0 y 255 inclusive.
console.log('Math.random()', Math.random() * 256)
// Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
const character = 'JavaScript';
const aleatory = Math.floor(Math.random() * character.length);
console.log('Math.random()', character[aleatory])
// Use console.log() y caracteres de escape para imprimir el siguiente patrón.
// 1 1 1 1 1
console.log("1\t1\t1\t1\t1");
// 2 1 2 4 8
console.log("2\t1\t2\t4\t8");
// 3 1 3 9 27
console.log("3\t1\t3\t9\t27");
// 4 1 4 16 64
console.log("4\t1\t4\t16\t64");
// 5 1 5 25 125
console.log("5\t1\t5\t25\t125");
// Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
const first = phrase.indexOf('porque');
console.log("substr", phrase.substr(first, 20));
// Ejercicios: Nivel 3
// 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
let pattern = /amor/gi;
let love = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor';
console.log("match amor", love.match(pattern).length);
// Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
pattern = /porque/gi;
console.log("match porque", phrase.match(pattern).length);
// Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).

let sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
sentence = sentence.replace(/[^a-zA-Z ]/g, "")
console.log(sentence)
// Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let salary = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
let getSalary = salary.match(/[0-9]+/g);
console.log('salary', +getSalary[0] + +getSalary[1] + +getSalary[2]);