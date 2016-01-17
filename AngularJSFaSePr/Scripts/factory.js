/// <reference path='angular.min.js' />

var module = angular.module('app', []);
module.factory('DropDownFactory', function () {
    return {
        getAllData: function () {
            return [{ plaka: '01', il: 'ADANA' }, { plaka: '02', il: 'ADIYAMAN' }, { plaka: '03', il: 'AFYON' }, { plaka: '04', il: 'AĞRI' }, { plaka: '05', il: 'AMASYA' }, { plaka: '06', il: 'ANKARA' }, { plaka: '07', il: 'ANTALYA' }
            , { plaka: '08', il: 'ARTVİN' }, { plaka: '09', il: 'AYDIN' }, { plaka: '10', il: 'BALIKESİR' }, { plaka: '11', il: 'BİLECİK' }, { plaka: '12', il: 'BİNGÖL' }, { plaka: '13', il: 'BİTLİS' }
            , { plaka: "14", il: 'BOLU' }, { plaka: "15", il: 'BURDUR' }, { plaka: "16", il: 'BURSA' }, { plaka: "17", il: 'ÇANAKKALE' }, { plaka: "18", il: 'ÇANKIRI' }, { plaka: "19", il: 'ÇORUM' }, { plaka: "20", il: 'DENİZLİ' }
            , { plaka: "21", il: 'DİYABAKIR' }, { plaka: "22", il: 'EDİRNE' }, { plaka: "23", il: 'ELAZIĞI' }, { plaka: "24", il: 'ERZİNCAN' }, { plaka: "25", il: 'ERZURUM' }, { plaka: "26", il: 'ESKİŞEHİR' }];
        },
        writePlaka: function (No) {            
            return "Plaka :" + No;
        }
    }
});

module.controller('CityController', function ($scope, DropDownFactory) {
    $scope.cityList = DropDownFactory.getAllData();
    $scope.update = function () {        
        $scope.Plaka = DropDownFactory.writePlaka($scope.selectedItem)
    };
    /*angular.forEach($scope.cityList, function (item) {
        console.log(item);
    });*/
});