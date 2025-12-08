const readlineSync = require('readline-sync');
const filmes = [];
for (let i = 0; i < 5; i++) {
  const nome = readlineSync.question(`Digite o nome do filme ${i + 1}: `);
  filmes.push(nome);
}

console.log('\nFilmes informados (for tradicional):');
for (let i = 0; i < filmes.length; i++) {
  console.log(filmes[i]);
}

console.log('\nFilmes informados (for...of):');
for (const filme of filmes) {
  console.log(filme);
}

