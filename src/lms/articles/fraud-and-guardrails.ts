// src/lms/articles/fraud-and-guardrails.ts
// HTML export — consistent with all Program Design & Architecture lessons

export default `
<section>
  <h1>Fraud &amp; Guardrails</h1>
  <p>Every loyalty program faces the same tension — rewarding genuine engagement without leaving loopholes for abuse. Fraud controls and guardrails ensure program sustainability by detecting, deterring, and managing suspicious behaviors before they impact financials or trust.</p>

  <hr />

  <h2>1. The Nature of Loyalty Fraud</h2>
  <p>Fraud in loyalty programs has grown with digital adoption. Since points and rewards have real monetary value, they’re treated like currency by bad actors. Common vectors include:</p>
  <ul>
    <li><strong>Account takeover:</strong> Unauthorized access via credential stuffing or phishing.</li>
    <li><strong>Referral abuse:</strong> Fake or duplicate accounts to trigger referral bonuses.</li>
    <li><strong>Receipt or code manipulation:</strong> Tampering with proof-of-purchase or coupon inputs.</li>
    <li><strong>Velocity abuse:</strong> Excessive transactions in short intervals to game the system.</li>
    <li><strong>Employee fraud:</strong> Internal misuse of point issuance or manual adjustments.</li>
  </ul>

  <p>Fraud doesn’t just cost money — it erodes customer confidence, reduces participation, and triggers regulatory scrutiny.</p>

  <hr />

  <h2>2. Velocity Limits</h2>
  <p>Velocity limits are real-time caps that restrict how many events (scans, referrals, redemptions) a member can perform within a defined timeframe.</p>
  <ul>
    <li>Example: Maximum 5 receipt scans per day, or 3 redemptions per hour.</li>
    <li>Applied per device, per user ID, and per IP to catch automation or bulk activity.</li>
    <li>Configurable by event type to balance convenience vs. control.</li>
  </ul>

  <p>Velocity checks are the first line of defense against repetitive abuse — simple yet highly effective.</p>

  <hr />

  <h2>3. Device &amp; Identity Signals</h2>
  <p>Modern fraud prevention goes beyond user IDs. Behavioral and technical signals help verify authenticity without friction:</p>
  <ul>
    <li>Device fingerprinting — detect emulators, rooted devices, or multiple accounts on one device.</li>
    <li>Biometric or 2FA revalidation for high-value redemptions.</li>
    <li>Geo-IP consistency: login and redemption within realistic geographic zones.</li>
    <li>Browser integrity and user-agent validation for web interactions.</li>
  </ul>

  <p>Combining these signals creates a risk score per interaction — allowing dynamic responses rather than blanket blocks.</p>

  <hr />

  <h2>4. Geo Checks &amp; Location Logic</h2>
  <p>Geo intelligence adds context to transactions. Redemption attempts outside expected regions, or impossible travel distances within minutes, indicate potential fraud.</p>
  <ul>
    <li>Link geo-checks with event logs (e.g., store visit → redemption → referral).</li>
    <li>Whitelist travel corridors for cross-border programs.</li>
    <li>Flag “geographical anomalies” for manual review before locking accounts.</li>
  </ul>

  <p>Location context reduces false positives and helps uncover organized fraud rings operating across regions.</p>

  <hr />

  <h2>5. Anomaly Detection &amp; AI Alerts</h2>
  <p>Machine learning models can identify subtle, non-obvious fraud patterns at scale. Examples include:</p>
  <ul>
    <li>Sudden spikes in point issuance per merchant or partner.</li>
    <li>Clusters of identical behavior (same timestamp, device, or referral source).</li>
    <li>Unusual redemptions after long inactivity.</li>
  </ul>

  <p>AI systems should flag, not auto-block — anomalies need context and confirmation before enforcement.</p>

  <hr />

  <h2>6. Human-in-the-Loop Review</h2>
  <p>Automation is fast, but human oversight ensures fairness. Manual validation workflows prevent false suspensions of genuine users.</p>
  <ul>
    <li>Set up <strong>fraud queues</strong> with severity scoring (Low, Medium, Critical).</li>
    <li>Require dual authorization for high-value redemptions or partner settlements.</li>
    <li>Log case outcomes to improve model accuracy and audit trails.</li>
  </ul>

  <p>Fraud prevention should protect both the business and the member — transparency and empathy matter.</p>

  <hr />

  <h2>7. Example Control Framework</h2>
  <table>
    <thead>
      <tr>
        <th>Layer</th>
        <th>Control Type</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Front-end</td>
        <td>Velocity / Geo Guard</td>
        <td>Limit redemptions to 5/day; block geo anomalies</td>
      </tr>
      <tr>
        <td>Mid-layer</td>
        <td>Behavioral AI</td>
        <td>Detect device farms or abnormal activity clusters</td>
      </tr>
      <tr>
        <td>Back-office</td>
        <td>Human Review</td>
        <td>Escalate flagged cases with verification checklist</td>
      </tr>
    </tbody>
  </table>

  <hr />

  <h2>8. Real-Life Example</h2>
  <p><strong>Grab Rewards</strong> implemented layered controls — velocity checks at POS, geolocation verification for delivery partners, and anomaly scoring for unusual earn bursts. This reduced fraudulent redemptions by 72% in the first quarter.</p>

  <p><strong>AirAsia BIG Loyalty</strong> combines device ID tracking with manual audit queues for suspicious mileage transfers, balancing automation and member trust.</p>

  <hr />

  <h2>9. Takeaway</h2>
  <ul>
    <li>Fraud prevention is a journey — start simple, then automate.</li>
    <li>Balance speed and fairness with human-in-the-loop processes.</li>
    <li>Measure success not only by blocked fraud, but by <em>retained genuine activity</em>.</li>
  </ul>

  <p>Guardrails protect your margins — but more importantly, they protect the integrity of your customer promise.</p>
</section>
`;
