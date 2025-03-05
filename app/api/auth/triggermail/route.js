import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { firstname, lastname, email, message } = body;

        if (!firstname || !lastname || !email || !message) {
            return new Response(
                JSON.stringify({ message: 'All fields are required' }),
                { status: 400 }
            );
        }


        const transporter = nodemailer.createTransport({
            host: process.env.HOST_NAME,
            port: process.env.HOST_PORT,
            secure: true,
            auth: {
                user: process.env.HOST_USER,
                pass: process.env.HOST_PASS,
            },
        });

        // Email to the user
        const userMailOptions = {
            from: process.env.HOST_USER,
            to: email,
            subject: 'We have received your request!',
            text: `Hi ${firstname} ${lastname},\n\nThank you for reaching out to us! We have received your message:\n\n"${message}"\n\nOur team will get back to you shortly.\n\nBest regards,\nDreamForce Technologies`,
        };

        // Email to the admin
        const adminMailOptions = {
            from: 'Dreamforce contact form',
            to: process.env.ADMIN_EMAIL, // Admin's email address
            subject: 'New Contact Form Submission',
            text: `A new contact form submission has been received:\n\nName: ${firstname} ${lastname}\nEmail: ${email}\nMessage: ${message}\n\nPlease follow up with this user as soon as possible.`,
        };

        // Send both emails concurrently
        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(adminMailOptions),
        ]);

        return new Response(
            JSON.stringify({ message: 'Email sent successfully!' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);

        return new Response(
            JSON.stringify({
                message: 'Internal Server Error: Unable to send emails. Please try again later.',
            }),
            { status: 500 }
        );
    }
}
