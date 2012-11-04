 
$(document).keydown(function(e){
 
 //e.which is set by jQuery for those browsers that do not normally support e.keyCode.
 var keyCode = e.keyCode || e.which;
 
 // if (keyCode == 38)
 // {
 // alert( "Up arrow key hit." );
 // return false;
 // }
 
 // if (keyCode == 40)
 // {
 // alert( "Down arrow key hit." );
 // return false;
 // }
 

 if (keyCode == 37)
 {
var moveLeft = $('#move-left');
moveLeft.addClass('hoverhack');
setTimeout(function(){
	moveLeft.removeClass('hoverhack');
},100);
 goPrevious();
 // $('#move-left').addClass('hoverhack').delay(1000);

 //$('#move-left').removeClass('hoverhack');
 return false;
 }
 
 if (keyCode == 39)
 {
 var moveRight = $('#move-right');
moveRight.addClass('hoverhack');
setTimeout(function(){
	moveRight.removeClass('hoverhack');
},100);
 goNext();
 return false;
 }
 
});
 
