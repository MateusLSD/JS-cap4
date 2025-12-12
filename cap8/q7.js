
import { create, all } from 'mathjs';

const math = create(all);
const numero = parseFloat(prompt("Digite um número para calcular o logaritmo:"));
const logaritmo = math.log(numero);
console.log(`O logaritmo de ${numero} é: ${logaritmo}`);
