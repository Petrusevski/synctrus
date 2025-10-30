// src/lms/articles/segmentation-and-triggers.ts
// HTML export — consistent with other Operations, Automation & Analytics lessons

export default `
<section>
  <h1>Segmentation &amp; Triggers</h1>
  <p>Segmentation is the brain of a loyalty program — it decides who receives what, when, and why. Triggers are the reflexes — real-time reactions to customer behavior. Together, they power personalized engagement and measurable growth.</p>

  <hr />

  <h2>1. Lifecycle Segments</h2>
  <p>Loyalty programs mirror customer lifecycles — from acquisition to advocacy. Segmenting by lifecycle stage helps design relevant communications and offers.</p>

  <table>
    <thead>
      <tr>
        <th>Stage</th>
        <th>Typical Behavior</th>
        <th>Key Objective</th>
        <th>Example Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>New</strong></td>
        <td>Joined within 30 days</td>
        <td>Activate and educate</td>
        <td>Welcome bonus, intro tutorial, or “first purchase” offer</td>
      </tr>
      <tr>
        <td><strong>Active</strong></td>
        <td>Regular purchases and redemptions</td>
        <td>Reinforce habit</td>
        <td>Tier progress reminders, early access</td>
      </tr>
      <tr>
        <td><strong>At-Risk</strong></td>
        <td>Haven’t purchased in 60–90 days</td>
        <td>Re-engage before churn</td>
        <td>Win-back campaign or “We miss you” reward</td>
      </tr>
      <tr>
        <td><strong>Dormant</strong></td>
        <td>No activity for 120+ days</td>
        <td>Reactivation or exit</td>
        <td>Personalized comeback incentive or feedback request</td>
      </tr>
    </tbody>
  </table>

  <p>Lifecycle segmentation ensures automation works with empathy — timing is everything.</p>

  <hr />

  <h2>2. RFM+ Segmentation</h2>
  <p><strong>RFM</strong> stands for Recency, Frequency, and Monetary value — the core behavioral scoring model.  
  <strong>RFM+</strong> extends it with additional loyalty-specific metrics like engagement and redemption ratio.</p>

  <ul>
    <li><strong>Recency:</strong> Days since last purchase or engagement.</li>
    <li><strong>Frequency:</strong> Number of purchases in a defined period.</li>
    <li><strong>Monetary:</strong> Total or average spend per member.</li>
    <li><strong>Engagement:</strong> Actions like app logins, survey responses, or game plays.</li>
    <li><strong>Redemption Ratio:</strong> % of earned points redeemed — signals emotional connection.</li>
  </ul>

  <p>Combine these signals to create score-based segments (e.g., R=5, F=4, M=5). High scorers become VIPs; low scorers are targets for reactivation flows.</p>

  <hr />

  <h2>3. VIP &amp; At-Risk Detection</h2>
  <p>Automated detection helps tailor experiences:</p>
  <ul>
    <li><strong>VIP Members:</strong> Top 5% by RFM+, spend, or engagement. Get early access, exclusive events, or priority support.</li>
    <li><strong>At-Risk Members:</strong> Declining frequency or recency. Trigger reactivation emails, reminders, or limited-time boosters.</li>
    <li><strong>Churned Members:</strong> 120+ days inactive — focus on survey and feedback loops.</li>
  </ul>

  <p>Proactive segmentation keeps communication relevant and reduces wasted messaging volume.</p>

  <hr />

  <h2>4. Event Triggers</h2>
  <p>Triggers translate data into action. Every event — purchase, redemption, login, referral — can activate automated workflows.</p>
  <ul>
    <li><strong>Behavioral triggers:</strong> e.g., “After 3 redemptions, show VIP upgrade banner.”</li>
    <li><strong>Lifecycle triggers:</strong> e.g., “30 days after sign-up, send engagement check-in.”</li>
    <li><strong>Milestone triggers:</strong> e.g., “Member reaches 1-year anniversary → issue thank-you voucher.”</li>
  </ul>

  <p>Trigger automation should run through a queue or orchestration system (e.g., Salesforce Journey Builder, Make.com, n8n) with clear rules and audit logs.</p>

  <hr />

  <h2>5. Cooldown Logic</h2>
  <p>Cooldown logic prevents over-communication and message fatigue.</p>
  <ul>
    <li>Set a <strong>minimum delay</strong> between campaigns — e.g., 24 hours between promotional pushes.</li>
    <li>Use <strong>global frequency caps</strong> — e.g., max 3 messages per member per week.</li>
    <li>Implement <strong>channel hierarchy</strong> — e.g., push → email → SMS fallback only if unopened.</li>
  </ul>

  <p>Balance automation power with respect for attention — relevance beats volume.</p>

  <hr />

  <h2>6. Real-Life Example</h2>
  <p><strong>Sephora Beauty Insider</strong> uses RFM+ scoring to distinguish “At-Risk” members (low recency and redemption) and runs automated “Come Back for a Surprise” flows.  
  <strong>Starbucks Rewards</strong> leverages event triggers tied to morning routines — sending push notifications between 7–9 AM for high-likelihood redemption behavior.</p>

  <hr />

  <h2>7. Takeaway</h2>
  <ul>
    <li>Segmentation defines <em>who</em> to engage; triggers define <em>when</em> to engage.</li>
    <li>RFM+ models are the backbone of loyalty analytics.</li>
    <li>Automation works best with empathy — cooldowns keep trust high.</li>
  </ul>

  <p>Great segmentation doesn’t just target — it listens. The best triggers feel timely, not intrusive.</p>
</section>
`;
