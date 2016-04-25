/**
 * Created by sanja on 4/20/2016.
 */
"use strict";

//routing
var ceApp = angular.module("CourseEnrollment", ["ngRoute", "ngStorage"]);
ceApp.config(function ($routeProvider) {
    $routeProvider.when("/login", {
            templateUrl: "./views/login.html",
            controller: "LoginCtlr"
        })
        .when("/student", {
            templateUrl: "./views/student/home.html",
            controller: "StudentHomeController"
        })
        .when("/lecturer", {
            templateUrl: "./views/lecturer/home.html",
            controller: "LecturerHomeController"
        })
        .otherwise({redirectTo: "/login"});
});


//Authentication
ceApp.run(function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event) {

        if (!Auth.isLoggedIn()) {
            console.log('DENY');
            $location.path('/login');
        }
        else {
            console.log('ALLOW');
            return (Auth.hasRole() === "student") ? $location.path("/student") : $location.path("/lecturer");
        }
    });
});