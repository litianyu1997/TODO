$(document).ready(function(){  //文档加载完成之后
    // 声明一个button元素，给button做一个click事件
    $("button").click(function(){

        // 修改p元素内容
        // $("p").text("p元素被修改了");

        // id选择器修改
        // $("#pid").text("p元素被修改了");

        // class选择器修改
        $(".pclass").text("p元素被修改了");
    })
});


