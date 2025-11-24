import nodemailer from 'nodemailer';

// 1. Configure the Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // For Gmail. Use 'smtp' for custom servers.
    auth: {
        user: "hssan.mnasri@gmail.com", 
        pass: "tiib yoqf kmir upju"
    }
});

/**
 * Sends a confirmation email.
 * @param {string} to - Recipient email address
 * @param {string} subject - Subject line of the email
 * @param {string} htmlContent - HTML body of the email
 */
export async function sendEmail(to, subject, htmlContent) {
    // 2. Define the Mail Options
    const mailOptions = {
        from: `My Company Name <${process.env.EMAIL_USER}>`,
        to: to,
        subject: subject,
        html: htmlContent,
        // text: 'Plain text alternative for email clients that don't support HTML'
    };

    // 3. Send the Mail
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent: %s', info.messageId);
        return info;
    } catch (error) {
        console.error('❌ Error sending email:', error.message);
        throw error;
    }
}

