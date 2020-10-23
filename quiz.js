window.onload=function(){
  display();
}
let question=[
  {
    id:1,
    question: "my name",
    answer:"sudan",
    option:[
      "asa",
      "afa",
      "fsdfs"
    ]
  }
]
function submitForm(e){
  e.preventDefault();
  let name=document.forms["welcomeF"]["name"].value;
  console.log(name);
  location.href="quiz1.html"
  sessionStorage.setItem("name",name);
}
let question_count=0;
function nextf(){
  question_count++;
  console.log(question_count);

}
function display(count){
  let question =document.querySelector("#questions1");
  question.innerHTML= "<h3>"+questions1[0].questions1+"</h3>";
}
