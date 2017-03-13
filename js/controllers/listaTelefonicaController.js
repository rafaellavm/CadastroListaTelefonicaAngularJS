angular.module('listaTelefonica')
.controller('listaTelefonicaController', function($scope, uppercaseFilter, $http, contatosAPI, operadorasAPI){

    $scope.app = 'Lista Telefônica';
    $scope.operadoras = [];
    $scope.contatos = [];
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    $scope.message = '';
    
    var carregarContatos = function(){
        contatosAPI.getContatos()
      .then(function(success){
            $scope.contatos = success.data;
            //console.log(success);
            //console.log(success.status);
      }, function(error){
            $scope.message = 'Erro ao carregar a lista  de contatos: ', error.status, '/', error.data;
        });      
    };
    
    var carregarOperadoras = function(){
       operadorasAPI.getOperadoras()
      .then(function(success){
            $scope.operadoras = success.data;
            //console.log(success);
            //console.log(success.status);
      }, function(error,status){
            
        });  
    };

    $scope.adicionarContato = function(contato){
        contato.data = new Date();
       contatosAPI.saveContato(contato)
      .then(function(success){
            $scope.contatoForm.$setPristine();
            //$scope.contato.push(contato);
            delete $scope.contato;
            carregarContatos();
            
      }, function(error,status){
            
        });  
        
       /* $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();*/
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

    $scope.ordernarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = $scope.direcaoDaOrdenacao;
    };
    
    carregarContatos();
    carregarOperadoras();
});