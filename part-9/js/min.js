$(document).ready(function(){
    // jquery stop
    $('.btn').click(function(){
      $('.content').slideToggle(3000);
    });

    $('button').click(function(){
        $('.content').stop();
      });
});