

  // uses API KEY in config/development.rb
  var pusher = new Pusher('f0c1c4156c3645537125');

  var channel = pusher.subscribe('presence-test');

  // Count when new dude joins
  channel.bind('pusher:member_added', function(members){
    console.log("Count", channel.members.count);
    $('span.visitor_hits').text(channel.members.count);
  });
  // Remove dude
  channel.bind('pusher:member_removed', function(member){
    console.log("Count", channel.members.count);
     $('span.visitor_hits').text(channel.members.count);
  });

  // Authenticate subscription to channel and bind with trigger bs
  channel.bind('pusher:subscription_succeeded', slideChange);
  channel.bind('client-slide-change', clientEvent);
  channel.bind('client-add-question', addQuestion);

  function slideChange(members) {
    // we won't use members here
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



sendIfEnter = function(textarea, evt) {
  if (window.socket && evt.keyCode === 13) {
    window.socket.send($(textarea).val());
    return $(textarea).val('');
  }
};






// function PusherChatWidget(pusher, options) {
//   PusherChatWidget.instances.push(this);
//   var self = this;
//
//   this._pusher = pusher;
//   this._autoScroll = true;
//
//   options = options || {};
//   this.settings = $.extend({
//     maxItems: 50, // max items to show in the UI. Items beyond this limit will be removed as new ones come in.
//     chatEndPoint: 'ruby-sinatra/chat.rb', // the end point where chat messages should be sanitized and then triggered
//     channelName: document.location.href, // the name of the channel the chat will take place on
//     appendTo: document.body, // A jQuery selector or object. Defines where the element should be appended to
//     debug: true
//   }, options);
//
//   // remove any unsupported characters from the chat channel name
//   // see: http://pusher.com/docs/client_api_guide/client_channels#naming-channels
//   this.settings.channelName = PusherChatWidget.getValidChannelName(this.settings.channelName);
//
//   this._chatChannel = this._pusher.subscribe(this.settings.channelName);
//
//   this._chatChannel.bind('slide_change', function(data) {
//     self._slideChanged(data);
//   })
//
//
//
// };
// PusherChatWidget.instances = [];
//
// /* @private */
// PusherChatWidget.prototype.slideChanged = function(data) {
//   var self = this;
//   // TODO
//   (this).slideUp(x-1);
// }
//
//
// }












