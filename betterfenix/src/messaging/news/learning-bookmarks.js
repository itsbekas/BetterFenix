/*
src/messaging/news/learning-bookmarks.js

*/

function add_classes() {
    title = $("h2:contains('Disciplinas')");
    selector =
        `
        <a onclick=add_favorites('announcements')>Adicionar Anúncios</a><br>
        <a onclick=add('summaries')>Adicionar Sumários</a><br>
        <a onclick=add('content')>Adicionar Content</a><br>
        `
    title.after(selector);
}

function add_favorites() {
    toggle_setting("adding_favorites");
}

function learning_bookmarks() {
    add_classes();
}

learning_bookmarks();