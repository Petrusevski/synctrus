// src/lms/articles/program-types.ts
// Exports clean HTML (not Markdown) to match your other article files.

export default `
<section>
  <h1>Program Types: Cashback, Tiers &amp; Points</h1>
  <p>Every loyalty model balances <strong>simplicity</strong>, <strong>perceived value</strong>, and <strong>operational fit</strong>. Choosing the right one depends on your category margins, purchase frequency, and brand positioning.</p>

  <hr />

  <h2>1. Cashback Programs</h2>

  <h3>Definition</h3>
  <p>Customers earn a fixed percentage of their spend as store credit or cash equivalent for future use.</p>

  <h3>Example &amp; Narrative</h3>
  <p><em>PowerCo</em> runs a “2% back on every bill” scheme. Homeowner Ana pays €200/month, gets €4 credited back each month, which rolls into her next year’s bill. Over time she notices the credit ticking up and treats it like a mini-savings cushion.</p>

  <h3>Why it’s Successful</h3>
  <ul>
    <li><strong>Simplicity:</strong> Clear value proposition (“get money back”) lowers confusion.</li>
    <li><strong>Immediate perceived value:</strong> Credit accumulates quickly and is visible.</li>
    <li><strong>Low barrier:</strong> Percent-back is easier to grasp than point conversions.</li>
  </ul>

  <h3>Design Tips</h3>
  <ul>
    <li>Set a <em>base cashback rate</em> (e.g., 2–5%) and vary through special campaigns.</li>
    <li>Use multiplier days (e.g., “Double Cashback Wednesdays”).</li>
    <li>Offer wallet-style accumulation until a threshold redemption.</li>
    <li>Watch margin risk in low-margin categories.</li>
  </ul>

  <hr />

  <h2>2. Points-Based (Earn &amp; Burn) Programs</h2>

  <h3>Definition</h3>
  <p>Members earn points per action (spend, engagement, referrals) and redeem them for rewards.</p>

  <h3>Example &amp; Narrative</h3>
  <p><em>FashionCo</em> issues 1 point per €1; 500 points = €5 off. Member Maria spends €250, earns 250 points, and after two purchases redeems 500 points for a discount on a new bag. The sense of progress builds habit.</p>

  <h3>Why it’s Successful</h3>
  <ul>
    <li><strong>Flexible:</strong> Attach value to any behavior (purchases, reviews, referrals).</li>
    <li><strong>Gamified:</strong> Balances grow toward a goal, reinforcing engagement.</li>
    <li><strong>Emotional reward:</strong> Redemption moments create satisfaction loops.</li>
  </ul>

  <h3>Design Tips</h3>
  <ul>
    <li>Define <strong>earn</strong> and <strong>burn</strong> rates clearly (e.g., 1 pt = €0.01).</li>
    <li>Keep redemption value consistent across the catalog.</li>
    <li>Use bonus earners (double points on new collections, events).</li>
    <li>Enable small, instant redemptions early to reinforce habit.</li>
  </ul>

  <hr />

  <h2>3. Tier-Based Programs</h2>

  <h3>Definition</h3>
  <p>Members climb through levels (e.g., Silver → Gold → Platinum) based on spend or engagement, unlocking higher benefits.</p>

  <h3>Example &amp; Narrative</h3>
  <p>Frequent traveler John stays 60 nights with <em>TravelCo Hotels</em>, achieving Gold tier. He enjoys upgrades and lounge access; another member, Lisa, is motivated to reach Gold next year. Both outcomes align with higher retention and share of wallet.</p>

  <h3>Why it’s Successful</h3>
  <ul>
    <li><strong>Aspirational:</strong> Status and recognition motivate progression.</li>
    <li><strong>Behavior-driven:</strong> Clear incentives to spend/engage more.</li>
    <li><strong>Emotional:</strong> Experiential perks create strong attachment.</li>
  </ul>

  <h3>Design Tips</h3>
  <ul>
    <li>Define clear yet aspirational thresholds (review annually).</li>
    <li>Blend transactional benefits (discounts) with experiential ones (events, early access).</li>
    <li>Include soft-landing logic (don’t hard-reset progress each year).</li>
    <li>Visualize progress (meters, badges, dashboards).</li>
  </ul>

  <hr />

  <h2>4. Hybrid Models</h2>
  <p>Many mature programs mix models for balance:</p>

  <table>
    <thead>
      <tr>
        <th>Combination</th>
        <th>Example</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Points + Tiers</td>
        <td>Airlines, Hotels</td>
        <td>Reward both frequency &amp; spend</td>
      </tr>
      <tr>
        <td>Cashback + Tiers</td>
        <td>Retail chains</td>
        <td>Simplicity + aspiration</td>
      </tr>
      <tr>
        <td>Points + Cashback</td>
        <td>E-commerce</td>
        <td>Flexibility + instant gratification</td>
      </tr>
    </tbody>
  </table>

  <p><strong>Rule of thumb:</strong> Start simple. Add complexity only when data and tech maturity allow.</p>

  <hr />

  <h2>5. Key Metrics &amp; Watch-outs</h2>

  <table>
    <thead>
      <tr>
        <th>Metric</th>
        <th>Description</th>
        <th>Healthy Range</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Breakage</td>
        <td>% of unredeemed points</td>
        <td>15–25%</td>
      </tr>
      <tr>
        <td>Redemption Rate</td>
        <td>% of active members redeeming</td>
        <td>40–60%</td>
      </tr>
      <tr>
        <td>Tier Migration</td>
        <td>% moving upward annually</td>
        <td>20–30%</td>
      </tr>
      <tr>
        <td>ROI on Rewards</td>
        <td>Revenue uplift / cost of rewards</td>
        <td>&ge; 3 : 1</td>
      </tr>
    </tbody>
  </table>

  <h3>Watch-outs</h3>
  <ul>
    <li>Too many tiers or complex rules create confusion.</li>
    <li>Under-delivering on promised value erodes trust.</li>
    <li>Data silos cause missed/incorrect credits.</li>
    <li>Over-generous base rewards can cannibalize margin.</li>
  </ul>

  <hr />

  <h2>Takeaway</h2>
  <ul>
    <li><strong>Cashback</strong> = Simplicity &amp; instant gratification</li>
    <li><strong>Points</strong> = Flexibility &amp; gamification</li>
    <li><strong>Tiers</strong> = Aspiration &amp; emotional connection</li>
    <li><strong>Hybrid</strong> = Power combo — if you can manage the complexity</li>
  </ul>
  <p>The best loyalty design is the one your customers can explain back in a single sentence.</p>

  <hr />

</section>
`;
