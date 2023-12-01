import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		automaticScroll,
		showArrows,
		showDots,
		slidesToShowDesktop,
		slidesToShowTablet,
		slidesToShowMobile,
	} = attributes;
	const blockProps = useBlockProps.save({
		className: "custom-gutenberg-slider",
	});

	return (
		<div
			{...blockProps}
			data-automatic-scroll={automaticScroll}
			data-show-arrows={showArrows}
			data-show-dots={showDots}
			data-slides-to-show-desktop={slidesToShowDesktop}
			data-slides-to-show-tablet={slidesToShowTablet}
			data-slides-to-show-mobile={slidesToShowMobile}
		>
			<InnerBlocks.Content />
		</div>
	);
}
