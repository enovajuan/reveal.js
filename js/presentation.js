Reveal.addEventListener( 'sisteenzoom', function() {
    zoom.to({
        element: document.getElementById('blankZoom'),
        scale: 2

    })
} );

Reveal.addEventListener( 'reset', function() {
    zoom.out();
} );