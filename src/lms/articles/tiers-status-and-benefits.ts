// src/lms/articles/tiers-status-and-benefits.ts
// HTML export — aligned with other Program Design & Architecture lessons

export default `
<section>
  <h1>Tiers, Status, and Benefits</h1>
  <p>Tiers are the backbone of many loyalty programs — they give structure, aspiration, and recognition. A well-designed tier system encourages members to increase engagement while balancing financial sustainability for the brand.</p>

  <hr />

  <h2>1. Purpose of Tiers</h2>
  <p>The tier framework introduces a sense of <strong>progress</strong> and <strong>achievement</strong>. Members climb through levels that unlock better benefits or experiences. This transforms participation from transactional to emotional.</p>

  <p>Common objectives include:</p>
  <ul>
    <li>Encourage higher spend and frequency.</li>
    <li>Differentiate top customers with special access or treatment.</li>
    <li>Create long-term retention through aspirational progression.</li>
  </ul>

  <hr />

  <h2>2. Qualification Models</h2>
  <p>Qualification defines how members advance from one tier to another. The model you choose should reflect your business type and engagement cycle.</p>

  <table>
    <thead>
      <tr>
        <th>Qualification Type</th>
        <th>Definition</th>
        <th>Best For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Spend-based</strong></td>
        <td>Tier upgrades triggered by cumulative annual spend (e.g., €500 = Silver, €1000 = Gold).</td>
        <td>Retail, beauty, e-commerce.</td>
      </tr>
      <tr>
        <td><strong>Frequency-based</strong></td>
        <td>Progress depends on number of transactions or visits.</td>
        <td>Hospitality, dining, fitness.</td>
      </tr>
      <tr>
        <td><strong>Mix model</strong></td>
        <td>Combination of spend + frequency (e.g., €1000 + 5 visits).</td>
        <td>Telecom, airlines, multi-category brands.</td>
      </tr>
      <tr>
        <td><strong>Engagement-based</strong></td>
        <td>Includes digital actions like referrals, reviews, or social engagement.</td>
        <td>Omnichannel or lifestyle brands.</td>
      </tr>
    </tbody>
  </table>

  <p>Use qualification windows of 12 months or rolling 365 days — short enough to maintain momentum, long enough to accumulate progress.</p>

  <hr />

  <h2>3. Benefit Design</h2>
  <p>Benefits motivate tier progression. They fall into two categories: <strong>hard benefits</strong> (financial) and <strong>soft benefits</strong> (emotional).</p>

  <h3>Hard Benefits</h3>
  <ul>
    <li>Extra earn rate (e.g., +25% points for Gold members).</li>
    <li>Exclusive discounts or free shipping.</li>
    <li>Birthday or anniversary bonuses.</li>
  </ul>

  <h3>Soft Benefits</h3>
  <ul>
    <li>Priority support or personal shopper service.</li>
    <li>Access to exclusive events or pre-sales.</li>
    <li>Recognition — tier badges, welcome kits, and community shoutouts.</li>
  </ul>

  <p>Soft benefits often create stronger emotional ties than discounts — they convey status and belonging.</p>

  <hr />

  <h2>4. Re-qualification Logic</h2>
  <p>Members should maintain their tier through continued engagement, but abrupt drops can create frustration. Smart programs implement soft-landing mechanisms.</p>

  <ul>
    <li><strong>Annual re-qualification:</strong> Members must re-earn thresholds each year.</li>
    <li><strong>Grace period:</strong> 1–3 months extension to recover status.</li>
    <li><strong>Soft landing:</strong> Drop only one level instead of full reset.</li>
    <li><strong>Status match:</strong> Recognize status from other programs to attract switchers.</li>
  </ul>

  <p>This preserves motivation while keeping loyalty journeys humane and transparent.</p>

  <hr />

  <h2>5. Tier Naming &amp; Psychology</h2>
  <p>Names should feel aspirational and culturally relevant. Avoid overused or confusing terminology.</p>

  <ul>
    <li>Classic: Bronze → Silver → Gold → Platinum</li>
    <li>Branded: Explorer → Voyager → Elite → Icon</li>
    <li>Experience-based: Insider → Pro → VIP → Legend</li>
  </ul>

  <p>Visual distinction (color, icons, card design) reinforces recognition and satisfaction. The journey must feel like progress, not punishment.</p>

  <hr />

  <h2>6. Real-Life Example</h2>
  <p><strong>Hilton Honors</strong> uses spend-based tiers tied to annual nights, offering increasing benefits like upgrades, late checkout, and free breakfast. Meanwhile, <strong>Sephora Beauty Insider</strong> adds emotional layers — events, early product access, and birthday gifts that boost connection beyond spend.</p>

  <hr />

  <h2>7. Takeaway</h2>
  <ul>
    <li>Choose qualification logic aligned to your category (spend, frequency, or hybrid).</li>
    <li>Blend hard and soft benefits — both drive retention, but soft ones drive advocacy.</li>
    <li>Include safety nets like grace periods and soft landings to protect relationships.</li>
    <li>Design tier names and visuals that symbolize progress and pride.</li>
  </ul>

  <p>Tiers transform loyalty from a transaction to a relationship. Recognition is the reward members never forget.</p>
</section>
`;
