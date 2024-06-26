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

$(window).on("load", () => {
	if (!sessionStorage.getItem("online") || sessionStorage.getItem("devmode")) {
		sessionStorage.setItem("online", "true");
		loaderOut();
		clearTimeout(loadTimer);
	} else {
		noloader();
		clearTimeout(loadTimer);
	}
});

let loadTimer = setTimeout(loaderOut, 15000);
