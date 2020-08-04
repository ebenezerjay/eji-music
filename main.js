// global variables
const circleImgL = $('.circle-img-left');


// show news/updates
$(document).ready(function() {
	$(circleImgL).on('click', function() {
		let articleDivImgL = $('.article-div-images-left');
		$(articleDivImgL).animate({
			marginLeft: '100%'
		});
		$(articleDivImgL).fadeOut("slow","swing");
	});
});

