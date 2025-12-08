const http = require("http");

const PORT = process.env.PORT || 3001;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "eng.khaled4522@gmail.com";
const FROM_DISPLAY = "Khaled Portfolio <onboarding@resend.dev>";

const sendJSON = (res, status, data) => {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  });
  res.end(JSON.stringify(data));
};

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    return sendJSON(res, 200, { ok: true });
  }

  if (req.method === "POST" && req.url === "/api/contact") {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", async () => {
        try {
          const { name, email, subject, message } = JSON.parse(body || "{}");
          if (!name || !email || !subject || !message) {
            return sendJSON(res, 400, { error: "Invalid payload" });
          }
          if (!RESEND_API_KEY) {
            return sendJSON(res, 500, { error: "Missing RESEND_API_KEY" });
          }

          const html = `
            <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
              <h2>New message from ${name}</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div>${String(message).replace(/\n/g, "<br/>")}</div>
            </div>
          `;

          const resp = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: FROM_DISPLAY,
              to: CONTACT_TO_EMAIL,
              subject: `[Portfolio] ${subject}`,
              html,
              reply_to: email,
            }),
          });

          if (!resp.ok) {
            const text = await resp.text();
            return sendJSON(res, 500, {
              error: "Failed to send",
              details: text,
            });
          }

          return sendJSON(res, 200, { ok: true });
        } catch (e) {
          return sendJSON(res, 500, { error: "Server error" });
        }
      });
    } catch {
      return sendJSON(res, 500, { error: "Server error" });
    }
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`Contact server listening on http://localhost:${PORT}`);
});
