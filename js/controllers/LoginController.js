/**
 * Created by sanja on 4/20/2016.
 */

"use strict";

ceApp.controller("LoginCtlr", ["$scope", "Users", "$location", "$sessionStorage", "Auth", function ($scope, Users, $location, $sessionStorage, Auth) {

    init();
    function init() {
        if (Auth.isLoggedIn()) {
            return (Auth.hasRole() === "student") ? $location.path("/student") : $location.path("/lecturer");
        }
        $scope.hasError = false;
        var search = $location.search();
        console.log(search.logout);
        ($location.search().logout == "success") ? $scope.isLogout = true : $scope.isLogout = false;
        $scope.logoutMessage = "Successfully logout";
    }

    $scope.checkLogin = function (user) {
        var loadedUser = Users.checkLogin(user);
        if (loadedUser === null) {
            $scope.hasError = true;
            $scope.errorMessage = "User Credentials did not match";
        }
        else {
            // Check browser support
            if (typeof(Storage) !== "undefined") {
                // Store
                $sessionStorage.loggedUser = loadedUser;
                console.log($sessionStorage.loggedUser);
                if (loadedUser.role === "student") {
                    $location.url("/student");
                }
                else if (loadedUser.role === "lecturer") {
                    $location.url("/lecturer");
                }
            } else {
                window.alert("Sorry, your browser does not support Web Storage...");
                $location.url("/login");
            }


        }
    }
}]);