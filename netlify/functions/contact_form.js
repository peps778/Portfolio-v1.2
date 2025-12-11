import nodemailer from "nodemailer";

export async function handler(event) {
  console.log("📩 Function triggered by MAKE!");
  console.log("HTTP Method:", event.httpMethod);
  console.log("Raw body:", event.body);

  try {
    // Only accept POST
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method Not Allowed" }),
      };
    }

    // Parse incoming JSON from Make
    const data = JSON.parse(event.body || "{}");
    console.log("Parsed data from Make:", data);

    const { email, fullName } = data;

    if (!email || !fullName) {
      console.log("❌ Missing required fields.");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email and fullName are required." }),
      };
    }

    console.log("Extracted email:", email);
    console.log("Extracted fullName:", fullName);

    // Create email transporter
    console.log("🔧 Creating Nodemailer transporter...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log("🚀 Transporter ready. Sending follow-up email to:", email);

    // Send email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: "Hello " + fullName + "! 👋",
      html: `
        <div style="font-family: Poppins, sans-serif; color:#333; line-height:1.6; padding: 20px;">
            <h2 style="color:#222; font-weight:600;">Thanks for Reaching Out, ${fullName}!</h2>
            <p>This is your follow-up email sent automatically after 10 minutes.</p>

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

    console.log(`📨 Follow-up email sent to user: ${email}`);

    // Send notification to yourself
    await transporter.sendMail({
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: `New delayed follow-up sent to: ${email}`,
      html: `
        <h3>New Follow-up Triggered</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    console.log("📨 Notification email sent to you.");

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Emails sent successfully!",
        received: { email, fullName },
      }),
    };

  } catch (error) {
    console.error("❌ Error in follow-up function:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
