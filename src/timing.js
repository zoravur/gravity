let offScreenTime; 
//This is an ad-hoc way of pausing the animation, 
//and it should be changed

    let elapsedTime = (timestamp - prevTime - offScreenTime) / 1000;
    if (offScreenTime != 0) offScreenTime = 0;

  offScreenTime = 0;
  // Define delay until onscreen
  function delayUntilOnScreen(fn) {
    let handleOnScreen = () => {
      offScreenTime = Date.now() - offScreenTime;
      fn();
      document.removeEventListener('visibilitychange', handleOnScreen);
    };
      /*
    () {
      //offScreenTime = Date.now() - offScreenTime;
    };
    */
    if (document.visibilityState != 'hidden') {
      fn();
    } else {
      offScreenTime = Date.now();
      document.addEventListener('visibilitychange', handleOnScreen);
      //fn();
    }
  }
  delayUntilOnScreen(() => requestAnimationFrame(draw));

/*
document.addEventListener('visibilitychange', function() {
  let state = document.visibilityState;
  if (state == 'hidden') {
    offScreenTime = Date.now();
    let handleOnScreen = function() {
      offScreenTime = Date.now() - offScreenTime;
      document.removeEventListener('visibilitychange', handleOnScreen);
    };
    document.addEventListener('visibilitychange', handleOnScreen);
  }
});
*/
