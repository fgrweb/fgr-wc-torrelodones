<?php
/**
Plugin Name: WordCamp Torrelodones
Plugin URI: https://fgrweb.es
Description: Plugin demo para la charla de WordCamp Torrelodones
Author: Fernando García Rebolledo
Author URI: https://fgrweb.es
Version: 1.0.0
License: GPL-2.0+
License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

if ( ! defined( 'FUNC_PLUGIN_DIR' ) ) {
	define( 'FUNC_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'FUNC_PLUGIN_URL' ) ) {
	define( 'FUNC_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

add_action( 'enqueue_block_editor_assets', 'fgr_scripts' );
/**
 * Add custom js files.
 *
 * @return void
 */
function fgr_scripts() {
	wp_enqueue_script(
		'fgr-script',
		FUNC_PLUGIN_URL . 'js/fgr.js',
		array( 'wp-blocks' )
	);
	wp_enqueue_script(
		'fgr-script-query',
		FUNC_PLUGIN_URL . 'js/fgr-block.js',
		array( 'wp-blocks' )
	);
}
