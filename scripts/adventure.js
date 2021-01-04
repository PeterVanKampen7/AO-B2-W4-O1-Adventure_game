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

	try{
		trap.style.display				= "none"
		document.getElementById("key").style.display = "none";
	}
	catch(ReferenceError){
		console.log("Beartrap and/or key doesnt exist yet.")
	}
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

	description.innerHTML				= "<p>You can hear the grwowling and the footfalls of the werewolf behind you when you suddenly find yourself faced with the edge of a cliff.</p>";

	container.style.backgroundImage		= 'url("images/cliffside.jpg")';
	container.style.backgroundPosition 	= "0 -100px";

	title.innerHTML						= "Cliffside";

	button1.innerHTML					= "Jump down";
	button1.onclick						= level6;
	button2.innerHTML					= "Run along the edge";
	button2.onclick						= level11;

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
			if(!trap){
				trap.style.display 			= "none";
			}
			killWolf("You barricaded yourself in the treehouse and you set the beartrap you found in front of the door. The werewolf breaks through the door and instantly steps into the beartrap, giving you an opening. You strike the werewolf and pierce his heart with your knife.");
		}
		else if(knife){
			if(!trap){
				trap.style.display 			= "none";
			}
			death("You barricade yourself into the treehouse. The werewolf breaks through the door. You try to swing at it with your knife, but to no avail.");
		}
		else{
			if(!trap){
				trap.style.display 			= "none";
			}
			death("You barricade yourself into the treehouse. The werewolf breaks through the door leaving you nowhere to go.");
		}
	};
	
	button2.innerHTML					= "Leave the treehouse and run";
	button2.onclick						= function(){
		if(!trap){
			trap.style.display 			= "none";
			level7();
		}
		else{
			level7();
		}
	};

	var image = new Image();
	var url = "images/beartrap.png";
	image.src = url;
	image.id = "trap";
	image.alt = "beartrap";
	container.appendChild(image);
	
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

	description.innerHTML				= "<p>You jumped off the cliff and luckily managed to land in a pile of leaves, breaking your fall.</p>";

	container.style.backgroundImage		= 'url("images/leavePile.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "A Pile of Leaves";

	button1.innerHTML					= "Keep Running";
	button1.onclick						= function(){
		button2.style.display 			= "inline-block";
		level7();
	}
	button2.innerHTML					= "Search through the leaves";
	button2.onclick						= function(){
		alert("You quickly rummage through the pile and manage to find a key.");
		var image = new Image();
		var url = "images/key.png";
		image.src = url;
		image.id = "key";
		image.alt = "Key";
		container.appendChild(image);

		var keyItem = document.getElementById("key");
		keyItem.style.width			= "50px";
		keyItem.style.height		= "60px";
		keyItem.style.bottom 		= "5px";
		keyItem.style.border		= "3px solid black";
		keyItem.style.filter		= "brightness(100%)";
		keyItem.style.display		= "inline-block";
		key = true;
		if(!knife){
			keyItem.style.right		= "20px";
		}
		else{
			keyItem.style.right		= "115px";
		}
		button2.style.display = "none";
	}
	
	timer(level);
}

function level7()
{
	level = 7;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>While running for your life you suddenly see and run into a small village.</p>";

	container.style.backgroundImage		= 'url("images/village.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "The Village";

	button1.innerHTML					= "Scream for help";
	button1.onclick						= function(){
		killWolf("Your screams wake up the villagers, and the werewolf retreats into the night.");
	}
	button2.innerHTML					= "Hide in a house";
	button2.onclick						= function(){
		if(key){
			level8();
		}
		else{
			death("You tried to hide in the buildings, but they were all locked, and the werewolf got you before you could hide.");
		}
	}

	timer(level);
}

function level8()
{
	level = 8;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>You used the key you found earlier to open one of the doors and quickly lock it behind you again.</p>";

	container.style.backgroundImage		= 'url("image/house.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "The House";

	button1.innerHTML					= "Sleep here";
	button1.onclick						= function(){
		death("The locked door didnt stop the werewolf for long, before you even had the chance to fall asleep it was already over.");
	}
	button2.innerHTML					= "Escape through the Backdoor";
	button2.onclick						= level9;
	
	timer(level);
}

function level9()
{
	level = 9;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>You ran out through the backdoor back into the night, after a minute of so you encounter a river that blocks your path.</p>";

	container.style.backgroundImage		= 'url("images/river.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "River";

	button1.innerHTML					= "Swim along with the current.";
	button1.onclick						= function(){
		killWolf("With the added speed of swimming in water, and the water masking your scent you finally lost the werewolf.");
	}
	button2.innerHTML					= "Cross the river";
	button2.onclick						= level10;

	timer(level);
}

function level10()
{
	level = 10;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>You manage to cross the river, but fighting the current and the persuit has left you exhausted.</p>";

	container.style.backgroundImage		= 'url("images/riverbank.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "Exhaustion";

	button1.innerHTML					= "Just keep running";
	button1.onclick						= function(){
		killWolf("You bite through the exhaustion and just keep running, and then you spot your salvation, the sun is rising. The werewolf howls one last time and retreats.");
	}
	button2.innerHTML					= "Hide in the bushes";
	button2.onclick						= function(){
		death("You felt like you could no longer keep going and searched for a hiding place, but the werewolf has a keen sense of smell, and managed to find you within seconds.");
	}

	timer(level);
}

function level11()
{
	level = 11;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>The turn you took to avoid the cliff edge brought you very close to the werewolf and it is closing in even more.</p>";

	container.style.backgroundImage		= 'url("images/darkPath.jpg")';
	container.style.backgroundPosition 	= "0 50px";

	title.innerHTML						= "An Eventful Turn";

	button1.innerHTML					= "Just keep running";
	button1.onclick						= function(){
		death("You could not outrun the werewolf after you gave up your lead.");
	}
	if(!knife){
		button2.style.display			= "none"
	}
	button2.innerHTML					= "Throw your knife to buy time";
	button2.onclick						= function(){
		document.getElementById("inventoryItem").style.display = "none";
		knife = false;
		level12();
	}
	
	timer(level);
}

function level12()
{
	level = 12;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>Your knife bought you back some of your lead. You find a path leading down the cliff.</p>";

	container.style.backgroundImage		= 'url("images/path.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "Pathway Down";

	button1.innerHTML					= "Take the path down";
	button1.onclick						= level7;
	button2.innerHTML					= "Keep running above";
	button2.onclick						= level13;

	timer(level);
}

function level13()
{
	level = 13;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>You encounter a river blocking your path.</p>";

	container.style.backgroundImage		= 'url("images/river.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "River";

	button1.innerHTML					= "Swim with the current";
	button1.onclick						= function(){
		death("You swim along with the current, but did not account for the waterfall you encounter. You fall down the waterfall and drown.");
	}
	button2.innerHTML					= "Cross the river";
	button2.onclick						= level14;

	timer(level);
}

function level14()
{
	level = 14;
	console.log("LEVEL "+level);

	description.innerHTML				= "<p>You come upon a campfire with some knight sitting around the fire.</p>";

	container.style.backgroundImage		= 'url("images/campfire.jpg")';
	container.style.backgroundPosition 	= "";

	title.innerHTML						= "Campfire";

	button1.innerHTML					= "Seek their help";
	button1.onclick						= function(){
		killWolf("The knight come to your rescue and together they slay the werwwolf.");
	}
	button2.innerHTML					= "Ignore and keep running";
	button2.onclick						= level10;	

	timer(level);
}


function killWolf(killText)
{
	console.log("VICTORY");

	description.innerHTML 				= "<p>"+killText+"</p>";
	
	container.style.backgroundImage 	= 'url("images/survived.png")';
	container.style.backgroundSize		= "contain";
	container.style.backgroundPosition 	= "0 100px";

	title.innerHTML						= "You survived";

	button1.innerHTML					= "Play again";
	button1.onclick						= location.reload();
	button2.style.display				= "none";
	button3.style.display				= "none";
	inventoryItem.style.display			= "none";

	try{
		trap.style.display				= "none";
		document.getElementById("key").style.display = "none";
	}
	catch(ReferenceError){
		console.log("Beartrap and/or key doesnt exist yet.")
	}
}

function timer(oldLevel)
{
	setTimeout(function(){
		if(level == oldLevel)
		{
			death("Your indecisiveness led to your death");
		}
	}, KILLTIME);
}