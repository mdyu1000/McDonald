var isClick = false;
var ok = false;
var c = 60;
var t;
var unit = $(".unit");

$('.exchange').click(function() {
  if (!isClick) {
    $('.confirm').addClass('confirm_display');
    isClick = true;
    ok = false;
    $('.big_img').addClass('big_img_dark');
  }
});

$('.confirm_OK').click(function() {
  if (!ok) {
    $('.confirm').removeClass('confirm_display');
    ok = true;
    isClick = false;
    timedCount();
    $('.count').addClass('count_display');
    $('.big_img').removeClass('big_img_dark');
  }
});

function timedCount() {
  c = c - 1;
  if (c == 0) {
    c = 0;
  }
  t = setTimeout("timedCount()", 1000);
  unit.text(c);
}
