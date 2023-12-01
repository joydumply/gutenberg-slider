<?php
/**
 * Plugin Name:       Test Custom Slider
 * Description:       Test Custom Slider from Nikita Babichev developer
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Nikita Babichev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       test-custom-slider
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function test_custom_slider_gutenberg_init() {


	if(!is_admin()){
		wp_register_style(
			'custom-slider-slick',
			plugins_url( 'assets/css/slick.css', __FILE__ ),
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . 'assets/css/slick.css' )
		);
		wp_enqueue_style( 'custom-slider-slick');

		// Only for Demo
		$custom_styles_demo = plugin_dir_path( __FILE__ ) . 'assets/css/custom.css';
		if ( file_exists( $custom_styles_demo ) ) {
			wp_register_style(
				'custom-slider-styles',
				plugins_url( 'assets/css/custom.css', __FILE__ ),
				array(),
				filemtime( plugin_dir_path( __FILE__ ) . 'assets/css/custom.css' )
			);
			wp_enqueue_style( 'custom-slider-styles');
		}


		wp_register_script(
			'custom-slider-slick-js',
			plugins_url( 'assets/js/slick.min.js', __FILE__ ),
			array('jquery'),
			filemtime( plugin_dir_path( __FILE__ ) . 'assets/js/slick.min.js' ),
			true
		);
		wp_enqueue_script('custom-slider-slick-js');

		wp_register_script(
			'custom-slider-js',
			plugins_url( 'assets/js/carousel-script.js', __FILE__ ),
			array('jquery'),
			filemtime( plugin_dir_path( __FILE__ ) . 'assets/js/carousel-script.js' ),
			true
		);
		wp_enqueue_script('custom-slider-js');
	}

	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'test_custom_slider_gutenberg_init' );
