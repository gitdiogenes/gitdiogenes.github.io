
window.addEventListener('load', function(){
    
    var slider1 = document.getElementById('slider1')



    function swipedetect(el, callback){
    
        var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, //maximum distance allowed at the same time in perpendicular direction
        allowedTime = 300,// maximum time allowed to travel that distance
        elapsedTime,
        startTime,
        handleswipe = callback || function(swipedir){}
        
        touchsurface.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0] //first touch
            swipedir = 'none'
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
        }, false)
        
        touchsurface.addEventListener('touchmove', function(e){
            e.preventDefault()// no scrolling!
        },false)
        
        touchsurface.addEventListener('touchend'), function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // horizontal dist traveled while in contact
        distY = touchobj.pageY - startY// get vertical while contact
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {// 2nd condition for vertical swipe met
            swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
        }
        }
        handleswipe(swipedir)
        e.preventDefault()
        },false)
    }
    
        swipedetect(slider1,function(swipedir)){
            console.log(swipedir);
        }
    
    
    
    
    
    
    
    
}