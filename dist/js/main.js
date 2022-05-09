const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

function clearBody() {
  // const topics = document.getElementsByClassName("topic");
  // for (var i = 0; topics[i]; i++) {
  //   topics[i].style.display = "none";
  // }
  // const element = document.getElementsByClassName("grid-item__title");
  // for (var i = 0; element[i]; i++) {
  //   element[i].style.display = "none";
  // }
  document.getElementById("gb1").style.display = "none";
}

function restoreBody() {
  // const topics = document.getElementsByClassName("topic");
  // for (var i = 0; topics[i]; i++) {
  //   topics[i].style.border = "1px solid";
  //   topics[i].style.display = "block";
  // }
  // const heads = document.getElementsByClassName("topic__heading");
  // for (var i = 0; heads[i]; i++) {
  //   heads[i].style.display = "flex";
  // }
  // const sb = document.getElementsByClassName("topic__soundbite");
  // for (var i = 0; sb[i]; i++) {
  //   sb[i].style.display = "flex";
  // }
  // const img = document.getElementsByClassName("topic__img");
  // for (var i = 0; img[i]; i++) {
  //   img[i].style.display = "block";
  // }
  // const element = document.getElementsByClassName("grid-item__title");
  // for (var i = 0; element[i]; i++) {
  //   element[i].style.display = "block";
  // }
  document.getElementById("gb1").style.display = "grid";
}

function showSpeech(s) {
  clearBody();
  document.getElementById("sp").style.display = "grid";
  // fetch("/dist/"+s+".html")
  fetch(s+".html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("sp").innerHTML = text));
  // document.getElementById("b1").innerHTML = text;
}

function endSpeech() {
  restoreBody();
  document.getElementById("sp").style.display = "none";
  // document.getElementById("s1").style.display = "none";
  speech = document.getElementsByClassName("ElSpeech");
  for (var i = 0; speech[i]; i++) {
    topics[i].style.display = "none";
  }

  document.getElementById("b2").style.display = "none";
}

function toggleSpeech() {
  var x = document.getElementById("s1");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

function toggleNav() {
  if (document.getElementById("mySidenav").style.width != "8em") {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "8em";
  document.getElementById("myColumnLayout").style.gridTemplateColumns =
    "8em 1fr";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myColumnLayout").style.gridTemplateColumns = "0 1fr";
}
