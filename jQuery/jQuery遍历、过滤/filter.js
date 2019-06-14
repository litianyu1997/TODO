$(document).ready(function () {
    // first()寻找同样元素中的第一个
    // $("div p").first().css("background-color","red");

    // last()寻找同样元素中的最后一个
    // $("div p").last().css("background-color","red");

    // eq()寻找第几个，从0开始，2为寻找第三个
    // $("div p").eq(2).css("background-color","red");

    // filter()满足div p这个集合就附加样式
    // $("div p").filter().css("background-color","red");

    // 满足div p且不符合传入参数(".pclass")则附加样式
    $("div p").not().css("background-color","red");
});