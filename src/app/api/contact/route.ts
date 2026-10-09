const recipient = "eezedimbu@gmail.com";

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Please submit the contact form." }, { status: 415 });
  }

  let input: unknown;
  try {
    const body = await request.text();
    if (body.length > 10_000) {
      return Response.json({ error: "Message is too long." }, { status: 413 });
    }
    input = JSON.parse(body);
  } catch {
    return Response.json({ error: "Please check your message and try again." }, { status: 400 });
  }

  if (!input || typeof input !== "object") {
    return Response.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const fields = input as Record<string, unknown>;
  if (fields.website) return Response.json({ ok: true });

  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const subject = typeof fields.subject === "string" ? fields.subject.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";

  if (
    !name || name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
    !subject || subject.length > 120 ||
    !message || message.length > 5000
  ) {
    return Response.json({ error: "Please complete every field with a valid email and message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return Response.json({ error: "The form is unavailable right now. Please email me directly." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: AbortSignal.timeout(10_000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Portfolio enquiry: ${subject.replace(/[\r\n]/g, " ")}`,
        text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error("Contact email rejected by provider:", response.status);
      return Response.json({ error: "Your message could not be sent. Please email me directly." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Your message could not be sent. Please email me directly." }, { status: 502 });
  }
}
