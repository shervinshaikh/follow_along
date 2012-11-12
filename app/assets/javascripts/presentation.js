// Modifying the URL below to another server will likely NOT work. Because of browser
// security restrictions, we have to use a file server with special headers
// (CORS) - most servers don't support cross-origin browser requests.
var url = '/pdf/demo.pdf'


// Disable workers to avoid yet another cross-origin issue (workers need the URL of
// the script to be loaded, and currently do not allow cross-origin scripts)
PDFJS.disableWorker = true;

var pdfDoc  = null,
    pageNum = 1,
    scale   = 0.8,
    canvas  = document.getElementById('the-canvas'),
    ctx     = canvas.getContext('2d');

// Get page info from document, resize canvas accordingly, and render page
function renderPage(num) {

  // Set bullshit pageNum var
  pageNum = num;

  // Using promise to fetch the page
  pdfDoc.getPage(num).then(function(page) {
    var viewport  = page.getViewport(scale);
    canvas.height = viewport.height;
    canvas.width  = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    page.render(renderContext);
  });

  // Update page counters
  document.getElementById('page_count').textContent = pdfDoc.numPages;
}


var updateTracker = function() {
  var $btns = $(".pageTrackers");
  $btns.removeClass("active");
  $('*[data-pagenum="'+pageNum+'"]').addClass('active');
}


// Go to previous page
function goPrevious() {
  updateTracker();
  if (pageNum <= 1)
    return;
  pageNum--;
  slideChange();
  renderPage(pageNum);

}


// Go to next page
function goNext() {
  updateTracker();
  if (pageNum >= pdfDoc.numPages)
    return;
  pageNum++;
  slideChange();
  renderPage(pageNum);

}


// Playing with keystrokes
function getChar(event) {
  pageNum++;
  renderPage(pageNum);
}


function selectPage(n) {
  renderPage(n);
}


// Asynchronously download PDF as an ArrayBuffer
PDFJS.getDocument(url).then(function getPdfHelloWorld(_pdfDoc) {
  pdfDoc = _pdfDoc;
  renderPage(pageNum);
});


var numberOfPages = 12;
for (var n = 1; n <= numberOfPages + 1; n++) {
  $('#pageTrackers').append('<span class="pageTrackers" onclick="selectPage('+n+')" data-pagenum="'+n+'">. </span>');
}

var $btns = $(".pageTrackers");
$btns.click(function() {
   $btns.removeClass("active");
   $(this).addClass("active");
});


// TODO: REMOVE PLACEHOLDERS
$("#star-slide").click(function() {
  $(this).addClass("disabled");
})
$("#add-notes").click(function() {
  $(this).addClass("disabled");
  $(this).html("Coming soon!");
})



// Question submission
$("#new_question").submit(function(e) {
e.preventDefault();
text = $(this).find('#question_content').val();
channel.trigger('client-add-question', { 'text': text });
return false;
})

$("#question_content").keyup(function(evt) {
if (evt.keyCode === 13) {
  text = $(this).val();
  $(this).val('');
  channel.trigger('client-add-question', { 'text': text });
}
});
