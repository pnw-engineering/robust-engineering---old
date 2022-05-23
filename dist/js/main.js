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
  document.getElementById("gb1").style.display = "none";
}

function restoreBody() {
  document.getElementById("gb1").style.display = "grid";
}

function showSpeech(s) {
  clearBody();
  document.getElementById("sp").style.display = "flex";
  fetch(s+".html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("sp").innerHTML = text));
}

function endSpeech() {
  restoreBody();
  document.getElementById("sp").style.display = "none";
  speech = document.getElementsByClassName("ElSpeech");
  for (var i = 0; speech[i]; i++) {
    topics[i].style.display = "none";
  }
}

// function toggleSpeech() {
//   var x = document.getElementById("s1");
//   if (x.style.display === "none") {
//     x.style.display = "inline-block";
//   } else {
//     x.style.display = "none";
//   }
// }

function toggleNav() {
  if (document.getElementById("mySidenav").style.width != "8em") {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "8rem";
  document.getElementById("myColumnLayout").style.gridTemplateColumns =
    "8em 1fr";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myColumnLayout").style.gridTemplateColumns = "0 1fr";
}
