'use strict';

// RestDB credentials 
let config = {
    apiKey: '5b2ef9270c346a20d90a5dea',
    dbName: 'b4rsby-7c8a',
    collectionName: 'dogbreed'
}


// Factory for API requests, instead of using $HTTP, $Resource does the heavy work and keeps REST handling tidy 
angular.
module('breedrunner').
factory('BreedRunner', function($resource){

    var self = this;        
    self.apiKey = config.apiKey;
    self.apiUrl = "https://" + config.dbName + ".restdb.io/rest/" + config.collectionName; 

    let apiAuthHeader = {
                        "content-type": "application/json",
                        "x-apikey": self.apiKey
                    }

    return $resource(self.apiUrl + '/:id' , {id: '@_id'}, {
      query: {
        method: "GET",
        params: {},
        isArray: true,
        cache: false,
        headers: apiAuthHeader

                    // interceptor
                },
                delete: {
                    method: "DELETE",
                    headers: apiAuthHeader,
                processData: false

                },
                save: {
                    method: "POST",
                    headers: apiAuthHeader

                    // interceptor
                },
            })
});