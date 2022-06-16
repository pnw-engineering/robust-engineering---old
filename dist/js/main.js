
function toggleNav() {
  if (document.getElementById("mysite").style.gridTemplateColumns == "8rem 1fr") {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "8rem";
  document.getElementById("mysite").style.gridTemplateColumns = "8rem 1fr";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mysite").style.gridTemplateColumns = "0 1fr";
}
function showIntro() {}

function generateHslaColors (saturation, lightness, alpha, amount) {
  let colors = []
  let huedelta = Math.trunc(360 / amount)

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta
    colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
  }

  return colors
}

const root = document.querySelector(':root');
const slider = document.querySelector('input');
slider.addEventListener('input', function(){
  // button.addEventListener('input', function(){
    saturation=root.style.getPropertyValue('--sat');
    lightness=root.style.getPropertyValue('--light');
    hue=root.style.getPropertyValue('--hue');
    // root.style.setProperty("--sat", "${slider.value/100}% );
    document.getElementById("value").innerHTML= "${sat}%";
  });

  function loadHTML(fileToLoad){
    fetch(fileToLoad)
    .then(response=> response.text())
    .then(text=> document.getElementById('myContent').innerHTML = text);
  }
