$(document).ready(function(){
    // parent()向上遍历一级父元素 参数可选
    // $("a").parent().css({ border:"3px blue solid" })

    // parents()不指定参数时向上遍历所有父元素，指定参数只更改参数
    // $("p").parents().css({ border:"3px blue solid" })

    // parentsUntil()向上遍历父元素直到参数(区间，选定元素和参数不变)
    $("a").parentsUntil("#div1").css({ border:"3px blue solid" })
});