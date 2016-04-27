/**
 * Created by sanja on 4/25/2016.
 */
"use strict";

ceApp.filter("ClassLevel", function(){
    return function(level){
        switch(level){
            case 1:
                return "Beginner";
            case 2:
                return "Intermediate";
            case 3 :
                return "Advanced";
            default:
                return "N/A";
        }
    }
});

ceApp.filter("ClassCreatedBy", function(Users){
    return function(lecturerId){
        return Users.getName(lecturerId);
    }
})