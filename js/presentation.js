
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


    Reveal.addEventListener( 'slidechanged', function( event ) {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        if(event.currentSlide.dataset.state === 'sisteen')
        {
            zoom.to({
                x:   getRandomInt(0, 900),
                y: getRandomInt(0, 400),
                scale: getRandomInt(1,9),

            })
        }
        else
        {
            zoom.out();
        }
    } );



    Reveal.addEventListener( 'reset', function() {
        zoom.out();
    } );



