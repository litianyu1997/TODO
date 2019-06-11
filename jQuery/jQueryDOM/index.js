$(document).ready(function(){
    $("#btn1").click(function(){
        // 获取的内容通过alert打印出来
        // "text:"文本+$("#text").text()通过id获取内容的方法
        alert("text:"+$("#text").text());

        // html()方法获取所有内容，包括标签，text只能获取内容
        alert("text:"+$("#text").html());
    })

    $("#btn1").click(function(){
        // 通过val()方法获取#it这个input输入框中的内容
        alert("text:"+$("#it").val());
    })

    $("#btn2").click(function(){
        // 通过attr()方法获取#aid这个标签的href属性
        alert("text:"+$("#aid").attr("href"));
        // 通过attr()方法获取#aid这个标签的id属性
        alert("text:"+$("#aid").attr("id"));
    })

});