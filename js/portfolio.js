$(function(){
    
    $('.page-header').hide().show(9000);
    $('.navbar').hide().fadeIn(9000);
  
    $(".myBox").click(function(){
    window.open($(this).find("a").attr("href"));
    return false;

   
});




