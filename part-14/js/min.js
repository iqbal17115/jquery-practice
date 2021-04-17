$(document).ready(function(){
 
  $('#btn1').click(function(){
    $('p').append(" Iqbal");
  });
  
  $('#btn2').click(function(){
    $('p').prepend("Iqbal ");
  });

});