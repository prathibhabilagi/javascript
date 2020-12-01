for(var i=0; i<document.querySelectorAll(".drum").length;i++){

	//button press
	document.querySelectorAll(".drum")[i].addEventListener("click", function() {
	var btnInnerHtml=this.innerHTML;
	makeSound(btnInnerHtml)
	buttonAnimation(btnInnerHtml);
});
	

	//keyboard press
	document.addEventListener("keypress",function(event){
		makeSound(event.key);
		buttonAnimation(event.key);
	});
}

function makeSound(key){
	switch(key){
		case "w":
			var audio= new Audio("sounds/tom-1.mp3");
			audio.play();
		break;
		case "a":
			var audio= new Audio("sounds/tom-2.mp3");
			audio.play();
		break;
		case "s":
			var audio= new Audio("sounds/tom-3.mp3");
			audio.play();
		break;
		case "d":
			var audio= new Audio("sounds/tom-4.mp3");
			audio.play();
		break;
		case "j":
			var audio= new Audio("sounds/snare.mp3");
			audio.play();
		break;
		case "k":
			var audio= new Audio("sounds/crash.mp3");
			audio.play();
		break;
		case "l":
			var audio= new Audio("sounds/kick-bass.mp3");
			audio.play();
		break;
		default:
	}
}
function buttonAnimation(currentKey){
	var activeButton = document.querySelector("."+currentKey);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100);
}



 /*document.querySelector(".w").addEventListener("click", function() {
	var audio= new Audio("sounds/tom-1.mp3");
	audio.play();
});
 document.querySelector(".a").addEventListener("click", function() {
	var audio= new Audio("sounds/tom-2.mp3");
	audio.play();
});
 document.querySelector(".s").addEventListener("click", function() {
	var audio= new Audio("sounds/tom-3.mp3");
	audio.play();
});
 document.querySelector(".d").addEventListener("click", function() {
	var audio= new Audio("sounds/tom-4.mp3");
	audio.play();
});
document.querySelector(".j").addEventListener("click", function() {
	var audio= new Audio("sounds/snare.mp3");
	audio.play();
});
document.querySelector(".k").addEventListener("click", function() {
	var audio= new Audio("sounds/crash.mp3");
	audio.play();
});
document.querySelector(".l").addEventListener("click", function() {
	var audio= new Audio("sounds/kick-bass.mp3");
	audio.play();
});*/


