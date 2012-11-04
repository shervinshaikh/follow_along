Pusher.log = function(message) {
  if (window.console && window.console.log) window.console.log(message);
};

// Flash fallback logging - don't include this in production
WEB_SOCKET_DEBUG = true;

// uses API KEY in config/development.rb
var pusher = new Pusher('<%= Pusher.key %>'); 

var channel = pusher.subscribe('presence-test_channel');
channel.bind('update_count', function(data) {
  alert("winner! " + data);
});

// var usersChannel = pusher.subscribe('presence-visitor_hits');
// usersChannel.bind('pusher:subscription_succeeded', function() {
//     var count = usersChannel.user_count;
//     
//     console.log(count);
//     
// });
//