$(document).ready(function(){
  $(function(){
    ("#navigation").load("nav.html");
    });
    $('.text-box').css('color','#fff');
    });
    function headingOver(obj) {
      obj.style.color = "#FF5500";
    }
    function headingOut(obj) {
      obj.style.color = "#fff";
    }
    function paraOver(obj) {
      obj.style.color = "#FF5500";
    }
    function paraOut(obj) {
      obj.style.color="#fff";
    }

var slideIndex = [1,1];
var slideId = ["designSlides"]
showSlides(1, 0);
showSlides(1, 1);
function nextSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function showSlides(n, no){
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1
  }
  if (n < 1) {
    slideIndex[no] = x.length
  }
  for (i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}