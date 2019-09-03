let num = 0;

function addList(){
    num++;
    let value = document.getElementById("input-text").value;
    const div = `
        <div id = "${num}" class = "add-div-class">
            <input type = "checkbox" class =  "input-class1" onClick = "click1()">
            <p class = "input-class2">
                <span id = "${num}" onDblClick = "click2()">${value}</span>
            </p>
            <input type = "button" class = "input-class3" value = "Time" id = "">
            <input type = "button" class = "input-class4" value = "Delete">
            <input type = "button" class = "input-class5" value = "Edit">
        </div>`
    document.getElementById("div-list").appendChild(div);
    $("#div-list").css("display","block");

}

function click1(){
    $(div).toggleClass("styleComplete");
    $(input2).toggleClass("styleComplete");
    $(input1).toggleClass("inputClick1")
    document.getElementById("pid").innerHTML = listLeft();
    $("#savebtn").css("display","block");
    $("#savep").css("display","none");
}

function click2(){
    
}
















