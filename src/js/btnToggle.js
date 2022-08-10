function addEvents() {
  console.log("Trying to add events");
  const btns = document.querySelectorAll(".MapButton");
  console.log("found", btns.length);
  for (var i = 0; i < btns.length; i++) {
    // console.log(btns[i]);
    btns[i].addEventListener("click", toggleElement);
  }
}

addEvents();
// toggleElement();

function toggleElement() {
  console.log(event, "was passed in");
  b = event.target.id;
  i = b.substring(1, b.length);
  el = document.getElementById(i);
  console.log("button", b, "was pressed and element", el.id, "selected");
  console.log("display status is:", el.style.display);
  if (el.style.display != "block") {
    el.style.display = "block";
    document.getElementById(b).style.boxShadow =
      "0px 0px 5px 5px rgb(180, 62, 12)";
    console.log(i, " turned ON");
  } else {
    el.style.display = "none";
    document.getElementById(b).style.boxShadow = "none";
    console.log(i, "and", b, " turned OFF");
    clearSubtree(el);
  }
  sibsOff(i);
  //   console.log("siblings base =", i.substring(0,1))
  sibsOff(i.substring(0, 1));

  document
    .getElementById("h-roadmap")
    .scrollIntoView({ block: "end", behavior: "smooth" });

  function clearSubtree(el) {
    elSet = el.getElementsByClassName("MapLine");
    for (var i = 0; i < elSet.length; i++) {
      if (elSet[i].style.display == "block") {
        console.log(
          elSet[i].id,
          " turned OFF - display was:",
          elSet[i].style.display
        );
        elSet[i].style.display = "none";
        btn = "b" + elSet[i].id;
        // console.log("trying button ID", btn)
        if (document.getElementById(btn).style.boxShadow != "none") {
          document.getElementById(btn).style.boxShadow = "none";
        }
      }
      //   bSet = el.getElementsByClassName("MapButton");
      //   for (var i = 0; i < bSet.length; i++) {
      //     if (bSet[i].style.boxShadow != "none") {
      //       elSet[i].style.boxShadow = "none";
      // 	  console.log("button", b, " turned OFF");
      //     }
    }
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
}
