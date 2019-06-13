$(document).ready(function(){
    $("#div1").click(function(){
        // 通过slideDown()使#div元素出现
        $("#div").slideDown(1000);
    });

    $("#div2").click(function(){
        // 通过slideDown()使#div元素隐藏
        $("#div").slideUp(1000);
    });

    $("#div3").click(function(){
        // 通过slideDown()使#div元素隐藏
        $("#div").slideToggle(1000);
    });
});