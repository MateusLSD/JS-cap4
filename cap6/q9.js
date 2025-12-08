const exibirMensagemArrow = () => {
  alert("Esta é uma mensagem exibida pela função exibirMensagemArrow!");
}
const calcularMediaTresNumerosArrow = (a, b, c) => {
  const media = (a + b + c) / 3;
  alert("A média dos três números é: " + media.toFixed(2));
}
const calcularQuadradoArrow = (num) => num * num;

const escopoBlocoArrow = () => {
    if (true) {
        let variavelBloco = "Estou dentro do bloco";
        console.log(variavelBloco);
    }
}