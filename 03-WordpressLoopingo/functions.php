<?php
/**
 * Mindfunnel Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Mindfunnel Child
 * @since 1.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_MINDFUNNEL_CHILD_VERSION', '1.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'mindfunnel-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_MINDFUNNEL_CHILD_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );


// here is chargebee 
// require_once('vendor/autoload.php');
// use ChargeBee\ChargeBee\Environment;
// use ChargeBee\ChargeBee\Models\Subscription;

// Environment::configure("{site}","{site_api_key}");
// $result = Subscription::createWithItems("__test__8asz8Ru9WhHOJO",array(
//   "subscriptionItems" => array(array(
//     "itemPriceId" => "day-pass-USD",
//     "unitPrice" => 100),
//   array(
//     "itemPriceId" => "basic-USD",
//     "billingCycles" => 2,
//     "quantity" => 1))
//   ));
  
// $subscription = $result->subscription();
// $customer = $result->customer();
// $card = $result->card();
// $invoice = $result->invoice();
// $unbilledCharges = $result->unbilledCharges();