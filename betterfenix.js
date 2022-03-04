/*
/betterfenix.js

File used to initiate the script.
Injects script correspondent to the page where the user is.
This is done by placing a <script> element on the website.
*/


const urlParams = new URLSearchParams(window.location.search);
const url_screen = urlParams.get("screen");
const screens =
{
  "default": [], // Scripts to be added everywhere
  "settings": []
}

$(window).ready(load_script);

function inject_scripts() {
  if (url_screen in screens) {
    inject_script_folder(url_screen);
    inject_script_folder("default");
  }
}

function inject_script_folder(page) {
  for (var file in screens[page]) {
    $.getScript(`https://github.com/itsbekas/BetterFenix/${page}/${screens[page][file]}.js`);
  }
}

// Settings support through the browser's local storage will be added in the future
/*
// Looks for settings in the local storage, and sets them as default if they're not present
function verify_settings() {
  if (window.localStorage.getItem("betterfenix") == null) {
    reset_settings();
    location.reload();
  }
  if (window.sessionStorage.getItem("betterfenix") == null) {
    reset_session_settings();
  }
}
*/

function load_script() {
  inject_scripts();
  $(window).on('load', verify_settings);
}