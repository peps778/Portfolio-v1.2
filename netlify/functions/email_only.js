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
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "You're Almost Set! Let's Take the Next Step",
      html: `
        <div style="font-family: Poppins, Arial, sans-serif; color:#333; line-height:1.6; padding:24px;">

          <h2 style="font-weight:600; margin-bottom:12px;">Thanks for Reaching Out!</h2>

          <p style="margin-bottom:16px;">
            I appreciate you taking the time to connect with me. Before we proceed,
            I’d love to learn more about your goals so I can provide the right guidance and support.
          </p>

          <p style="margin-bottom:16px;">
            The best next step is to book a quick call. It's fast, easy, and ensures
            we can discuss exactly what you're looking for.
          </p>

          <div style="text-align:center; margin: 30px 0;">
            <a 
              href="https://cal.com/paul-jhon-magbanua/30min-discussion"
              style="
                background:#36DE55;
                color:#fff;
                padding:14px 26px;
                border-radius:8px;
                text-decoration:none;
                font-size:17px;
                font-weight:600;
                display:inline-block;
                border:1px solid #fff;
                box-shadow:0px 4px 10px rgba(0,0,0,0.1);
              "
            >
              Book Your 30-Minute Call
            </a>
          </div>

          <p style="margin-bottom:24px;">
            I look forward to speaking with you and helping you move forward with clarity and confidence.
            If you have any questions before our call, feel free to reply to this email.
          </p>

          <div style="text-align:center; margin: 30px 0;">
            <img 
              src="https://magbanua-pauljhon.website/images/OpenGraph_PaulMagbanua.png"
              alt="Paul Jhon Magbanua"
              style="width: 60%; max-width:480px; border-radius:12px;"
            />
          </div>

          <p style="font-weight:600; margin-bottom:0;">Best regards,</p>
          <p style="margin-top:2px;">
            <strong>Paul Jhon Magbanua</strong><br>
            Front-End Developer • Digital Marketing • Creative Content Specialist
          </p>

        </div>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: `New Lead Submission`,
      html: `
        <h3>New Email Submitted:</h3>
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
