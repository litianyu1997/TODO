$(document).ready(function(){
    // 计算元素高度(height)
    alert($("#div").height());
    // 计算元素内高度(height+2*padding)
    alert($("#div").innerHeight());
    // 计算元素外高度(height+2*padding+2*border+2*margin)
    alert($("#div").outerHeight());
});