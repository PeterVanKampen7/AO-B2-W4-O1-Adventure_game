var container		= document.getElementById("gameContainer");
var title			= document.getElementById("title");
var description		= document.getElementById("description");
var gameButtons		= document.getElementById("gameButtons");
var button1			= document.getElementById("button1");
var button2			= document.getElementById("button2");
var button3			= document.getElementById("button3");
var inventoryItem	= document.getElementById("inventoryItem");
var level			= -1;
const KILLTIME 		= 4000;
var knife			= false;
var beartrap		= false;
var key				= false;

title.innerHTML 	= "Moonlight Persuit";
button1.innerHTML 	= "Proceed into The Night";
button1.onclick		= level0;
/*
button1.addEventListener("click", function(){
	switch(level)
	{
		case -1: //Start from menu
			level0();
			break;
		case 0: //Player does not believe there is a werewolf and dies
			death("You were sure it was nothing, but it certainly was something. You end up being mauled by a werewolf.");
			break;
		case 1: //Player runs from the werewolf
			level2();
			break;
		case 3: //Players hides in the trees and gets found
			death("You hid yourself in the tree, but in a matter of seconds the werewolf found you and killed you.");
			break;
		case 4:
			level7();
			break;

		case 100:
			location.reload();
			break;
	}
});

button2.addEventListener("click", function(){
	switch(level)
	{
		case 0: //Player runs from the werewolf
			level1();
			break;
		case 1: //Player climbs into a tree to escape from the werewolf
			level3();
			break;
		case 2:
			break;
		case 3:
			level4(); //Player jumps from tree to tree
			break;
		case 4:
			level5();
			break;
	}
});

button3.addEventListener("click", function(){
	switch(level)
	{
		case 3: //Player attacks the werewolf with the knife he found
			killWolf("You let yourself fall out of the tree with your knife in your hands. You fall on top of the werewolf and plunge your knife deep into its skull.");
			break;
	}
});
*/

function death(message)
{
	console.log("DEATH");

	container.style.backgroundPosition 	= "0 70px";
	container.style.backgroundImage 	= "none";
	container.style.backgroundColor 	= "black";

	title.innerHTML 					= "YOU DIED";
	title.style.color 					= "red";
	title.style.fontSize				= "60px";
	title.style.top						= "300px";

	description.innerHTML				= message;

	gameButtons.style.display			= "none";
	inventoryItem.style.display			= "none";
}

function level0()
{
	level++;
	console.log("LEVEL "+level);
	
	description.style.display 			= "inline";
	description.innerHTML 				= "<p>You went out for your normal moonlight stroll, as you do every night. Tonight however you are startled by a loud howl very close to you, looking up you can see that the moon is full tonight. A werewolf has picked up your scent!</p>";
	
	container.style.backgroundImage 	= 'url("images/werewolf.jpg")';
	container.style.backgroundPosition 	= "0 50px";

	title.style.width 					= "100%";
	title.style.fontSize 				= "22px";
	title.style.marginLeft 				= "0";
	title.style.top 					= "5px";
	title.style.textAlign 				= "center";
	title.innerHTML 					= "Panic after Dark"

	gameButtons.style.top 				= "650px";
	gameButtons.style.left 				= "0px";
	gameButtons.style.width				= "100%";
	gameButtons.style.height			= "100px";
	gameButtons.style.backgroundColor	= "#262729";
	gameButtons.style.border			= "solid 2px darkred";

	button1.style.fontFamily			= '"Roboto", sans-serif';
	button1.innerHTML					= '"Im sure it is nothing"';
	button1.onclick						= function(){
		death("You were sure it was nothing, but it certainly was something. You end up being mauled by a werewolf.");
	}
	button2.style.display				= "inline-block";
	button2.innerHTML					= 'RUN!';
	button2.onclick						= level1;
}

function level1()
{
	level = 1;
	console.log("LEVEL "+level);

	description.innerHTML 				= "<p>You are running through the woods, behind you in the distance you can hear the footfalls and the growls of the werewolf!</p>";
	
	container.style.backgroundImage 	= 'url("images/darkPath.jpg")';
	container.style.backgroundPosition 	= "0 50px";

	title.innerHTML						= "Flight through the woods"

	button1.innerHTML					= "Keep running";
	button1.onclick						= function(){
		if(!knife)
		{
			inventoryItem.style.display = "none";
		}
		level2();
	}
	button2.innerHTML					= "Climb a tree";
	button2.onclick						= function(){
		if(!knife)
		{
			inventoryItem.style.display = "none";
		}
		level3();
	}

	inventoryItem.src					= "images/knife.png"
	inventoryItem.style.display			= "inline";
	inventoryItem.style.width			= "30px";
	inventoryItem.style.height			= "40px";
	inventoryItem.style.right			= "220px";
	inventoryItem.style.bottom 			= "130px";

	inventoryItem.addEventListener("click", function(){
		inventoryItem.style.width		= "50px";
		inventoryItem.style.height		= "60px";
		inventoryItem.style.right		= "20px";
		inventoryItem.style.bottom 		= "5px";
		inventoryItem.style.border		= "3px solid black";
		inventoryItem.style.filter		= "brightness(100%)";
		knife = true;
	});

	timer(level);
}

function level2()
{
	level = 2;
	console.log("LEVEL "+level);



	timer(level);
}

function level3()
{
	level = 3;
	console.log("LEVEL "+level);

	description.innerHTML 				= "<p>You have climbed into a tree, but you can hear the werewolf still. Looking down you can see that the werewolf has started to climb your tree.</p>";
	
	container.style.backgroundImage 	= 'url("images/treeTop.jpg")';
	container.style.backgroundPosition 	= "0 50px";

	title.innerHTML						= "In the trees";

	button1.innerHTML					= "Hide yourself between the leaves.";
	button1.onclick						= function(){
		death("You hid yourself in the tree, but in a matter of seconds the werewolf found you and killed you.");
	}
	button2.innerHTML					= "Jump to the next tree.";
	button2.onclick						= level4;
	if(knife)
	{
		button3.style.display 			= "inline-block"
		button3.innerHTML				= "Attack with your knife";
		button3.onclick					= function(){
			killWolf("You let yourself fall out of the tree with your knife in your hands. You fall on top of the werewolf and plunge your knife deep into its skull.");
		}
	}
					
	timer(level);
}

function level4()
{
	level = 4;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>You barely made the jump to the next tree, but you made it. You can see that there is a treehouse in this tree, with a rope dangling down to the ground.</p>";

	container.style.backgroundImage		= 'url("images/treehouseOuter.jpg")';
	container.style.backgroundPosition 	= "-130px 50px";

	title.innerHTML						= "The Treehouse";

	button1.innerHTML					= "Take the rope down to the floor";
	button1.onclick						= level7;
	button2.innerHTML					= "Enter the treehouse";
	button2.onclick						= level5;
	button3.style.display				= "none";

	timer(level);
}

function level5()
{
	level = 5;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>You enter the treehouse, you could maybe make a stand here if you barricade the door.</p>";

	container.style.backgroundImage		= 'url("images/treehouseInner.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "Inside the Treehouse";

	button1.innerHTML					= "Barricade the door";
	button1.onclick						= function(){
		console.log("TEST");
		if(beartrap && knife){
			killWolf("You barricaded yourself in the treehouse and you set the beartrap you found in front of the door. The werewolf breaks through the door and instantly steps into the beartrap, giving you an opening. You strike the werewolf and pierce his heart with your knife.");
		}
		else if(knife){
			death("You barricade yourself into the treehouse. The werewolf breaks through the door. You try to swing at it with your knife, but to no avail.");
		}
		else{
			death("You barricade yourself into the treehouse. The werewolf breaks through the door leaving you nowhere to go.");
		}
	};
	
	button2.innerHTML					= "Leave the treehouse and run";
	button2.onclick						= level7;

	container.innerHTML 				+= '<img src="images/beartrap.png" alt="beartrap" id="trap">';
	
	var trap = document.getElementById("trap");
	trap.style.display			= "inline-block";
	trap.style.width			= "90px";
	trap.style.height			= "120px";
	trap.style.right			= "810px";
	trap.style.bottom 			= "110px";

	trap.addEventListener("click", function(){
		trap.style.width		= "50px";
		trap.style.height		= "60px";
		trap.style.bottom 		= "5px";
		trap.style.border		= "3px solid black";
		trap.style.filter		= "brightness(100%)";
		beartrap = true;
		if(!knife){
			trap.style.right		= "20px";
		}
		else{
			trap.style.right		= "115px";
		}
	});
	

	timer(level);
}

function level6()
{
	level = 6;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p></p>";

	container.style.backgroundImage		= 'url("")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "";

	button1.innerHTML					= "";
	button2.innerHTML					= "";
	

	timer(level);
}

function level7()
{
	level = 7;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p></p>";

	container.style.backgroundImage		= 'url("")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "";

	button1.innerHTML					= "";
	button2.innerHTML					= "";
	

	timer(level);
}

function killWolf(killText)
{
	level = 100;
	console.log("VICTORY");

	description.innerHTML 				= "<p>"+killText+"</p>";
	
	container.style.backgroundImage 	= 'url("images/survived.png")';
	container.style.backgroundSize		= "contain";
	container.style.backgroundPosition 	= "0 100px";

	title.innerHTML						= "You survived";

	button1.innerHTML					= "Play again";
	button2.style.display				= "none";
	button3.style.display				= "none";
	inventoryItem.style.display			= "none";
}

function timer(oldLevel)
{
	setTimeout(function(){
		if(level == oldLevel)
		{
			//death();
		}
	}, KILLTIME);
}