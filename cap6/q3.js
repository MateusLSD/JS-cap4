function calcularMedia() {
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  const num3 = parseFloat(prompt("Digite o terceiro número:"));
    const media = (num1 + num2 + num3) / 3;
    alert("A média dos três números é: " + media.toFixed(2));
}

calcularMedia();
