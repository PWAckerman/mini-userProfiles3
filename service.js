var app = angular.module('userProfiles')

app.service('mainService', function ($http, $q) {
  var deferred = $q.defer()
  this.getUsers = function () {
    $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1'
    }).then(function (response) {
      var parsedResponse = response.data.data
      for (var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf'
        parsedResponse[i].last_name = 'OOPS, sorry about your shoes :('
      }
      deferred.resolve(parsedResponse)
    })
    return deferred.promise
  }
})
