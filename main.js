// global variables
const circleImgL = $('.circle-img-left');
const circleImgMidL = $('.circle-img-mid-left');
const circleImgMidR = $('.circle-img-mid-right');
const circleImgR = $('.circle-img-right');
const articleDivImgL = $('.article-div-images-left');
let articleDivImgMidL = $('.article-div-images-mid-left');
let articleDivImgMidR = $('.article-div-images-mid-right');
let articleDivImgR = $('.article-div-images-right');



// show news/updates
$(document).ready(function() {
	$(circleImgL).on('click', function() {
		showNews();
		$(articleDivImgL).animate({
			marginLeft: '100%'
		});
		$(articleDivImgL).fadeOut("slow","swing");
		// $(articleDivImgR).fadeOut("slow","swing");
		// $(articleDivImgMidL).fadeOut("slow","swing");
		// $(articleDivImgMidR).fadeOut("slow","swing");
	});
});

function showNews() {
	$('.section-content').css('display', 'flex');
}

// show Music section
$(document).ready(function() {
	$(circleImgMidL).on('click', function() {
		$(articleDivImgMidL).animate({
			marginLeft: '100%'
		});
		// $(articleDivImgL).fadeOut("slow","swing");
		$(articleDivImgMidL).fadeOut("slow","swing");
		// $(articleDivImgMidR).fadeOut("slow","swing");
		// $(articleDivImgR).fadeOut("slow","swing");
	});
});

// show Bio section
$(document).ready(function() {
	$(circleImgMidR).on('click', function() {
		$(articleDivImgMidR).animate({
			marginLeft: '100%'
		});
		// $(articleDivImgL).fadeOut("slow","swing");
		// $(articleDivImgMidL).fadeOut("slow","swing");
		$(articleDivImgMidR).fadeOut("slow","swing");
		// $(articleDivImgR).fadeOut("slow","swing");
	});
});

// show tour section
$(document).ready(function() {
	$(circleImgR).on('click', function() {
		$(articleDivImgR).animate({
			marginLeft: '100%'
		});
		// $(articleDivImgL).fadeOut("slow","swing");
		// $(articleDivImgMidL).fadeOut("slow","swing");
		// $(articleDivImgMidR).fadeOut("slow","swing");
		$(articleDivImgR).fadeOut("slow","swing");
	});
});