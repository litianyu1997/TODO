$(document).ready(function(){

    $("#btn1").click(function(){
        // 通过text()修改id="p1"元素中的内容
        $("#p1").text("百度");
    })

    $("#btn2").click(function(){
        // 通过html()修改id="p2"元素中的内容，可以添加标签和属性
        $("#p2").html("<a href='http://www.baidu.com'>百度</a>");
    })

    $("#btn3").click(function(){
        // 通过val()修改id="i3"元素中的内容
        $("#i3").val("baidu");
    })

    $("#btn4").click(function(){
        // 通过text()修改id="aid"元素的内容
        $("#aid").text("现在是搜狗")

        // 通过attr()修改id="aid"元素的属性，可以同时修改多个

        // 修改单个属性
        //$("#aid").attr("href","http://www.sogou.com");

        // 修改多个属性
        $("#aid").attr({
            "href":"http://www.sogou.com",
            "title":"world"
        })
    })

    $("#btn5").click(function(){
        // 回调，i默认是0，ot为原始内容
        $("#p5").text(function(i,ot){
            return "old:"+ot+" new:"+(i);
        })
    })
});