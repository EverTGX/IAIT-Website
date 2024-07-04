$(window).scroll(function () {
	if ($(window).width() <= 720) return;
	if (scrollTop > 400) return;

	var scrollTop = $(this).scrollTop();
	var heading = $(".heading");

	heading.css("transition", "none");

	heading.css({
		transform: "translateY(calc(" + scrollTop / 3 + "px))",
		opacity: 1 - scrollTop / 600,
	});
});
