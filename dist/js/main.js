function toggleNav() {
  if (
    document.getElementById("mysite").style.gridTemplateColumns == "8rem 1fr"
  ) {
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

function loadHTML(fileToLoad) {
  fetch(fileToLoad)
    .then((response) => response.text())
    .then((text) => (document.getElementById("myContent").innerHTML = text));
}

function MapButtonOff(btn) {
  if (btn != undefined) {
    btn.style.boxShadow = "none";
    // console.log("button", btn.id, "turned  off");
  }
}

function MapElementOff(el) {
  if (el != undefined) {
    el.style.display = "none";
    MapButtonOff(document.getElementById("b" + el.id));
    // console.log(base, "+", j, "=", id, "turned off ");

    elSet = el.getElementsByClassName("MapLine");
    console.log(elSet.length, "elements found");
    for (var i = 0; i < elSet.length; i++) {
      if (elSet[i].style.display != "none") {
        elSet[i].style.display = "none";
        // MapButtonOff("b" + elSet[i].id);
      }
    }
    bSet = el.getElementsByClassName("MapButton");
    for (var i = 0; i < bSet.length; i++) {
      if (bSet[i].style.boxShadow != "none") {
        elSet[i].style.boxShadow = "none";
        // MapButtonOff("b" + elSet[i].id);
      }
    }
  }
}
function sibsOff(i) {
  base = Math.floor(parseInt(i, 10) / 10) * 10;
  me = parseInt(i.substring(i.length - 1, i.length), 10);
  for (let j = 1; j < 4; j++) {
    if (j != me) {
      id = base + j;
      MapElementOff(document.getElementById(id.toString()));
    }
  }
}

function toggleElement(i, j, k) {
  b = event.target.id;
  i = b.substring(1, b.length);
  el = document.getElementById(i);
  if (el.style.display == "none") {
    el.style.display = "block";
    document.getElementById(b).style.boxShadow = "0px 0px 5px 5px red";
    console.log(i, " turned on");
  } else {
    el.style.display = "none";
    document.getElementById(b).style.boxShadow = "none";
  }
  sibsOff(i);

  document
    .getElementById("h-roadmap")
    .scrollIntoView({ block: "end", behavior: "smooth" });
}
