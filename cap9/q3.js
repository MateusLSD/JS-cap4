
class Musica {
    constructor(titulo, artista, duracao, arquivo) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
        this.arquivo = arquivo;
        this.isReproduzindo = false;
    }
    reproduzir() {
        this.isReproduzindo = true;
        console.log(`Reproduzindo: ${this.titulo} de ${this.artista}`);
    }
    pausar() {
        this.isReproduzindo = false;
        console.log(`Pausado: ${this.titulo}`);
    }
}

class Artista { 
    constructor(nome, foto) {
        this.nome = nome;
        this.foto = foto;
        this.musicas = [];
    }
    listaDeMusicas() {
        return this.musicas;
    }
    adicionarMusica(musica) {
        this.musicas.push(musica);
    }
    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica);
    }
}

class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.musicas = [];
        this.musicaAtualIndex = 0;
    }
    adicionarMusica(musica) {
        this.musicas.push(musica);
    }
    removerMusica(musica) {
        this.musicas = this.musicas.filter(m => m !== musica);
    }
    reproduzir() {
        if (this.musicas.length > 0) {
            this.musicas[this.musicaAtualIndex].reproduzir();
        } else {
            console.log("A playlist está vazia.");
        }
    }
    avancarMusica() {
        if (this.musicaAtualIndex < this.musicas.length - 1) {
            this.musicas[this.musicaAtualIndex].pausar();
            this.musicaAtualIndex++;
            this.musicas[this.musicaAtualIndex].reproduzir();
        } else {
            console.log("Você está na última música da playlist.");
        }
    }
    voltarMusica() {
        if (this.musicaAtualIndex > 0) {
            this.musicas[this.musicaAtualIndex].pausar();
            this.musicaAtualIndex--;
            this.musicas[this.musicaAtualIndex].reproduzir();
        } else {
            console.log("Você está na primeira música da playlist.");
        }
    }
}