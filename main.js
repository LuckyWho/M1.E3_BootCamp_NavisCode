// Ejercicio 1

const bebidas = ['agua','coca cola','aquarius','fanta','fontvella']

const empiezanPorA = function(palabra){
    if (palabra.startsWith('a' || 'A')) {
    return palabra
    } 
}

console.log(bebidas.filter(empiezanPorA))

//Ejercicio 2


// const pin = prompt('Introduce el PIN:')
// const numeroSecreto = 9876


// 4 intentos

// for (let i = 0; i < 3; i++) {
//     if (pin == numeroSecreto) {
//         alert('¡Lo has conseguido!')
//         break
//     } else {
//         alert('No es correcto')
//         prompt('Introduce el pin correcto')
//     }
// }

//Correccion
// const pinCorrecto = '1234';
// let pin = prompt('Introduce el PIN de 4 números:');
// let intentos = 0;

// while (intentos < 3) {
//   if (pin === pinCorrecto) {
//     console.log('¡Eso fue correcto!');
//     break;
//   } else {
//     console.log('Lo siento, eso estaba mal.');
//     intentos++;
//     pin = prompt(`Te quedan ${4 - intentos} intentos`);
//     45;
//   }
// }


//Intentos infinitos o escribir salir

// if (pin == numeroSecreto || pin == 'salir') {
//     alert('¡Correcto!')
// } else {
//     // while (pin != numeroSecreto) {
//     //     alert('Pin incorrecto')
//     //     prompt('Introduce el pin correcto')
//     // }
// }

//Correccion
// // const pinCorrecto2 = '1234';
// // let pin2 = prompt('Introduce el PIN de 4 números:');

// // while (pin2 !== 'salir') {
// //   if (pin2 === pinCorrecto2) {
// //     console.log('¡Eso fue correcto!');
// //     break;
// //   } else {
// //     console.log('Lo siento, eso estaba mal.');
// //     pin2 = prompt(
// //       'Introduce el PIN de 4 números, o escribe "salir" para salir:'
// //     );
// //   }
// // }

//Ej3

const esPalindromo = (string) => {
  const stringSinEspacios = string.split(' ').join('');
  const stringRevere = stringSinEspacios.split('').reverse().join('');
  return stringSinEspacios === stringRevere;
};

console.log(esPalindromo('anita lava la tina'));
console.log(esPalindromo('anita lava la tinaa'));


let palabra = 'sara baras'

const prueba = palabra.split(' ').join('')
const prueba2 = prueba.split('').reverse().join('')
console.log(prueba)
console.log(prueba2)
console.log(prueba === prueba2)


const esPalindromoArray = (arrayToCheck) => {
  const arraySinEspacios = arrayToCheck.map((string) =>
    string.split(' ').join('')
  );
  const arrayReverse = arraySinEspacios.map((string) =>
    string.split('').reverse().join('')
  );
  return arraySinEspacios.map((string, index) => {
    return {
      string: arrayToCheck[index],
      esPalindromo: string === arrayReverse[index],
    };
  });
};

const arrayPalindromo = ['anita lava la tina', 'anita lava la tinaa', 'sara baras', 'saray baras'];

console.log(esPalindromoArray(arrayPalindromo));

