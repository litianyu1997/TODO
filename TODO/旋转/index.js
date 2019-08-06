var myDate = new Date();
var sec = myDate.getSeconds();
var min = myDate.getMinutes();
var hou = myDate.getHours();
var day = myDate.getDate();
var mon = myDate.getMonth();
var year = myDate.getFullYear();

var nums = 0;
var numm = 0;
var numh = 0;
var divAll = document.getElementsByTagName("div");
var pAll = document.getElementsByTagName("p");

$("#btn").click(function second(){
    
    var jS;
    var kS;
    var lS;

    
    for(var i = 0; i < 60; i++){

        if(nums < 10){
            pAll[i].innerText = "0" + nums;
        }else{
            pAll[i].innerText = nums;
        }

        jS = i + 1;
        divAll[jS].id = nums;

        kS = sec + 60 - i;
        lS = 360 + kS * 6 +'deg'
        $(divAll[jS]).css("transform","rotateZ(" + lS + ")");

        nums++
    }

    setInterval(function (){

        kS = kS + 1;
        for(var i = 0; i < 60; i++){
            var m = kS + i;
            var n = 360 + m * 6 +'deg'
            $(divAll[jS]).css("transform","rotateZ(" + n + ")");
            jS--;
        }
        jS = 60;
    },1000)
    

    $("#btn").css("display","none");

    minute()
});

function minute(){

    var jM;
    var kM;
    var lM;
    
    for(var i = 60; i < 120; i++){

        if(numm < 10){
            pAll[i].innerText = "0" + numm;
        }else{
            pAll[i].innerText = numm;
        }

        jM = i + 2;
        divAll[jM].id = numm;
        
        kM = min + 120 - i;
        lM = 360 + kM * 6 +'deg'
        $(divAll[jM]).css("transform","rotateZ(" + lM + ")");

        numm++
    }
    var t = (60 - sec)*1000
    
    setTimeout(function (){
        kM = kM + 1;
        for(var i = 0; i < 60; i++){
            var m = kM + i;
            var n = 360 + m * 6 +'deg'
            $(divAll[jM]).css("transform","rotateZ(" + n + ")");
            jM--;
        }
        jM = 121;

        setInterval(function (){
            kM = kM + 1;
            for(var i = 0; i < 60; i++){
                var m = kM + i;
                var n = 360 + m * 6 +'deg'
                $(divAll[jM]).css("transform","rotateZ(" + n + ")");
                jM--;
            };
            jM = 121;
        },60000);
    },t)

    hour();
}

function hour(){

    var jH;
    var kH;
    var lH;
    
    for(var i = 120; i < 144; i++){

        if(numh < 10){
            pAll[i].innerText = "0" + numh;
        }else{
            pAll[i].innerText = numh;
        }

        jH = i + 3;
        divAll[jH].id = numh;
        
        kH = hou + 120 - i;
        lH = 360 + kH * 15 +'deg'
        $(divAll[jH]).css("transform","rotateZ(" + lH + ")");

        numh++
    }

    var t = (60 - sec)*1000 + (59 - min)*60000

    setTimeout(function (){
        kH = kH + 1;
        for(var i = 0; i < 24; i++){
            var m = kH + i;
            var n = 360 + m * 15 +'deg'
            $(divAll[jH]).css("transform","rotateZ(" + n + ")");
            jH--;
        }
        jH = 146;

        setInterval(function (){
            kH = kH + 1;
            for(var i = 0; i < 24; i++){
                var m = kH + i;
                var n = 360 + m * 15 +'deg'
                $(divAll[jH]).css("transform","rotateZ(" + n + ")");
                jH--;
            };
            jH = 146;
        },3600000);
    },t)
    

    d();
}

function d(){
    if(mon+1 == 2){

        if(year%4 == 0){
            $("#d30").css("display","none");
            $("#d31").css("display","none");
        }else{
            $("#d29").css("display","none");
            $("#d30").css("display","none");
            $("#d31").css("display","none");
        }

    }else if(mon+1 == 4 || mon+1 == 6 || mon+1 == 9 || mon+1 == 11){

        $("#d31").css("display","none");

    }else{


        
    }

    

    
    
    // month();
}

function month(){

    

    var mm01 = 360 + (mon + 12) * 30+'deg';
    var mm02 = 360 + (mon + 11) * 30+'deg';
    var mm03 = 360 + (mon + 10) * 30+'deg';
    var mm04 = 360 + (mon + 9) * 30+'deg';
    var mm05 = 360 + (mon + 8) * 30+'deg';
    var mm06 = 360 + (mon + 7) * 30+'deg';
    var mm07 = 360 + (mon + 6) * 30+'deg';
    var mm08 = 360 + (mon + 5) * 30+'deg';
    var mm09 = 360 + (mon + 4) * 30+'deg';
    var mm10 = 360 + (mon + 3) * 30+'deg';
    var mm11 = 360 + (mon + 2) * 30+'deg';
    var mm12 = 360 + (mon + 1) * 30+'deg';
    

    setTimeout(function () {$("#mo1").css("transform","rotateZ(" + mm01 + ")");}, 4000);
    setTimeout(function () {$("#mo2").css("transform","rotateZ(" + mm02 + ")");}, 4000);
    setTimeout(function () {$("#mo3").css("transform","rotateZ(" + mm03 + ")");}, 4000);
    setTimeout(function () {$("#mo4").css("transform","rotateZ(" + mm04 + ")");}, 4000);
    setTimeout(function () {$("#mo5").css("transform","rotateZ(" + mm05 + ")");}, 4000);
    setTimeout(function () {$("#mo6").css("transform","rotateZ(" + mm06 + ")");}, 4000);
    setTimeout(function () {$("#mo7").css("transform","rotateZ(" + mm07 + ")");}, 4000);
    setTimeout(function () {$("#mo8").css("transform","rotateZ(" + mm08 + ")");}, 4000);
    setTimeout(function () {$("#mo9").css("transform","rotateZ(" + mm09 + ")");}, 4000);
    setTimeout(function () {$("#mo10").css("transform","rotateZ(" + mm10 + ")");}, 4000);
    setTimeout(function () {$("#mo11").css("transform","rotateZ(" + mm11 + ")");}, 4000);
    setTimeout(function () {$("#mo12").css("transform","rotateZ(" + mm12 + ")");}, 4000);

}