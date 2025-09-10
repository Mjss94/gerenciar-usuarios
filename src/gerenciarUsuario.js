const usuarios = [
    {
        nome: 'Mario',
        email: 'Mario@hotmail.com'
    },

    {
        nome: 'Maria',
        email: 'Maria@hotmail.com'
    },

    {
        nome: 'Joao',
        email: 'Joao@yahoo.com'
    },
    {
        nome: 'Julio',
        email: 'Julio123@hotmail.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);

}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
};