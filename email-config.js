// Email Configuration for Admin Notifications
// This file contains your EmailJS credentials

const EMAIL_CONFIG = {
    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    // Follow the guide in: EMAIL-SETUP-INSTRUCTIONS.md

    SERVICE_ID: 'YOUR_SERVICE_ID',        // e.g., 'service_abc123'
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID',      // e.g., 'template_xyz789'
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',        // e.g., 'abcdefghijklmno'

    // Admin email (where notifications will be sent)
    ADMIN_EMAIL: 'sksaikiran060@gmail.com',

    // Whether email notifications are enabled
    ENABLED: false  // Set to true after you add your credentials above
};

// Function to send email notification to admin
async function sendAdminNotification(userData) {
    // Check if EmailJS is configured and enabled
    if (!EMAIL_CONFIG.ENABLED || EMAIL_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
        console.warn('⚠️ EmailJS not configured yet. Skipping email notification.');
        console.info('📝 To enable email notifications, update email-config.js with your EmailJS credentials.');
        return false;
    }

    // Check if emailjs is loaded
    if (typeof emailjs === 'undefined') {
        console.error('❌ EmailJS library not loaded. Check your internet connection.');
        return false;
    }

    try {
        const templateParams = {
            to_email: EMAIL_CONFIG.ADMIN_EMAIL,
            user_name: userData.username,
            user_email: userData.email,
            user_role: userData.role,
            registration_date: new Date().toLocaleString()
        };

        const response = await emailjs.send(
            EMAIL_CONFIG.SERVICE_ID,
            EMAIL_CONFIG.TEMPLATE_ID,
            templateParams,
            EMAIL_CONFIG.PUBLIC_KEY
        );

        console.log('✅ Admin notification sent successfully:', response);
        return true;
    } catch (error) {
        console.error('❌ Failed to send admin notification:', error);
        return false;
    }
}
