const presio = prompt('por favor ingrese el monto del pedido');
const divPersonas = prompt('porfavor ingrese las personas');
const ingresarP = prompt('porfavor ingrese la propina');
const impuesto = prompt('ingrese valor de los impuestos');

const porsentaje = Number(presio) *(Number(ingresarP)/100);
const impuestoP = Number(presio) *(Number(impuesto)/100);

const sumaImpuestos = porsentaje + impuestoP;

const sumaTotal = Number(presio) + Number(sumaImpuestos);

const divicionPersonas = Number(sumaTotal) / Number(divPersonas);
console.log(divicionPersonas);