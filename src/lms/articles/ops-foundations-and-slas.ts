// src/lms/articles/ops-foundations-and-slas.ts
// HTML export — consistent with other advanced-tier Academy lessons

export default `
<section>
  <h1>Ops Foundations &amp; SLAs</h1>
  <p>Running a loyalty program at scale requires operational maturity. Members expect points to appear instantly, redemptions to never fail, and campaigns to roll out flawlessly. Behind that seamless experience lies strong discipline in <strong>incident response, SLAs, error budgets, and release hygiene</strong>.</p>

  <hr />

  <h2>1. Incident Classes</h2>
  <p>Incidents are categorized by business impact and urgency. Defining clear classes ensures consistent escalation and resolution.</p>
  <table>
    <thead>
      <tr>
        <th>Severity</th>
        <th>Description</th>
        <th>Target Resolution</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SEV 1 – Critical</strong></td>
        <td>Core loyalty functionality unavailable.</td>
        <td>&lt; 2 hours</td>
        <td>Points not issuing at POS nationwide.</td>
      </tr>
      <tr>
        <td><strong>SEV 2 – Major</strong></td>
        <td>Program partially degraded.</td>
        <td>&lt; 8 hours</td>
        <td>Redemption flow failing for 10% of users.</td>
      </tr>
      <tr>
        <td><strong>SEV 3 – Minor</strong></td>
        <td>Issue with limited customer visibility.</td>
        <td>1–2 business days</td>
        <td>Delayed email confirmation or campaign trigger.</td>
      </tr>
      <tr>
        <td><strong>SEV 4 – Cosmetic</strong></td>
        <td>No business impact; UI or content-level bug.</td>
        <td>Next scheduled release</td>
        <td>Typo in tier description or email template.</td>
      </tr>
    </tbody>
  </table>

  <p>Defining incidents this way avoids chaos when the unexpected happens. Everyone knows who acts first and how fast.</p>

  <hr />

  <h2>2. SLAs for Issuance &amp; Redemption</h2>
  <p><strong>Service Level Agreements (SLAs)</strong> define the acceptable performance targets for your loyalty infrastructure.</p>
  <ul>
    <li><strong>Points issuance:</strong> 99.9% of transactions processed within 10 seconds.</li>
    <li><strong>Redemption processing:</strong> 99.5% success rate across channels.</li>
    <li><strong>Data sync to CRM:</strong> &lt; 15 minutes delay between POS and central DB.</li>
    <li><strong>Campaign execution:</strong> 95% of messages sent within 5 minutes of trigger.</li>
  </ul>
  <p>These metrics form the backbone of your operational KPIs. Track them daily, automate reporting, and review quarterly with vendors.</p>

  <hr />

  <h2>3. Error Budgets &amp; Reliability Targets</h2>
  <p>No system runs perfectly. Error budgets quantify acceptable downtime or transaction failure before triggering reviews or freezes.</p>
  <ul>
    <li>If uptime target = 99.9%, your monthly error budget is ~43 minutes.</li>
    <li>When exceeded, freeze new feature releases until stability recovers.</li>
    <li>Use incident post-mortems to identify patterns — recurring bugs, vendor latency, or deployment regressions.</li>
  </ul>
  <p>Balancing innovation with stability keeps trust intact while enabling iteration.</p>

  <hr />

  <h2>4. Runbooks &amp; Playbooks</h2>
  <p><strong>Runbooks</strong> document “how-to” steps for predictable operations (e.g., reprocess failed points), while <strong>playbooks</strong> define structured responses to incidents.</p>
  <ul>
    <li>Each SEV level should have a predefined playbook with owner, escalation tree, and recovery checklist.</li>
    <li>Runbooks should live with the system — ideally versioned in Git or your ops tool, not PDFs on desktops.</li>
    <li>Update after every incident to incorporate new learnings.</li>
  </ul>

  <hr />

  <h2>5. Release Hygiene</h2>
  <p>Strong ops foundations depend on disciplined software delivery. Release hygiene includes:</p>
  <ul>
    <li><strong>Change control:</strong> All deployments logged with rollback plan.</li>
    <li><strong>Staging parity:</strong> UAT mirrors production environment closely.</li>
    <li><strong>Freeze windows:</strong> No major releases during key campaigns.</li>
    <li><strong>Monitoring hooks:</strong> Auto-alerts tied to transaction volumes post-release.</li>
  </ul>

  <p>Ops excellence is proactive — find anomalies before members do.</p>

  <hr />

  <h2>6. Real-Life Example</h2>
  <p><strong>Air Miles Middle East</strong> runs with a 99.98% issuance SLA and automated fallbacks. When POS fails, an offline queue replays transactions once the connection restores, ensuring members never lose credit.</p>
  <p><strong>Starbucks TechOps</strong> enforces change freezes 48 hours before national promotions — preventing costly mid-campaign disruptions.</p>

  <hr />

  <h2>7. Takeaway</h2>
  <ul>
    <li>Define severity classes to clarify ownership and response speed.</li>
    <li>Monitor SLAs daily and revisit targets quarterly.</li>
    <li>Balance stability and speed through error budgets and runbooks.</li>
    <li>Document, automate, and continuously improve — ops is the foundation of customer trust.</li>
  </ul>

  <p>Operational excellence isn’t invisible — it’s the quiet rhythm that keeps loyalty alive 24/7.</p>
</section>
`;
