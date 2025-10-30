// src/lms/articles/partners-and-coalitions.ts
// HTML export — consistent with Program Design & Architecture articles

export default `
<section>
  <h1>Partners &amp; Coalitions</h1>
  <p>Partnerships extend the reach, utility, and perceived value of a loyalty program. By letting members earn or redeem across multiple brands, coalitions create network effects that strengthen engagement for everyone involved — when designed carefully.</p>

  <hr />

  <h2>1. Why Partnerships Matter</h2>
  <p>Single-brand programs can suffer from narrow engagement opportunities. Strategic partners help diversify earning and redemption moments, keeping members active even when they’re not directly purchasing from the core brand.</p>
  <ul>
    <li><strong>More earn moments:</strong> Members collect faster and stay motivated.</li>
    <li><strong>Broader relevance:</strong> Partners fill lifestyle gaps — travel, dining, fuel, retail.</li>
    <li><strong>Cross-pollination:</strong> Each partner gains access to new audiences.</li>
  </ul>

  <hr />

  <h2>2. Partnership Types</h2>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Co-brand</strong></td>
        <td>Two brands share one program or card, usually with joint branding and shared liability.</td>
        <td>Airline × Credit Card partnerships (e.g., Delta & Amex).</td>
      </tr>
      <tr>
        <td><strong>Earn Partner</strong></td>
        <td>Members earn points at partner locations; redemption stays with the core brand.</td>
        <td>Supermarket issuing points on partner fuel stations.</td>
      </tr>
      <tr>
        <td><strong>Burn Partner</strong></td>
        <td>Members redeem points for partner rewards or vouchers.</td>
        <td>Retail points redeemable for movie tickets or delivery credits.</td>
      </tr>
      <tr>
        <td><strong>Full Coalition</strong></td>
        <td>Shared earn &amp; burn currency across multiple independent brands.</td>
        <td>Programs like Nectar (UK) or Payback (Germany).</td>
      </tr>
    </tbody>
  </table>

  <hr />

  <h2>3. Shared Points &amp; Settlement</h2>
  <p>Coalition programs require financial settlement between partners to balance issued and redeemed points.</p>
  <ul>
    <li><strong>Earn side:</strong> Partner pays the program operator for points issued to members.</li>
    <li><strong>Burn side:</strong> Operator reimburses the partner when points are redeemed for their goods or services.</li>
    <li><strong>Clearing frequency:</strong> Weekly or monthly reconciliations maintain liquidity and trust.</li>
  </ul>

  <p>Accurate settlement prevents hidden liabilities and preserves confidence among coalition members.</p>

  <hr />

  <h2>4. Data Sharing & Privacy</h2>
  <p>Data is the most sensitive aspect of coalition management. Shared loyalty means shared insight — and shared responsibility.</p>
  <ul>
    <li>Define clear <strong>data-processing agreements (DPA)</strong> before launch.</li>
    <li>Use unique member IDs, not direct PII, for cross-partner tracking.</li>
    <li>Ensure all data exchanges comply with GDPR / CCPA / local privacy laws.</li>
    <li>Limit partner access strictly to transactional data needed for value exchange.</li>
  </ul>

  <hr />

  <h2>5. Partner Quality Assurance (QA)</h2>
  <p>Every partner is a brand extension of your loyalty ecosystem. Poor experiences can dilute the entire program.</p>
  <ul>
    <li>Vet partners for brand alignment and service standards.</li>
    <li>Define SLA-based performance metrics — reward delivery, customer response time, etc.</li>
    <li>Run quarterly reviews to monitor engagement volume and complaint ratios.</li>
    <li>Have exit clauses for persistent underperformance or non-compliance.</li>
  </ul>

  <p>Consistency builds trust. The coalition must feel unified even if operationally diverse.</p>

  <hr />

  <h2>6. Real-Life Examples</h2>
  <ul>
    <li><strong>Payback Germany:</strong> A network of 600+ brands sharing one point currency. Members engage multiple times per week across grocery, fuel, and retail.</li>
    <li><strong>American Express Membership Rewards:</strong> Operates a hybrid coalition — earn with Amex, redeem with dozens of travel and retail partners.</li>
    <li><strong>Grab Rewards (Southeast Asia):</strong> Blends ride-hailing, food, and fintech services into one ecosystem, where points move fluidly across verticals.</li>
  </ul>

  <hr />

  <h2>7. Takeaway</h2>
  <ul>
    <li>Start with 1–2 strategic partners before scaling to a full coalition.</li>
    <li>Prioritize alignment over quantity — every partner should enhance your member’s journey.</li>
    <li>Use clear settlement and data-governance frameworks to maintain trust.</li>
    <li>Audit and refresh partnerships annually to ensure mutual value.</li>
  </ul>

  <p>When done right, coalitions turn isolated loyalty programs into interconnected ecosystems of daily relevance.</p>
</section>
`;
