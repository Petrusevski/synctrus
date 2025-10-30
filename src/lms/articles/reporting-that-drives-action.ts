// src/lms/articles/reporting-that-drives-action.ts
// HTML export — consistent with the Operations, Automation & Analytics module style

export default `
<section>
  <h1>Reporting That Drives Action</h1>
  <p>Data is only as valuable as the decisions it enables. Loyalty reporting should translate metrics into <strong>operational clarity</strong> — helping teams see what’s working, what’s breaking, and where to focus next. This lesson explains how to build dashboards, scorecards, and feedback loops that turn numbers into progress.</p>

  <hr />

  <h2>1. From Dashboards to Decisions</h2>
  <p>Most loyalty programs drown in dashboards — hundreds of charts but few insights. Effective reporting starts with <em>decision intent</em>:</p>
  <ul>
    <li>Who is this report for?</li>
    <li>What decisions should it support?</li>
    <li>What action follows from each data point?</li>
  </ul>

  <p>Every chart should earn its place. If no one acts on it, it’s noise.</p>

  <hr />

  <h2>2. Leading vs. Lagging Indicators</h2>
  <p>Understanding the difference between <strong>leading</strong> and <strong>lagging</strong> indicators helps balance immediate visibility with strategic foresight.</p>
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Definition</th>
        <th>Example Metric</th>
        <th>Use Case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Leading</strong></td>
        <td>Predicts future outcomes</td>
        <td>New member activations, time-to-first-benefit, engagement frequency</td>
        <td>Helps teams act early — e.g., trigger a win-back before churn</td>
      </tr>
      <tr>
        <td><strong>Lagging</strong></td>
        <td>Measures results after they happen</td>
        <td>Revenue lift, redemption rate, churn, NPS</td>
        <td>Validates long-term strategy and executive performance</td>
      </tr>
    </tbody>
  </table>

  <p>The best dashboards blend both — leading metrics for operators, lagging metrics for leadership.</p>

  <hr />

  <h2>3. Operator vs. Executive Views</h2>
  <p>Different stakeholders need different lenses on the same data:</p>
  <ul>
    <li><strong>Operator Dashboards:</strong> Daily operational health. Track SLAs, campaign performance, and incident trends. Focus on alerts and exceptions.</li>
    <li><strong>Manager Dashboards:</strong> Weekly optimization view. Highlight top/worst performing segments, redemption funnels, and re-engagement lift.</li>
    <li><strong>Executive Scorecards:</strong> Monthly summaries aligned to KPIs like LTV, retention, and cost-to-reward ratio.</li>
  </ul>

  <p>One dataset, three levels of storytelling.</p>

  <hr />

  <h2>4. Building Action-Oriented Reports</h2>
  <p>To make reporting actionable:</p>
  <ul>
    <li>Include <strong>targets and thresholds</strong> — numbers without context are meaningless.</li>
    <li>Highlight <strong>trend direction</strong> (improving vs. declining).</li>
    <li>Add <strong>annotations</strong> — call out known events like “Double Points Week” or “New CRM rollout.”</li>
    <li>Show <strong>responsible owner</strong> — accountability drives action.</li>
  </ul>

  <p>Action-oriented dashboards are designed for decisions, not decoration.</p>

  <hr />

  <h2>5. Data Cadence &amp; Governance</h2>
  <p>Set clear expectations for when and how data is updated and reviewed:</p>
  <ul>
    <li><strong>Cadence:</strong> Daily for ops metrics, weekly for campaign insights, monthly for exec summaries.</li>
    <li><strong>Governance:</strong> Define source of truth for each metric (e.g., CRM, POS, data warehouse).</li>
    <li><strong>Access:</strong> Give visibility to those who can act on it — not everyone needs every dashboard.</li>
  </ul>

  <p>Consistency beats complexity — predictable rhythms drive better accountability.</p>

  <hr />

  <h2>6. Real-Life Example</h2>
  <p><strong>Wolt+ Loyalty Ops</strong> separates dashboards by audience. Operators see daily order anomalies and campaign send volumes; executives get retention and contribution margin dashboards. Both pull from the same warehouse but with filtered perspectives.</p>

  <p><strong>Sephora CRM</strong> highlights leading signals — % of active members earning or redeeming weekly — to predict next month’s sales trajectory.</p>

  <hr />

  <h2>7. Takeaway</h2>
  <ul>
    <li>Metrics without decisions waste time — always design for action.</li>
    <li>Balance leading and lagging indicators for a complete performance picture.</li>
    <li>Tailor dashboards to user intent — operator ≠ executive.</li>
    <li>Govern data cadence and context to make insights trustworthy.</li>
  </ul>

  <p>Reporting that drives action turns your analytics into alignment — every dashboard becomes a roadmap.</p>
</section>
`;
