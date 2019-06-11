$(document).ready(function(){
    // 通过id绑定click事件
    // $("#clickMeBtn").click(function(){
    //     alert("hello")
    // });


    // bind绑定事件
    //$("#clickMeBtn").bind("click",clickHandler1)
    //$("#clickMeBtn").bind("click",clickHandler2)

    // unbind解除绑定事件
    //$("#clickMeBtn").unbind("click") // 所有click事件解除绑定
    //$("#clickMeBtn").unbind("click",clickHandler2) //只解除其中一个click事件

    // on|off 和bind|unbind相同 在jQuery1.7之后才可以使用
    $("#clickMeBtn").on("click",clickHandler1)
    $("#clickMeBtn").on("click",clickHandler2)
    $("#clickMeBtn").off("click",clickHandler2)
});

function clickHandler1(e){
    console.log("clickHandler1")
}

function clickHandler2(e){
    console.log("clickHandler2")
}