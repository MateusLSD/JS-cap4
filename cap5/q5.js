//  Faça um programa que converte uma temperatura de Celsius para Fahrenheit ou vice-versa, dependendo da escolha do usuário.

let escolha = prompt("Digite C para converter Celsius→Fahrenheit ou F para Fahrenheit→Celsius:");
let valor = Number(prompt("Digite o valor da temperatura:"));
if (escolha === "C") {
    let f = (valor * 9/5) + 32;
    console.log(valor + "°C = " + f + "°F");
} else if (escolha === "F") {
    let c = (valor - 32) * 5/9;
    console.log(valor + "°F = " + c + "°C");
}
else {
    console.log("Opção inválida!");
}
