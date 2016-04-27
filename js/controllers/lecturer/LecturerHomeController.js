/**
 * Created by sanja on 4/21/2016.
 */
"use strict";

ceApp.controller("LecturerHomeController", function($scope, $location, $sessionStorage){
    var loggedUser = $sessionStorage.loggedUser;
    $scope.username = loggedUser.username;
})