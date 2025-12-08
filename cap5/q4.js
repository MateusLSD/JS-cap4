// Desenvolva um programa que receba o ano de nascimento de uma pessoa e informe se ela já é maior de idade ou não.

let AnoDeNascimento = Number(prompt("Ano em que você nasceu:"));
let AnoAtual = 2025;
let idade = AnoAtual - AnoDeNascimento;
if (idade >= 18) {
    console.log("Você é maior de idade!");
}
else {
    console.log("Você é menor de idade!");
}
