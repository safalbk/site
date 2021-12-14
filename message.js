var on=0;
var play=0;

function off() {
		
            var refresh = 1000; // Refresh rate in milli seconds
            mytime = setTimeout('bulb()', refresh);
			

        }
function bulb(){ 
 if (play == 0) {
	 var x = document.getElementById("myAudio"); 
  x.play();
  play=1;
 }
 if (on == 0) {
document.getElementById('bulb1').src='assets/bulb.png' ;
document.getElementById('bulb2').src='assets/bulb.png' ;
document.getElementById('bulb3').src='assets/bulb.png' ;
document.getElementById('bulb4').src='assets/bulb.png' ;
document.getElementById('bulb5').src='assets/bulb.png' ;
document.getElementById('bulb6').src='assets/bulb.png' ;

    } 
	if (on == 1) {
document.getElementById('bulb1').src='assets/bulb_blue.png' ;
document.getElementById('bulb2').src='assets/bulb_green.png' ;
document.getElementById('bulb3').src='assets/bulb_orange.png' ;
document.getElementById('bulb4').src='assets/bulb_pink.png' ;
document.getElementById('bulb5').src='assets/bulb_red.png' ;
document.getElementById('bulb6').src='assets/bulb_yellow.png' ;
    } 
	
	if (on == 0)
	{
		on=1;
	}
	else{
		on=0;
	}
	
	
	off();
}  
function dgfg(){  
var x = document.getElementById("myAudio"); 
  x.play(); 
}  
var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
