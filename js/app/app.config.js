'use strict';

angular.module('doggo').
    config(
        function(
          $locationProvider,
          $routeProvider
          ){
          $locationProvider.html5Mode({
              enabled:true
            })

//Routing in place to provide extended functionality 

          $routeProvider.
              when("/", {
                template: "<dog-list></dog-list>"
              }).
              // when("/breed/:id", {
              //   templateUrl: "/templates/breedDetail.html"
              // }).
             
              otherwise({
                  template: "Not Found Dogoo"
              })

    });