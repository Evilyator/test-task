$(function() {
  var trigger = $(".collapse-trigger"),
      drop = $(".collapse-drop");
  trigger.click(function() {
    if ($(this).hasClass('collapsed')) {
      $(this).removeClass('collapsed');
      $(this).siblings(drop).slideDown(300);
    } else {
      $(this).addClass('collapsed');
      $(this).siblings(drop).slideUp(300);
    }
  });
});