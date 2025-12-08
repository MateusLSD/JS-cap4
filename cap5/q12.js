let n = Number(prompt("Digite um número para calcular o fatorial:"));
let resultado = 1;

for (let i = 1; i <= n; i++) {
  resultado *= i;
}
console.log(`O fatorial de ${n} é ${resultado}.`);
