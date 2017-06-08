
<script src="https://www.gstatic.com/firebasejs/4.1.1/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCzfeRSgdajxzC3nxnXeshwlIFzcVzeFe0",
    authDomain: "memory-d4c3f.firebaseapp.com",
    databaseURL: "https://memory-d4c3f.firebaseio.com",
    projectId: "memory-d4c3f",
    storageBucket: "memory-d4c3f.appspot.com",
    messagingSenderId: "1057528167320"
  };
  firebase.initializeApp(config);
</script>



'use strict';
 
angular.module('Authentication')
 
.factory('AuthenticationService',
    ['$http', '$window', '$rootScope', '$timeout',
    function ( $http, $window, $rootScope, $timeout) {
        var service = {};

        service.Login = function (email, password) {

            return firebase.auth().signInWithEmailAndPassword(email, password)

        };

        service.Register = function (email, password) {

            return firebase.auth().createUserWithEmailAndPassword(email, password)

        };

        service.updateProfile = function(data) {
            var user = firebase.auth().currentUser;
            return user.updateProfile(data)
        };
 
        service.SetCredentials = function () {
            var authdata = firebase.auth().currentUser;
            $rootScope.globals = {
                currentUser: {
                    email: authdata.email,
                    displayName: authdata.displayName,
                    uid: authdata.uid,
                    phoneNumber: authdata.phoneNumber
                }
            };
            //$http.defaults.headers.common['Authorization'] = 'Basic ' + password; // jshint ignore:line
            $window.localStorage.setItem("globals", angular.toJson($rootScope.globals))

        };
 
        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $window.localStorage.removeItem('globals');
            //$http.defaults.headers.common.Authorization = 'Basic ';
        };
 
        return service;
    }])
 