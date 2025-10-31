// src/lms/articles/crm-pos-integration-layer.ts
export const crmPosIntegrationLayer = `

  <h2>Why an Integration Layer Matters</h2>
  <p>
  Loyalty lives at the intersection of <strong>identity (CRM)</strong> and <strong>transactions (POS)</strong>.
  The integration layer is the middleware that translates receipts and events from stores and e-commerce
  into <em>loyalty-ready</em> signals: earn, burn, tier progression, and wallet updates. It ensures
  consistency across online/offline channels, handles latency, and keeps data trustworthy.
  </p>

  <h3>1) Core Architecture</h3>
  <ul>
    <li><strong>Event Ingestion:</strong> POS receipts, returns, voids, online orders, cancellations.</li>
    <li><strong>Identity Resolution:</strong> Link receipt to a CRM profile (loyalty ID, phone, email, wallet pass).</li>
    <li><strong>Rules Engine:</strong> Earn/burn, tier logic, exclusions, and promos.</li>
    <li><strong>Wallet &amp; Ledger:</strong> Atomic balance updates, reversals, and audit trail.</li>
    <li><strong>Sync Services:</strong> Webhooks/queues to update CRM, marketing, and analytics.</li>
  </ul>

  <h3>2) Keys &amp; Identifiers</h3>
  <p>
  Use durable identifiers to keep systems in sync:
  </p>
  <ul>
    <li><strong>Customer key:</strong> crm_customer_id (primary), plus email/phone as secondary.</li>
    <li><strong>Transaction key:</strong> pos_receipt_id + store_id + business_date (composite).</li>
    <li><strong>Item key:</strong> sku / product_id for exclusions and multipliers.</li>
  </ul>

  <h3>3) Mapping POS → Loyalty Events</h3>
  <ul>
    <li><strong>SALE</strong> → <em>LOYALTY_EARN</em> (points = subtotal × rate; apply item-level rules).</li>
    <li><strong>RETURN/VOID</strong> → <em>REVERSAL</em> (negative points; reverse vouchers if needed).</li>
    <li><strong>COUPON/REDEEM</strong> → <em>LOYALTY_BURN</em> (debit wallet; store redemption reference).</li>
  </ul>
  <p>
  Normalize tax, rounding, and currency before calculation to keep the ledger accurate.
  </p>

  <h3>4) Real-Time vs Batch</h3>
  <ul>
    <li><strong>Real-time:</strong> Webhook/queue from POS → award instantly → show balance on receipt/app.</li>
    <li><strong>Batch:</strong> Nightly files for legacy POS; award next day.</li>
    <li><strong>Hybrid:</strong> Real-time for earn/burn; batch for analytics and backfill.</li>
  </ul>

  <h3>5) Offline &amp; Store-Edge Scenarios</h3>
  <p>
  When networks drop, cache transactions locally and replay to the queue when online. Mark them with
  <code>ingest_ts</code> and <code>pos_ts</code> to preserve order and support idempotency.
  </p>

  <h3>6) Reconciliation &amp; Idempotency</h3>
  <ul>
    <li>Use <strong>idempotency keys</strong> (receipt hash) to avoid double posting.</li>
    <li>Run <strong>daily reconciliation</strong>: compare POS totals vs loyalty ledger deltas.</li>
    <li>Emit <em>delta reports</em> for mismatches; auto-fix safe cases, escalate the rest.</li>
  </ul>

  <h3>7) Fraud &amp; Policy Controls</h3>
  <ul>
    <li><strong>Velocity checks:</strong> max redemptions per user/day; per device; per store.</li>
    <li><strong>SKU exclusions:</strong> gift cards, tobacco, regulated items.</li>
    <li><strong>Tier abuse:</strong> limit earn on heavily discounted baskets; cap multipliers.</li>
  </ul>

  <h3>8) Privacy, Consent &amp; Compliance</h3>
  <ul>
    <li>Store <strong>consent state</strong> in CRM and propagate to the integration layer.</li>
    <li>Mask PII at the POS; transmit <em>tokenized</em> identifiers where possible.</li>
    <li>Log legal bases (consent/contract) and retention windows for exports.</li>
  </ul>

  <h3>9) Example Flow: In-Store Earn</h3>
  <ol>
    <li>Cashier scans wallet pass → system resolves crm_customer_id.</li>
    <li>Receipt posts to queue with line items, discounts, taxes.</li>
    <li>Rules engine calculates points and applies exclusions.</li>
    <li>Ledger writes atomic earn; webhook updates CRM + sends receipt CTA.</li>
    <li>Analytics sink receives event for dashboards and LTV models.</li>
  </ol>

  <h3>10) Common Pitfalls</h3>
  <ul>
    <li>Mismatched rounding/currency across POS and loyalty.</li>
    <li>Missing reversals for returns, causing inflated balances.</li>
    <li>Relying on email as primary key (fragile/duplicated).</li>
  </ul>

  <h3>11) Implementation Checklist</h3>
  <ul>
    <li>✅ Define keys (customer, receipt, item) and idempotency policy.</li>
    <li>✅ Agree on event contract (SALE/RETURN/REDEEM schemas).</li>
    <li>✅ Choose real-time, batch, or hybrid and document SLAs.</li>
    <li>✅ Configure fraud controls and store-edge buffering.</li>
    <li>✅ Set up reconciliation reports and alerting.</li>
  </ul>

  <h3>Conclusion</h3>
  <p>
  A robust CRM &amp; POS integration layer turns fragmented transactions into a reliable loyalty ledger.
  With clear keys, event contracts, and safeguards, you unlock real-time rewards and accurate,
  auditable value for every customer.
  </p>

`;
