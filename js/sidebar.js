// sidebar Menu Handler
var menuOn = false;
function menutoggle(par) {
	if (!menuOn && !par) {
		$("#path1").addClass("hover");
		$("#path3").addClass("hover");
		menuOn = true;
		$("#path2").fadeOut();
		$({ x: $("#path1").attr("x") }).animate(
			{ x: "-43" },
			{
				duration: 500,
				step: (n) => {
					$("#path1").attr("d", "m8,61l" + (56 + n / 3.1) + " " + n);
					$("#path1").attr("x", n);
				},
			}
		);
		$({ x: $("#path3").attr("x") }).animate(
			{ x: "43" },
			{
				duration: 500,
				step: (n) => {
					$("#path3").attr("d", "m8,19l" + (56 - n / 3.1) + " " + n);
					$("#path3").attr("x", n);
				},
			}
		);
		//$("#sidebarcontent").show().animate({ right: "0" }, {duration: 800});
		$("#sidebarcontent").slideDown(800);
		return;
	}
	menuOn = false;
	$("#path1").removeClass("hover");
	$("#path3").removeClass("hover");
	$({ x: $("#path1").attr("x") }).animate(
		{ x: "0" },
		{
			duration: 500,
			step: (n) => {
				$("#path1").attr("d", "m8,61l" + (56 + n / 3.1) + " " + n);
				$("#path1").attr("x", n);
			},
		}
	);
	$({ x: $("#path3").attr("x") }).animate(
		{ x: "0" },
		{
			duration: 500,
			step: (n) => {
				$("#path3").attr("d", "m8,19l" + (56 - n / 3.1) + " " + n);
				$("#path3").attr("x", n);
			},
		}
	);
	$("#sidebarcontent").slideUp(800);
	//$("#sidebarcontent").animate({ right: "-400" }, {duration: 800, step: (n) => {if (n <= -397) $("#sidebarcontent").hide()}});
	setTimeout(() => {
		if (menuOn) return;
		$("#path2").attr("x", "40");
		$("#path2").attr("d", "m8,40h40");
		$("#path2").fadeIn();
	}, 500);
}

function hover(i) {
	if (menuOn) return;
	if (i == "mouseover") {
		$({ x: $("#path2").attr("x") }).animate(
			{ x: "56" },
			{
				duration: 200,
				step: (n) => {
					$("#path2").attr("d", "m8,40h" + n);
					$("#path2").attr("x", n);
				},
			}
		);
	} else {
		$({ x: $("#path2").attr("x") }).animate(
			{ x: "40" },
			{
				duration: 200,
				step: (n) => {
					$("#path2").attr("d", "m8,40h" + n);
					$("#path2").attr("x", n);
				},
			}
		);
	}
}

$("#sidebarbtn").click((ev) => {
	menutoggle();
	executivetoggle("off-only");
	ev.stopPropagation();
});

$("#sidebarbtn").mouseover(() => {
	hover("mouseover");
});

$("#sidebarbtn").mouseleave(() => {
	hover("mouseleave");
});

$("#executivebtn").click((ev) => {
	executivetoggle();
});

var executive = false;
function executivetoggle(par) {
	if (!executive && !par) {
		executive = true;
		$("#executivemenucontents").animate({ height: 126 });
		$("#executivemenucontents")
			.children()
			.each((i, e) => {
				setTimeout(() => {
					$(e).animate({ "margin-left": 20 }, 200);
				}, 80 * (i + 1));
			});
		$("#executivesvg").css("transform", "rotate(180deg) translateY(5px)");
	} else {
		executive = false;
		$("#executivemenucontents")
			.children()
			.each((i, e) => {
				setTimeout(() => {
					$(e).animate({ "margin-left": 0 }, 200);
				}, 80 * (i + 1));
			});
		setTimeout(() => {
			$("#executivemenucontents").animate({ height: 0 });
		}, 600);
		$("#executivesvg").css("transform", "rotate(0deg) translateY(-5px)");
	}
}

$("#sidebarcontent").click((ev) => {
	ev.stopPropagation();
});

$(document).click(() => {
	menutoggle("off-only");
});

$(window).scroll((ev) => {
	var scroll = $(window).scrollTop();
	if (scroll >= 80) {
		$("#header").addClass("scroll");
	} else {
		$("#header").removeClass("scroll");
	}
});
