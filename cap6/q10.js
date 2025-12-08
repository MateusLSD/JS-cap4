const calcularMediaUsuario = () => {
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  const media = (num1 + num2) / 2;
  alert("A média dos dois números é: " + media.toFixed(2));
}