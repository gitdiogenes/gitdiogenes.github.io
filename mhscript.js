<script>

window.addEventListener('load', function(){
    
    var touchsurface = document.getElementById('touchsurface'),
        startX,
        startY,
        dist,
        threshold= 150, //required min distance traveled to be considered swipe
        allowedTime = 200,// maximum time allowed to travel that distance
        elapsedTime,
        startTime;
        
       
}

    touchsurface.addEventListener('touchstart', function(e) {
        touchsurface.innerHTML =''
        var touchobj = e.changedTouches[0]
            dist=0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
    }, false);
    
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 1000
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
        e.preventDefault()
    }, false);// end window.onload
    
    </script>