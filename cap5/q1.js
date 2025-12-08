// 1. Implemente um programa que solicita um número ao usuário e seguida exibe uma mensagem informando se o número é par ou ímpar.

let numero = Number(prompt("Digite um número que você gosta muito, mais do que sua família:"));
if (numero % 2 === 0) {
    console.log("Seu número é par, logo é incrível! Que bom gosto você tem.");
} else {
    console.log("Seu número é ímpar, logo é horrível! Que péssimo gosto você tem.");
}
