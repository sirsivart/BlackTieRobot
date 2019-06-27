/*var windowWidth = window.outerWidth;
function x() {
  if (windowWidth > 768)
    return 1;
  else
    window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
  		if (prevScrollpos > currentScrollPos) {
    	document.getElementById("navbar").style.bottom = "0px";
  		} else {
    	document.getElementById("navbar").style.bottom = "-50px";
  		}
  		prevScrollpos = currentScrollPos;
	}
}*/


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var windowWidth = window.outerWidth;
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && windowWidth <= 768) {
    document.getElementById("navbar").style.bottom = "0px";
  } else {
    document.getElementById("navbar").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}