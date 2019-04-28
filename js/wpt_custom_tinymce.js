/**
 * Custom code for TinyMCE add Button
 * 
 * @author Saiful Islam
 * 
 * @since 1.0
 */

jQuery(document).ready(function($) {
    tinymce.create('tinymce.plugins.wpt_plugin', {
        init : function(ed, url) {
                ed.addCommand('wpt_insert_shortcode', function() {
                    content =  "[wpt-shop title='All Products' class='' table_class='' product_cat_ids='' product_cat_slugs='' short='asc' min_price='' max_price='']";
                    tinymce.execCommand('mceInsertContent', false, content);
                });

            // Register buttons - trigger above command when clicked
            ed.addButton('wpt_button', {title : 'Insert Product Table shortcode', cmd : 'wpt_insert_shortcode', image: url + '/../images/shortcode_tinymce.png' });
        },   
    });
    tinymce.PluginManager.add('wpt_button', tinymce.plugins.wpt_plugin);
});

function multiply()
{
    // Get the input values
    a = Number(document.getElementById('<?php echo "price_value_id_" . get_the_ID() . "" ?>').value);
    b = Number(document.getElementById('mypqty').value);

    // Do the multiplication
    c = a*b;

    // Set the value of the total
    document.getElementById('mytotalprice').value=c;
}