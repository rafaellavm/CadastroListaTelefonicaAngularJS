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

    $scope.adicionarContato = function(contato){
        $scope.contatos.push(angular.copy(contato));
        //delete $scope.contato;
    };
});