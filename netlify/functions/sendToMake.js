exports.handler = async (event) => {
  console.log("=== Incoming Request to sendToMake ===");

  if (event.httpMethod !== "POST") {
    console.log("Rejected: Non-POST request");
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    console.log("Failed to parse JSON body:", event.body);
    data = { raw: event.body };
  }

  // Load ENV variables
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;
  const apiKey = process.env.MAKE_API_KEY; 

  console.log("Loaded ENV: ", {
    MAKE_WEBHOOK_URL: webhookUrl ? "OK" : "MISSING",
    MAKE_API_KEY: apiKey ? "OK" : "MISSING",
  });

  if (!webhookUrl || !apiKey) {
    console.log("ERROR: Missing environment variables");
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Missing MAKE_WEBHOOK_URL or MAKE_API_KEY",
      }),
    };
  }

  try {
    console.log("Sending request to:", webhookUrl);
    console.log("Payload:", data);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(data),
    });

    const responseText = await response.text();

    console.log("Make Response Status:", response.status);
    console.log("Make Response Body:", responseText);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: responseText || "Make webhook error",
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };

  } catch (err) {
    console.log("ERROR during fetch:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Server error" }),
    };
  }
};
