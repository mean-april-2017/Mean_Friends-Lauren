app.controller('indexController', function($scope, friendsFactory){
  $scope.getFriends = function(){
    friendsFactory.getFriends().then(function(friends){
      $scope.friends = friends.data;
    })
  }

  $scope.getFriends();

  $scope.deleteFriend = function(id){
    friendsFactory.deleteFriend(id).then(function () {
      $scope.getFriends();
    })
  }
})
app.controller('newController', function($scope, $location, friendsFactory){
  $scope.createFriend = function(){
    friendsFactory.createFriend($scope.friend).then(function(friend){
      $location.url('/')
    })
  }
})
app.controller('showController', function($scope, $routeParams, friendsFactory) {
  friendsFactory.getFriend($routeParams.id).then(function(friend){
    $scope.friend = friend.data;
  })
})
app.controller('updateController', function($scope, $location, $routeParams, friendsFactory){
  friendsFactory.getFriend($routeParams.id).then(function(friend){
    friend.data.birthday = new Date(friend.data.birthday)
    $scope.friend = friend.data;

    $scope.updateFriend = function(){
      friendsFactory.updateFriend($routeParams.id, $scope.friend).then(function(updatedFriend){
        console.log(updatedFriend);
        $location.url('/show/' + $routeParams.id)
      })
    }
  })
})
