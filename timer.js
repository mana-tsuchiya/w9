function clock(){
  var d = new Date();

  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  nowtime = h + ":" + m + ":" + s;
  var t = document.getElementById('time');
  
  t.style.ontSize = "50pt";
  t.style.color: "red";
  t.style.textAlign = "center";
  t.innerHTML = nowtime;
  
}

setInterval('clock()', 1000);

