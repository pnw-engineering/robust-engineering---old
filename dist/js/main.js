
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
