webshim.setOptions('forms-ext', {
    replaceUI: 'auto',
    types: 'date',
    date: {nopicker: true}
});
webshim.polyfill('forms forms-ext');

$(function(){
    $('[type="date"].birthdate').prop('max', function(){
        return new Date().toJSON().split('T')[0];
    });
});

$(document).ready(function() {
   $('input[type="radio"]').click(function() {
       if($(this).attr('id') == 'yes') {
            $('#venue_manager').show();
       }
       else {
            $('#venue_manager').hide();
       }
   });
});

