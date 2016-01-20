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
            $.cookie("User", "Bora Kasmer", { expires: 7 });
        }
        //this.name = name;
    };
});

//hey, we can configure a provider!            
app.config(function (DefaultCookieProvider) {
    DefaultCookieProvider.setName('Bora');
});

app.controller('myCtrl', function ($scope, DefaultCookie) {
    $scope.Message = DefaultCookie.GetMessage;
});