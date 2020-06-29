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
