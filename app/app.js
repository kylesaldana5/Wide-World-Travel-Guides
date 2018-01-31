"use strict";

angular.module("travel", ['ngRoute'])
    .config($routeProvider =>{
        $routeProvider
        .when('/', {
            templateUrl: 'app/partials/books.html',
            controller: 'bookCtrl'
        })
        .otherwise('/')
    })