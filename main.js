// global variables 
const enterButton = $(".enter-button");
const contentBoxSection = $(".contentBox-section");
const popUpArticle = $(".popUp-article");
const divDisplay = $(".displayDiv");
const div1 = $("#div1-id");
const div2 = $("#div2-id");
const div3 = $("#div3-id");
const div4 = $("#div4-id");


// event listeners
document.body.addEventListener('mousemove', function(e) {
	let top = e.pageY;
	let left = e.pageX;
	let flashlight = document.getElementById("flashlight-id");
	flashlight.style.clip = "rect("+(top-100)+"px,"+left+"px,"+top+"px,"+(left-100)+"px)";
});

$(document).ready(function() {
	$(divDisplay).css("display", "none");
});

enterButton.on('click', splitIntoBoxes);
div1.on('click', tourSection);
div2.on('click', musicSection);
div3.on('click', epkSection);
div4.on('click', bioSection);

// changes display after enter button is clicked
function displayTheDivs() {
	$(divDisplay).css("display", "flex");
}

// changes background of content box into 4 separate clickable boxes
function splitIntoBoxes() {
	displayTheDivs();
	$(contentBoxSection).css("backgroundImage", "url('images/EJI-options-screen.jpg')");
	$(enterButton).css("display", "none");
}

// changes background to the tour/live shows content
function tourSection() {
	$(divDisplay).css("display", "none");
	$(contentBoxSection).css("background", "black");
	$(contentBoxSection).css("border", "none");
	let tourImg = new Image(500,200);
	tourImg.src = "images/tour-graphic.jpg";
	$(popUpArticle).append(tourImg);
	$(popUpArticle).append("<h2>Poor Bodhi- May 11th, Headroom Sessions @Recreative Denver</h2>");
}

// changes background to the music content
function musicSection() {
	$(divDisplay).css("display", "none");
	$(contentBoxSection).css("background", "black");
	let musicImg = new Image(500,200);
	musicImg.src = "images/music-graphic.jpg";
	$(popUpArticle).append(musicImg);
	// soSad();
	mrReevesClass();
}

// audio objects
 const soSadAudio = {
	name: "So Sad(still)",
	src: "audio/So-Sad-(still)-copy.mp3",
}

const mrReevesAudio = {
	name: "Mr Reeves Class",
	src: "audio/Mr-Reeves-Class-copy.mp3",
}

const danceableKitchenAudio = {
	name: "Danceable Kitchen",
	src: "audio/Danceable-Kitchen-copy.wav",
}

const insertLyicsAudio = {
	name: "Insert Lyrics Here",
	src: "audio/Insert-lyrics-here-copy.mp3",
}

// adds the attributes to each audio element added to dom
function addAttributes() {
	
}

// adds and styles so sad audio
function soSad() {
	$(popUpArticle).append("<audio></audio>");
	let soSadSrc = soSadAudio.src;
	$()
}

// adds and styles Mr Reeves Class audio
function mrReevesClass() {
	$(popUpArticle).append("<audio></audio>");
	$("audio").attr({
		class: 'audio-controls flex',
		controls: "controls",
		src: "audio/So-Sad-(still)-copy.mp3",
	});
}

// changes background to the epk content
function epkSection() {
	$(divDisplay).css("display", "none");
	$(contentBoxSection).css("background", "black");	
	let epkImg = new Image(500,200);
	epkImg.src = "images/epk-graphic.jpg";
	$(popUpArticle).append(epkImg);
}

// changes background to the bio/contact content
function bioSection() {
	$(divDisplay).css("display", "none");
	$(contentBoxSection).css("background", "black");
	let bioImg = new Image(500,200);
	bioImg.src = "images/bio-graphic.jpg";
	$(popUpArticle).append(bioImg);
}