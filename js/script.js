var veiculos = ['polo', 'virtus', 'T-cross', 'Nivus', 'Jetta'];

console.log('----VEICULOS----');

console.log('Imprimindo um veiculo de cada vez');
console.log(veiculos[0]);
console.log(veiculos[1]);
console.log(veiculos[2]);
console.log(veiculos[3]);

console.log('----IMPRIMINDO COM FOOOR----');

for(i=0; i<= veiculos.length; i++){
    console.log(veiculos[i]);
}


console.log("-----USANDO IF----")
a = 10;
b = 5;
if(a>b){
    console.log('A é maior');
} else {
    console.log('B é maior');
}


console.log('----SWITCH CASE----')

var a = 10;
var b = 20;
var opcao = 1;
var resultado = 0;

switch (opcao)
{
    case 1: resultado = a + b;
        console.log('Soma: ' + resultado)
        break;
    case 2: resultado = a - b;
        console.log('Subtração: ' + resultado)
        break;
    case 3: resultado = a * b;
        console.log('Multiplicação: ' + resultado)
        break;
    case 4: resultado = a / b;
        console.log('Divisão: ' + resultado)
        break;
    default: console.log('Opção invalida!')
}