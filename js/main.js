$(document).ready(function() {
    $('#main').hide()

    setTimeout(function() {
        $('#main').fadeIn(3000)
        $('#top').hide().slideDown(3000).fadeIn(3000)
        $('body').animate({
            'backgroundColor': '#fff',
            'color': '#000'
        }, 500)
    }, 1000)

})
