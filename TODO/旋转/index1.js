var myDate = new Date(); //获取时间
var sec = myDate.getSeconds(); //获取当前秒数(0-59)
var min = myDate.getMinutes();  //获取当前分钟数(0-59)
var hou = myDate.getHours(); //获取当前小时数(0-23)
var day = myDate.getDate(); //获取当前日(1-31)
var mon = myDate.getMonth(); //获取当前月份(0-11,0代表1月)
console.log(sec,min,hou,day,mon);


$("#btn").click(function second(){

    /*
    myDate.getYear(); //获取当前年份(2位)
    myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    myDate.getMonth(); //获取当前月份(0-11,0代表1月)
    myDate.getDate(); //获取当前日(1-31)
    myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
    myDate.getHours(); //获取当前小时数(0-23)
    myDate.getMinutes(); //获取当前分钟数(0-59)
    myDate.getSeconds(); //获取当前秒数(0-59)
    myDate.getMilliseconds(); //获取当前毫秒数(0-999)
    myDate.toLocaleDateString(); //获取当前日期
    */
    
   

    //var y00 = 360 + sec * 6;
    //var r00 = y00+'deg';
    
    var s00 = 360 + (sec + 60) * 6+'deg'; 
    var s01 = 360 + (sec + 59) * 6+'deg';
    var s02 = 360 + (sec + 58) * 6+'deg';
    var s03 = 360 + (sec + 57) * 6+'deg';
    var s04 = 360 + (sec + 56) * 6+'deg';
    var s05 = 360 + (sec + 55) * 6+'deg';
    var s06 = 360 + (sec + 54) * 6+'deg';
    var s07 = 360 + (sec + 53) * 6+'deg';
    var s08 = 360 + (sec + 52) * 6+'deg';
    var s09 = 360 + (sec + 51) * 6+'deg';
    var s10 = 360 + (sec + 50) * 6+'deg';
    var s11 = 360 + (sec + 49) * 6+'deg';
    var s12 = 360 + (sec + 48) * 6+'deg';
    var s13 = 360 + (sec + 47) * 6+'deg';
    var s14 = 360 + (sec + 46) * 6+'deg';
    var s15 = 360 + (sec + 45) * 6+'deg';
    var s16 = 360 + (sec + 44) * 6+'deg';
    var s17 = 360 + (sec + 43) * 6+'deg';
    var s18 = 360 + (sec + 42) * 6+'deg';
    var s19 = 360 + (sec + 41) * 6+'deg';
    var s20 = 360 + (sec + 40) * 6+'deg';
    var s21 = 360 + (sec + 39) * 6+'deg';
    var s22 = 360 + (sec + 38) * 6+'deg';
    var s23 = 360 + (sec + 37) * 6+'deg';
    var s24 = 360 + (sec + 36) * 6+'deg';
    var s25 = 360 + (sec + 35) * 6+'deg';
    var s26 = 360 + (sec + 34) * 6+'deg';
    var s27 = 360 + (sec + 33) * 6+'deg';
    var s28 = 360 + (sec + 32) * 6+'deg';
    var s29 = 360 + (sec + 31) * 6+'deg';
    var s30 = 360 + (sec + 30) * 6+'deg';
    var s31 = 360 + (sec + 29) * 6+'deg';
    var s32 = 360 + (sec + 28) * 6+'deg';
    var s33 = 360 + (sec + 27) * 6+'deg';
    var s34 = 360 + (sec + 26) * 6+'deg';
    var s35 = 360 + (sec + 25) * 6+'deg';
    var s36 = 360 + (sec + 24) * 6+'deg';
    var s37 = 360 + (sec + 23) * 6+'deg';
    var s38 = 360 + (sec + 22) * 6+'deg';
    var s39 = 360 + (sec + 21) * 6+'deg';
    var s40 = 360 + (sec + 20) * 6+'deg';
    var s41 = 360 + (sec + 19) * 6+'deg';
    var s42 = 360 + (sec + 18) * 6+'deg';
    var s43 = 360 + (sec + 17) * 6+'deg';
    var s44 = 360 + (sec + 16) * 6+'deg';
    var s45 = 360 + (sec + 15) * 6+'deg';
    var s46 = 360 + (sec + 14) * 6+'deg';
    var s47 = 360 + (sec + 13) * 6+'deg';
    var s48 = 360 + (sec + 12) * 6+'deg';
    var s49 = 360 + (sec + 11) * 6+'deg';
    var s50 = 360 + (sec + 10) * 6+'deg';
    var s51 = 360 + (sec + 9) * 6+'deg';
    var s52 = 360 + (sec + 8) * 6+'deg';
    var s53 = 360 + (sec + 7) * 6+'deg';
    var s54 = 360 + (sec + 6) * 6+'deg';
    var s55 = 360 + (sec + 5) * 6+'deg';
    var s56 = 360 + (sec + 4) * 6+'deg';
    var s57 = 360 + (sec + 3) * 6+'deg';
    var s58 = 360 + (sec + 2) * 6+'deg';
    var s59 = 360 + (sec + 1) * 6+'deg';
    

    setTimeout(function () {$("#s0").css("transform","rotateZ(" + s00 + ")");}, 0);
    setTimeout(function () {$("#s1").css("transform","rotateZ(" + s01 + ")");}, 0);
    setTimeout(function () {$("#s2").css("transform","rotateZ(" + s02 + ")");}, 0);
    setTimeout(function () {$("#s3").css("transform","rotateZ(" + s03 + ")");}, 0);
    setTimeout(function () {$("#s4").css("transform","rotateZ(" + s04 + ")");}, 0);
    setTimeout(function () {$("#s5").css("transform","rotateZ(" + s05 + ")");}, 0);
    setTimeout(function () {$("#s6").css("transform","rotateZ(" + s06 + ")");}, 0);
    setTimeout(function () {$("#s7").css("transform","rotateZ(" + s07 + ")");}, 0);
    setTimeout(function () {$("#s8").css("transform","rotateZ(" + s08 + ")");}, 0);
    setTimeout(function () {$("#s9").css("transform","rotateZ(" + s09 + ")");}, 0);
    setTimeout(function () {$("#s10").css("transform","rotateZ(" + s10 + ")");}, 0);
    setTimeout(function () {$("#s11").css("transform","rotateZ(" + s11 + ")");}, 0);
    setTimeout(function () {$("#s12").css("transform","rotateZ(" + s12 + ")");}, 0);
    setTimeout(function () {$("#s13").css("transform","rotateZ(" + s13 + ")");}, 0);
    setTimeout(function () {$("#s14").css("transform","rotateZ(" + s14 + ")");}, 0);
    setTimeout(function () {$("#s15").css("transform","rotateZ(" + s15 + ")");}, 0);
    setTimeout(function () {$("#s16").css("transform","rotateZ(" + s16 + ")");}, 0);
    setTimeout(function () {$("#s17").css("transform","rotateZ(" + s17 + ")");}, 0);
    setTimeout(function () {$("#s18").css("transform","rotateZ(" + s18 + ")");}, 0);
    setTimeout(function () {$("#s19").css("transform","rotateZ(" + s19 + ")");}, 0);
    setTimeout(function () {$("#s20").css("transform","rotateZ(" + s20 + ")");}, 0);
    setTimeout(function () {$("#s21").css("transform","rotateZ(" + s21 + ")");}, 0);
    setTimeout(function () {$("#s22").css("transform","rotateZ(" + s22 + ")");}, 0);
    setTimeout(function () {$("#s23").css("transform","rotateZ(" + s23 + ")");}, 0);
    setTimeout(function () {$("#s24").css("transform","rotateZ(" + s24 + ")");}, 0);
    setTimeout(function () {$("#s25").css("transform","rotateZ(" + s25 + ")");}, 0);
    setTimeout(function () {$("#s26").css("transform","rotateZ(" + s26 + ")");}, 0);
    setTimeout(function () {$("#s27").css("transform","rotateZ(" + s27 + ")");}, 0);
    setTimeout(function () {$("#s28").css("transform","rotateZ(" + s28 + ")");}, 0);
    setTimeout(function () {$("#s29").css("transform","rotateZ(" + s29 + ")");}, 0);
    setTimeout(function () {$("#s30").css("transform","rotateZ(" + s30 + ")");}, 0);
    setTimeout(function () {$("#s31").css("transform","rotateZ(" + s31 + ")");}, 0);
    setTimeout(function () {$("#s32").css("transform","rotateZ(" + s32 + ")");}, 0);
    setTimeout(function () {$("#s33").css("transform","rotateZ(" + s33 + ")");}, 0);
    setTimeout(function () {$("#s34").css("transform","rotateZ(" + s34 + ")");}, 0);
    setTimeout(function () {$("#s35").css("transform","rotateZ(" + s35 + ")");}, 0);
    setTimeout(function () {$("#s36").css("transform","rotateZ(" + s36 + ")");}, 0);
    setTimeout(function () {$("#s37").css("transform","rotateZ(" + s37 + ")");}, 0);
    setTimeout(function () {$("#s38").css("transform","rotateZ(" + s38 + ")");}, 0);
    setTimeout(function () {$("#s39").css("transform","rotateZ(" + s39 + ")");}, 0);
    setTimeout(function () {$("#s40").css("transform","rotateZ(" + s40 + ")");}, 0);
    setTimeout(function () {$("#s41").css("transform","rotateZ(" + s41 + ")");}, 0);
    setTimeout(function () {$("#s42").css("transform","rotateZ(" + s42 + ")");}, 0);
    setTimeout(function () {$("#s43").css("transform","rotateZ(" + s43 + ")");}, 0);
    setTimeout(function () {$("#s44").css("transform","rotateZ(" + s44 + ")");}, 0);
    setTimeout(function () {$("#s45").css("transform","rotateZ(" + s45 + ")");}, 0);
    setTimeout(function () {$("#s46").css("transform","rotateZ(" + s46 + ")");}, 0);
    setTimeout(function () {$("#s47").css("transform","rotateZ(" + s47 + ")");}, 0);
    setTimeout(function () {$("#s48").css("transform","rotateZ(" + s48 + ")");}, 0);
    setTimeout(function () {$("#s49").css("transform","rotateZ(" + s49 + ")");}, 0);
    setTimeout(function () {$("#s50").css("transform","rotateZ(" + s50 + ")");}, 0);
    setTimeout(function () {$("#s51").css("transform","rotateZ(" + s51 + ")");}, 0);
    setTimeout(function () {$("#s52").css("transform","rotateZ(" + s52 + ")");}, 0);
    setTimeout(function () {$("#s53").css("transform","rotateZ(" + s53 + ")");}, 0);
    setTimeout(function () {$("#s54").css("transform","rotateZ(" + s54 + ")");}, 0);
    setTimeout(function () {$("#s55").css("transform","rotateZ(" + s55 + ")");}, 0);
    setTimeout(function () {$("#s56").css("transform","rotateZ(" + s56 + ")");}, 0);
    setTimeout(function () {$("#s57").css("transform","rotateZ(" + s57 + ")");}, 0);
    setTimeout(function () {$("#s58").css("transform","rotateZ(" + s58 + ")");}, 0);
    setTimeout(function () {$("#s59").css("transform","rotateZ(" + s59 + ")");}, 0);

    $("#btn").css("display","none");

    minute()
});

function minute(){

    
    
    var m00 = 360 + (min + 60) * 6+'deg'; 
    var m01 = 360 + (min + 59) * 6+'deg';
    var m02 = 360 + (min + 58) * 6+'deg';
    var m03 = 360 + (min + 57) * 6+'deg';
    var m04 = 360 + (min + 56) * 6+'deg';
    var m05 = 360 + (min + 55) * 6+'deg';
    var m06 = 360 + (min + 54) * 6+'deg';
    var m07 = 360 + (min + 53) * 6+'deg';
    var m08 = 360 + (min + 52) * 6+'deg';
    var m09 = 360 + (min + 51) * 6+'deg';
    var m10 = 360 + (min + 50) * 6+'deg';
    var m11 = 360 + (min + 49) * 6+'deg';
    var m12 = 360 + (min + 48) * 6+'deg';
    var m13 = 360 + (min + 47) * 6+'deg';
    var m14 = 360 + (min + 46) * 6+'deg';
    var m15 = 360 + (min + 45) * 6+'deg';
    var m16 = 360 + (min + 44) * 6+'deg';
    var m17 = 360 + (min + 43) * 6+'deg';
    var m18 = 360 + (min + 42) * 6+'deg';
    var m19 = 360 + (min + 41) * 6+'deg';
    var m20 = 360 + (min + 40) * 6+'deg';
    var m21 = 360 + (min + 39) * 6+'deg';
    var m22 = 360 + (min + 38) * 6+'deg';
    var m23 = 360 + (min + 37) * 6+'deg';
    var m24 = 360 + (min + 36) * 6+'deg';
    var m25 = 360 + (min + 35) * 6+'deg';
    var m26 = 360 + (min + 34) * 6+'deg';
    var m27 = 360 + (min + 33) * 6+'deg';
    var m28 = 360 + (min + 32) * 6+'deg';
    var m29 = 360 + (min + 31) * 6+'deg';
    var m30 = 360 + (min + 30) * 6+'deg';
    var m31 = 360 + (min + 29) * 6+'deg';
    var m32 = 360 + (min + 28) * 6+'deg';
    var m33 = 360 + (min + 27) * 6+'deg';
    var m34 = 360 + (min + 26) * 6+'deg';
    var m35 = 360 + (min + 25) * 6+'deg';
    var m36 = 360 + (min + 24) * 6+'deg';
    var m37 = 360 + (min + 23) * 6+'deg';
    var m38 = 360 + (min + 22) * 6+'deg';
    var m39 = 360 + (min + 21) * 6+'deg';
    var m40 = 360 + (min + 20) * 6+'deg';
    var m41 = 360 + (min + 19) * 6+'deg';
    var m42 = 360 + (min + 18) * 6+'deg';
    var m43 = 360 + (min + 17) * 6+'deg';
    var m44 = 360 + (min + 16) * 6+'deg';
    var m45 = 360 + (min + 15) * 6+'deg';
    var m46 = 360 + (min + 14) * 6+'deg';
    var m47 = 360 + (min + 13) * 6+'deg';
    var m48 = 360 + (min + 12) * 6+'deg';
    var m49 = 360 + (min + 11) * 6+'deg';
    var m50 = 360 + (min + 10) * 6+'deg';
    var m51 = 360 + (min + 9) * 6+'deg';
    var m52 = 360 + (min + 8) * 6+'deg';
    var m53 = 360 + (min + 7) * 6+'deg';
    var m54 = 360 + (min + 6) * 6+'deg';
    var m55 = 360 + (min + 5) * 6+'deg';
    var m56 = 360 + (min + 4) * 6+'deg';
    var m57 = 360 + (min + 3) * 6+'deg';
    var m58 = 360 + (min + 2) * 6+'deg';
    var m59 = 360 + (min + 1) * 6+'deg'; 
    

    setTimeout(function () {$("#m0").css("transform","rotateZ(" + m00 + ")");}, 1000);
    setTimeout(function () {$("#m1").css("transform","rotateZ(" + m01 + ")");}, 1000);
    setTimeout(function () {$("#m2").css("transform","rotateZ(" + m02 + ")");}, 1000);
    setTimeout(function () {$("#m3").css("transform","rotateZ(" + m03 + ")");}, 1000);
    setTimeout(function () {$("#m4").css("transform","rotateZ(" + m04 + ")");}, 1000);
    setTimeout(function () {$("#m5").css("transform","rotateZ(" + m05 + ")");}, 1000);
    setTimeout(function () {$("#m6").css("transform","rotateZ(" + m06 + ")");}, 1000);
    setTimeout(function () {$("#m7").css("transform","rotateZ(" + m07 + ")");}, 1000);
    setTimeout(function () {$("#m8").css("transform","rotateZ(" + m08 + ")");}, 1000);
    setTimeout(function () {$("#m9").css("transform","rotateZ(" + m09 + ")");}, 1000);
    setTimeout(function () {$("#m10").css("transform","rotateZ(" + m10 + ")");}, 1000);
    setTimeout(function () {$("#m11").css("transform","rotateZ(" + m11 + ")");}, 1000);
    setTimeout(function () {$("#m12").css("transform","rotateZ(" + m12 + ")");}, 1000);
    setTimeout(function () {$("#m13").css("transform","rotateZ(" + m13 + ")");}, 1000);
    setTimeout(function () {$("#m14").css("transform","rotateZ(" + m14 + ")");}, 1000);
    setTimeout(function () {$("#m15").css("transform","rotateZ(" + m15 + ")");}, 1000);
    setTimeout(function () {$("#m16").css("transform","rotateZ(" + m16 + ")");}, 1000);
    setTimeout(function () {$("#m17").css("transform","rotateZ(" + m17 + ")");}, 1000);
    setTimeout(function () {$("#m18").css("transform","rotateZ(" + m18 + ")");}, 1000);
    setTimeout(function () {$("#m19").css("transform","rotateZ(" + m19 + ")");}, 1000);
    setTimeout(function () {$("#m20").css("transform","rotateZ(" + m20 + ")");}, 1000);
    setTimeout(function () {$("#m21").css("transform","rotateZ(" + m21 + ")");}, 1000);
    setTimeout(function () {$("#m22").css("transform","rotateZ(" + m22 + ")");}, 1000);
    setTimeout(function () {$("#m23").css("transform","rotateZ(" + m23 + ")");}, 1000);
    setTimeout(function () {$("#m24").css("transform","rotateZ(" + m24 + ")");}, 1000);
    setTimeout(function () {$("#m25").css("transform","rotateZ(" + m25 + ")");}, 1000);
    setTimeout(function () {$("#m26").css("transform","rotateZ(" + m26 + ")");}, 1000);
    setTimeout(function () {$("#m27").css("transform","rotateZ(" + m27 + ")");}, 1000);
    setTimeout(function () {$("#m28").css("transform","rotateZ(" + m28 + ")");}, 1000);
    setTimeout(function () {$("#m29").css("transform","rotateZ(" + m29 + ")");}, 1000);
    setTimeout(function () {$("#m30").css("transform","rotateZ(" + m30 + ")");}, 1000);
    setTimeout(function () {$("#m31").css("transform","rotateZ(" + m31 + ")");}, 1000);
    setTimeout(function () {$("#m32").css("transform","rotateZ(" + m32 + ")");}, 1000);
    setTimeout(function () {$("#m33").css("transform","rotateZ(" + m33 + ")");}, 1000);
    setTimeout(function () {$("#m34").css("transform","rotateZ(" + m34 + ")");}, 1000);
    setTimeout(function () {$("#m35").css("transform","rotateZ(" + m35 + ")");}, 1000);
    setTimeout(function () {$("#m36").css("transform","rotateZ(" + m36 + ")");}, 1000);
    setTimeout(function () {$("#m37").css("transform","rotateZ(" + m37 + ")");}, 1000);
    setTimeout(function () {$("#m38").css("transform","rotateZ(" + m38 + ")");}, 1000);
    setTimeout(function () {$("#m39").css("transform","rotateZ(" + m39 + ")");}, 1000);
    setTimeout(function () {$("#m40").css("transform","rotateZ(" + m40 + ")");}, 1000);
    setTimeout(function () {$("#m41").css("transform","rotateZ(" + m41 + ")");}, 1000);
    setTimeout(function () {$("#m42").css("transform","rotateZ(" + m42 + ")");}, 1000);
    setTimeout(function () {$("#m43").css("transform","rotateZ(" + m43 + ")");}, 1000);
    setTimeout(function () {$("#m44").css("transform","rotateZ(" + m44 + ")");}, 1000);
    setTimeout(function () {$("#m45").css("transform","rotateZ(" + m45 + ")");}, 1000);
    setTimeout(function () {$("#m46").css("transform","rotateZ(" + m46 + ")");}, 1000);
    setTimeout(function () {$("#m47").css("transform","rotateZ(" + m47 + ")");}, 1000);
    setTimeout(function () {$("#m48").css("transform","rotateZ(" + m48 + ")");}, 1000);
    setTimeout(function () {$("#m49").css("transform","rotateZ(" + m49 + ")");}, 1000);
    setTimeout(function () {$("#m50").css("transform","rotateZ(" + m50 + ")");}, 1000);
    setTimeout(function () {$("#m51").css("transform","rotateZ(" + m51 + ")");}, 1000);
    setTimeout(function () {$("#m52").css("transform","rotateZ(" + m52 + ")");}, 1000);
    setTimeout(function () {$("#m53").css("transform","rotateZ(" + m53 + ")");}, 1000);
    setTimeout(function () {$("#m54").css("transform","rotateZ(" + m54 + ")");}, 1000);
    setTimeout(function () {$("#m55").css("transform","rotateZ(" + m55 + ")");}, 1000);
    setTimeout(function () {$("#m56").css("transform","rotateZ(" + m56 + ")");}, 1000);
    setTimeout(function () {$("#m57").css("transform","rotateZ(" + m57 + ")");}, 1000);
    setTimeout(function () {$("#m58").css("transform","rotateZ(" + m58 + ")");}, 1000);
    setTimeout(function () {$("#m59").css("transform","rotateZ(" + m59 + ")");}, 1000);

    hour();
}

function hour(){

    
    
    var h00 = 360 + (hou + 24) * 15+'deg'; 
    var h01 = 360 + (hou + 23) * 15+'deg';
    var h02 = 360 + (hou + 22) * 15+'deg';
    var h03 = 360 + (hou + 21) * 15+'deg';
    var h04 = 360 + (hou + 20) * 15+'deg';
    var h05 = 360 + (hou + 19) * 15+'deg';
    var h06 = 360 + (hou + 18) * 15+'deg';
    var h07 = 360 + (hou + 17) * 15+'deg';
    var h08 = 360 + (hou + 16) * 15+'deg';
    var h09 = 360 + (hou + 15) * 15+'deg';
    var h10 = 360 + (hou + 14) * 15+'deg';
    var h11 = 360 + (hou + 13) * 15+'deg';
    var h12 = 360 + (hou + 12) * 15+'deg';
    var h13 = 360 + (hou + 11) * 15+'deg';
    var h14 = 360 + (hou + 10) * 15+'deg';
    var h15 = 360 + (hou + 9) * 15+'deg';
    var h16 = 360 + (hou + 8) * 15+'deg';
    var h17 = 360 + (hou + 7) * 15+'deg';
    var h18 = 360 + (hou + 6) * 15+'deg';
    var h19 = 360 + (hou + 5) * 15+'deg';
    var h20 = 360 + (hou + 4) * 15+'deg';
    var h21 = 360 + (hou + 3) * 15+'deg';
    var h22 = 360 + (hou + 2) * 15+'deg';
    var h23 = 360 + (hou + 1) * 15+'deg';
    

    setTimeout(function () {$("#h0").css("transform","rotateZ(" + h00 + ")");}, 2000);
    setTimeout(function () {$("#h1").css("transform","rotateZ(" + h01 + ")");}, 2000);
    setTimeout(function () {$("#h2").css("transform","rotateZ(" + h02 + ")");}, 2000);
    setTimeout(function () {$("#h3").css("transform","rotateZ(" + h03 + ")");}, 2000);
    setTimeout(function () {$("#h4").css("transform","rotateZ(" + h04 + ")");}, 2000);
    setTimeout(function () {$("#h5").css("transform","rotateZ(" + h05 + ")");}, 2000);
    setTimeout(function () {$("#h6").css("transform","rotateZ(" + h06 + ")");}, 2000);
    setTimeout(function () {$("#h7").css("transform","rotateZ(" + h07 + ")");}, 2000);
    setTimeout(function () {$("#h8").css("transform","rotateZ(" + h08 + ")");}, 2000);
    setTimeout(function () {$("#h9").css("transform","rotateZ(" + h09 + ")");}, 2000);
    setTimeout(function () {$("#h10").css("transform","rotateZ(" + h10 + ")");}, 2000);
    setTimeout(function () {$("#h11").css("transform","rotateZ(" + h11 + ")");}, 2000);
    setTimeout(function () {$("#h12").css("transform","rotateZ(" + h12 + ")");}, 2000);
    setTimeout(function () {$("#h13").css("transform","rotateZ(" + h13 + ")");}, 2000);
    setTimeout(function () {$("#h14").css("transform","rotateZ(" + h14 + ")");}, 2000);
    setTimeout(function () {$("#h15").css("transform","rotateZ(" + h15 + ")");}, 2000);
    setTimeout(function () {$("#h16").css("transform","rotateZ(" + h16 + ")");}, 2000);
    setTimeout(function () {$("#h17").css("transform","rotateZ(" + h17 + ")");}, 2000);
    setTimeout(function () {$("#h18").css("transform","rotateZ(" + h18 + ")");}, 2000);
    setTimeout(function () {$("#h19").css("transform","rotateZ(" + h19 + ")");}, 2000);
    setTimeout(function () {$("#h20").css("transform","rotateZ(" + h20 + ")");}, 2000);
    setTimeout(function () {$("#h21").css("transform","rotateZ(" + h21 + ")");}, 2000);
    setTimeout(function () {$("#h22").css("transform","rotateZ(" + h22 + ")");}, 2000);
    setTimeout(function () {$("#h23").css("transform","rotateZ(" + h23 + ")");}, 2000);

    d();
}

function d(){
    
    $("#d31").css("display","none");

    
   
    var d01 = 360 + (day + 29) * 12+'deg';
    var d02 = 360 + (day + 28) * 12+'deg';
    var d03 = 360 + (day + 27) * 12+'deg';
    var d04 = 360 + (day + 26) * 12+'deg';
    var d05 = 360 + (day + 25) * 12+'deg';
    var d06 = 360 + (day + 24) * 12+'deg';
    var d07 = 360 + (day + 23) * 12+'deg';
    var d08 = 360 + (day + 22) * 12+'deg';
    var d09 = 360 + (day + 21) * 12+'deg';
    var d10 = 360 + (day + 20) * 12+'deg';
    var d11 = 360 + (day + 19) * 12+'deg';
    var d12 = 360 + (day + 18) * 12+'deg';
    var d13 = 360 + (day + 17) * 12+'deg';
    var d14 = 360 + (day + 16) * 12+'deg';
    var d15 = 360 + (day + 15) * 12+'deg';
    var d16 = 360 + (day + 14) * 12+'deg';
    var d17 = 360 + (day + 13) * 12+'deg';
    var d18 = 360 + (day + 12) * 12+'deg';
    var d19 = 360 + (day + 11) * 12+'deg';
    var d20 = 360 + (day + 10) * 12+'deg';
    var d21 = 360 + (day + 9) * 12+'deg';
    var d22 = 360 + (day + 8) * 12+'deg';
    var d23 = 360 + (day + 7) * 12+'deg';
    var d24 = 360 + (day + 6) * 12+'deg';
    var d25 = 360 + (day + 5) * 12+'deg';
    var d26 = 360 + (day + 4) * 12+'deg';
    var d27 = 360 + (day + 3) * 12+'deg';
    var d28 = 360 + (day + 2) * 12+'deg';
    var d29 = 360 + (day + 1) * 12+'deg';
    var d30 = 360 + (day + 0) * 12+'deg';
    

    setTimeout(function () {$("#d1").css("transform","rotateZ(" + d01 + ")");}, 3000);
    setTimeout(function () {$("#d2").css("transform","rotateZ(" + d02 + ")");}, 3000);
    setTimeout(function () {$("#d3").css("transform","rotateZ(" + d03 + ")");}, 3000);
    setTimeout(function () {$("#d4").css("transform","rotateZ(" + d04 + ")");}, 3000);
    setTimeout(function () {$("#d5").css("transform","rotateZ(" + d05 + ")");}, 3000);
    setTimeout(function () {$("#d6").css("transform","rotateZ(" + d06 + ")");}, 3000);
    setTimeout(function () {$("#d7").css("transform","rotateZ(" + d07 + ")");}, 3000);
    setTimeout(function () {$("#d8").css("transform","rotateZ(" + d08 + ")");}, 3000);
    setTimeout(function () {$("#d9").css("transform","rotateZ(" + d09 + ")");}, 3000);
    setTimeout(function () {$("#d10").css("transform","rotateZ(" + d10 + ")");}, 3000);
    setTimeout(function () {$("#d11").css("transform","rotateZ(" + d11 + ")");}, 3000);
    setTimeout(function () {$("#d12").css("transform","rotateZ(" + d12 + ")");}, 3000);
    setTimeout(function () {$("#d13").css("transform","rotateZ(" + d13 + ")");}, 3000);
    setTimeout(function () {$("#d14").css("transform","rotateZ(" + d14 + ")");}, 3000);
    setTimeout(function () {$("#d15").css("transform","rotateZ(" + d15 + ")");}, 3000);
    setTimeout(function () {$("#d16").css("transform","rotateZ(" + d16 + ")");}, 3000);
    setTimeout(function () {$("#d17").css("transform","rotateZ(" + d17 + ")");}, 3000);
    setTimeout(function () {$("#d18").css("transform","rotateZ(" + d18 + ")");}, 3000);
    setTimeout(function () {$("#d19").css("transform","rotateZ(" + d19 + ")");}, 3000);
    setTimeout(function () {$("#d20").css("transform","rotateZ(" + d20 + ")");}, 3000);
    setTimeout(function () {$("#d21").css("transform","rotateZ(" + d21 + ")");}, 3000);
    setTimeout(function () {$("#d22").css("transform","rotateZ(" + d22 + ")");}, 3000);
    setTimeout(function () {$("#d23").css("transform","rotateZ(" + d23 + ")");}, 3000);
    setTimeout(function () {$("#d24").css("transform","rotateZ(" + d24 + ")");}, 3000);
    setTimeout(function () {$("#d25").css("transform","rotateZ(" + d25 + ")");}, 3000);
    setTimeout(function () {$("#d26").css("transform","rotateZ(" + d26 + ")");}, 3000);
    setTimeout(function () {$("#d27").css("transform","rotateZ(" + d27 + ")");}, 3000);
    setTimeout(function () {$("#d28").css("transform","rotateZ(" + d28 + ")");}, 3000);
    setTimeout(function () {$("#d29").css("transform","rotateZ(" + d29 + ")");}, 3000);
    setTimeout(function () {$("#d30").css("transform","rotateZ(" + d30 + ")");}, 3000);
    
    month();
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