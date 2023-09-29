window.onload = function () {
  
  let buttonSave = document.getElementById('button-save');
  let units = "ft";
  let theme = "auto";
  let darkSysTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let root = document.documentElement;

  if (localStorage.units) {
    units = localStorage.units;
  } 
  //document.getElementById(units).defaultSelected = true;
  document.getElementById(units).selected = true;

  if (localStorage.theme) {
    theme = localStorage.theme;

    if (theme == "dark") {
      setDarkTheme();
    }
    else if (theme == "light") {
      setLightTheme();
    }
  }
  //document.getElementById(theme).defaultSelected = true;
  document.getElementById(theme).selected = true;

  buttonSave.onclick = function() {
    let e = document.getElementById('theme');
    let f = document.getElementById('units'); 
    localStorage.theme = e.options[e.selectedIndex].id;
    localStorage.units = f.options[f.selectedIndex].id;
    window.location.href = 'index.html';
  }
  document.getElementById('theme').onchange = function(){  
    switch (this.value) {
      case 'auto':
        if (darkSysTheme) {
          setDarkTheme();
        }
        else {
          setLightTheme();
        }
        break;
      case 'dark':
        setDarkTheme();
        break;
      case 'light': 
        setLightTheme();
        break;
    }
  }

  function setDarkTheme () {
      root.style.setProperty('--main-bg-color', '#181a1b');
      root.style.setProperty('--main-txt-color', '#a69e92');
      root.style.setProperty('--main-hilight-color', '#dcd9d4');
  }
  function setLightTheme () {
      root.style.setProperty('--main-bg-color', '#ffffff');
      root.style.setProperty('--main-txt-color', '#696969');
      root.style.setProperty('--main-hilight-color', '#131313');
  }
}