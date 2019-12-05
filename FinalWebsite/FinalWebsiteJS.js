// I got the code for the gallery from https://www.w3schools.com/w3css/w3css_slideshow.asp.-->
var index = 1;
show(index);

function plus(c) {
  show(index += c);
}

function show(c) {
  var a;
  var b = document.getElementsByClassName("photos");
  if (c > b.length) {index = 1}
  if (c < 1) {index = x.length} ;
  for (a = 0; a < b.length; a++) {
    b[a].style.display = "none";
  }
  b[index-1].style.display = "block";
}
