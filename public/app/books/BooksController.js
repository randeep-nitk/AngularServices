(function() {

    angular.module('app')
        .controller('BooksController', BooksController);


    // Use the books service which we create in this controller
    function BooksController(books) {

        // Exposing this controller instance in view using view model
        var vm = this;

        vm.appName = books.appName;
    }


}());