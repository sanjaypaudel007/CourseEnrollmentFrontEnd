/**
 * Created by sanja on 4/21/2016.
 */
"use strict";

ceApp.controller("StudentHomeController", function($scope, $location, $sessionStorage){
    console.log($sessionStorage.loggedUser);
    var loggedUser = $sessionStorage.loggedUser;
    // if(loggedUser == null){
    //     $location.url("/login");
    // }
    $scope.username = loggedUser.username;
})