'use strict';

angular.module("travel").factory('travelPlans', function ($q, $http) {
    let travelData = () => {
        return $q(function (resolve, reject) {
            $http
            .get("../data/guides.json")
            .then((data) =>{
                resolve(data)
            })
            .catch((err) =>{

            });
        });
    };
    return{ travelData };
})