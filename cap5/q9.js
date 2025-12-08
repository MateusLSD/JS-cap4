// 9. Escreva um programa que peça ao usuário sua altura e peso, calcule o IMC (Índice de Massa Corporal) e classifique conforme a tabela da OMS (abaixo do peso, peso normal, sobrepeso, obesidade). Exiba o valor do IMC e a respectiva classificação.
//

let altura = Number(prompt("Digite sua altura em metros:"));
let peso = Number(prompt("Digite seu peso em quilos:"));
let IMC = peso / (altura * altura);
if (IMC < 18.5) {
    console.log(`Você está abaixo do peso com um IMC de ${IMC.toFixed(2)}`);
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log(`Você está com o peso normal, possuindo um IMC de ${IMC.toFixed(2)}`);
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log(`Você está com sobrepeso, possuindo um IMC de ${IMC.toFixed(2)}`);
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log(`Você está com obesidade grau I, possuindo um IMC de ${IMC.toFixed(2)}`);
} else if (IMC >= 35 && IMC <= 39.9) {
    console.log(`Você está com obesidade grau II, possuindo um IMC de ${IMC.toFixed(2)}`);
} else {
    console.log(`Você está com obesidade grau III, possuindo um IMC de ${IMC.toFixed(2)}`);
}   