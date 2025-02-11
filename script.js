var states = document.getElementById("states");
states.onchange = function () {
  // console.log('state index: ' + states.selectedIndex);
  // console.log('state name: ' + states.options[states.selectedIndex].text);
  // console.log('img/' + states.value + '@2x.jpg');
  document.getElementById("postcard").style.backgroundImage =
    "url(img/" + states.value + "@2x.jpg)";
  document.getElementById("greeting").innerHTML = "Greetings from";
  document.getElementById("state-heading").innerHTML =
    states.options[states.selectedIndex].text;
};