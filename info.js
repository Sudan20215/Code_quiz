let name=sessionStorage.getItem("name");
let scores=sessionStorage.getItem("score");
let timetaken=sessionStorage.getItem("time")
document.querySelector(".name").innerHTML=name;
document.querySelector(".score").innerHTML=scores;
document.querySelector(".timetaken").innerHTML=timetaken;