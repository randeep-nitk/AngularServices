(function() {

    var app = angular.module('app', []);  

    // Creating service using the "provider" method

    // config method gets executed everytime this module is loaded.
    // $provide is the built in angular service using which we can create a service
    app.config(function ($provide) {

        // calling the provider function of $provide service to create a books service
        $provide.provider('books', function () {

            // every provider has to have a property named $get that should contain the function
            // that will be executed to create the service
            this.$get = function () {

                var appName = 'Book Logger';
                var appDesc = 'Track which books you read!';

                return {
                    appName: appName,
                    appDesc: appDesc
                };

            };
        });

    });
}());