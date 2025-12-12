const users = [];
function adicionarUsuario(nome, email, senha) {
    const usuario = { nome, email, senha };
    users.push(usuario);
}
function removerUsuario(email) {
    const index = users.findIndex(user => user.email === email);
    if (index !== -1) {
        users.splice(index, 1);
    }
}
function atualizarUsuario(email, novosDados) {
    const usuario = users.find(user => user.email === email);
    if (usuario) {
        Object.assign(usuario, novosDados);
    }
}
