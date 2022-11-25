// Ejercicio 1

const bebidas = ['agua','coca cola','aquarius','fanta','fontvella']

const empiezanPorA = function(palabra){
    if (palabra.startsWith('a' || 'A')) {
    return palabra
    } 
}

console.log(bebidas.filter(empiezanPorA))

//Ejercicio 2


const numeroSecreto = 9876

const pin = prompt('Introduce el PIN:');
do {
    prompt('Introduce numero')

} while (pin.parseint() != numeroSecreto);
