var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0px";
  } else {
    document.getElementById("navbar").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}