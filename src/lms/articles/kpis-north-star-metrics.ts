// src/lms/articles/kpis-north-star-metrics.ts
// Lesson content for the Loyalty Foundations course
// HTML export (not Markdown) — consistent with existing Academy article structure

export default `
<section>
  <h1>KPIs &amp; North-Star Metrics</h1>
  <p>The ultimate goal of a loyalty program is not simply to drive transactions — it’s to grow <strong>customer lifetime value (LTV)</strong> by creating habits, emotional connection, and advocacy. To achieve this, every team needs a clear understanding of what to measure and why.</p>

  <hr />

  <h2>1. What Is a North-Star Metric (NSM)?</h2>
  <p>A <strong>North-Star Metric</strong> (NSM) is a single, outcome-based measure that reflects the long-term value your program creates for both the business and its members. It acts as a compass — ensuring all teams align toward the same behavioral outcome.</p>

  <p>In loyalty programs, a common NSM is <strong>Redeeming Active Members (RAM)</strong> — members who both <em>earn</em> and <em>redeem</em> within a set period (e.g., 90 days). This reflects true engagement, not just activity.</p>

  <p>Other NSMs may include:</p>
  <ul>
    <li><strong>Frequency of repeat purchase</strong> — how often members return.</li>
    <li><strong>Net promoter score (NPS)</strong> among members vs non-members.</li>
    <li><strong>Share of wallet</strong> — how much of total spend your brand captures.</li>
  </ul>

  <p>Whatever metric you choose, ensure it connects to <em>customer value creation</em>, not vanity measures like app downloads or email open rates.</p>

  <hr />

  <h2>2. Core Loyalty KPIs</h2>
  <p>While the NSM gives your overall direction, supporting KPIs let you diagnose health, performance, and efficiency at every stage.</p>

  <table>
    <thead>
      <tr>
        <th>KPI</th>
        <th>Description</th>
        <th>Why It Matters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Active Members</strong></td>
        <td>Members who earned or redeemed in the last 90 days.</td>
        <td>Shows base engagement level — often used for cohort tracking.</td>
      </tr>
      <tr>
        <td><strong>Redeeming Active Members (RAM)</strong></td>
        <td>Members who both earned and redeemed in the period.</td>
        <td>Your best proxy for true loyalty engagement.</td>
      </tr>
      <tr>
        <td><strong>AOV (Average Order Value)</strong></td>
        <td>Total spend / number of transactions.</td>
        <td>Tracks the spend quality of your member base.</td>
      </tr>
      <tr>
        <td><strong>Frequency</strong></td>
        <td>Average number of purchases per active member per period.</td>
        <td>Shows habit formation and repeat behavior.</td>
      </tr>
      <tr>
        <td><strong>LTV / CAC Ratio</strong></td>
        <td>Lifetime value of a member vs cost of acquiring them.</td>
        <td>Determines program sustainability and profitability.</td>
      </tr>
      <tr>
        <td><strong>Time-to-First-Benefit</strong></td>
        <td>Days between registration and first redemption or tangible reward.</td>
        <td>Critical early metric — shorter times drive higher retention.</td>
      </tr>
      <tr>
        <td><strong>Tier Mix</strong></td>
        <td>Distribution of members across tiers.</td>
        <td>Healthy programs show a pyramid — few elites, wide base.</td>
      </tr>
      <tr>
        <td><strong>Breakage</strong></td>
        <td>Percentage of points issued but never redeemed.</td>
        <td>Impacts perceived value and liability.</td>
      </tr>
    </tbody>
  </table>

  <hr />

  <h2>3. Building a Measurement Framework</h2>
  <p>KPIs should cascade logically from the NSM down to tactical levers. Think of it as a tree:</p>

  <pre>
  NSM → Engagement Drivers → Operational Levers → Inputs
  </pre>

  <ul>
    <li><strong>NSM:</strong> Redeeming Active Members</li>
    <li><strong>Engagement Drivers:</strong> Redemption rate, activation rate, member frequency</li>
    <li><strong>Operational Levers:</strong> Offer mix, point accrual rate, UX friction, communication cadence</li>
    <li><strong>Inputs:</strong> Email opens, app sessions, POS enrollments</li>
  </ul>

  <p>By tracking from bottom to top, teams can detect early warning signals before they affect the NSM.</p>

  <hr />

  <h2>4. Example Dashboard View</h2>
  <p>Imagine your weekly dashboard shows:</p>
  <ul>
    <li>Active Members: 250,000 (+4%)</li>
    <li>Redeeming Active Members: 75,000 (+9%)</li>
    <li>AOV: €38 (+2%)</li>
    <li>Time-to-First-Benefit: 11 days (-3 days improvement)</li>
  </ul>
  <p>The trend lines tell a clear story: faster onboarding and stronger engagement loops are increasing the share of redeeming actives — exactly what your NSM is designed to capture.</p>

  <hr />

  <h2>5. Common Pitfalls</h2>
  <ul>
    <li><strong>Tracking too many KPIs:</strong> Dilutes focus; 5–7 key metrics is ideal.</li>
    <li><strong>Reporting lagging indicators:</strong> Instead of retention % or revenue, track leading signals like “time-to-first-benefit.”</li>
    <li><strong>Ignoring qualitative signals:</strong> Survey sentiment and NPS reveal emotional loyalty — not visible in numbers.</li>
    <li><strong>Vanity dashboards:</strong> KPIs should guide actions, not just report performance.</li>
  </ul>

  <hr />

  <h2>6. Takeaway</h2>
  <p>The best loyalty programs translate data into learning loops:</p>
  <ul>
    <li>Track <strong>fewer, better metrics</strong> aligned to your North-Star.</li>
    <li>Prioritize <strong>behavioral outcomes</strong> over vanity stats.</li>
    <li>Revisit KPIs quarterly to ensure they still reflect member and business goals.</li>
  </ul>

  <p>Remember: metrics aren’t just for reporting — they’re your steering wheel. The right KPIs keep your loyalty strategy moving in the direction that matters most — <em>customer lifetime value</em>.</p>
</section>
`;
