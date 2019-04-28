<?php
/**
 * Set Menu for Dashboard - ZWPT (Zamper Woocommerce Product Table) Plugin
 * 
 * @since 1.0
 * 
 * @package Zamper Woocommerce Product Table
 */
function wpt_admin_menu() {
    add_menu_page('Zamper Woocommerce Product Table', 'Zamper Product Table', 'edit_theme_options', 'woo-product-table', 'wpt_faq_page', 'dashicons-editor-justify');
}
add_action('admin_menu', 'wpt_admin_menu');