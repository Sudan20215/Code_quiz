let name=sessionStorage.getItem("name");
let score=sessionStorage.getItem("score");
let timetaken=sessionStorage.getItem("time")
document.querySelector(".name").innerHTML=name;
document.querySelector(".score").innerHTML=score;
document.querySelector(".timetaken").innerHTML=timetaken;