// Data
const content = [
// OwO Clicker
["Assets/Images/OwOPreview.png",

"OwO Clicker",

"My first game and my first website with effort put into it. \
At the time, I was super happy with this, and I kept rushing \
to add new menus or new options, not caring about how it looked. \
This led to my code being borderline unreadable and unoptimized. \
While I speak badly of this, I'm still proud of what I managed \
to accomplish, this was very good for a first project.",

"https://muzzasaurus.github.io/OwO-Clicker/"],


// H Clicker
["Assets/Images/HPreview.png",

"H Clicker",

"H clicker is my second clicker game, this one started as a joke, \
but I quickly found it to be a great way of improving my coding. \
This game is a lot like my first game, except the code is a whole \
lot nicer and there are features which I wouldn't know how to \
implement before this.",

"https://muzzasaurus.github.io/H-Clicker/"],


// IWM Randomiser
[`Assets/Images/rng${Math.floor(Math.random()*3)+1}.png`,

"IWM Randomiser",

"This was a fun little project I made in two nights, there's a \
game I play called I Wanna Maker, and this is used to make fully \
random levels which usually end up bad. Though it's a lot of fun \
to make with friends.",

"https://muzzasaurus.github.io/Maker-Randomiser/"],


// Charmstination
["Assets/Images/charmPreview.png",

"I Wanna GO The CHARMSTINATION",

"This is a game I made with my friend group for our mutual friend's \
birthday, it was our first time making a game like this so it isn't \
the best, but I'm proud of what we were able to create, especially \
with how little time we had to make it.",

"https://delicious-fruit.com/ratings/game_details.php?id=25577"],


// Aura's Sandwich
["Assets/Images/sandwichPreview.png",

"I Wanna Kill Aura's Sandwich",

"Continuing the trend of creating games for our friends birthdays, \
my group of friends and I decided to create another game for our other \
friend, this one was a lot bigger than the previous one and was a lot \
more complicated.",

"https://delicious-fruit.com/ratings/game_details.php?id=25770"]
]

//Function definitions
function createTable(img1,txt1,img2,txt2,img3,txt3) {
	tableContainer = document.createElement("div");
	tableContainer.id = "projectsContainer";
	table = document.createElement("table");
	table.id = "projectsTable";
	tableBody = document.createElement("tbody");
	tableRow = document.createElement("tr");
	tableRow.id = "projectRow";
	tableRow2 = document.createElement("tr");
	tableRow2.id = "projectRow";
	
	for (let i=0; i<6; i++) {
		if (i % 2 == 0) {
			if (arguments[i] === undefined) {
				tableRow.appendChild(createEmptyCell());
			} else {
				tableRow.appendChild(arguments[i]);
			}
		} else {
			if (arguments[i] === undefined) {
				tableRow2.appendChild(createEmptyTextCell());
			} else {
				tableRow2.appendChild(arguments[i]);
			}
		}
	}
	
	tableBody.appendChild(tableRow);
	tableBody.appendChild(tableRow2);
	table.appendChild(tableBody);
	
	tableContainer.appendChild(table);
	return tableContainer;
}

function createImageCell(src,href) {
	cell = document.createElement("td");
	cell.id = "projectCell";
	
	a = document.createElement("a");
	a.href=href;
	a.target="_blank";
	
	img = document.createElement("img");
	img.classList.add("previewImage");
	img.src = src;
	
	a.appendChild(img);
	cell.appendChild(a);
	return cell;
}

function createTextCell(title,txt,href) {
	cell = document.createElement("td");
	cell.id = "projectTextCell";
	
	a = document.createElement("a");
	a.href=href;
	a.target="_blank";
	
	header = document.createElement("h2");
	header.classList.add("defaultText");
	header.innerHTML = title;
	
	paragraph = document.createElement("p");
	paragraph.classList.add("paragraphText");
	paragraph.innerHTML = txt;
	
	a.appendChild(header);
	cell.appendChild(a);
	cell.appendChild(paragraph);
	return cell;
}
function createEmptyCell() {
	cell = document.createElement("td");
	cell.id = "projectCell";
	return cell;
}
function createEmptyTextCell() {
	cell = document.createElement("td");
	cell.id = "projectTextCell";
	return cell;
}

//Code
var project = [];
var emptyCells = 0;

for (let i=Math.ceil(content.length/3)*3-1; i>=0; i--) {
	if (i < content.length) {
		project.push([createImageCell(content[i][0],content[i][3]),createTextCell(content[i][1], content[i][2], content[i][3])]);
	} else {
		emptyCells++;
	}
}
for (let i=0; i<emptyCells; i++) {
	project.push([createEmptyCell(),createEmptyTextCell()]);
}

for (let i=0; i<Math.ceil(project.length/3); i+=1) {
	section=createTable(project[i*3][0],project[i*3][1],project[i*3+1][0],project[i*3+1][1],project[i*3+2][0],project[i*3+2][1])
	document.body.appendChild(section);
}