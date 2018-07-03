https://b4rsby.github.io/doggos'use strict';


angular.module("brandNav").
  directive('brandNav', function(BreedRunner, $location){
    return {    
        restrict: "E",
        templateUrl: "https://b4rsby.github.io/doggos/templates/brand-nav.html",
        link: function (scope, element, attr) { 
            scope.items = BreedRunner.query()
         scope.selectItem = function($item, $model, $label){
                // console.log($item)
                // console.log($model)
                // console.log($label)
                $location.path("/blog/" + $item.id)
                scope.searchQuery = ""
            }
            scope.seachItem = function(){
                console.log(scope.searchQuery)
                $location.path("/blog/").search("q", scope.searchQuery)
                scope.searchQuery = ""
            }
        }
    }
});