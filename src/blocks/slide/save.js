import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: "custom-gutenberg-slide",
	});
	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
