var obj1 = null;
var obj2 = null;
var obj3 = null;
var obj4 = null;
var clength = 0;
var child = null;
// 通过事件捕获来获取当前被拖拽的元素
document.ondragstart = function(e){
    obj1 = e.target.parentNode;
    obj2 = e.target;
}

document.ondragover = function(e){
    e.preventDefault();
}

document.ondrop = function(e){
    if(e.target.id == "div-all"||e.target.id == "div-active"||e.target.id == "div-complete"){
        obj3 = e.target;
        obj4 = e.target.parentNode;
        obj1.appendChild(obj3);
        obj4.appendChild(obj2);
        
        if(obj4.id == "drag1"){
            select1();
        }else if(obj4.id == "drag2"){
            select2();
        }else if(obj4.id == "drag3"){
            select3();
        }else{
            alert("Wrong");
        }
    }
    obj1 = null;
    obj2 = null;
    obj3 = null;
    obj4 = null;
}

var select1 = function(){
    $("#drag1").addClass("click");
    $("#drag2").addClass("unclick");
    $("#drag3").addClass("unclick");

    $("#drag1").removeClass("unclick");
    $("#drag2").removeClass("click");
    $("#drag3").removeClass("click");

    child = $("#div-list").children("div");
    clength = $("#div-list").children("div").length;
    var p = $("#drag1").children("p")[0];
    if(p.id == "div-all"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
        }
    }else if(p.id == "div-active"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
            if($(child[i]).hasClass("styleComplete")){
                $(child[i]).addClass("change");
            }
        }
    }else if(p.id == "div-complete"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
            if(!$(child[i]).hasClass("styleComplete")){
                $(child[i]).addClass("change");
            }
        }
    }
}
var select2 = function(){
    $("#drag1").addClass("unclick");
    $("#drag2").addClass("click");
    $("#drag3").addClass("unclick");
    
    $("#drag1").removeClass("click");
    $("#drag2").removeClass("unclick");
    $("#drag3").removeClass("click");

    child = $("#div-list").children("div");
    clength = $("#div-list").children("div").length;
    var p = $("#drag2").children("p")[0];
    if(p.id == "div-all"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
        }
    }else if(p.id == "div-active"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
            if($(child[i]).hasClass("styleComplete")){
                $(child[i]).addClass("change");
            }
        }
    }else if(p.id == "div-complete"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
            if(!$(child[i]).hasClass("styleComplete")){
                $(child[i]).addClass("change");
            }
        }
    }
}
var select3 = function(){
    $("#drag1").addClass("unclick");
    $("#drag2").addClass("unclick");
    $("#drag3").addClass("click");
    
    $("#drag1").removeClass("click");
    $("#drag2").removeClass("click");
    $("#drag3").removeClass("unclick");

    child = $("#div-list").children("div");
    clength = $("#div-list").children("div").length;
    var p = $("#drag3").children("p")[0];
    if(p.id == "div-all"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
        }
    }else if(p.id == "div-active"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
            if($(child[i]).hasClass("styleComplete")){
                $(child[i]).addClass("change");
            }
        }
    }else if(p.id == "div-complete"){
        for(i = 0; i < clength; i++){
            if($(child[i]).hasClass("change")){
                $(child[i]).removeClass("change");
            }
            if(!$(child[i]).hasClass("styleComplete")){
                $(child[i]).addClass("change");
            }
        }
    }
}


