import nodemailer from "nodemailer";

export async function handler(event, context) {
  console.log("📩 Function triggered!");
  console.log("HTTP Method:", event.httpMethod);
  console.log("Raw event.body:", event.body);

  try {
    // Parse incoming request
    const data = JSON.parse(event.body || "{}");
    console.log("Parsed Data:", data);

    const { email } = data;
    console.log("Extracted email:", email);

    if (!email) {
      console.log("❌ No email found in data.");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    // Create transporter
    console.log("🔧 Creating Nodemailer transporter...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log("🚀 Transporter created. Attempting to send email to:", email);

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Hi There!",
      html: `
        <div style="font-family: Poppins, sans-serif; color:#333; line-height:1.6; padding: 20px;">
            <h2 style="color:#222; font-weight:600;">Thanks for Reaching Out!</h2>
            <p>Hi there, thank you for submitting your email.</p>
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
                "
              >
                Schedule Your 30-Min Call
              </a>
            </div>

            <div style="text-align:center; margin-bottom: 25px;">
              <img 
                src="https://magbanua-pauljhon.website/images/OpenGraph_PaulMagbanua.png"
                alt="Paul Jhon Magbanua" 
                style="width: 60vw; height:auto;"
              />
            </div>
            <p><strong>Paul Jhon Magbanua</strong></p>
        </div>
      `,
    });

    console.log("📨 Auto-reply sent to:", email);

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

    console.log("📨 Notification email sent to yourself.");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Emails sent successfully!" }),
    };

  } catch (error) {
    console.error("❌ Error sending email:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
