document.getElementById("htmlCode").value = "<div>\n\n</div>";
document.getElementById("cssCode").value = "<style>\n\n</style>";
document.getElementById("jsCode").value = "<script>\n\n</script>";

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  frame.open();
  frame.write(htmlCode + cssCode + jsCode);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}

function autoSaveCode() {
  const htmlCode = document.getElementById("htmlCode").value;
  const cssCode = document.getElementById("cssCode").value;
  const jsCode = document.getElementById("jsCode").value;
  document.querySelector(".auto-save").style.display = "flex"
  const saveCodeData = {
    html: htmlCode,
    css: cssCode,
    js: jsCode,
  };
  localStorage.setItem("liveEditorCode", JSON.stringify(saveCodeData));
}

setInterval(autoSaveCode, 5000);

function autoLoadCode() {
  const saveCodeData = JSON.parse(localStorage.getItem("liveEditorCode"));
  if (saveCodeData) {
    document.getElementById("htmlCode").value = saveCodeData.html;
    document.getElementById("cssCode").value = saveCodeData.css;
    document.getElementById("jsCode").value = saveCodeData.js;
    showPreview();
  }
}

window.onload = autoLoadCode;

function hideAutoSaveText() {
  document.querySelector(".auto-save").style.display = "none";
}
setInterval(hideAutoSaveText, 2000);

