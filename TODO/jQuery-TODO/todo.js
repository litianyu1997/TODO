var num = 0;
// 创建一个addList()方法，作为id为input-text的标签的文本内容改变事件
var addList = function(){
    num = num+1;
    // 执行方法时创建一个div元素
    var div = document.createElement("div");
    // 给每次创建的div元素添加相同的class属性，用于设置样式
    div.className = "add-div-class";
    // 给每次创建的div元素添加一个id,用于储存
    div.id = num;
    // 将创建的div元素添加为id="div-list"的子元素
    document.getElementById("div-list").appendChild(div);

    // 当创建div元素时
    $("#div-list").css("display","block");



    // 创建input元素
    var input1 = document.createElement("input");
    // 设置input元素类型为checkbox属性
    input1.type = "checkbox";
    // 给每次创建的input元素设置相同class属性，用于设置样式
    input1.className = "input-class1";
    // 设置一个点击事件
    $(input1).click(function(){
        // 当点击input1时将span元素的css样式更改,使用toggleClass附加样式开关
        $(div).toggleClass("styleComplete");
        $(input2).toggleClass("styleComplete");
        $(input1).toggleClass("inputClick1")
        document.getElementById("pid").innerHTML = listLeft();
    })
    // 添加为刚刚创建的div元素的子元素
    div.appendChild(input1);




    var input2 = document.createElement("p");
    input2.className = "input-class2";
    var span = document.createElement("span")
    input2.appendChild(span);
    div.appendChild(input2);
    // 声明ivalue获取id="input-text"元素中的内容
    var ivalue = document.getElementById("input-text").value;
    // 声明text为创建内容为ivalue的文本
    var text = document.createTextNode(ivalue);
    // 创建一个双击事件
    $(input2).dblclick(function(){
        // 获取原本内容
        var oldtxt = span.innerHTML;
        // 创建input输入框将，原内容添加进去
        var txt = document.createElement("input");
        txt.type = "text";
        txt.value = oldtxt;
        input2.appendChild(txt);
        // 隐藏原文本
        $(span).css("display","none")
        // 添加一个失去焦点事件
        $(txt).blur(function(){
            // 获取失去焦点时输入框的内容和内容长度
            var newtxt = $(txt).val();
            var newlength = newtxt.length;
            // 删除输入框
            $(txt).remove();
            if(newlength==0){
                // 如果改动后的字符串长度为0则还原改动前的内容
                $(span).text(oldtxt);
            }else{
                $(span).text(newtxt);
            }
            $(span).css("display","inline")
        });
    });
    // 将text文本放入span元素内
    span.appendChild(text);
    // 之后清空id="input-text"元素中的内容
    document.getElementById("input-text").value = "";


    var input3 = document.createElement("input");
    input3.type = "button";
    input3.className = "input-class3";
    input3.value = "Time";
    div.appendChild(input3);
    // 声明tvalue为获取时间方法的值
    var tvalue = currentTime();
    // 给Time按钮添加一个点击事件
    $(input3).click(function(){
        alert(tvalue);
    })


    var input4 = document.createElement("input");
    input4.type = "button";
    input4.className = "input-class4";
    input4.value = "Delete";
    $(input4).click(function(){
        // 当点击Delete按钮时删除这个父级div元素
        $(div).remove();
        // 并判断id="div-list"元素中是否还有子元素
        var list = document.getElementById("div-list").getElementsByTagName("div").length
        document.getElementById("pid").innerHTML = listLeft();
        if(list == 0){
            $("#div-list").css("display","none");
            $("#div-foot").css("display","none");
            $("#spid").css("display","none");
        }
    })
    $(div).mouseover(function () { 
        // 当鼠标移入div时
        $(input3).css("opacity","1");
        $(input4).css("opacity","1");
        $(input5).css("opacity","1");
    })
    $(div).mouseout(function () { 
        // 当鼠标移出div时
        $(input3).css("opacity","0.5");
        $(input4).css("opacity","0.5");
        $(input5).css("opacity","0.5");
    })
    div.appendChild(input4);

    
    var input5 = document.createElement("input");
    input5.type = "button";
    input5.className = "input-class5";
    input5.value = "Edit";
    $(input5).click(function(){
        $(input3).css("display","none");
        $(input5).css("display","none");
        var oldtxt = span.innerHTML;
        var txt = document.createElement("input");
        txt.type = "text";
        txt.value = oldtxt;
        input2.appendChild(txt);
        $(span).css("display","none")
        $(txt).blur(function(){
            var newtxt = $(txt).val();
            var newlength = newtxt.length;
            $(txt).remove();
            if(newlength==0){
                $(span).text(oldtxt);
            }else{
                $(span).text(newtxt);
            }
            $(span).css("display","inline")
            $(input3).css("display","inline");
            $(input5).css("display","inline");
        });
    })
    div.appendChild(input5);

    $("#btn1").click(function(){
        $("#btn1").css("display","none");
        $("#btn2").css("display","inline");
    });
    $("#btn2").click(function(){
        $("#btn1").css("display","inline");
        $("#btn2").css("display","none");
    });

    $("#div-foot").css("display","block");
    $("#spid").css("display","block");
    document.getElementById("pid").innerHTML = listLeft();

}


// 创建一个时间方法
var currentTime = function(){
    var d = new Date();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var secounds = d.getSeconds();
    var timeString = month+ "/" +date+ "-" +hours+ ":" +minutes+ ":" +secounds;
    return timeString;
};

var listLeft = function(){
    var lNum = $("#div-list").children("div").length;
    var cNum = $("#div-list").children(".styleComplete").length;
    var show1 = "一共有"+lNum+"项任务在列表中，其中"+cNum+"项已完成";
    var show2 = "一共有"+lNum+"项任务在列表中，已全部完成";
    if(lNum==cNum){
        return show2;
    }else{
        return show1;
    }
};

var listNum = function(){
    // 计算剩余div任务的数量
    var i = document.getElementById("div-list").childNodes;
    var value = i.length;
    // 储存
    for(j=0;j<value;++j){
        


        // var k = document.getElementById(i[j]).childNodes;
        // var kvalue = k.length;
        // alert(kvalue);
    }
}
