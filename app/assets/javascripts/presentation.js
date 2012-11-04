


    // NOTE:
    // Modifying the URL below to another server will likely *NOT* work. Because of browser
    // security restrictions, we have to use a file server with special headers
    // (CORS) - most servers don't support cross-origin browser requests.
    //
    // var url = 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf';
    var url = '/pdf/test.pdf'

    //
    // Disable workers to avoid yet another cross-origin issue (workers need the URL of
    // the script to be loaded, and currently do not allow cross-origin scripts)
    //
    PDFJS.disableWorker = true;

    var pdfDoc = null,
        pageNum = 1,
        scale = 0.8,
        canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d');

    //
    // Get page info from document, resize canvas accordingly, and render page
    //
    function renderPage(num) {

      // Set bullshit pageNum var
      pageNum = num;

      // Using promise to fetch the page
      pdfDoc.getPage(num).then(function(page) {
        var viewport = page.getViewport(scale);
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        page.render(renderContext);
      });

      // Update page counters
      // document.getElementById('page_num').textContent = pageNum;
      document.getElementById('page_count').textContent = pdfDoc.numPages;
    }

    //
    var updateTracker = function() {
      var $btns = $(".pageTrackers");
     $btns.removeClass("active");
    $('*[data-pagenum="'+pageNum+'"]').addClass('active');
}

    // Go to previous page
    //
    function goPrevious() {
      console.log("------PAGE NUM #1 IS: " + pageNum);
      updateTracker();
      if (pageNum <= 1)
        return;
      pageNum--;
      slideChange();
      renderPage(pageNum);

    }

    //
    // Go to next page
    //
    function goNext() {
      console.log("------PAGE NUM #1 IS: " + pageNum);
      updateTracker();
      if (pageNum >= pdfDoc.numPages)
        return;
      pageNum++;
      slideChange();
      renderPage(pageNum);

    }

    //
    //
    // playing with keystrokes
    function getChar(event) {
      pageNum++;
      renderPage(pageNum);

    }

    function selectPage(n) {
      renderPage(n);
    }
    //
    // Asynchronously download PDF as an ArrayBuffer
    //
    PDFJS.getDocument(url).then(function getPdfHelloWorld(_pdfDoc) {
      pdfDoc = _pdfDoc;
      renderPage(pageNum);
    });


$(document).keydown(function(e){

 //e.which is set by jQuery for those browsers that do not normally support e.keyCode.
 var keyCode = e.keyCode || e.which;



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
    var n;
     var numberOfPages = 12;
   //var numberOfPages =  this.pdfInfo.numPages;
    for (n = 1; n <= numberOfPages + 1; n++) {
      $('#pageTrackers').append('<span class="pageTrackers" onclick="selectPage('+n+')" data-pagenum="'+n+'">. </span>');
    }

var $btns = $(".pageTrackers");
$btns.click(function() {
  $btns.removeClass("active"); // Remove from all, not just one
  $(this).addClass("active");  // Add the active class to the one we clicked one
});

// **********************
var questions = [
  "What was the theorem you used in problem 3?",
  "I don't understand what the author was trying to convey in the first scene of Chapter 6.",
  "Is this the real life?",
  "How can effective design influence my startup?",
  "Can you explain your defintition of urban revitalization?",
  "Why did you only integrate up to b-k?",
  "I love Startup Weekend! How can I get more involved?"
];

var colors = ["item-green","item-purple","item-orange", "item-blue"];

questionV=0;

function createQuestion(){
  var randomnumber=(Math.random()*3 + 1);
  // console.log(randomnumber);

  setTimeout(function () {
    var colorV = questionV;
    while (colorV > colors.length - 1) {
      colorV -= colors.length;
    }

    var questionText = questions[questionV];
    var questionHHTML = "<div class='question-item " + colors[colorV] +"'><p>" + questions[questionV] + "</p></div>";
    $("#questions").append(questionHHTML);
    $(".question-item").last().hide().fadeIn(750);
    questionV++;
    if (questionV <= questions.length - 1) {
      createQuestion();
    }
  } , 5000 * randomnumber);
}

$(document).ready(function() {
  setTimeout(createQuestion, 20000);
});

$("#star-slide").click(function() {
  $(this).addClass("disabled");
})

$("#add-notes").click(function() {
  $(this).addClass("disabled");
  $(this).html("Coming soon!");
})
