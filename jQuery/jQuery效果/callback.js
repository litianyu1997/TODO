$(document).ready(function(){
    $("#btn1").click(function(){

        // $("#p1").hide(1000,function(){
        //     alert("动画结束，这个方法被称为回调")
        // });


        // 点击button后使p元素同时执行多个动画
        $("#p1").css("color","red").slideUp(1000).slideDown(1000);
        
    });
});