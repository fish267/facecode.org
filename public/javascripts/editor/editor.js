$(document).ready(function() {

  var doc = null;
  var editor;

  var setDoc = function(docName) {

    editor.setReadOnly(true);
    document.title = 'FaceCode-' + docName;

    //sharejs.open(docName, "text", 'http://210.27.12.1:8000/channel',function(error, newDoc) {
    sharejs.open(docName, "text", 'http://127.0.0.1:8000/channel',function(error, newDoc) {
      if (doc != null) {
        doc.close();
        doc.detach_ace();
      }

      doc = newDoc;

      if (error) {
        console.error(error);
        return;
      }
      doc.attach_ace(editor);
      editor.setReadOnly(false);
    });
  };

  window.onload = function() {
    editor = ace.edit("editor");
    editor.session.setUseWrapMode(true);

    // For fun, we'll go into coffeescript syntax mode.
    //var CoffeeScriptMode = require("ace/mode/python").Mode;
    var CoffeeScriptMode = require("ace/mode/c_cpp").Mode;
    var session = editor.getSession();
    session.setMode(new CoffeeScriptMode());
//    session.setTabSize(2);
    session.setUseSoftTabs(true);
    editor.setTheme("ace/theme/monokai");
    //editor.setReadOnly(true);
    editor.resize();
    editor.setFontSize(24);
    setDoc(room);
  };

});
function show_editor(){
    document.getElementById("video_mod").style.display = "none";
    document.getElementById("editor_mod").style.width = "100%";
    document.getElementById("editor_mod").style.display = "inherit";
}
function show_video(){
    document.getElementById("editor_mod").style.display = "none";
    document.getElementById("video_mod").style.width = "100%";
    document.getElementById("video_mod").style.display = "inherit";
}
function show_all(){
    document.getElementById("editor_mod").style.width = "50%";
    document.getElementById("editor_mod").style.display = "inherit";
    document.getElementById("video_mod").style.width = "50%";
    document.getElementById("video_mod").style.display = "inherit";
}

