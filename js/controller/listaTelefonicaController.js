angular.module('listaTelefonica')
.controller('listaTelefonicaController', function($scope){

    $scope.app = 'Lista Telefônica';

    $scope.contatos = [
        {
             nome: 'Rafaela',
             telefone: '99998888'
        },
         {
             nome: 'Pedro',
             telefone: '77778888'
        },
         {
             nome: 'Cinthia',
             telefone: '66668888'
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
    };
});