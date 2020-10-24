window.onload = function () {
  display(0);
}
let questionl = [
  {
    id: 1,
    question: "Who invented computer?",
    answer: "Charles Babbage",
    option: [
      "Thomas Edison",
      "Albert einstein",
      "Charles Babbage",
      "None of the above"
    ]
  },
  {
    id: 2,
    question: "When did first program founded?",
    answer: "1989",
    option: [
      "1982",
      "1980",
      "1780",
      "1989"
    ]
  },
  {
    id: 3,
    question: "What is the name of first program?",
    answer: "High-level language",
    option: [
      "Machine level language",
      "javascript",
      "High-level language",
      "css"
    ]
  },
  {
    id: 4,
    question: "What is the Capital of Usa?",
    answer: "D.c",
    option: [
      "NY",
      "D.c",
      "Cali",
      "Virginia"
    ]
  },
  {
    id: 5,
    question: "Who invented Java?",
    answer: "James Gosling",
    option: [
      "Bill Gates",
      "Steve Jobs",
      "Daphne koller",
      "James Gosling"
    ]
  }
]
function submitForm(e) {
  e.preventDefault();
  let name = document.forms["welcomeF"]["name"].value;
  console.log(name);
  location.href = "quiz1.html"
  sessionStorage.setItem("name", name);
}
let question_count = 0;
let score = 0;
function nextf() {
  let givenanswer = document.querySelector("li.option.active").innerHTML;
  if (givenanswer == questionl[question_count].answer) {
    score += 20;
    sessionStorage.setItem("score", score);
    console.log("right")
  }
  if (question_count == questionl.length - 1) {
    sessionStorage.setItem("time",`${min}min and ${sec}sec`);
    clearInterval(timeinter)
    location.href = "final.html"
    return;
  }


  console.log(givenanswer)
  question_count++;
  display(question_count);

}
function display(count) {
  let question = document.getElementById("questions1");
  question.innerHTML = `<h3>Q${question_count + 1}.)${questionl[count].question}</h3>
  <ul class="optionlist">
                    <li class="option">${questionl[count].option[0]}</li>
                    <li class="option">${questionl[count].option[1]}</li>
                    <li class="option">${questionl[count].option[2]}</li>
                    <li class="option">${questionl[count].option[3]}</li>
                </ul>
  `;
  tooglea();
}
function tooglea() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++)
    option[i].onclick = function () {
      for (let k = 0; k < option.length; k++) {
        if (option[k].classList.contains("active")) {
          option[k].classList.remove("active")
        }

      }
      option[i].classList.add("active");
    }
}
