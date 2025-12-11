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
        <div style="font-family: Poppins, sans-serif; color:#333; line-height:1.6; padding: 30px; background-color:#f4f4fe; max-width:600px; margin:auto; border-radius:8px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">

  <style>
    /* Only works in webmail that supports <style> */
    .btn:hover {
      background-color: #28a745 !important; /* Slightly darker green */
    }
  </style>
  
  <h2 style="color:#222; font-weight:700; font-size:24px; margin-bottom:15px; text-align: center">
    Thank You for Reaching Out, ${fullName}!
  </h2>
  
  <p style="font-size:16px; margin-bottom:20px; text-align: justify;">
    I truly appreciate you taking the time to get in touch. To ensure we stay aligned with your interests and projects, I invite you to schedule a 30-minute call at your convenience. This will help us discuss your goals and next steps effectively.
  </p>

  <div style="margin:30px 0; text-align:center;">
    <a 
      href="https://cal.com/paul-jhon-magbanua/30min-discussion"
      class="btn"
      style="
        background:#36DE55;
        color:#fff;
        padding:14px 26px;
        border-radius:6px;
        text-decoration:none;
        font-size:16px;
        font-weight:600;
        display:inline-block;
        transition: background 0.3s ease;
      "
    >
      Schedule Your 30-Min Call
    </a>
  </div>

  <div style="text-align:center; margin-bottom:25px;">
    <img 
      src="https://magbanua-pauljhon.website/images/OpenGraph_PaulMagbanua.png"
      alt="Paul Jhon Magbanua"
      style="width:60%; max-width:300px; height:auto; border-radius:8px;"
    />
  </div>

  <p style="font-size:16px; margin-top:20px;">
    Best regards,<br>
    <strong>Paul Jhon Magbanua</strong> <br>
    Front-End Developer | Digital Marketing |
Creative Content Specialist
  </p>

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
