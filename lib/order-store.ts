// Simple in-memory order/payment store for the prototype.
// NOTE: resets on server restart and is not shared across serverless
// instances - fine for a demo, replace with a DB for production.

export type PaymentRecord = {
  checkoutRequestId: string;
  resultCode?: number;
  resultDesc?: string;
  mpesaReceipt?: string;
  amount?: number;
  phone?: string;
  updatedAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __firelitePayments: Map<string, PaymentRecord> | undefined;
}

const store: Map<string, PaymentRecord> =
  globalThis.__firelitePayments ?? new Map();

if (!globalThis.__firelitePayments) {
  globalThis.__firelitePayments = store;
}

export function savePayment(record: PaymentRecord) {
  store.set(record.checkoutRequestId, record);
}

export function getPayment(id: string): PaymentRecord | undefined {
  return store.get(id);
}
