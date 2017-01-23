angular.module('listaTelefonica')
.controller('listaTelefonicaController', function($scope){

    $scope.app = 'Lista Telefônica';

    $scope.contatos = [
        {
             nome: 'Rafaela',
             telefone: '99998888',
             cor: 'blue'
        },
         {
             nome: 'Pedro',
             telefone: '77778888',
             cor: 'yellow'
        },
         {
             nome: 'Cinthia',
             telefone: '66668888',
             cor: 'red'
        }
    ];

    $scope.operadoras = [
        {
            nome: 'Oi',
            codigo: 14, 
            categoria: 'Celular'
        },
        {
            nome: 'Tim',
            codigo: 15, 
            categoria: 'Celular'
        },
        {
            nome: 'Vivo',
            codigo: 41, 
            categoria: 'Celular'
        },
        {
            nome: 'GVT',
            codigo: 25, 
            categoria: 'Fixo'
        },
        {
            nome: 'Embratel',
            codigo: 21, 
            categoria: 'Fixo'
        }
    ];

    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";

    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

    $scope.apagarContatos = function(contatos){
       //Ele vai atribuir ao $scope.contatos todos os que não foram selecionados. 

        //o filter me permite passar uma função, essa função recebe um elemento (contato)
        //eu analiso o contato: eu só faço o return se o contato estiver selecionado
        //ele retorna outro array
       $scope.contatos = contatos.filter(function(contato){
            if (!contato.selecionado){
                return contato;
            }         
        });
        console.log($scope.contatos);
    };

    $scope.isContatoSelecionado = function(contatos){
        //some: forma similar ao filter. Vou olhar contato a contato e vou retornar true se contato.selecionado
        //se pelo menos um dos itens do array for true já retorna true
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    };
});