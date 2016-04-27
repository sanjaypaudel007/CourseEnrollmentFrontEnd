/**
 * Created by sanja on 4/25/2016.
 */
"use strict";

ceApp.factory("Class", function () {
    var classes = [{
        id: 1,
        name: "EA",
        createdBy: 1,
        startDate: "03/01/2016",
        endDate: "04/01/2016",
        startTime: "09:00 AM",
        duration: 1,
        level: 1,
        abstract: "Enterprise Architecture Courses on JPA using JSF.",
        location: {
            street: "1335 Meadow Creek Dr",
            city: "Irving",
            state: "TX"
        }
    }, {
        id: 2,
        name: "ASD",
        createdBy: 4,
        startDate: "03/01/2016",
        endDate: "04/01/2016",
        startTime: "09:00 AM",
        duration: 1,
        level: 2,
        abstract: "ASD on Design Patterns.",
        location: {
            street: "1335 Meadow Creek Dr",
            city: "Irving",
            state: "TX"
        }
    }, {
        id: 3,
        name: "WAA",
        createdBy: 1,
        startDate: "04/01/2016",
        endDate: "05/01/2016",
        startTime: "10:00 AM",
        duration: 2,
        level: 3,
        abstract: "WAA with Springs.",
        location: {
            street: "1335 Meadow Creek Dr",
            city: "Irving",
            state: "TX"
        }
    }];

    return {
        getAllClass: function () {
            return classes;
        },
        getClassByLecturer : function(lecturerId){
            var foundClass = [];
            angular.forEach(classes, function (key, value) {
                if(key.createdBy == lecturerId){
                    foundClass.push(key);
                }
            })
            return foundClass;
        }
    }
})