let calcularDias = prompt('por favor ingrese el dia');

const sumaDeDias = Number(calcularDias) * 24;
const sumaDeMinutos = Number(sumaDeDias) * 60;
const sumaDeSegundos = Number(sumaDeMinutos) * 60;

console.log(sumaDeDias)

const sumaEnTotal = `horas: ${sumaDeDias}, minutos: ${sumaDeMinutos}, segundos: ${sumaDeSegundos}.`;

console.log(sumaEnTotal);