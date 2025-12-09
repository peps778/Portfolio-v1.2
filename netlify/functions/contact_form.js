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

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Hi There!",
      html: `
    <div style="font-family: Poppins, sans-serif; color:#333; line-height:1.6; padding: 20px;">
        
        

        <h2 style="color:#222; font-weight:600;">Thanks for Reaching Out!</h2>

        <p>
          Hi there, and thank you for submitting your email. I appreciate your interest
          in connecting with me.
        </p>

        <p>
          To move forward, please schedule a quick call at your convenience. This helps ensure 
          we align on your goals and give you the support you need.
        </p>

        <div style="margin: 25px 0; text-align:center;">
          <a 
            href="https://cal.com/paul-jhon-magbanua/30min-discussion"
            style="
              background:#36DE55;
              color:#fff;
              padding:12px 22px;
              border-radius:6px;
              text-decoration:none;
              font-size:16px;
              border: 1px solid white;
              display:inline-block;
            "
          >
            Schedule Your 30-Min Call
          </a>
        </div>

        <p>
          If you have any questions before our call, feel free to reply directly to this email.
        </p>
        <br>
      <div style="text-align:center; margin-bottom: 25px;">
          <img 
            src="https://magbanua-pauljhon.website/images/OpenGraph_PaulMagbanua.png"
            alt="Paul Jhon Magbanua" 
            style="width: 60vw; height:auto; margin: 0 20px"
          />
        </div>
        <br>

        <p style="font-weight:600; margin:0;">Best regards,</p>
        <p style="margin:0;">
          <strong>Paul Jhon Magbanua</strong><br>
          Front-End Developer | Digital Marketing | Creative Content Specialist
        </p>


    
  `,
    });

    // Notification to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: `New Contact Form Submission from ${email}`,
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
