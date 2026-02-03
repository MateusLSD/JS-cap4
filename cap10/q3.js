// 3. Crie testes automatizados para todos os métodos da classe Publicacao (desenvolvida no capítulo
// // anterior)

class Publicacao {
  constructor(titulo, autor, conteudo) {
    this.titulo = titulo;
    this.autor = autor;
    this.conteudo = conteudo;
  }
    editarConteudo(novoConteudo) {
    this.conteudo = novoConteudo;
  }
    obterResumo() {
    return `${this.titulo} por ${this.autor}`;
  }
    contarPalavras() {
    return this.conteudo.split(' ').length;
  }
}