var app = angular.module('MyApp',[]);

app.controller('FilmesController',['$scope','$http',function($scope, $http){

  $http.get('/lista')
  .success(function(retorno) {
      $scope.filme = retorno;
  });

  $http.post('/grava',{titulo:'Gattaca',diretor:'Andrew Niccol', ano:'1997'})
  .success(function(retorno){
    console.log(retorno)
  });

}])
