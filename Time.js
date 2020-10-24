let al=new Date(new Date().setTime(0));
let clock=al.getTime();
let timer=0;
let sec=Math.floor((clock%(100*60))/1000);
let min=Math.floor((clock%(1000*60*60))/(1000*60));
let timeinter=setInterval(function(){
    if (sec<59){
        sec++;
    }else{
        min++;
        sec=0;
       
    }
    console.log(sec,min);
    document.querySelector(".time").innerHTML=`${min}:${sec}`;
}
,1000)