import nodemailer from "nodemailer";

export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);

    const { fullName, email, message } = data;

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD, // Use App Password
      },
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <p>Hi <strong>${fullName}</strong>,</p>
        <p>Thank you for contacting me! I received your message.</p>
        <br>
        <p>Best regards,<br><strong>Paul Jhon Magbanua</strong></p>
      `,
    });

    // Notification to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h3>New Lead Submission:</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
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
