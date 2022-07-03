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

function sibsOff(i) {
  o = i;

  base = Math.floor(parseInt(i, 10) / 10) * 10;
  me = parseInt(i.substring(i.length - 1, i.length), 10);
  console.log("i = ", i, "base = ", base, "Me = ", me);
  console.log("turning off ", i, "'s siblings");
  console.log("last digit = ", me);
  for (let j = 1; j < 4; j++) {
    if (j != me){
      id = base + j;
      console.log(base, "+", j, "=", id, "turned off ");
      el = document.getElementById(id.toString());
      if (el != undefined) {
        el.style.display = "none";
      }
    }
  }
  i = o;
  i = i.substring(i.length - 1, i.lenght);
}

function toggleElement(i, j, k) {
  b = event.target.id;
  i = b.substring(1, b.length);
  el = document.getElementById(i);
  if (el.style.display == "none") {
    el.style.display = "block";
    document.getElementById(b).style.borderColor = "red";
    console.log(i," turned on")
  } else {
    el.style.display = "none";
    document.getElementById(b).style.borderColor = event.target.style.color;
    // event.target.style.backgroundColor = 'blue';
  }
  sibsOff(i);

  // document.getElementById(j).style.display = "none";
  // if (document.getElementById(k)) {
  //   document.getElementById(k).style.display = "none";
  // }
  // console.log(b, l, i);
  // document.getElementById("h-roadmap").scrollIntoView({block: 'end',  behavior: 'instant'});
  document
    .getElementById("h-roadmap")
    .scrollIntoView({ block: "end", behavior: "smooth" });
}
