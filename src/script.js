var app = angular.module("app", []);

app.controller("appcontrol", function($scope) {
  $scope.bunches = [
    [{
      img: 'a.jpg'
    }, {
      img: 'http://i.imgur.com/n9ddgsS.png', flip: true
    }, {
      img: 'http://i.imgur.com/uRD3DP4.png'
    }],
    [{
      img: 'http://i.imgur.com/rjSxiJw.png', flip: true
    }, {
      img: 'http://i.imgur.com/RpJyZ8g.png'
    }, {
      img: 'http://i.imgur.com/HlNnqne.png'
    }],
    [{
      img: 'http://i.imgur.com/Qd2L4NK.png'
    }, {
      img: 'http://i.imgur.com/FKPmA8X.png'
    }, {
      img: 'http://i.imgur.com/6a0fc4s.png'
    }]
  ];
})

    app.directive("flipReveal", function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'template.html',
        scope: {
          url: '=',
          flip: '='
        }
      }
    })

    