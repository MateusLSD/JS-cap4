
let filmes = [];

for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}
console.log("Os filmes informados foram:");
for (let filme of filmes) {
  console.log(filme);
}
