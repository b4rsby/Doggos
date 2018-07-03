'use strict';

angular.module('dogList').
component('dogList', {


    templateUrl: '/templates/dog-list.html',
    controller: function(BreedRunner, $location, $routeParams, $rootScope, $scope, $document,$window){


        // TODO: Breed detail and petfinder lookup
        // $scope.goToBreed = function(breed){
        //     $rootScope.$apply(function(){
        //         $location.path("/breed/" + breed.id )
        //     })
        // }

        $scope.modalShown = false;
        $scope.toggleModal = function() {
            $scope.modalShown = !$scope.modalShown;
        }

        $scope.deleteBreed = function (id) {

            BreedRunner.delete({ id: id }, function(data){

                //reload elements once delete is successful, could manipulate DOM and remove card
                BreedRunner.query(function(data){
                   $scope.items = data
                });

        }, function(errorData){

            //todo: handle error deleting UI message?
            console.log(errorData)

        });

        }


        //Todo: search and query of breeds, removed when pagination was removed

        // $scope.loadingQuery = false
        // $scope.$watch(function(){
        //         // console.log($scope.query)
        //         if($scope.query) {
        //             $scope.loadingQuery = true
        //             $scope.cssClass = 'col-sm-6'
        //             if ($scope.query != q) {
        //                 $scope.didPerformSearch = false;
        //             }
        //         } else {
        //             if ($scope.loadingQuery) {
        //                 setupCol($scope.items, 2)
        //                 $scope.loadingQuery = false
        //             }
        //         }
        //     })


        //init fetch of breed
        BreedRunner.query(function(data){
           $scope.items = data
        });


        //Infinity Scroll
        //Monitor scroll posistion in window and reset to 0,0 when reaches bottom. 
        //Similar effect could be used by appending breed model to items again when bottom of page is reached $scope.items += $scope.items,
        //avoid this approach as it uncessary creates duplicates of items in DOM, if using unique IDs could get messy.
        angular.element($window).bind("scroll", function() {
            var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
            var windowBottom = (windowHeight )+ window.pageYOffset;
            if (windowBottom >= docHeight) {
               $window.scrollTo(0, 0);
            }
         });
    }
});




