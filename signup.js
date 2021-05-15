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