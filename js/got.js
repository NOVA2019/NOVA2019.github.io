$(document).ready(function () {
    $('.ex').hide();
    
    $('div[class="secondary_text"]').children().hide();
    $('div[class="primary_text"]').children().hide();
    
    $('#abbr_button').click(function () {
        $('.am').toggle();
        $('.ex').toggle();
    });
    
    $('.date_ind').click(function(){
        sel_date = $(this).attr('n');
        /*$('div[class="secondary_text"]').children("p[n='"+sel_date+"']").toggle();*/
    });
    
    $('#date_selector').change(function(){
        var date = $('#date_selector option:selected').attr('value');
        $('div p').hide();
        var paragraphs = $('p[n*="'+date+'"]'); 
       paragraphs.show();
       /*    TRAVIZ*/
        var traviz = new TRAViz("TRAVizContainerDiv");
        var traviz_dict = [{edition:'LC',text:''},{edition:'BNF',text:''}]
        index_count = 0;
        paragraphs.each(function(){
            p_texto = $(this).text();
            p_texto = p_texto.replace(/[\s]+/gi,' ');
            if (index_count == 0) {
                traviz_dict[0]['text'] = p_texto
                index_count = 1;
            }else{
                traviz_dict[1]['text'] = p_texto
            };
        });
        console.log(traviz_dict);
        traviz.align(traviz_dict);
        traviz.visualize();
       
   });

    
});