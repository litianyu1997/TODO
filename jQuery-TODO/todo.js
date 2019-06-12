// 创建一个addList()方法，作为id为btn-add的元素的点击事件
function addList(){

    // 执行方法时创建一个div元素
    var div = document.createElement("div");
    // 给每次创建的div元素添加相同的class属性，用于设置样式
    div.className = "add-div-class";
    // 将创建的div元素添加为id="div-list"的子元素
    document.getElementById("div-list").appendChild(div);


    // 创建一个spanp元素
    var span1 = document.createElement("span");
    // 给每次创建的span元素添加相同class属性，用于设置样式
    span1.className = "span-class";
    // 将创建的span元素添加为刚刚创建的div元素的子元素
    div.appendChild(span1);
    // 声明ivalue获取id="input-text"元素中的内容
    var ivalue = document.getElementById("input-text").value;
    // 声明text为创建内容为ivalue的文本
    var text = document.createTextNode(ivalue);
    // 将text文本放入span元素内
    span1.appendChild(text);
    // 之后清空id="input-text"元素中的内容
    document.getElementById("input-text").value = "";


    // 在刚才创建的span元素后创建第一个input元素
    var button1 = document.createElement("input");
    // 设置input元素类型为button属性
    button1.type = "button";
    // 给每次创建的input元素设置相同class属性，用于设置样式
    button1.className = "add-button-class";
    // 给创建的input元素设置内容(名字)为Complete
    button1.value = "Complete";
    // 给创建的Complete按钮设置一个点击事件
    $(button1).click(function(){
        // 当点击Complete按钮时将刚才创建的span元素的css样式更改
        $(span1).css("color","red");
        $(span1).css("textDecoration","line-through");
    })
    // 将这个按钮添加为刚刚创建的div元素的子元素
    div.appendChild(button1);


    var button2 = document.createElement("input");
    button2.type = "button";
    button2.className = "add-button-class";
    button2.value = "Clean";
    $(button2).click(function(){
        // 当点击Complete按钮时将刚才创建的span元素的css样式更改
        $(span1).css("color","black");
        $(span1).css("textDecoration","none");
    })
    div.appendChild(button2);


    var button3 = document.createElement("input");
    button3.type = "button";
    button3.className = "add-button-class";
    button3.value = "Delete";
    $(button3).click(function(){
        // 当点击Delete按钮时删除这个父级div元素
        $(div).remove();
    })
    div.appendChild(button3);

    var span2 = document.createElement("span");
    span2.className = "span-class2";
    div.appendChild(span2);
    // 声明tvalue为获取时间方法的值
    var tvalue = currentTime();
    // 声明time为创建内容为tvalue的文本
    var time = document.createTextNode(tvalue);
    // 将time文本放入span元素内
    span2.appendChild(time);
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