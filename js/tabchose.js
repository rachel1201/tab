var currentDom = document.getElementById('initalDom');
currentDom.className = currentDom.className.replace(/play/,'clicked');
var panels = document.getElementsByClassName("content-container");
var icons = document.getElementsByClassName("hide")

function changeItem(e){
 var targetEle = e.target;
 currentDom.className = currentDom.className.replace(/clicked/,'play');
 togglePanelClassName(currentDom, targetEle);
 currentDom = targetEle;
 currentDom.className = currentDom.className.replace(/play/,'clicked');
}
function togglePanelClassName(old, newEle){
	for(var i=0;i <panels.length;i++){
		if (panels[i].attributes.val.value == old.attributes.key.value) {
			panels[i].className = panels[i].className.replace(/content-containershow/,"");
		}
		if (panels[i].attributes.val.value == newEle.attributes.key.value) {
			panels[i].className += " content-containershow";
		}
		if (icons[i].attributes.key.value == old.attributes.key.value) {
			icons[i].className = icons[i].className.replace(/triangle/,"");
		}
		if (icons[i].attributes.key.value == newEle.attributes.key.value) {
			icons[i].className += " triangle";
		}
	}
}