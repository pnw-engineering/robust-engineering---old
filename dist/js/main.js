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

function sibsOff(element) {
  var sibs = [];
  el = element;
  while ((el = el.previousSibling)) {
    sibs.push(el);
  }
  el = element;
  while ((el = el.nextSibling)) {
    sibs.push(el);
  }

  while (sibs) {
    // sibs[0].style.display="none";
    el = sibs.pop();
    alert(el);
    el.style.display = "none";
  }
}

function toggleElement(i, j, k) {
  el = document.getElementById(i);
  if (el.style.display == "none") {
    el.style.display = "block";
    // event.target.style.backgroundColor = 'red';
  } else {
    el.style.display = "none";
    // event.target.style.backgroundColor = 'blue';
  }
  document.getElementById(j).style.display = "none";
  if (document.getElementById(k)) {
    document.getElementById(k).style.display = "none";
  }
  // alert(--accentColor);
  document.getElementById("h-roadmap").scrollIntoView(false);
}
