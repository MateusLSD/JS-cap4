
function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
}
    return a / b;

function exponenciacao(a, b) {
    return Math.pow(a, b);
}
