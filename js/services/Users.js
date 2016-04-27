/**
 * Created by sanja on 4/20/2016.
 */
"use strict";

ceApp.factory("Users", function ($log) {

    var users = [{
        id: 1,
        name: "Sanjay Paudel",
        username: "sanjay",
        password: "sanjay",
        role: "lecturer"
    },
        {
            id: 2,
            name: "Lok Thapa",
            username: "lok",
            password: "lok",
            role: "lecturer"
        }, {
            id: 3,
            name: "Hari Chaudhary",
            username: "hari",
            password: "hari",
            role: "student"
        }, {
            id: 4,
            name: "Samir",
            username: "samir",
            password: "samir",
            role: "lecturer"
        }];


    return {
        checkLogin: function (user) {
            var foundUser = null;
            angular.forEach(users, function (key, value) {
                if (key.username == user.username && key.password == user.password) {
                    foundUser = key;
                }
            });
            return foundUser;
        },
        getUsername: function (id) {
            var username;
            angular.forEach(users, function (key, value) {
                if (key.id == id) {
                    username = key.username;
                }
            });
            return username;
        },
        getName: function (id) {
            var name;
            angular.forEach(users, function (key, value) {
                if (key.id == id) {
                    name = key.name;
                }
            });
            return name;
        },
        getAllUsersName: function () {
            var allUsers = [];
            angular.forEach(users, function (key, value) {
                allUsers.push(key.name);
            });
            return allUsers;
        },
        getAllLecturerName: function () {
            var allUsers = [];
            angular.forEach(users, function (key, value) {
                if (key.role == "lecturer") {
                    allUsers.push(key.id);
                }
            });
            return allUsers;
        },
        getAllStudentName: function () {
            var allUsers = [];
            angular.forEach(users, function (key, value) {
                if (key.role == "student") {
                    allUsers.push(key.name);
                }
            });
            return allUsers;
        }
    };

});