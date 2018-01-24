var editSmall 	= document.querySelector("small");
var textinput 	= document.querySelector("input");
var span 		= document.querySelectorAll("span");
var input 		= document.querySelector("input[type='text']");


editSmall.addEventListener("click",function () {
	textinput.style.display="block";
});

input.onkeypress = (function(evt){
	if(evt.which == 13){
		var todo = document.createElement("LI");
		var todotext = document.createTextNode(this.value);
		todo.appendChild(todotext);
		document.getElementById("text-holder").appendChild(todo);
	}
})

for(var i= 0; i<span.length; i++){
	span[i].addEventListener("click", function(){
		this.parentElement.style.display="none";
	});
}