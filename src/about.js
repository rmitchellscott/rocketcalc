window.onload = function () {
  var units = "ft";
  var theme = "auto";
  let root = document.documentElement;
  let gText = document.getElementById("g")

  if (localStorage.units) {
    units = localStorage.units;
  }
  if (units == "m") {
    gText.innerHTML = "9.81 meters"
  }
  else {
    gText.innerHTML = "32 feet"
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
}