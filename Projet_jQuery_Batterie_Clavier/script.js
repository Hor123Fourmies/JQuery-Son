
$(document).keydown(function (e) {

        $('div[data-key='+e.keyCode+']').addClass('playing');
        $('audio[data-key='+e.keyCode+']').get(0).play();
});




$(document).keyup(function (e) {

    $('div[data-key='+e.keyCode+']').removeClass('playing');
    $('audio[data-key='+e.keyCode+']').get(0).stop();
});


/*

$(document).keydown(function (e) {

    var sounds = $('audio[data-key='+e.which+']').attr('src');
    $('div[data-key='+e.which+']').addClass('playing');
    new Audio(sounds).play();
});

$(document).keyup(function (e) {

    var sounds = $('audio[data-key='+e.which+']').attr('src');
    $('div[data-key='+e.which+']').removeClass('playing');
   // new Audio(sounds).play();
});

*/

$('.key').mousedown(function () {
    $(this).addClass('playing');
    var sound = $(this).attr('data-key');
    $('audio[data-key='+sound+']').get(0).play();
});

$('.key').mouseup(function () {
    $(this).removeClass('playing');
});