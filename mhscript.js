// elements for scroller "slider"
var cur = 0;  
      
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var swipedir ;
var gesturedZone = document.getElementById('slider-container');
var sldrBRD = document.getElementsByClassName("slider-board"); 
 
//  elements for nav link 
var thing1 = document.getElementById("thing1");
var thing2 = document.getElementById("thing2");
var thing3 = document.getElementById("thing3");
var thing4 = document.getElementById("thing4");
var cards =  document.getElementsByClassName("op-card");


console.log(cards[0].classList.value+ "cards");


// event listeners for nav links

thing1.addEventListener("click",() =>{clearFlexClass(); cards[0].classList.add("bubble") });
thing2.addEventListener("click",() =>{clearFlexClass();  cards[1].classList.add("bubble") });
thing3.addEventListener("click",() =>{clearFlexClass();  cards[2].classList.add("bubble") });
thing4.addEventListener("click",() =>{clearFlexClass();  cards[3].classList.add("bubble") });

// function for clearing classes from nav links
function clearFlexClass(){
 cards[0].classList.remove("bubble");
 cards[1].classList.remove("bubble");
 cards[2].classList.remove("bubble");
 cards[3].classList.remove("bubble");
 
}

console.log(sldrBRD.length);



gesturedZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
    document.querySelector('[data-state=open]').classList.add('pop');
    event.preventDefault();
}, false);
console.log('inbetween');
gesturedZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    event.preventDefault();
  console.log('about to call handle gest');
    handleGesture();
}, false); 

function handleGesture() {
      var distX = touchendX - touchstartX;
      var distY = touchendY - touchstartY;
      var threshold = 45;
      var restraint = 20;
      // console.log(Math.abs(distX),Math.abs(distY));
      
       if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
            //  console.log("first if");
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {// 2nd condition for vertical swipe met
            console.log("else if triggered");
            swipedir = (distY < 0)? 'up' : 'down' }// if dist traveled is negative, i
           console.log(swipedir);
      if(swipedir ==='right'){
            if (cur !== 0){
            cur =(cur - 1) ;}
            // if sldrbrd cur = open set to closed
            sldrBRD[cur].setAttribute('data-state','open');
            for(var i=0;i <= sldrBRD.length;i++){
            if (sldrBRD[i] !== sldrBRD[cur]){
            sldrBRD[i].setAttribute('data-state','closed');
     document.querySelector('[data-state=open]').classList.remove('pop');
            }}
            console.log(sldrBRD[cur]);
            console.log(cur);
            return;
      }
      else if (swipedir ==='left'){
            if(cur == sldrBRD.length -1){
                  cur = 0
            }else{
            ++cur;}
            console.log(cur);
            sldrBRD[cur].setAttribute('data-state','open');
             for(var i=0;i <= sldrBRD.length;i++){
                   if(sldrBRD[i] !== sldrBRD[cur]){
             sldrBRD[i].setAttribute('data-state','closed');
     document.querySelector('[data-state=open]').classList.remove('pop');
             }else{ document.querySelector('[data-state=open]').classList.remove('pop');}}
             console.log(sldrBRD[cur]);
    
         return; 
      //     console.log(prevL);
      }
      else{
     document.querySelector('[data-state=open]').classList.remove('pop');}

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