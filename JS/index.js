var feedList = [];
var current;
$( document ).ready(function() {

    $(".btn").click(function(event){
     var curText =  $(".feedCount").text();
     current = Number(curText);
    $(".feedCount").html(current + 1);
    current +=1;
    if(current>0){
        $("i").css('color', 'red');
    }
    });



});
