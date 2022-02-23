window.onload = function () {
  
  let started = false
  let seconds = 00; 
  let tens = 00; 
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  let buttonStart = document.getElementById('button-start');
  let buttonSave = document.getElementById('button-save');
  let buttonReset = document.getElementById('button-reset');
  let appendAlt = document.getElementById("alt");
  let displayUnits = document.getElementById("displayUnits");
  let Interval ;
  let units = "ft";
  let theme = "auto";
  let root = document.documentElement;

  if (localStorage.units) {
    units = localStorage.units;
    displayUnits.innerHTML = units;
  } 

  if (localStorage.theme) {
    theme = localStorage.theme;

    if (theme == "dark") {
      root.style.setProperty('--main-bg-color', '#181a1b');
      root.style.setProperty('--main-txt-color', '#a69e92');
      root.style.setProperty('--main-hilight-color', '#dcd9d4');
    }
    else if (theme == "light") {
      root.style.setProperty('--main-bg-color', '#ffffff');
      root.style.setProperty('--main-txt-color', '#696969');
      root.style.setProperty('--main-hilight-color', '#131313');
    }
  }

  buttonStart.addEventListener("click", buttonPress, false);

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
    let g = 32;
    if (units == "m") {
      g = 9.81;
    }
    let timeString = seconds + '.' + tens;
    let alt = Math.round(0.5 * g * Math.pow(parseFloat(timeString)/2, 2));
    appendAlt.innerHTML = alt.toLocaleString();
  }
}