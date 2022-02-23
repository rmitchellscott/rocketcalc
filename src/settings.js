window.onload = function () {
  
  var buttonSave = document.getElementById('button-save');
  var units = "ft";
  var theme = "auto";
  let root = document.documentElement;

  if (localStorage.units) {
    units = localStorage.units;
  } 
  //document.getElementById(units).defaultSelected = true;
  document.getElementById(units).selected = true;

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
  //document.getElementById(theme).defaultSelected = true;
  document.getElementById(theme).selected = true;

  buttonSave.onclick = function() {
    // localStorage.theme = document.querySelector('input[name="theme"]:checked').id;
    // localStorage.units = document.querySelector('input[name="units"]:checked').id
    let e = document.getElementById('theme');
    let f = document.getElementById('units');
    localStorage.theme = e.options[e.selectedIndex].id;
    localStorage.units = f.options[f.selectedIndex].id;
    // localStorage.theme = document.getElementById('theme').options.selectedIndex.value;
    // localStorage.units = document.getElementById('units').options.selectedIndex.value;
    window.location.href = 'index.html';
  }
}