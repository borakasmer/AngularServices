var app = angular.module('app', []);

app.provider('DefaultCookie', function () {

    //this.name = 'Default';

    this.$get = function () {
        //var name = this.name;
        var name = $.cookie("User");
        return {
            GetMessage: "WellCome, " + name + "!"
        }
    };

    this.setName = function (name) {
        if ($.cookie("User") == null) {
            $.cookie("User", name, { expires: 7 });
        }
        //this.name = name;
    };
});

app.directive('focus', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element[0].focus();
        }
    }
});

//hey, we can configure a provider!            
app.config(function (DefaultCookieProvider) {
    DefaultCookieProvider.setName('Bora Kasmer');
});

app.controller('myCtrl', function ($scope, DefaultCookie) {
    $scope.Message = DefaultCookie.GetMessage;
    $scope.SetUser = function () {       
        if ($scope.User != "") {
            $.cookie("User", $scope.UserName + " " + $scope.UserSurname, { expires: 7 });
            $scope.Message = "WellCome, " + $.cookie("User") + "!";
        }
    }
});