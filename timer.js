function start(){
 window.setInterval(clock, 1000);
}

function clock(){
 let now = new Date();
 let hh = now.getHours();
 let mm = now.getMinutes();
 let ss = now.getSeconds();
 
 if(hh < 10){
  hh = " 0" + hh;
 }else{
  hh = hh;
 }
 if(mm < 10){
  mm = " 0" + mm;
 }else{
  mm = mm;
 }
 if(ss < 10){
  ss = " 0" + ss;
 }else{
  ss = ss;
 }
 
 let result = document.getElementById("result");
 
 result.textContent = hh + ":" + mm + ":" + ss;
}
