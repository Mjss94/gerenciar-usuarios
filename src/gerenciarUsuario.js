const usuarios = [ 'Mario', 'Maria', 'Joao', 'Julio', ' Ster'];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario (nome) {
     usuarios.push(nome);
     
}

module.exports = { 
    retornarUsuarios,
    adicionarNovoUsuario};