import sgMail from '@sendgrid/mail';


/**
 * Sends a confirmation email using SendGrid's HTTP API (Port 443).
 * * @param {string} to - Recipient email address
 * @param {string} subject - Subject line of the email
 * @param {string} htmlContent - HTML body of the email
 */
export async function sendEmail(to, subject, htmlContent) {
    
    // Ensure the sender email is configured
    if (!process.env.SENDER_EMAIL) {
        console.error('❌ SENDGRID_SENDER_EMAIL is not set in environment variables.');
        throw new Error('Email configuration error: Sender email missing.');
    }

    // 2. Define the Mail Object
    const msg = {
        to: to,
        from: {
            email: process.env.SENDER_EMAIL, // Must match your verified SendGrid sender
            name: 'My Course Platform' 
        },
        subject: subject,
        html: htmlContent,
    };

    // 3. Send the Mail via API
    try {
        // This makes an HTTPS request, avoiding the SMTP port block
        const [response] = await sgMail.send(msg); 
        console.log(`✅ Email sent via SendGrid API. Status: ${response.statusCode}`);
        return response;
    } catch (error) {
        // SendGrid API errors are usually found in the response body
        console.error('❌ Error sending email via SendGrid:', error.message);
        // Log detailed API errors if available
        if (error.response?.body?.errors) {
            console.error('   API Errors:', error.response.body.errors);
        }
         throw new Error('SendGrid API failure: ' + error.message);
    }
}