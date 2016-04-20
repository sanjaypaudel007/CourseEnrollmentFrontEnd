/**
 * Created by sanja on 4/20/2016.
 */

"use strict";

ceApp.controller("LoginCtlr",["$scope", "Users", function ($scope, Users) {

    //$scope.user="";


    $scope.checkLogin = function(user){
        Users.checkLogin(user);
    }
}]);