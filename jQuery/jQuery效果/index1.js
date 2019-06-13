$(document).ready(function () {

    $("#btn1").click(function(){
        // 通过hide()隐藏指定元素|()内填写隐藏动画时间，毫秒为单位
        $("#p1").hide(1000);
    })

    $("#btn2").click(function(){
        // 通过show()显示指定元素
        $("#p1").show(1000);
    })

    $("#btn3").click(function(){
        // 通过toggle()隐藏和显示指定元素
        $("#p1").toggle(1000);
    })

});