const { retornarUsuarios, adicionarNovoUsuario} = require ('../src/gerenciarUsuario');
const { expect} = require ( 'chai');

describe ( 'Testar as funcoes de gestao de usuarios', function(){

    it ('Validar que posso adicionar um novo nome de usuario na lista', function() {
        // 1. Adicionar um novo nome de usuarios
        adicionarNovoUsuario('Ster');
        // 2. Retorna a lista de usuraios na caixa lista de usuarios
        const listaDeUsuarios = retornarUsuarios();
        // 3. Comparar se o novo nome esta no fim da lista de usuarios
        expect( listaDeUsuarios.at(-1)).to.equal('Ster');

    });
})
