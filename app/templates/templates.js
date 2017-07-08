/**
 * Created by Timor on 7/8/2017.
 */
let app = angular.module('documentation_srf.templates',['ngRoute','ngMaterial']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'templates/md-templates/typo.md',
            controller: 'TemplatesCtrl'
        })
        .when('/button',{
            templateUrl: 'templates/md-templates/button.md',
            controller: 'TemplatesCtrl'
        })
        .when('/checkbox',{
            templateUrl: 'templates/md-templates/checkbox.md',
            controller: 'TemplatesCtrl'
        })
        .when('/theme_introduction',{
            templateUrl: 'https://gist.github.com/1784669.git'
        })
        .when('/typo',{
            templateUrl: 'templates/md-templates/typo.md',
            controller: 'TemplatesCtrl'
        }).otherwise({
            templateUrl: 'templates/md-templates/typo.md',
            controller: 'TemplatesCtrl'
        });
    });
app.controller('TemplatesCtrl', ['$scope','$timeout','$mdSidenav','$log',function($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.isOpenRight = function(){
        return $mdSidenav('right').isOpen();
    };

    function debounce (func, wait, context) {
        var timer;
        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    function buildDelayedToggler (navID) {
        return debounce(function() {
           $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler (navID) {
        return function() {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        };
    }

}])
.controller('LeftCtrl', ['$scope','$timeout','$mdSidenav','$log',($scope, $timeout, $mdSidenav, $log) => {

    $scope.sidebarSubjectsArray = [
        {
            "key" : "CSS",
            "value": [
                {
                    "key" : "TYPOGRAPHY",
                    "value": "#!typo"
                },
                {
                    "key" : "BUTTONS",
                    "value": "#!button"
                },
                {
                    "key" : "CHECKBOX",
                    "value": "#!checkbox"
                }
            ]
        },
        {
            "key" : "THEMING",
            "value": [
                {
                    "key" : "INTRODUCTION AND TERMS",
                    "value": "#!theme_introduction"
                },
                {
                    "key" : "DECLATARIVE SYNTAX",
                    "value": "#"
                },
                {
                    "key" : "CONFIGURING A THEME",
                    "value": "#"
                },
                {
                    "key" : "MULTIPLE THEMES",
                    "value": "#"
                },
                {
                    "key" : "UNDER THE HOOD",
                    "value": "#"
                },
                {
                    "key" : "BROWSER COLOR",
                    "value": "#"
                }
            ]
        },
        {
            "key" : "LAYOUT",
            "value": [
                {
                    "key" : "INTRODUCTION",
                    "value": "#/typo"
                },
                {
                    "key" : "BUTTON",
                    "value": "#"
                },
                {
                    "key" : "CHECKBOX",
                    "value": "#"
                }
            ]
        },
        {
            "key" : "SERVICE",
            "value": [
                {
                    "key" : "TYPOGRAPHY",
                    "value": "#/typo"
                },
                {
                    "key" : "BUTTON",
                    "value": "#"
                },
                {
                    "key" : "CHECKBOX",
                    "value": "#"
                }
            ]
        }
    ];

    $scope.close = function() {
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };

}]);
