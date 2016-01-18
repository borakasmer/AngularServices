/// <reference path='angular.min.js' />

var module = angular.module('app', []);
module.factory('DropDownFactory', function () {
    return {
        getAllData: function () {
            return [{ plaka: '01', il: 'ADANA' }, { plaka: '02', il: 'ADIYAMAN' }, { plaka: '03', il: 'AFYON' }, { plaka: '04', il: 'AĞRI' }, { plaka: '05', il: 'AMASYA' }, { plaka: '06', il: 'ANKARA' }, { plaka: '07', il: 'ANTALYA' }
            , { plaka: '08', il: 'ARTVİN' }, { plaka: '09', il: 'AYDIN' }, { plaka: '10', il: 'BALIKESİR' }, { plaka: '11', il: 'BİLECİK' }, { plaka: '12', il: 'BİNGÖL' }, { plaka: '13', il: 'BİTLİS' }
            , { plaka: "14", il: 'BOLU' }, { plaka: "15", il: 'BURDUR' }, { plaka: "16", il: 'BURSA' }, { plaka: "17", il: 'ÇANAKKALE' }, { plaka: "18", il: 'ÇANKIRI' }, { plaka: "19", il: 'ÇORUM' }, { plaka: "20", il: 'DENİZLİ' }
            , { plaka: "21", il: 'DİYABAKIR' }, { plaka: "22", il: 'EDİRNE' }, { plaka: "23", il: 'ELAZIĞI' }, { plaka: "24", il: 'ERZİNCAN' }, { plaka: "25", il: 'ERZURUM' }, { plaka: "26", il: 'ESKİŞEHİR' }
            , { plaka: "27", il: 'GAZİANTEP' }, { plaka: "28", il: 'GİRESUN' }, { plaka: "29", il: 'GÜMÜŞHANE' }, { plaka: "30", il: 'HAKKARİ' }, { plaka: "31", il: 'HATAY' }, { plaka: "32", il: 'ISPARTA' }
            , { plaka: "33", il: 'İÇEL' }, { plaka: "34", il: 'İSTANBUL' }, { plaka: "35", il: 'İZMİR' }, { plaka: "36", il: 'KARS' }, { plaka: "37", il: 'KASTAMONU' }, { plaka: "38", il: 'KAYSERİ' }
            , { plaka: "39", il: 'KIRKLARELİ' }, { plaka: "40", il: 'KIRŞEHİR' }, { plaka: "41", il: 'KOCAELİ' }, { plaka: "42", il: 'KONYA' }, { plaka: "43", il: 'KÜTAHYA' }, { plaka: "44", il: 'MALATYA' }
            , { plaka: "45", il: 'MANİSA' }, { plaka: "46", il: 'KAHRAMANMARAŞ' }, { plaka: "47", il: 'MARDİN' }, { plaka: "48", il: 'MUĞLA' }, { plaka: "49", il: 'MUŞ' }, { plaka: "50", il: 'NEVŞEHİR' }
            , { plaka: "51", il: 'NİĞDE' }, { plaka: "52", il: 'ORDU' }, { plaka: "53", il: 'RİZE' }, { plaka: "54", il: 'SAKARYA' }, { plaka: "55", il: 'SAMSUN' }, { plaka: "56", il: 'SİİR' }
            , { plaka: "57", il: 'SİNOP' }, { plaka: "58", il: 'SİVAS' }, { plaka: "59", il: 'TEKİRDAĞ' }, { plaka: "60", il: 'TOKAT' }, { plaka: "61", il: 'TRABZON' }, { plaka: "62", il: 'TUNCELİ' }
            , { plaka: "63", il: 'ŞANLIURFA' }, { plaka: "64", il: 'UŞAK' }, { plaka: "65", il: 'VAN' }, { plaka: "66", il: 'YOZGAT' }, { plaka: "67", il: 'ZONGULDAK' }, { plaka: "68", il: 'AKSARAY' }
            , { plaka: "69", il: 'BAYBURT' }, { plaka: "70", il: 'KARAMAN' }, { plaka: "71", il: 'KIRKLARELİ' }, { plaka: "72", il: 'BATMAN' }, { plaka: "73", il: 'ŞIRNAK' }, { plaka: "74", il: 'BARTIN' }
            , { plaka: "75", il: 'ARDAHAN' }, { plaka: "76", il: 'IĞIDIR' }, { plaka: "77", il: 'YALOVA' }, { plaka: "78", il: 'KARABÜK' }, { plaka: "79", il: 'KİLİS' }, { plaka: "80", il: 'OSMANİYE' }, { plaka: "81", il: 'DÜZCE' }];
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