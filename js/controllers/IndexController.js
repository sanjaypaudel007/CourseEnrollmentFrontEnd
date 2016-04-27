/**
 * Created by sanja on 4/21/2016.
 */
"use strict";

ceApp.controller("IndexController", function ($scope, $sessionStorage, $location, Auth) {
    $scope.username = "";
    $scope.isAuthenticated = function () {
        var isLoggedin = Auth.isLoggedIn();
        if (isLoggedin) {
            var loggedUser = $sessionStorage.loggedUser;
            $scope.username = loggedUser.name;
        }
        return isLoggedin;
    }
    $scope.hasRole = function (role) {
        return (Auth.hasRole() == role) ? true : false;
    }
    $scope.logout = function () {
        delete $sessionStorage.loggedUser;
        $location.url("/login?logout=success");
    }
});