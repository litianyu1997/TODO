$(document).ready(function () {
    // $("div").css("width","100px");
    // $("div").css("height","100px");
    // $("div").css("backgroundColor","red");

    // 设置css属性
    // $("div").css({
    //     width: "100px",
    //     height: "100px",
    //     backgroundColor:"red"
    // })

    // 给div附加style1样式
    $("div").addClass("style1");
    // 点击div后附加style2样式
    $("div").click(function(){
        // $(this).addClass("style2");
        // 使用toggleClass点击后来回切换
        $(this).toggleClass("style2");
    })
});