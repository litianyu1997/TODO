$(document).ready(function(){
    $("#btn1").click(function(){
        // 通过append()在原内容后面插入内容
        $("#p1").append("*append add content*");
        // 通过prepend()在原内容前面插入内容
        $("#p1").prepend("*prepend add content*");
    })

    $("#btn2").click(function(){
        // 通过before()在原内容前面一行插入内容
        $("#p2").before("*before add content*");
        // 通过after()在原内容后面一行插入内容
        $("#p2").after("*after add content*");
    })
});

// append三种添加方式
function appendText(){
    var text1 = "<p>text1</p>"
    var text2 = $("<p>text2</p>")
    var text3 = document.createElement("p");
    text3.innerHTML = "text3";
    $("body").append(text1,text2,text3);
}