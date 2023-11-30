import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";
const { Fragment } = wp.element;

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		automaticScroll,
		showArrows,
		showDots,
		slidesToShowDesktop,
		slidesToShowTablet,
		slidesToShowMobile,
	} = attributes;
	const ALLOWED_BLOCKS = ["nikita-test-block/slide"];
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Settings", "custom_slider")} initialOpen={true}>
					<p className="custom__editor__label">
						{__("Slider Settings", "custom_slider")}
					</p>

					<ToggleControl
						label={__("Automatic Scroll", "custom_slider")}
						checked={automaticScroll}
						onChange={(value) => setAttributes({ automaticScroll: value })}
					/>

					<ToggleControl
						label={__("Show Arrows", "custom_slider")}
						checked={showArrows}
						onChange={(value) => setAttributes({ showArrows: value })}
					/>

					<ToggleControl
						label={__("Show Dots", "custom_slider")}
						checked={showDots}
						onChange={(value) => setAttributes({ showDots: value })}
					/>

					<RangeControl
						label={__("Slides to Show (Desktop)", "custom_slider")}
						value={slidesToShowDesktop}
						onChange={(value) => setAttributes({ slidesToShowDesktop: value })}
						min={1}
						max={10}
					/>

					<RangeControl
						label={__("Slides to Show (Tablet)", "custom_slider")}
						value={slidesToShowTablet}
						onChange={(value) => setAttributes({ slidesToShowTablet: value })}
						min={1}
						max={10}
					/>

					<RangeControl
						label={__("Slides to Show (Mobile)", "custom_slider")}
						value={slidesToShowMobile}
						onChange={(value) => setAttributes({ slidesToShowMobile: value })}
						min={1}
						max={10}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="slider_block_wrap">
					<div className="slider_title">Slider Block</div>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						renderAppender={InnerBlocks.ButtonBlockAppender}
					/>
				</div>
			</div>
		</Fragment>
	);
}
