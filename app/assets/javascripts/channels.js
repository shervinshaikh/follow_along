// Uses API key in config/development.rb
var pusher  = new Pusher('f0c1c4156c3645537125');
var channel = pusher.subscribe('presence-test');

// User connect
var $hits = $('span.visitor_hits')
channel.bind('pusher:member_added', function(members) {
  $hits.text(channel.members.count);
});

// User disconnect
channel.bind('pusher:member_removed', function(member) {
   $hits.text(channel.members.count);
});

// Authenticate subscription to channel and bind with trigger bs
channel.bind('pusher:subscription_succeeded', slideChange);
channel.bind('client-slide-change', clientEvent);
channel.bind('client-add-question', addQuestion);

function slideChange() {
  channel.trigger('client-slide-change', {"page": pageNum});
}

function clientEvent(data) {
  renderPage(data.page);
}

function addQuestion(obj) {
  msg = obj.text;
  var colors = ["item-green","item-purple","item-orange", "item-blue"];
  var color_class = colors[Math.floor(Math.random()*colors.length)];
  var questionHHTML = "<div class='question-item " + color_class +"'><p>" + msg + "</p></div>";
  $("#questions").append(questionHHTML);
}

// Debug your rug
Pusher.log = function(message) {
  if (window.console && window.console.log) window.console.log(message);
};
WEB_SOCKET_DEBUG = true;
