function showPic(whichpic){
var source=whichpic.getAttribute("href");
document.getElementById("oma").src=source;
var text=whichpic.getAttribute("title");
document.getElementById("description").firstChild.nodeValue=text;
}