function clock(){
  let d = new Date();

  let hh = d.getHours();
  let mm = d.getMinutes();
  let ss = d.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = `${hh}:${mm}:${ss}`;
  document.querySelector(".time").innerText = time;
}

function start(){
  setInterval(clock, 1000);
}
