// M-Pesa Daraja sandbox helpers (server-only).

const BASE =
  process.env.MPESA_ENV === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

export function getTimestamp(date = new Date()): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    date.getFullYear().toString() +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds())
  );
}

// Normalise a Kenyan phone number to the 2547XXXXXXXX / 2541XXXXXXXX format.
export function normalisePhone(input: string): string {
  let p = input.replace(/\D/g, "");
  if (p.startsWith("0")) p = "254" + p.slice(1);
  else if (p.startsWith("7") || p.startsWith("1")) p = "254" + p;
  else if (p.startsWith("254")) {
    /* already correct */
  }
  return p;
}

export async function getAccessToken(): Promise<string> {
  const key = process.env.MPESA_CONSUMER_KEY ?? "";
  const secret = process.env.MPESA_CONSUMER_SECRET ?? "";
  const auth = Buffer.from(`${key}:${secret}`).toString("base64");

  const res = await fetch(
    `${BASE}/oauth/v1/generate?grant_type=client_credentials`,
    {
      headers: { Authorization: `Basic ${auth}` },
      cache: "no-store",
    }
  );

  // Daraja returns an empty body on auth failure, which breaks res.json().
  const text = await res.text();
  let data: { access_token?: string } = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    /* non-JSON body */
  }

  if (!res.ok || !data.access_token) {
    throw new Error(
      `M-Pesa OAuth failed (HTTP ${res.status}). The consumer key/secret were ` +
        `rejected by Daraja${
          text ? `: ${text}` : " (empty response)."
        } Generate fresh sandbox credentials at developer.safaricom.co.ke and ` +
        `update .env.local.`
    );
  }
  return data.access_token as string;
}

export function getPassword(timestamp: string): string {
  const shortcode = process.env.MPESA_SHORTCODE ?? "";
  const passkey = process.env.MPESA_PASSKEY ?? "";
  return Buffer.from(shortcode + passkey + timestamp).toString("base64");
}

export { BASE as MPESA_BASE };
