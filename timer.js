function clock(){
  let d = new Date();

  let hh = d.getHours();
  let mm = d.getMinutes();
  let ss = d.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  // 日付・時刻の文字列を作成
  let time = document.getElementById("time");
  time.textContent = hh + ":" + mm + ":" + ss;
};

function start(){
  window.setInterval(clock, 1000);
}
