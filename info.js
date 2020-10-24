let name=sessionStorage.getItem("name");
let scores=sessionStorage.getItem("scores");
let time=sessionStorage.getItem("time")
document.querySelector(".name").innerHTML=name;
document.querySelector(".scores").innerHTML=scores;
document.querySelector(".time").innerHTML=time;