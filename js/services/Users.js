/**
 * Created by sanja on 4/20/2016.
 */
"use strict";

ceApp.factory("Users", function ($log) {

    var users = [{
        name : "Sanjay Paudel",
        username : "sanjay",
        password : "sanjay",
        role : "lecturer"
    },
        {
            name : "Lok Thapa",
            username : "lok",
            password : "lok",
            role : "lecturer"
        },{
            name : "Hari Chaudhary",
            username : "hari",
            password : "hari",
            role : "student"
        }];


    return {
        checkLogin : function(user){
            var foundUser = null;
            angular.forEach(users, function(key, value) {
                if(key.username  == user.username && key.password == user.password ){
                    foundUser = key;
                }
            });
            return foundUser;
        }
    };

});