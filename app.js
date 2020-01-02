(function (){

  'use strict';

  angular.module('LunchCheck', [])
  .controller("controllerModule1", function($scope){

    $scope.name = "Pippo";
    $scope.sayHello = function (){
      return "Say hello";
    }
  });
})();
