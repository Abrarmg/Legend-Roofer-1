<?php
function legend_roofer_setup() {
    add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'legend_roofer_setup' );

add_action( 'rest_api_init', function () {
    register_rest_route( 'legend-roofer/v1', '/submit-lead', array(
        'methods' => 'POST',
        'callback' => 'legend_roofer_submit_lead',
        'permission_callback' => '__return_true'
    ) );
} );

function legend_roofer_submit_lead( WP_REST_Request $request ) {
    $params = $request->get_json_params();
    if ( empty( $params ) ) {
        $params = $request->get_body_params();
    }

    $first_name = sanitize_text_field( $params['first_name'] ?? '' );
    $last_name = sanitize_text_field( $params['last_name'] ?? '' );
    $name = sanitize_text_field( $params['name'] ?? trim($first_name . ' ' . $last_name) );
    
    $email = sanitize_email( $params['email'] ?? '' );
    $phone = sanitize_text_field( $params['phone'] ?? '' );
    $address = sanitize_text_field( $params['address'] ?? '' );
    $service = sanitize_text_field( $params['service'] ?? '' );
    $message = sanitize_textarea_field( $params['message'] ?? '' );

    $to = 'naeemseo7860@gmail.com';
    $subject = 'New Estimate Request from ' . $name;
    
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    if ( ! empty( $address ) ) {
        $body .= "Address: $address\n";
    }
    $body .= "Service: $service\n";
    if ( ! empty( $message ) ) {
        $body .= "Message: $message\n";
    }

    $headers = array('Content-Type: text/plain; charset=UTF-8');
    if ( ! empty( $email ) ) {
        $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
    }

    $sent = wp_mail( $to, $subject, $body, $headers );

    if ( $sent ) {
        return new WP_REST_Response( array( 'success' => true, 'message' => 'Lead sent successfully.' ), 200 );
    } else {
        return new WP_REST_Response( array( 'success' => false, 'message' => 'Failed to send lead.' ), 500 );
    }
}
