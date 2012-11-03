 
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
 goPrevious();
 return false;
 }
 
 if (keyCode == 39)
 {
 goNext();
 return false;
 }
 
});
 
