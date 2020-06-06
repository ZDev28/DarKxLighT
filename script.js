const style = document.getElementById("current-style");
$("document").ready(function(){
  $(".dark-it").click(function(){
    style.href = "dark.css";
  });
  $(".light-it").click(function(){
    style.href = "light.css";
  });
});
