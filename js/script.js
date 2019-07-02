$(document).ready(function() {
	var containerEl = document.querySelector('.imAnim');
    var mixer = mixitup(containerEl);
    new WOW().init();
	var counted = false;
	if($(window).scrollTop() > 400) {
			$("nav").addClass("scrolled");
			$("#arrowUp").show(300);
	}
	$(window).scroll(function() {
		if($(window).scrollTop() > 400) {
			$("nav").addClass("scrolled");
			$("#arrowUp").show(300);
		}
		else {
			$("nav").removeClass("scrolled");
		    $("#arrowUp").hide(300);
		}
		if(elemInViewport($(".count")[0]) && !counted) {
			var options = {
				useEasing: true, 
				useGrouping: true, 
				separator: '', 
				decimal: '.', 
			};
			var counter = new CountUp('hoursN', 30, 12, 0, 3.5, options);
			if (!counter.error) {
				counter.start();
			} else {
				console.error(counter.error);
			}
			counter = new CountUp('clientsN', 350, 500, 0, 3.5, options);
			if (!counter.error) {
				counter.start();
			} else {
				console.error(counter.error);
			}
			counter = new CountUp('roomsN', 700, 850, 0, 3.5, options);
			if (!counter.error) {
				counter.start();
			} else {
				console.error(counter.error);
			}
			counter = new CountUp('yearsN', 1000, 2015, 0, 3.5, options);
			if (!counter.error) {
				counter.start();
			} else {
				console.error(counter.error);
			}
			counted = true;
		}
	});
	$("#arrowUp").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});
	$(".im-but").click(function() {
		$(".bactive").removeClass("bactive");
		$(this).addClass("bactive");
		if($("#gallery > div .imgoverlay").hasClass("flipOutY")) {
			$("#gallery > div .imgoverlay").removeClass("flipOutY");
			$("#gallery > div .imgoverlay").css("display", "none");
		}
	});
	$("#gallery > div").hover(function() {
		$(this).children(".imgoverlay").css("display", "block");
		$(this).children(".imgoverlay").removeClass("flipOutY");
		$(this).children(".imgoverlay").addClass("flipInY");
	}, function() {
		$(this).children(".imgoverlay").removeClass("flipInY");
		$(this).children(".imgoverlay").addClass("flipOutY");
	});
	function elemInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 && rect.left >= 0 && rect.bottom <= $(window).height() && rect.right <= $(window).width()
		);
	}
	$(".fa-eye").click(function() {
		$(".showImg").css("display", "flex");
		$(".showImg").animate({
			margin: "0%",
			width: "100%",
			height: "100%"
		});
		var src = $(this).parentsUntil(".mix").siblings()[0].src;
		$(".imgShown").attr("src", src);
		setTimeout(function() {
			$(".showContainer").slideDown(400);
		}, 150);
	});
	$(".closeImg").click(function() {
		$(".showContainer").fadeOut(200);
		$(".showImg").animate({
			margin: "22.5% 45%",
			width: "10%",
			height: "20%"
		}, function() {
			$(".showImg").css("display", "none");
		});
	});
});