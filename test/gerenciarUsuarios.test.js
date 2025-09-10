const { retornarUsuarios, adicionarNovoUsuario} = require ('../src/gerenciarUsuario');
const { expect} = require ( 'chai');

describe ( 'Testar as funcoes de gestao de usuarios', function(){

    it ('Validar que posso adicionar um novo nome de usuario na lista', function() {
        // 1. Adicionar um novo nome de usuarios
        adicionarNovoUsuario({
            nome: 'Julio',
            email: 'Julio123@hotmail.com'
        });

        // 2. Retorna a lista de usuraios na caixa lista de usuarios
        const listaDeUsuarios = retornarUsuarios();
        

        // 3. Comparar se o novo nome esta no fim da lista de usuarios
       // expect( listaDeUsuarios.at(-1).nome).to.equal('Julio');
       // expect( listaDeUsuarios.at(-1).email).to.equal('Julio123@hotmail.com');

        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'Julio',
            email: 'Julio123@hotmail.com'
        });
    });
})
