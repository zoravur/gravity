function fitToContainer(canvas){
    // Make it visually fill the positioned parent
    let parent = canvas.parentElement;

    //canvas.style.width ='100%';
    //canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width  = parent.clientWidth;
    canvas.height = parent.clientHeight;
}


export default function resizeAsNeeded(canvas) {
    fitToContainer(canvas);
}

