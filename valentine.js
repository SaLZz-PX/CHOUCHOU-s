$(document).ready(function(){
    $(".container"),mouseenter(function(){
        $(".card").stop().animate({
            top:"-90px"
        },"slow");
    }).mouseleave(function(){
       $(".card").stop().animatea({
         top:0
       }, "slow");
    })
})
