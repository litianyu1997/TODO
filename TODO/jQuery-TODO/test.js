var todoList = [];

var addList = function(){
    // 获取添加时的文本框内容和时间
    var todo = {
        'value': $("#input-text").value,
        'time': currentTime()
    }
    // 将todo加入到集合中
    todoList.push(todo);
    saveTodos();
    // 创建一个div子元素
    createDiv(todo);
};

var createDiv = function(todo){
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

    
    // 声明text为创建内容为todo中value值的文本
    var text = document.createTextNode(todo.value);
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

}






var saveTodos = function() {
    // 将储存的todoList转换为值
    var s = JSON.stringify(todoList);
    // 将值储存
    localStorage.todoList = s;
};

var loadTodos = function() {
    // 将储存的值赋给s
    var s = localStorage.todoList;
    // 将s的值转换为js对象
    return JSON.parse(s);
};

todoList = loadTodos();
for(var i = 0; i < todoList.length; ++i) {
    var todo = todoList[i];
    createDiv(todo);
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

