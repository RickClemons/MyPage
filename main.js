$(document).ready(function(){
  $('#htmlSkill').hide();
 $("#htmLink").click(function(){
   function (e) {
    if (e.originalEvent.defaultPrevented) return
   $("#htmlSkill").toggle();
 });


});
