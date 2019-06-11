$(document).ready(function(){
    // 给body设置监听事件
    $("body").bind("click",bodyHandler);
    // 给div设置监听事件
    $("div").bind("click",divHandler1);
    $("div").bind("click",divHandler2);
});

function bodyHandler(event){
    console.log(event);
}
function divHandler1(event){
    console.log(event);
    // 阻止父级事件冒泡
    //event.stopPropagation();
    // 阻止所有事件冒泡
    event.stopImmediatePropagation();
}

function divHandler2(event){
    console.log(event);
}

function conlog(event){
    // 无法识别console用conlog
    // console.log(event)
}