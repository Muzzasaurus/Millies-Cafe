bar=document.getElementById("navBarWrapper");
main=document.getElementById("centerContainer");
buttons=document.getElementsByClassName("navButton");
welcome=document.getElementsByClassName("welcomeText");
function loadAnim() {
	bar.style.animationName = "growBar";
	main.style.animationName = "growMain";
	setTimeout(loadExtras, 1000);
}
function loadExtras() {
	[].forEach.call(buttons, function(element) {
		element.style.animationName = "fadeIn";
	});
	
	[].forEach.call(welcome, function(element) {
		element.style.animationName = "fadeIn";
	});
}