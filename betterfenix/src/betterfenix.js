/*
betterfenix.js

File used by Tampermonkey to initiate the script.
Injects script correspondent to the page where the user is.
This is done with jQuery's $.getScript().
*/

const src = "https://raw.githubusercontent.com/itsbekas/BetterFenix/testing/betterfenix/src"

$(window).ready(run);

function inject(src=src, path) { $.getScript(src+path); }

function run() {
  inject("/default.js");
  let path = window.location.pathname.slice(1, -1);
  inject(`${path}.js`);
}
