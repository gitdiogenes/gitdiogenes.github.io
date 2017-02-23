
//  do farts = a document.getElementsByName('name_value')
      //then on farts.addEventListener("click", function "change .src")
var cur = 0;   
var productSliderSRC = ["1","2","3","4","5"];   
      
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var swipedir ;

var gesturedZone = document.getElementById('slider-container');

gesturedZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gesturedZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
      var distX = touchendX - touchstartX;
      var distY = touchendY - touchstartY;
      var threshold = 150;
      var restraint = 80;
      
      
       if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {// 2nd condition for vertical swipe met
            swipedir = (distY < 0)? 'up' : 'down' }// if dist traveled is negative, i

      if(swipedir ==='right'){
            cur++;
            gesturedZone.src = productSliderSRC[cur] ;
      }
      else if (swipedir ==='left'){
            cur--;
            gesturedZone.src = productSliderSRC[cur];
      }
//     var swiped = 'swiped: ';
//     if (touchendX < touchstartX) {
      //   alert(swiped + 'left!');
//     }
//     if (touchendX > touchstartX) {
      //   alert(swiped + 'right!');
//     }
//     if (touchendY < touchstartY) {
      //   alert(swiped + 'down!');
//     }
//     if (touchendY > touchstartY) {
      //   alert(swiped + 'left!');
//     }
//     if (touchendY == touchstartY) {
      //   alert('tap!');
    
}