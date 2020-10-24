let al=new Date(new Date().setTime(0));
let clock=al.getTime();
let timer=0;
let sec=Math.floor((clock%(100*60))/1000);
let timeinter=setInterval(function(){
    if (sec<30){
        sec++;
        
    }else{
        alert("OOPS!!! Time is up.Refresh the page to try again!!!")
       
    }
    console.log(sec);
    document.querySelector(".time").innerHTML=`${sec}`;
}
,1000)