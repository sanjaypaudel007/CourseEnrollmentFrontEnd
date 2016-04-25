/**
 * Created by sanja on 4/21/2016.
 */
"use strict";

ceApp.controller("IndexController", function($scope, $sessionStorage, $location){
    $scope.logout = function(){
        delete $sessionStorage.loggedUser;
        //$sessionStorage.removeItem("loggedUser");
        $location.url("/login?logout=success");
    }
});