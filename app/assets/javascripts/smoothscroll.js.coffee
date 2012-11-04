$ ->
  $(".scroll").click (e) ->
    console.log "asdf"
    e.preventDefault()
    href   = $(this).attr('href')
    offset = $(href).offset().top
    $('html, body').animate { scrollTop: offset }, 'slow', -> window.location.hash = href