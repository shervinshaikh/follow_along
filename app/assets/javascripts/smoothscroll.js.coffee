$ ->
  $(".scroll").click (e) ->
    e.preventDefault()
    href   = $(this).attr('href')
    offset = $(href).offset().top
    $('html, body').animate { scrollTop: offset }, 'slow', -> window.location.hash = href
