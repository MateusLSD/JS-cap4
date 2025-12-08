//  Escreva um programa que peça ao usuário para inserir três números distintos e, em seguida, imprima o maior deles.
let numero = Number(prompt("primeiro número:"));
let numero2 = Number(prompt("segundo número:"));
let numero3 = Number(prompt("terceiro número:"));
let maior = null;
if (numero > numero2 && numero > numero3) {
    maior = numero;
}
else if (numero2 > numero3) {
    maior = numero2
}
else {
    maior = numero3
}
console.log(maior);
