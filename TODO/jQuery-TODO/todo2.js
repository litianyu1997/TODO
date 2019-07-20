var obj1 = null;
var obj2 = null;
var obj3 = null;
var obj4 = null;
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
    }
    obj1 = null;
    obj2 = null;
    obj3 = null;
    obj4 = null;
}

var select1 = function(){
    $("#drag1").toggleClass();
}


