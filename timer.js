function clock(){
  var d = new Date();

  var hh = d.getHours();
  var mm = d.getMinutes();
  var ss = d.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  nowtime = hh + ":" + mm + ":" + ss;
  var t = document.getElementById('time');
  t.style.fontSize = "50pt";
  t.style.color = "red";
  t.innerHTML = nowtime;
}

setInterval('clock()', 1000);

