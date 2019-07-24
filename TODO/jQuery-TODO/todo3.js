
var fromNewToOld = function(){

    todoList1 = todoList;

    var length = rNum;

    if(todoList1.length != length){

        todoList1 = [];
        // 计算剩余div任务的数量
        var i = document.getElementById("div-list").childNodes;
        var ilength = i.length;
        // 储存
        var faDiv = document.querySelectorAll(".add-div-class");
        for(var j=0;j<ilength;++j){
            var child = faDiv[j].childNodes;
            var span = child[1].childNodes;
            var value = span[0].innerHTML;
            var time = child[2].id;
            var complete = child[0].className;
            var clength = complete.length;
            if(clength=="0"||clength=="12"){
                x = 1;
            }else if(clength=="11"||clength=="24"){
                x = 2;
            }else{
                console.log("WRONG");
            }

            var todo = {
                'value': value,
                'time': time,
                'x': x
            }
            todoList1.push(todo);
        }

    }

    if(length > 1){

        for(var i = 0; i < length-1; i++){

            var change = todoList1[i];

            var n;

            for(var j = i+1; j < length; j++){

                var obj = todoList1[j];

                if(change.time < obj.time){

                    change = obj;

                    n = j;

                }

            }

            if(todoList1[i] != change){
                todoList1[n] = todoList1[i];
                todoList1[i] = change;
            }

        }

        $("#div-list").children("div").remove();

        var n = todoList1.length;

        for(var i=0; i < n; ++i){

            var todo = todoList1[i];

            loadList(todo);
        }

    }

    $("#fonbtn").css("display","none");
    $("#fnobtn").css("display","block");

}


var fromOldToNew = function(){

    todoList1 = todoList;

    var length = rNum;

    if(todoList1.length != length){

        todoList1 = [];
        // 计算剩余div任务的数量
        var i = document.getElementById("div-list").childNodes;
        var ilength = i.length;
        // 储存
        var faDiv = document.querySelectorAll(".add-div-class");
        for(var j=0;j<ilength;++j){
            var child = faDiv[j].childNodes;
            var span = child[1].childNodes;
            var value = span[0].innerHTML;
            var time = child[2].id;
            var complete = child[0].className;
            var clength = complete.length;
            if(clength=="0"||clength=="12"){
                x = 1;
            }else if(clength=="11"||clength=="24"){
                x = 2;
            }else{
                console.log("WRONG");
            }

            var todo = {
                'value': value,
                'time': time,
                'x': x
            }
            todoList1.push(todo);
        }

    }

    if(length > 1){

        for(var i = 0; i < length-1; i++){

            var change = todoList1[i];

            var n;

            for(var j = i+1; j < length; j++){

                var obj = todoList1[j];

                if(change.time > obj.time){

                    change = obj;

                    n = j;

                }

            }

            if(todoList1[i] != change){
                todoList1[n] = todoList1[i];
                todoList1[i] = change;
            }

        }

        $("#div-list").children("div").remove();

        var n = todoList1.length;

        for(var i=0; i < n; ++i){

            var todo = todoList1[i];

            loadList(todo);
        }

    }

    $("#fonbtn").css("display","block");
    $("#fnobtn").css("display","none");

}
