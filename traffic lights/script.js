var time = 0;

$(function() {
  setInterval(function()  {
    time = time + 1;
    $('#time').text(time);
    
    if (time == 800) { // 1分20秒を超えるとリセット
      time = 0;
    }
    
    if (time > 0 && time < 301) { // 30秒の青色の間
      $('#blue').css('background','#00aa96');
      $('#yellow').css('background','#000000');
      $('#red').css('background','#000000');
    }
    
    if (time > 301 && time < 331) { // 3秒の黄色の間
      $('#blue').css('background','#000000');
      $('#yellow').css('background','#ffe130');
      $('#red').css('background','#000000');
    }
    
    if (time > 331 && time < 800) { // 47秒の赤色の間
      $('#blue').css('background','#000000');
      $('#yellow').css('background','#000000');
      $('#red').css('background','#ef4050');
    }
  },100);
});
