//crear modulo
var angularRoutingApp = angular.module("angularRoutingApp", ["ngRoute"]);

//configuracion rutas
angularRoutingApp.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl:"pages/home.html",
    controller:"mainController"})
  .when("/acerca", {
    templateUrl:"pages/acerca.html",
    controller:"aboutController"})
  .when("/contacto", {
    templateUrl:"pages/contacto.html",
    controller:"contactController"})
  .otherwise({
    redirectTo:"/"});
});

//controllers
angularRoutingApp.controller("mainController", function($scope){
  $scope.message = "Pagina inicial.";
});

angularRoutingApp.controller("aboutController", function($scope){
  $scope.message = "Pagina acerca de.";
});

angularRoutingApp.controller("contactController", function($scope){
  $scope.message = "Pagina de contacto.";
});
