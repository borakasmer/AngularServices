/// <reference path="angular.min.js" />
var module = angular.module('app', []);
module.service("FirendServices", function () {
    var uid = 2;

    var friendsList = [{
        id: 0,
        'name': 'Engin',
        'email': 'engin@enginpolat.com',
        'phone': '123-2343-44'
    }, {
        id: 1,
        'name': 'Mehmet',
        'email': 'mehmet@pakcamsil.com',
        'phone': '222-3333-54'
    },
    {
        id: 2,
        'name': 'Caglar',
        'email': 'caglar@caglarozenc.com',
        'phone': '234-5421-78'
    }
    ];

    this.save = function (friend) {
        if (friend.id == null) {
            friend.id = ++uid;
            console.log(JSON.stringify(friend));
            friendsList.push(friend);
        }
        else {

            for (var i = 0; i < friendsList.length; i++) {
                if (friendsList[i].id == friend.id) {
                    friendsList[i] = friend;
                }
            };
        }
    }

    this.get = function (id) {
        var result=null;
        angular.forEach(friendsList, function (frnd) {
            if (frnd.id == id) {
                result= frnd;                
            }            
        });
        return result;
    }

    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        angular.forEach(friendsList, function (frnd) {
            if (frnd.id == id) {
                friendsList.splice(friendsList.indexOf(frnd), 1);
            }
        })
    }
    this.list = function () {
        return friendsList;
    }
});

module.controller('FriendController', function ($scope, FirendServices) {

    $scope.friends = FirendServices.list();

    $scope.saveFriend = function () {
        FirendServices.save($scope.newfriend);
        $scope.newfriend = {};
    }


    $scope.delete = function (id) {

        FirendServices.delete(id);
        if ($scope.newfriend.id == id) $scope.newfriend = {};
    }


    $scope.edit = function (id) {
        $scope.newfriend = angular.copy(FirendServices.get(id));       
    }
})