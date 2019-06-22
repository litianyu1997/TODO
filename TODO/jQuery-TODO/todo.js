// 创建一个addList()方法，作为id为input-text的标签的文本内容改变事件
function addList(){

    // 执行方法时创建一个div元素
    var div = document.createElement("div");
    // 给每次创建的div元素添加相同的class属性，用于设置样式
    div.className = "add-div-class";
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
        $(input2).toggleClass("styleComplete");
        $(input1).toggleClass("inputClick1")
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


    var input3 = document.createElement("p");
    input3.className = "input-class3";
    div.appendChild(input3);
    // 声明tvalue为获取时间方法的值
    var tvalue = currentTime();
    // 声明time为创建内容为tvalue的文本
    var time = document.createTextNode(tvalue);
    // 将time文本放入input3元素内
    input3.appendChild(time);


    var input4 = document.createElement("input");
    input4.type = "button";
    input4.className = "input-class4";
    input4.value = "Delete";
    $(input4).click(function(){
        // 当点击Delete按钮时删除这个父级div元素
        $(div).remove();
        // 并判断id="div-list"元素中是否还有子元素
        var list = document.getElementById("div-list").getElementsByTagName("div").length
        if(list == 0){
            $("#div-list").css("display","none");
        }
    })
    $(div).mouseover(function () { 
        // 当鼠标移入div时
        $(input4).css("opacity","1");
        $(input5).css("opacity","1");
    })
    $(div).mouseout(function () { 
        // 当鼠标移出div时
        $(input4).css("opacity","0.5");
        $(input5).css("opacity","0.5");
    })
    div.appendChild(input4);

    
    var input5 = document.createElement("input");
    input5.type = "button";
    input5.className = "input-class5";
    input5.value = "Edit";
    $(input5).click(function(){
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
        });
    })
    div.appendChild(input5);


    var p = createElement("p");
    var list = listLeft();
    var num = document.createTextNode(list);
    p.appendChild(num);
    var foot = $("div-foot");
    foot.appendChild(p);
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
}

var listLeft = function(){
    var lNum = $("#div-list").children("div").length;
    var cNum = $("#div-list").children(".styleComplete").length;
    var show = "一共有"+lNum+"项任务在列表中，其中"+cNum+"项已完成";
    return show;
}