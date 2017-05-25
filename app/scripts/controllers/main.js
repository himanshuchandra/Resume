'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
  .controller('MainCtrl', function ($scope,$window) {
    
    $scope.name={
      White:false,
      Crimson:true
    }

      $scope.swapColor=function(){
        if($window.scrollY>648){
          console.log("hey");
            $scope.name.White=true;
            $scope.name.Crimson=false;
        }
        else{
          console.log("heyyyyyy");
          $scope.name.White=false;
          $scope.name.Crimson=true;
        }
        if (!$scope.$$phase) {
					$scope.$apply();
				}
      }

      angular.element($window).on('scroll',$scope.swapColor);
      
  });

// app.directive('scrollPosition', function($window) {
//   return {
//     scope: {
//       scroll: '=scrollPosition'
//     },
//     link: function(scope, element, attrs) {
//       var windowEl = angular.element($window);
//       var handler = function() {
//         scope.scroll = windowEl.scrollTop();
//       }
//       windowEl.on('scroll', scope.$apply.bind(scope, handler));
//       handler();
//     }
//   };
// });
