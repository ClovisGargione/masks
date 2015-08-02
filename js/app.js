/**
 * Created by c_r_s_000 on 02/08/2015.
 */
var app = angular.module('app',[]);

app.controller('appController',function($scope){

});

app.directive('uiDate',function(){
    return{
        restrict:"A",
        scope:{
            language:"@"
        },
        require:"ngModel",
        link: function(scope, element, attrs, ctrl) {
            var _formatDate = function(date, lang){
                date = date.replace(/[^0-9]+/g, "");
                if(lang === 'pt') {
                    if (date.length > 2) {
                        date = date.substring(0, 2) + "/" + date.substring(2);
                    }
                    if (date.length > 5) {
                        date = date.substring(0, 5) + "/" + date.substring(5, 9);
                    }
                }
                if(lang === 'en') {
                    if (date.length > 4) {
                        date = date.substring(0, 4) + "/" + date.substring(4);
                    }

                    if (date.length > 7) {
                        date = date.substring(0, 7) + "/" + date.substring(7, 9);
                    }
                }
/*
                if(lang == null || lang == undefined){
                    if (date.length > 2) {
                        date = date.substring(0, 2) + "/" + date.substring(2);
                    }
                    if (date.length > 5) {
                        date = date.substring(0, 5) + "/" + date.substring(5, 9);
                    }
                }*/



                return date;
            };
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue, scope.language));
                ctrl.$render();
            });
        }
    };
});
