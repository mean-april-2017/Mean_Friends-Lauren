app.factory('friendsFactory', function($http){
  var factory = {};
  factory.getFriends = function(){
    return $http.get('/api/friends');
  }
  factory.createFriend = function(friend){
    return $http.post('/api/friends', friend);
  }
  factory.getFriend = function(id){
    return $http.get('/api/friends/' + id);
  }
  factory.updateFriend = function(id, friend){
    return $http.put('/api/friends/' + id, friend);
  }
  factory.deleteFriend = function(id){
    return $http.delete('/api/friends/' + id);
  }
  return factory;
})
