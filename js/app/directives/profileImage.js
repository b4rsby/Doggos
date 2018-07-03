
// Query PIXABAY to retrieveimages of dogs based on breed name.

angular.module('doggo').directive('breedImage', function($http) {
  return {
    restrict: 'E',

    link: function(scope, element, attrs) {

          scope.$watch(attrs.dogBreed, function(value) {
   
          // let's do nothing if the value comes in empty, null or undefined
          if (value.breed){


          // remove spaces for image query, and appended dog to try narrow down false positives
          let breedSearchQuery = value.breed.split(' ').join('+'); + '+dog' 
          // let breedId = value._id
   
            // Get the photos for the specified breed using the Search query
            // This returns a collection of photos in photoSrcs.
	          $http.get('https://pixabay.com/api/?key=9374149-f8208ada2f188a750dc26def6&q='+ breedSearchQuery +' &image_type=photo&category=animals')
	              .then(function(response) {

                // If there is more than one photo in succesful response construct the tag to insert into the element.
	              if (response.data.totalHits > 1){
                  let image = response.data.hits[0].webformatURL
                  let tag = '<img class="card-img-top" src=' + image +'>' 
                  element.append(tag);
	              	} else {
                    // handle the succeessful request but 0 images supplied by pixabat
                    // possibly rollback to another image provider
                  }

            }, function(error) {
              scope.error3 = JSON.stringify(error);
            });
              }
          
        });
    },
  };
});


  




