var num = 0;
var select = [];
var cor = [];
var c1 = 0;
var c2 = 0;
var t = 0
var time;

$(document).ready(function () {

    $(".option").on("click",function(event){

        var target = $(event.target);

        var t = target.text();

        if($("#p1").html() == t || $("#p2").html() == t || $("#p3").html() == t){

            alert("已选择过相同字母");

        }else if($("#p1").html() != ""){

            if($("#p2").html() != ""){

                if($("#p3").html() != ""){

                    alert("已选满三个选项");

                }else if($("#p3").html() == ""){

                    document.getElementById("p3").innerHTML = t;

                }

            }else if($("#p2").html() == "")

             document.getElementById("p2").innerHTML = t;

        }else if($("#p1").html() == ""){

            document.getElementById("p1").innerHTML = t;

        }

    })

    document.getElementById("time").innerHTML = "已用时：" + t + "s";
});


var add = function(){

    if($("#p3").html() == ""){
        alert("请填满三个字母");
        return;
    }

    num = num+1;

    var div = document.createElement("div");
    
    div.id = "div" + num;


    var text1 = document.createTextNode(num + ": ");

    var input1 = document.createElement("span");

    input1.className = "span" + num;

    input1.appendChild(text1);

    div.appendChild(input1);


    var text2 = document.createTextNode($("#p1").html() + " " + $("#p2").html() + " " + $("#p3").html());

    var input2 = document.createElement("span");

    input2.className = "span" + num;

    input2.appendChild(text2);

    div.appendChild(input2);


    select[0] = document.getElementById("p1").innerHTML;
    select[1] = document.getElementById("p2").innerHTML;
    select[2] = document.getElementById("p3").innerHTML;

    
    document.getElementById("divlist").appendChild(div);

    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
    document.getElementById("p3").innerHTML = "";

    correct();


    var text3 = document.createTextNode(c1)

    var input3 = document.createElement("span");

    input3.id = "input1";

    input3.appendChild(text3);

    div.appendChild(input3);

    var text4 = document.createTextNode(c2)

    var input4 = document.createElement("span");

    input4.id = "input2";

    input4.appendChild(text4);

    div.appendChild(input4);

    c1 = 0;
    c2 = 0;
    
    if(t == 0){
        time = setInterval(spend,1000);
    }
}

var clean = function(){

    document.getElementById("p1").innerText = "";
    document.getElementById("p2").innerText = "";
    document.getElementById("p3").innerText = "";

}

var again = function(){

    var dchild = $("#divlist").children("div");

    for(i = 0; i < num ; i++){

        dchild[i].remove();

    }

    num = 0;

    random();
    clean();

    t = 0;
    clearInterval(time);
    document.getElementById("time").innerHTML = "已用时：" + t + "s";
}

var random = function(){

    cor = [];

    var i = 0;

    while(i < 3){

        var num = Math.floor(6*Math.random() + 1);

        if(cor.indexOf(num) == -1){

            cor.push(num);

            i++;

        }

    }

    for(j = 0; j < 3; j++){

        var x = cor[j];

        if(x == 1){

            cor[j] = "A";

        }else if(x == 2){

            cor[j] = "B";

        }else if(x == 3){

            cor[j] = "C";

        }else if(x == 4){

            cor[j] = "D";

        }else if(x == 5){

            cor[j] = "E";

        }else if(x == 6){

            cor[j] = "F";

        }

    }

}

var correct = function(){

        if(select[0] == cor[0]){
            c1 = c1+1;
            c2 = c2+1;
        }else if(select[0] == cor[1]||select[0] == cor[2]){
            c1 = c1+1;
        }

        if(select[1] == cor[1]){
            c1 = c1+1;
            c2 = c2+1;
        }else if(select[1] == cor[0]||select[1] == cor[2]){
            c1 = c1+1;
        }

        if(select[2] == cor[2]){
            c1 = c1+1;
            c2 = c2+1;
        }else if(select[2] == cor[0]||select[2] == cor[1]){
            c1 = c1+1;
        }

        if(c2 == "3"){
            alert("恭喜找到正确答案");
            clearInterval(time);
        }

    }

random();

var spend = function(){

    t = t+1;

    document.getElementById("time").innerHTML = "已用时：" + t + "s";

}