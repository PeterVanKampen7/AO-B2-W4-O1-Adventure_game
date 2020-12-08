var container		= document.getElementById("gameContainer");
var title			= document.getElementById("title");
var description		= document.getElementById("description");
var gameButtons		= document.getElementById("gameButtons");
var button1			= document.getElementById("button1");
var button2			= document.getElementById("button2");
var button3			= document.getElementById("button3");
var inventoryItem	= document.getElementById("inventoryItem");
var level			= 0;

title.innerHTML 	= "Moonlight Persuit";
button1.innerHTML 	= "Proceed into The Night";

button1.addEventListener("click", function(){
	switch(level)
	{
		case 0:
			level0();
			break;
		case 1:
			death();
			break;
	}
});

button2.addEventListener("click", function(){
	switch(level)
	{
		case 1:
			level1();
			break;
	}
});

button3.addEventListener("click", function(){

});

function death()
{
	console.log("DEATH");

	container.style.backgroundPosition 	= "0 70px";
	container.style.backgroundImage 	= "none";
	container.style.backgroundColor 	= "black";

	title.innerHTML 					= "YOU DIED";
	title.style.color 					= "red";
	title.style.fontSize				= "60px";
	title.style.top						= "200px";
	
	description.style.display 			= "none";
	gameButtons.style.display			= "none";
	inventoryItem.style.display			= "none";
}

function level0()
{
	level++;
	console.log("LEVEL "+level);
	
	description.style.display 	= "inline";
	description.innerHTML 		= "<p>You went out for your normal moonlight stroll, as you do every night. Tonight however you are startled by a loud howl very close to you, looking up you can see that the moon is full tonight. A werewolf has picked up your scent!</p>";
	
	container.style.backgroundImage 	= 'url("images/werewolf.jpg")';
	container.style.backgroundPosition 	= "0 50px";

	title.style.width 		= "100%";
	title.style.fontSize 	= "22px";
	title.style.marginLeft 	= "0";
	title.style.top 		= "5px";
	title.style.textAlign 	= "center";
	title.innerHTML 		= "Panic after dark";

	gameButtons.style.top 				= "650px";
	gameButtons.style.left 				= "0px";
	gameButtons.style.width				= "100%";
	gameButtons.style.height			= "100px";
	gameButtons.style.backgroundColor	= "#262729";
	gameButtons.style.border			= "solid 1px darkred";

	button1.style.fontFamily	= '"Roboto", sans-serif';
	button1.innerHTML			= '"Im sure it is nothing"';
	button2.style.display		= "inline-block";
	button2.innerHTML			= 'RUN!';
}

function level1()
{

}