window.onload=function(){
  display(0);
}
let questionl=[
  {
    id:1,
    question: "Who invented computer?",
    answer:"Charles Babbage",
    option:[
      "Thomas Edison",
      "Albert einstein",
      "None of the above"
    ]
  },
{
    id:2,
    question: "When did first program founded?",
    answer:"1989",
    option:[
      "1982",
      "1980",
      "1780"
    ]
  },
{
    id:3,
    question: "What is the name of first program?",
    answer:"High-level language",
    option:[
      "Machine level language",
      "javascript",
      "css"
    ]
  },
{
    id:4,
    question: "What is the Capital of Usa?",
    answer:"D.c",
    option:[
      "NY",
      "Cali",
      "Virginia"
    ]
  },
{
    id:5,
    question: "Who invented Java?",
    answer:"James Gosling",
    option:[
      "Bill Gates",
      "Steve Jobs",
      "Daphne koller"
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
  display(question_count);
  console.log(question_count);

}
function display(count){
  let question =document.getElementById("questions1");
  question.innerHTML=`<h3>${questionl[count].question}</h3>
  <ul class="optionlist">
                    <li class="option">${questionl[count].option[0]}</li>
                    <li class="option">${questionl[count].option[1]}</li>
                    <li class="option">${questionl[count].option[2]}</li>
                    <li class="option">${questionl[count].option[3]}</li>
                </ul>
  `;

}
