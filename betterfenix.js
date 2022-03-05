/*
betterfenix.js

File used to initiate the script.
Injects script correspondent to the page where the user is.
This is done with jQuery's $.getScript().
*/

$(window).ready(run);

function run() {
  $.getScript(`https://raw.githubusercontent.com/itsbekas/BetterFenix/testing/src/default.js`)
  let path = window.location.pathname.slice(1, -1);
  $.getScript(`https://raw.githubusercontent.com/itsbekas/BetterFenix/testing/${path}.js`);
}
