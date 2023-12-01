jQuery(document).ready(($) => {
	if ($(".custom-gutenberg-slider").length > 0) {
		$(".custom-gutenberg-slider").each(function (index, element) {
			const automaticScroll = $(this).data("automatic-scroll");
			const showArrows = $(this).data("show-arrows");
			const showDots = $(this).data("show-dots");
			const slidesToShow = {
				desktop: $(this).data("slides-to-show-desktop"),
				tablet: $(this).data("data-slides-to-show-tablet"),
				mobile: $(this).data("data-slides-to-show-mobile"),
			};

			$(this).slick({
				autoplay: automaticScroll,
				arrows: showArrows,
				dots: showDots,
				slidesToShow: slidesToShow.desktop,
				slidesToScroll: slidesToShow.desktop,
				prevArrow: '<button type="button" class="slick-prev">&#9664;</button>',
				nextArrow: '<button type="button" class="slick-next">&#9654;</button>;',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: slidesToShow.tablet,
							slidesToScroll: slidesToShow.tablet,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: slidesToShow.mobile,
							slidesToScroll: slidesToShow.mobile,
						},
					},
				],
			});
		});
	}
});
