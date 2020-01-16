// global variables 
const enterButton = $(".enter-button");
const contentBoxSection = $(".contentBox-section");
const popUpArticle = $("#popUp-article-id");
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
	$(div1).css("display", "none");
	$(div2).css("display", "none");
	$(div3).css("display", "none");
	$(div4).css("display", "none");
});

enterButton.on('click', splitIntoBoxes);
div1.on('click', tourSection);
div2.on('click', musicSection);
div3.on('click', epkSection);
div4.on('click', bioSection);


// changes background of content box into 4 separate clickable boxes
function splitIntoBoxes() {
	$(contentBoxSection).css("backgroundImage", "url('images/EJI-options-screen.jpg')");
	$(contentBoxSection).css("border", "none");
	// contentBoxSection.style.backgroundImage = "url('images/EJI-options-screen.jpg')";
	// contentBoxSection.style.border = "none";
	$(enterButton).css("display", "none");
}

// changes background to the tour section
function tourSection() {
	console.log(div1);
}

function musicSection() {
	console.log(div2);
}

function epkSection() {
	console.log(div3);
}

function bioSection() {
	console.log(div4);
}