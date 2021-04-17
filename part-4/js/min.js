$(document).ready(function(){
    //jquery Events

    // $('p').click(function(){
    //     $(this).hide();
    // });

    // $('p').dblclick(function(){
    //     $(this).hide();
    // });

    //  $('p').hover(function(){
    //     $(this).hide();
    // });

    // $('p').on("click", function(){
    //     $(this).hide();
    // });

    // $('p').on("dblclick", function(){
    //     $(this).hide();
    // });

    // $('p').on("mouseenter", function(){
    //     $(this).hide();
    // });

    // $('p').on("mouseleave", function(){
    //     $(this).hide();
    // });

    //    $('input').on("focus", function(){
    //      $('input').css("background", "#0080ff	");
    //    });

    $('p').on({
        mouseenter: function(){
            $(this).css("background", "red");
        },
        mouseleave: function(){
            $(this).css("background", "blue");
        },
        click: function(){
            $(this).css("background", "yellow");
        },
        dblclick: function(){
            $(this).css("background", "black");
        }
    });

});