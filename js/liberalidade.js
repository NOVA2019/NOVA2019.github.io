$(document).ready(function () {
    $('.ref').css('color','red');
    $('.note').css('color','blue');
    $('.note').hide();
    $('.ex').hide();
    
    $('.ref').click(function () {
        note_number = $(this).attr('n');
        $("span[class='note'][n='"+note_number+"'").toggle();    
    });
    
    $('#abbr_button').click(function () {
        $('.am').toggle();
        $('.ex').toggle();
    });
    
/*    for St. Victor*/
    $("span[class='hi'][rend='red']").css('color','red');
    
});