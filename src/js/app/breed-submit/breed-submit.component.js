'use strict';

angular.module('ui.bootstrap.demo').controller('ModalBreedCtrl', function (BreedRunner, $uibModal, $log, $document) {
  var $ctrl = this;




  //open a new modal instance view 
  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
    angular.element($document[0].querySelector('.modal-breed ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: '/templates/breedModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
    });

    modalInstance.result.then(function () {
      // TODO: handle cleanup when closing modal, could inse

         }, function () {
     
    });
  };

});

// $uibModalInstance represents a modal window (instance) dependency.
// Not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function (BreedRunner, $uibModalInstance, $route) {
 
  var $ctrl = this;
    //size of breed for select
  $ctrl.breedSize = ['Petite', 'Small', 'Medium','Large','X-Large'];

  // Form may be valid, but probabbly should never trust user input even if validated, close $uibModalInstance
  // and submit form
  $ctrl.ok = function(isValid) {

    $uibModalInstance.close();

  // Build our post request
    let submitBreedBuild = {
      breed: this.breedSubmit.name,
      description: this.breedSubmit.description,
      size: this.breedSubmit.selectedSize,
      lifespan: this.breedSubmit.minAge + "-" + this.breedSubmit.maxAge + " Years"
    }

  // Submit user created breed and reload the page
    BreedRunner.save(submitBreedBuild, function(data){
          // TODO: Better implementation of refreshing breed models on the page, refreshing page seems
          //like a pretty anti-angular solution.
          $route.reload()
      }, function(errorData){
          // TODO: handle error breed creation UI message
          console.log(errorData)

    })
  };

// dissmiss $uibModalInstance
  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});


