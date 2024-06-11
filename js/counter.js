$(".counter-block").each((index, elem) => {
	$(elem).css("--delay", elem.dataset.aosDelay + "ms");

	const target = $(elem).find(".count-text").attr("data-count");
	const duration = 1000 / target;

	elem.addEventListener("transitionend", function (event) {
		if (elem.classList.contains("aos-animate")) {
			let number = parseInt($(elem).find(".count-text").text());
			const incrementNumber = setInterval(() => {
				if (number < target) {
					number++;
					$(elem).find(".count-text").text(number);
				} else {
					clearInterval(incrementNumber);
				}
			}, duration);
		}
	});
});
