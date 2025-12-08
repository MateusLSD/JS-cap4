let prato = prompt("Escolha um prato: pizza, hambúrguer, salada ou macarrão");

switch (prato) {
  case "pizza":
    console.log("Preço: R$ 35,00 — Pizza de mussarela crocante. É massa demais!");
    break;
  case "hambúrguer":
    console.log("Preço: R$ 25,00 — Hambúrguer artesanal com batatas. Recomendo só pela batata!");
    break;
  case "salada":
    console.log("Preço: R$ 18,00 — Salada fresca com molho especial. Se quiser perder dinheiro, é uma baita escolha!");
    break;
  case "macarrão":
    console.log("Preço: R$ 22,00 — Macarrão ao molho vermelho. Atenção! Tem um pouco de macarrão nesse molho.");
    break;
  default:
    console.log("Escolha algo do cardápio, senhor(a)!");
}
