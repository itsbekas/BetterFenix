/*
 * /betterfenix/src/default/storage_handler.js
 *
 * Handles all the connections between the script and the browser storage,
 * for both local and session storage.
 * 
 */

const storage_key = "betterfenix";

// LOCAL STORAGE

function get_settings() {
    return JSON.parse(window.localStorage.getItem(storage_key));
}

function set_settings(settings) {
    window.localStorage.setItem(storage_key, JSON.stringify(settings));
}

function reset_settings() {
    set_settings(default_settings);
}

function get_setting(id) {
    return get_settings()[id];
}

function set_setting(id, value) {
    var settings = get_settings();
    settings[id] = value;
    set_settings(settings);
}

function delete_setting(id) {
    var settings = get_settings();
    delete settings[id]
    set_settings(settings);
}

function toggle_setting(id) {
    set_setting(id, !get_setting(id));
}

// SESSION STORAGE
function get_session_settings() {
    return JSON.parse(window.sessionStorage.getItem(storage_key));
}

function set_session_settings(settings) {
    window.sessionStorage.setItem(storage_key, JSON.stringify(settings));
}

function reset_session_settings() {
    set_session_settings(default_session_settings);
}

function get_session_setting(id) {
    return get_session_settings()[id];
}

function set_session_setting(id, value) {
    var settings = get_session_settings();
    settings[id] = value;
    set_session_settings(settings);
}

function toggle_session_setting(id) {
    set_session_setting(id, !get_session_setting(id));
}