"use strict";

angular.module('travel').controller('bookCtrl', function ($scope, travelPlans) {
    travelPlans.travelData()
    .then((travelData) =>{
        $scope.books = travelData.data.guides;
        console.log('data',$scope.books );
        
    })
})