var isClick = false;

$('.exchange').click(function() {
  if (!isClick) {
    $('.confirm').addClass('confirm_display');
    isClick = true;
  } /*else {
    $('.share_icons').removeClass('share_icons_display');
    isClick = false;
  }*/
});
