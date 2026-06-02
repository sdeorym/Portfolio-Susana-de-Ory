export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { username, email, message } = req.body;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: ["sdeorym@gmail.com"],
        subject: `Message from ${username}`,
        html: `
          <p><strong>Email:</strong> ${email}</p>
          <p>${message}</p>
        `,
      }),
    });

    const data = await response.json();

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: "Error sending email" });
  }
}