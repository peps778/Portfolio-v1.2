import nodemailer from "nodemailer";

export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);
    const { email } = data;

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD, // MUST be an App Password
      },
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Hi There!",
      html: `
        <p>To complete your connection with me, please visit my booking link to set an appointment.</p>
        <br>
        <p>Best regards,<br><strong>Paul Jhon Magbanua</strong></p>
      `,
    });

    // Notification to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: `New Contact Form Submission`,
      html: `
        <h3>New Lead Submission:</h3>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully!" }),
    };

  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
