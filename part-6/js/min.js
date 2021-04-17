$(document).ready(function(){
    // $('button').click(function(){
    //     $('.box1').fadeIn(500);
    //     $('.box2').fadeIn("slow");
    //     $('.box3').fadeIn(700);
    // });

    // $('button').click(function(){
    //     $('.box1').fadeOut("fast");
    //     $('.box2').fadeOut("slow");
    //     $('.box3').fadeOut(700);
    // });

    // $('button').click(function(){
    //     $('.box1').fadeToggle("fast");
    //     $('.box2').fadeToggle("slow");
    //     $('.box3').fadeToggle(700);
    // });

    $('button').click(function(){
        $('.box1').fadeTo("fast", 0.4);
        $('.box2').fadeTo("slow", 0.5);
        $('.box3').fadeTo(700, 0.7);
    });
});