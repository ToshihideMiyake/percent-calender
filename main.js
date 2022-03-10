var Today=new Date;
var Year=Today.getFullYear();
var Month=Today.getMonth();
var date=Today.getDate();
var Day=Today.getDay();
var February="";
if(Year % 4 == 0 && (Year % 100!=0 || Year % 400==0)){
    // 閏年
    February=29;
}
else{
    February=28;
}
var Days=[31, February, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var PassedDays=date;
for(let i=0;i<Month;i++){
    PassedDays+=Days[i];
}
var Rate=Math.trunc(PassedDays / 365 * 100);
console.log(Rate);
var circleColor="#5a5a59";
var circleBarColor="#cefeae";
var LightBarColor="#0fad79";
var LightColor="#a1a1a13b";
window.onload=()=>{
    Array.from(document.getElementsByClassName("year")).forEach(e=>e.innerHTML=Year);
    document.getElementById("month").innerHTML=Month+1;
    document.getElementById("date").innerHTML=date;
    document.getElementById("leftdays").innerHTML=365 - PassedDays;
    document.getElementById("number").style.color=circleBarColor;
    if(localStorage.getItem("mode")=="lightmode"){
        circleBarColor=LightBarColor;
        circleColor=LightColor;
        document.getElementsByClassName("buttun")[0].id="lightmode";
        Array.from(document.getElementsByClassName("bg-color")).forEach(ele=>ele.style.backgroundColor="#e0ded7");
        document.getElementById("body").style.color="#5a5a59";
        document.getElementById("number").style.color=LightBarColor;
        document.getElementsByClassName("buttun")[0].classList.add("lightmode");
    }else{
        console.log(localStorage.getItem("mode"));
    }
    function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    async function ChartAnime() {
    for (let i = 0; i < Rate+1; i++) {
        document.getElementById("chart").style.setProperty("--GraphAnime","conic-gradient("+circleBarColor+" 0%,"+circleBarColor+" "+i+"%, "+circleColor+" "+i+"%, "+circleColor+" 100%)")
        document.getElementById("number").innerHTML=i+"%";
        await sleep(20);
    }
    }
    ChartAnime()

    switch(Day){
        case 0:
        document.getElementById("day").innerHTML="(日)";
        break;
        case 1:
        document.getElementById("day").innerHTML="(月)";
        break;
        case 2:
        document.getElementById("day").innerHTML="(火)";
        break;
        case 3:
        document.getElementById("day").innerHTML="(水)";
        break;
        case 4:
        document.getElementById("day").innerHTML="(木)";
        break;
        case 5:
        document.getElementById("day").innerHTML="(金)";
        break;
        case 6:
        document.getElementById("day").innerHTML="(土)";
        break;
        default:
        console.log(Day);
    }
}
function switchMode(e){
    if(e.id=="darkmode"){
        e.id="lightmode";
        Array.from(document.getElementsByClassName("bg-color")).forEach(ele=>ele.style.backgroundColor="#e0ded7");
        document.getElementById("body").style.color="#5a5a59";
        document.getElementById("chart").style.setProperty("--GraphAnime","conic-gradient("+LightBarColor+" 0%,"+LightBarColor+" "+Rate+"%, "+LightColor+" "+Rate+"%, "+LightColor+" 100%)");
        document.getElementById("number").style.color=LightBarColor;
        localStorage.setItem("mode","lightmode");
    }else{
        e.id="darkmode";
        Array.from(document.getElementsByClassName("bg-color")).forEach(ele=>ele.style.backgroundColor="#343838");
        document.getElementById("body").style.color="#fff";
        document.getElementById("chart").style.setProperty("--GraphAnime","conic-gradient(#cefeae 0%,#cefeae "+Rate+"%, #5a5a59 "+Rate+"%, #5a5a59 100%)");
        document.getElementById("number").style.color="#cefeae";
        localStorage.setItem("mode","darkmode");
    }
   e.classList.toggle("lightmode");
}
function googleplay(){
    alert("準備中");
    // window.open("","_blank");
}
function appstore(){
    alert("準備中");
    // window.open("","_blank");
}
setTimeout(()=>{
    var Now=new Date;
    var NowHour=Now.getHours();
    var NowMinutes=Now.getMinutes();
    if((NowHour==NowMinutes)&&(NowHour==0)){
        location.reload();
    }else{
        console.log(NowHour);
    }
},60000)