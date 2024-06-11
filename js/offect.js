$("#journeyImg").on("mouseover", () => {
	$("#offect").css("opacity", 1);
	$("#offect").css("animation", "huerotate 12s linear infinite");
});

$(document).on("mousemove", (e) => {
	$("#offect").css({
		left: e.clientX + "px",
		top: e.clientY + "px",
	});
});

$("#journeyImg").on("mouseleave", () => {
	$("#offect").css("opacity", 0);
	$("#offect").css("animation", "");
});
