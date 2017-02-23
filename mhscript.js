
//  do farts = a document.getElementsByName('name_value')
      //then on farts.addEventListener("click", function "change .src")
var cur = 0;   
var productSliderSRC = ["https://dummyimage.com/300.png/09f/fff"+new Date().getTime(),"https://dummyimage.com/200x300&text=dummyimage.com+rocks!"+new Date().getTime(),"http://lorempixel.com/400/200/sports/1","5","5"];   
      
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var swipedir ;

var gesturedZone = document.getElementById('slider-container');
var board = document.getElementsByClassName("slider-board");

gesturedZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
    event.preventDefault();
    console.log(board);
//     board.classList.toggle("pop");
}, false);

gesturedZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    event.preventDefault();
//     board.classList.toggle("pop");
    console.log("farts");
    handleGesture();
}, false); 

function handleGesture() {
      var distX = touchendX - touchstartX;
      var distY = touchendY - touchstartY;
      var threshold = 45;
      var restraint = 10;
      console.log(Math.abs(distX),Math.abs(distY),board.src);
      
       if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
             console.log("first if");
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {// 2nd condition for vertical swipe met
            console.log("else if triggered");
            swipedir = (distY < 0)? 'up' : 'down' }// if dist traveled is negative, i
           console.log(swipedir);
      if(swipedir ==='right'){
            cur =(cur +1) % productSliderSRC.length;
            board.src = productSliderSRC[cur] ;
            console.log("zany");
            console.log(cur);
            console.log(board.src);
      }
      else if (swipedir ==='left'){
            cur=(cur -1) % productSliderSRC.length;
           board.src = productSliderSRC[cur];
           console.log("tothemax");
           console.log(cur);
           console.log(board.src);
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