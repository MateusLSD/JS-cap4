
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
        this.amigos = [];
        this.postagens = [];
    }
    adicionarAmigo(amigo) {
        this.amigos.push(amigo);
    }
    criarPostagem(conteudo) {
        const postagem = new Postagem(this, conteudo);
        this.postagens.push(postagem);
        return postagem;
    }
    curtirPostagem(postagem) {
        postagem.adicionarCurtida(this);
    }
    comentarPostagem(postagem, conteudo) {
        const comentario = new Comentario(this, conteudo);
        postagem.adicionarComentario(comentario);
    }
}