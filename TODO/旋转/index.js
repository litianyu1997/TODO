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
var numd = 0;
var nummo = 0;
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
    var t = (60 - sec)*1000;
    
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

    var t = (60 - sec)*1000 + (59 - min)*60*1000;

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

    var jD;
    var kD;
    var lD;

    if(mon+1 == 2){

        if(year%4 == 0){
            for(var i = 144; i < 173; i++){

                if(numd < 9){
                    pAll[i].innerText = "0" + (numd+1);
                }else{
                    pAll[i].innerText = numd+1;
                }
        
                jD = i + 4;
                divAll[jD].id = numd+1;
                
                kD = day + 143 - i;
                lD = 360 + kD * (360/29) +'deg'
                $(divAll[jD]).css("transform","rotateZ(" + lD + ")");
        
                numd++

            }
            
            var t = (60 - sec)*1000 + (59 - min)*60*1000 + (23 - hou)*60*60*1000;

            setTimeout(function (){
                kD = kD + 1;
                for(var i = 0; i < 29; i++){
                    var m = kD + i;
                    var n = 360 + m * (360/29) +'deg'
                    $(divAll[jD]).css("transform","rotateZ(" + n + ")");
                    jD--;
                }
                
                jD = 176;
    
            },t)

        }else{

            for(var i = 144; i < 172; i++){

                if(numd < 9){
                    pAll[i].innerText = "0" + (numd+1);
                }else{
                    pAll[i].innerText = numd+1;
                }
        
                jD = i + 4;
                divAll[jD].id = numd+1;
                
                kD = day + 143 - i;
                lD = 360 + kD * (360/28) +'deg'
                $(divAll[jD]).css("transform","rotateZ(" + lD + ")");
        
                numd++

            }
            
            var t = (60 - sec)*1000 + (59 - min)*60*1000 + (23 - hou)*60*60*1000;

            setTimeout(function (){
                kD = kD + 1;
                for(var i = 0; i < 28; i++){
                    var m = kD + i;
                    var n = 360 + m * (360/28) +'deg'
                    $(divAll[jD]).css("transform","rotateZ(" + n + ")");
                    jD--;
                }
                
                jD = 175;
    
            },t)



        }

    }else if(mon+1 == 4 || mon+1 == 6 || mon+1 == 9 || mon+1 == 11){

        for(var i = 144; i < 174; i++){

            if(numd < 9){
                pAll[i].innerText = "0" + (numd+1);
            }else{
                pAll[i].innerText = numd+1;
            }
    
            jD = i + 4;
            divAll[jD].id = numd+1;
            
            kD = day + 143 - i;
            lD = 360 + kD * 12 +'deg'
            $(divAll[jD]).css("transform","rotateZ(" + lD + ")");
    
            numd++
        }
        
        var t = (60 - sec)*1000 + (59 - min)*60*1000 + (23 - hou)*60*60*1000;

        setTimeout(function (){
            kD = kD + 1;
            for(var i = 0; i < 30; i++){
                var m = kD + i;
                var n = 360 + m * 12 +'deg'
                $(divAll[jD]).css("transform","rotateZ(" + n + ")");
                jD--;
            }
            
            jD = 177;

        },t)

    }else{

        for(var i = 144; i < 175; i++){

            if(numd < 9){
                pAll[i].innerText = "0" + (numd+1);
            }else{
                pAll[i].innerText = numd+1;
            }
    
            jD = i + 4;
            divAll[jD].id = numd+1;
            
            kD = day + 143 - i;
            lD = 360 + kD * (360/31) +'deg'
            $(divAll[jD]).css("transform","rotateZ(" + lD + ")");
    
            numd++
        }

        var t = (60 - sec)*1000 + (59 - min)*60*1000 + (23 - hou)*60*60*1000;

        setTimeout(function (){
            kD = kD + 1;
            for(var i = 0; i < 31; i++){
                var m = kD + i;
                var n = 360 + m * (360/31) +'deg'
                $(divAll[jD]).css("transform","rotateZ(" + n + ")");
                jD--;
            }
            
            jD = 178;

        },t)
        
    }
    
    month();
}

function month(){

    var jMo;
    var kMo;
    var lMo;

    for(var i = 175; i < 187; i++){

        if(nummo < 9){
            pAll[i].innerText = "0" + (nummo+1);
        }else{
            pAll[i].innerText = nummo+1;
        }

        jMo = i + 5;
        divAll[jMo].id = nummo+1;
        
        kMo = mon + 175 - i;
        lMo = 360 + kMo * 30 +'deg'
        $(divAll[jMo]).css("transform","rotateZ(" + lMo + ")");

        nummo++
    }

    y();

}

function y(){

    var i = 187;
    pAll[i].innerText = year;
    
    $(".sign").css("display","inline");

    console.log("start time: " + year + "/" + (mon+1) + "/" + day + "-" + hou + ":" + min + ":" + sec)
    
}