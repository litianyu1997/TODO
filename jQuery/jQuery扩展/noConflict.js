// $(document).ready(function () {
//     $("#btn").on("click",function(){
//         $("div").text("new Hello");
//     })
// });

// 用noConflict替换美元符号
$.noConflict();
// var myjq = $.noConflict();   可以声明myjq用来代替jQuery
jQuery(document).ready(function(){
    jQuery("#btn").on("click",function(){
            jQuery("div").text("new Hello");
    })
})

