$(document).ready(function(){
    // jquery animatiom

    $('button').click(function(){
        // $('div').animate({
        //     left: '200px',
        //     width: '200px',
        //     height: '200px'
        // });
          var iqbal=$('div');
          iqbal.animate({height: '300px', opacity: '0.5'},"slow");
          iqbal.animate({width: '300px', opacity: '0.6'},"slow");
          iqbal.animate({height: '100px', opacity: '0.7'},"slow");
          iqbal.animate({width: '100px', opacity: '0.8'},"slow");
    });
});