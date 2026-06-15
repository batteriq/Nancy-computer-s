# 🔥 Firelite Computers

Nairobi's #1 Gadget & Electronics Destination — a production-style prototype
e-commerce site for **Firelite Computers**, built with Next.js 14, Tailwind CSS,
Framer Motion and a live **M-Pesa Daraja (sandbox)** STK Push integration.

## ✨ Features

- **Homepage** — animated hero with typewriter effect, deals marquee, featured
  products, "Why Choose Us", testimonials and a Google Maps store locator.
- **Shop** (`/shop`) — filterable product grid (All / Laptops / Monitors /
  Accessories / Desktops) with a slide-in cart.
- **Product detail** (`/shop/[slug]`) — full specs, related products, add-to-cart
  and instant M-Pesa STK Push payment.
- **Checkout** (`/checkout`) — order summary, validated customer form and M-Pesa
  payment with live status polling and order confirmation.
- **About** (`/about`) and **Contact** (`/contact`) — story, team, values,
  contact form, WhatsApp button and embedded map.
- **M-Pesa API routes** — STK Push, callback handler and status query.
- Fully responsive, dark "electric blue / fire orange" theme.

## 🧱 Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Payments | M-Pesa Daraja Sandbox (STK Push) |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local   # then fill in your Daraja credentials

# 3. Run the dev server
npm run dev
```

Open <http://localhost:3000>.

## 🔐 Environment Variables

Create `.env.local` (already gitignored — never commit it):

```
MPESA_ENV=sandbox
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORTCODE=174379
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=https://your-public-url/api/payments/mpesa-callback
```

## 💸 M-Pesa Notes

- The flow is: `POST /api/payments/mpesa-stk` → Daraja STK Push →
  `GET /api/payments/mpesa-status` polling → `POST /api/payments/mpesa-callback`
  receives the async result.
- **Callbacks need a public URL.** Locally, run a tunnel (e.g. `ngrok http 3000`)
  and set `MPESA_CALLBACK_URL` to that URL + `/api/payments/mpesa-callback`.
- In **sandbox**, STK prompts are only delivered to Safaricom test MSISDNs; a real
  phone won't get a popup. The status endpoint falls back to the STK Query API so
  the UI still resolves. Any Daraja error is surfaced raw in the payment widget
  for easy debugging.
- The order/payment store is in-memory (`lib/order-store.ts`) — swap for a real
  database in production.

## 📦 API Routes

| Method | Route | Purpose |
|---|---|---|
| `POST` | `/api/payments/mpesa-stk` | Initiate STK Push, returns `CheckoutRequestID` |
| `POST` | `/api/payments/mpesa-callback` | Receive Daraja result, returns `{ ResultCode: 0 }` |
| `GET`  | `/api/payments/mpesa-status?checkoutRequestId=...` | Poll payment status |

## 🌍 Deploy (Vercel)

```bash
npm i -g vercel        # or use npx
vercel --prod
```

Add the same environment variables in the Vercel project settings, and point
`MPESA_CALLBACK_URL` at your deployed domain.

---

© 2025 Firelite Computers · Moi Avenue, Central Building, 1st Floor, Shop No. 10,
Nairobi · 0740 949 022
