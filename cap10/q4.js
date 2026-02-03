// 4. Crie testes automatizados para todos os métodos da classe Comentario (desenvolvida no
// capítulo anterior).

class Comentario {
  constructor(autor, texto) {
    this.autor = autor;
    this.texto = texto;
    this.likes = 0;
  }
    editarTexto(novoTexto) {
    this.texto = novoTexto;
  }
    adicionarLike() {
    this.likes += 1;
  } 
    obterInfo() {
    return `Autor: ${this.autor}, Texto: ${this.texto}, Likes: ${this.likes}`;
  }
}