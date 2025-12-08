
let filmesRecomendados = filmes.filter((filme, index) => index < 2);
console.log("Filmes recomendados:", filmesRecomendados);
filmes.forEach(filme => {
    console.log(`Filme: ${filme} - Crítica: Esse filme é tão bom que até meu cachorro adoraria!`);
});