function calcularQuadrado(num) {
  return num * num;
}
const numero = parseFloat(prompt("Digite um número para calcular o quadrado:"));
const quadrado = calcularQuadrado(numero);
alert("O quadrado de " + numero + " é: " + quadrado);