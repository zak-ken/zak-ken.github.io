$(document).ready(function() {
    $('#main').hide()

    var timerBuffer = 0

    setTimeout(function() {
        $('#intro').fadeOut(1000)
    }, timerBuffer)

    setTimeout(function() {
        $('#main').fadeIn(3000)
        $('#top').hide().slideDown(3000).fadeIn(3000)
        $('body').animate({
            'backgroundColor': '#fff',
            'color': '#000'
        }, 500)
    }, timerBuffer + 1000)

})
