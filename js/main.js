$("#headerlogo").click(() => {
	window.location.href = "https://iaitorg.com/";
});

function loaderOut() {
	setTimeout(() => {
		$("#loderCircle").fadeOut();
		$("#wakawaka").css("display", "none");
	}, 7000);
	setTimeout(() => {
		$("#loader").css("transform", "translateY(-100%)");
	}, 7500);
	setTimeout(() => {
		$("#loader").css("display", "none");
		$("#content").fadeIn();
		AOS.init({ duration: 800, once: true });
	}, 8000);
}

function noloader() {
	$("#wakawaka").css("display", "none");
	$("#loader").css("display", "none");
	$("#content").fadeIn();
	AOS.init({ duration: 800, once: true });
}

function imagesLoaded() {
	let totalImages = $("img").length;
	let imagesLoaded = 0;

	$("img").each(function () {
		if (this.complete) {
			imagesLoaded++;
		} else {
			$(this)
				.one("load", function () {
					imagesLoaded++;
					if (imagesLoaded === totalImages) {
						allImagesLoaded();
					}
				})
				.one("error", function () {
					imagesLoaded++;
					if (imagesLoaded === totalImages) {
						allImagesLoaded();
					}
				});
		}
	});

	if (totalImages === 0) {
		allImagesLoaded();
	}
}

function allImagesLoaded() {
	if (!sessionStorage.getItem("online") || sessionStorage.getItem("devmode")) {
		sessionStorage.setItem("online", "true");
		loaderOut();
	} else {
		noloader();
	}
}

$(window).on("load", () => {
	imagesLoaded();
});
