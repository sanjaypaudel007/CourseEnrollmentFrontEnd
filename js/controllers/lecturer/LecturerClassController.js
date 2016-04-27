/**
 * Created by sanja on 4/25/2016.
 */
"use strict";

ceApp.controller("LecturerClassController", function($scope, Class, Users, $route){

    $scope.lecturers = Users.getAllLecturerName();
    $scope.sortOrder = "";
    $scope.columnToSort = "";
    $scope.reverseSort = false;
    $scope.searchText = "";
    $scope.resetView = function(){
        $route.reload();
    };
    $scope.sortByColumn = function(columnName){
        $scope.reverseSort = angular.equals($scope.columnToSort, columnName) ? !$scope.reverseSort : false;
        $scope.columnToSort = columnName;
    };
    $scope.getCssClassFor = function(columnName){
        if ($scope.columnToSort == columnName) {
            return ($scope.reverseSort) ? 'arrow-down' : 'arrow-up';
        }
        return '';
    };
    $scope.editClass = function(c){
        console.log("class to edit " + c.name);
    };
    $scope.deleteClass = function (c) {
        console.log("class to delete " + c.name);
    };

    //for pagination
    $scope.classes = [];
    $scope.filteredClasses = [];
    $scope.currentPage = 1;
    $scope.numPerPage = 1;
    $scope.maxSize = 5;

    $scope.$watch('currentPage + numPerPage', updateFilteredItems);
    getClasses();
    function getClasses(){
        $scope.classes = Class.getAllClass();
    }
    function updateFilteredItems() {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage),
            end = begin + $scope.numPerPage;

        $scope.filteredClasses = $scope.classes.slice(begin, end);
    }
});