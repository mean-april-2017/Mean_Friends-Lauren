var app = angular.module("friendsApp", ["ngRoute"]);

app.config(function ($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "/partials/index.html",
    controller: "indexController"
  })
  .when("/new", {
    templateUrl: "/partials/new.html",
    controller: "newController"
  })
  .when("/edit/:id", {
    templateUrl: "/partials/edit.html",
    controller: "updateController"
  })
  .when("/show/:id", {
    templateUrl: "/partials/show.html",
    controller: "showController"
  })
  .otherwise('/')
})
