const nombre = prompt('dime tu nombre')
const edad = prompt('dime tu edad')


const edadR = Number(edad) - 1;
const edadS = Number(edad) + 1;

console.log(`hola ${nombre} el año pasado tenias ${edadR} y el año que viene tendras ${edadS}`)