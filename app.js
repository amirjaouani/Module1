(function (){

  'use strict';

  angular.module('LunchCheck', [])
  .controller("controllerModule1", LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];

  function LunchCheckController($scope){

    $scope.name = "Default value";
    $scope.CheckIfTooMuch = function(){

      var words = $scope.name.split(',');

      if($scope.name == ''){
        $scope.messageOutput = "Please enter data first";
      }
      else if(words.length <= 3){
        $scope.messageOutput = "Enjoy!";
      }else{
        $scope.messageOutput = "Too much!";
      }
    };
  }

})();
