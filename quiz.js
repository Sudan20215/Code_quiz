function submitForm(e){
  e.preventDefault();
  let name=document.forms["welcomeF"]["name"].value;
  console.log(name);
  location.href="quiz1.html"
  sessionStorage.setItem("name",name);
}