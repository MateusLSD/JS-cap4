// 1. Adicione mais cenários de teste para as funções de operações matemáticas do primeiro exemplo,
// incluindo operações com strings em vez de números. Se necessário, faça alterações no código
// funcional para que se adeque melhor aos novos cenários.

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
    return a / b;
}