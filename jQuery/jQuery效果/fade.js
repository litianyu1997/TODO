$(document).ready(function(){
    $("#btn1").click(function(){
        // fadeIn()淡出
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    })
    $("#btn2").click(function(){
        // fadeOut()淡入
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    })
    $("#btn3").click(function(){
        // fadeToogle()开关
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    })
    $("#btn4").click(function(){
        // fadeTo()淡化 | (a,b) a为动画时常，单位为毫秒，b为透明度
        $("#div1").fadeTo(1000,0.9);
        $("#div2").fadeTo(1000,0.5);
        $("#div3").fadeTo(1000,0.1);
    })
});