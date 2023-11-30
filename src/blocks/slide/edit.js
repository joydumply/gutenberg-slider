import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette } from "@wordpress/components";
const { Fragment } = wp.element;

// editor style
import "./editor.scss";

// colors
import colors from "../../utilities/colors-palette";

export default function Edit({ attributes, setAttributes }) {
	const { color } = attributes;

	// ! exclude Slider Block or this block inside this block

	const excludedBlocks = [
		"nikita-test-block/slider",
		"nikita-test-block/slide",
	];

	const ALLOWED_BLOCKS = wp.blocks
		.getBlockTypes()
		.map((block) => block.name)
		.filter((blockName) => !excludedBlocks.includes(blockName));
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Settings" initialOpen={true}></PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="slide_wrap">
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
				</div>
			</div>
		</Fragment>
	);
}
