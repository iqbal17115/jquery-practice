$(document).ready(function(){
    $('button').click(function(){
        $('p').hide('slow', function(){
            alert("Already hide your paragraph");
        });
    });
});