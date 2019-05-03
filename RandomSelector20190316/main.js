/*
window.onload = function(){
    //document.write("Hello JavaScript!");
};
*/

$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        //$("h1").text("Hello");
        var numberOfListItem = $("#choices li").length;
        console.log("numberOfListItem:"+numberOfListItem);
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        
        $("h1").text($("#choices li").eq(randomChildNumber).text());
    });
});

