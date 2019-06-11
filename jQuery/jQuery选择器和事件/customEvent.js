var cMB;

$(document).ready(function(){

    cMB = $("#clickMeBtn") //简化

    // 创建一个监听事件
    cMB.click(function(){
        // 创建一个对象 起名为"MyEvent"
        var e = jQuery.Event("MyEvent");
        // 使用Event对象来触发事件
        cMB.trigger(e);
    })
    cMB.bind("MyEvent",function(event){
        console.log(event);
    });
});
