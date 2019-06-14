$(document).ready(function(){
    // children()只向下遍历一级子元素 参数可选
    // $("#div1").children("#div2").css({ border: "3px blue solid" });

    // find()可以修改所有子元素 参数必选
    $("#div1").find("p").css({ border: "3px blue solid" });
});