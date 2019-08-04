var cor = [];
var cnum = 0;
var sl = [];
var choose = [];
var t = 0;

function test(){
    if(cnum == 2){
        if(sl[0] !== sl[1]){
            $(choose[0]).css("transform","rotateY(0deg)");
            $(choose[1]).css("transform","rotateY(0deg)");
            cnum = 0;
            choose = [];
            sl = [];
            
        }else if(sl[0] == sl[1]){
            cnum = 0;
            choose = [];
            sl = [];
            t = t+1;
        }
        if(t == 8){
            alert("congratulation!")
        }
    }
}

function demo(event){

    if(cnum < 2){
        var target = event.target.parentNode;
        $(target).css("transform","rotateY(180deg)");
        var value = target.childNodes[3].innerText;
        sl.push(value);
        choose.push(target);
        cnum = cnum+1;
    }

    setTimeout("test()","1300");

}

var random = function(){

    var i = 0;

    while(i < 16){

        var num = Math.floor(16*Math.random() + 1);

        if(cor.indexOf(num) == -1){

            cor.push(num);

            i = i+1;

        }

    }

    console.log(cor)

    for(j = 0; j < 16; j++){

        var x = cor[j];

        if(x == 9){

            cor[j] = 1;

        }else if(x == 10){

            cor[j] = 2;

        }else if(x == 11){

            cor[j] = 3;

        }else if(x == 12){

            cor[j] = 4;

        }else if(x == 13){

            cor[j] = 5;

        }else if(x == 14){

            cor[j] = 6;

        }else if(x == 15){

            cor[j] = 7;

        }else if(x == 16){

            cor[j] = 8;

        }

    }

    
    document.getElementById("d1").innerText = cor[0];
    document.getElementById("d2").innerText = cor[1];
    document.getElementById("d3").innerText = cor[2];
    document.getElementById("d4").innerText = cor[3];
    document.getElementById("d5").innerText = cor[4];
    document.getElementById("d6").innerText = cor[5];
    document.getElementById("d7").innerText = cor[6];
    document.getElementById("d8").innerText = cor[7];
    document.getElementById("d9").innerText = cor[8];
    document.getElementById("d10").innerText = cor[9];
    document.getElementById("d11").innerText = cor[10];
    document.getElementById("d12").innerText = cor[11];
    document.getElementById("d13").innerText = cor[12];
    document.getElementById("d14").innerText = cor[13];
    document.getElementById("d15").innerText = cor[14];
    document.getElementById("d16").innerText = cor[15];
}

random()