// 2. Crie testes automatizados para todos os métodos da classe Usuario

class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
    atualizarEmail(novoEmail) {
    this.email = novoEmail;
  }
    obterInfo() {
    return `Nome: ${this.nome}, Email: ${this.email}`;
  }
    validarEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(this.email);
  }
}