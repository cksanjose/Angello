/**
 * Created by UC168923 on 2/20/14.
 */

var myModule = angular.module('Angello', []);
myModule.controller('MainCtrl', function($scope) {

    var buildIndex = function (source, property) {
        var tempArray = [];
        for (var i = 0, len = source.length; i < len; ++i) {
            tempArray[source[i][property]] = source[i];
        }

        return tempArray;
    };

    var getStatuses = function() {
        var tempArray = [
            {name:'Back Log'},
            {name:'To Do'},
            {name:'In Progress'},
            {name:'Code Review'},
            {name:'QA Review'},
            {name:'Verified'},
            {name:'Done'}
        ];
        return tempArray;
    };

    var getTypes = function() {
        var tempArray = [
            {name:'Feature'},
            {name:'Enhancement'},
            {name:'Bug'},
            {name:'Spike'}
        ];
        return tempArray;
    };


    $scope.typesIndex = buildIndex($scopes.types, 'name');
    $scope.statusesIndex = buildIndex($scopes.statuses, 'name');


    $scope.stories = [
        { title: 'Story 00', description: 'Description Pending 0'},
        { title: 'Story 01', description: 'Description Pending 1'},
        { title: 'Story 02', description: 'Description Pending 2'},
        { title: 'Story 03', description: 'Description Pending 3'},
        { title: 'Story 04', description: 'Description Pending 4'}
    ];

    $scope.currentStory;

    $scope.setCurrentStory = function (story) {
        $scope.currentStory = story;
    };

    $scope.createStory = function() {
        $scope.stories.push({
            title: 'New story',
            description: 'This description is pending...'
        });
    };

});