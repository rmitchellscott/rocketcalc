window.onload = function () {
  
  var started = false
  var seconds = 00; 
  var tens = 00; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  //var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var appendAlt = document.getElementById("alt");
  var Interval ;

  // buttonStart.onclick = function() {
    
  // }
  // if ('ontouchstart' in window) {
  //   buttonStart.addEventListener("touchstart", function() {
  //     var touchHandl = function() {
  //       buttonPress();
  //       this.removeEventListener(touchHandl)
  //     }
  //     this.addEventListener(touchHandl)
  //   });
  // }

  buttonStart.addEventListener("click", buttonPress, false);
  
  //   buttonStop.onclick = function() {
  //      clearInterval(Interval);
  //      calcAltitude();
  // }
  

  buttonReset.onclick = function() {
    reset();
  }
  
  function buttonPress () {
    if (!started)
    {
      reset();
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
      started = true
      buttonStart.innerText = 'Stop and Calculate'
    }
    else
    {
      started = false
      buttonStart.innerText = 'Start'
      clearInterval(Interval);
      calcAltitude();
    }
  }

  function reset () {
    started = false
    buttonStart.innerText = 'Start'
    clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    alt = "0";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendAlt.innerHTML = alt;
  }
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
  
  }

  function calcAltitude () {
    let timeString = seconds + '.' + tens;
    var alt = Math.round(0.5 * 32 * Math.pow(parseFloat(timeString)/2, 2));
    appendAlt.innerHTML = alt;
  }
  

}