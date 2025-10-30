// src/lms/articles/earn-rules-and-multipliers.ts
// HTML export — consistent with other Academy lessons (Program Design & Architecture section)

export default `
<section>
  <h1>Earn Rules &amp; Multipliers</h1>
  <p>Every loyalty program starts with a simple question: <strong>“How do members earn value?”</strong>  
  The earn model defines how quickly points, cashback, or benefits accumulate and how that pace supports both engagement and profitability.</p>

  <hr />

  <h2>1. Base Earn Rate</h2>
  <p>Your base earn rate is the foundation of the program’s perceived value. It’s typically expressed as points or cashback per currency unit (e.g., <em>1 point per €1 spent</em> or <em>2% cashback</em>).</p>

  <ul>
    <li>Set it relative to your gross margin — the higher the margin, the more generous you can be.</li>
    <li>Benchmark against competitors, but ensure it reinforces your brand’s value proposition.</li>
    <li>Keep it simple and intuitive to explain — “1 point per €1” always beats “7 points per €5.”</li>
  </ul>

  <p>For example, a supermarket might offer 1 point per €1, while a luxury retailer may start lower (1 point per €2) but give richer experiential rewards.</p>

  <hr />

  <h2>2. Category &amp; Behavior Multipliers</h2>
  <p>Multipliers let you reward the behaviors that matter most — higher-margin categories, seasonal pushes, or digital engagement.</p>
  <ul>
    <li><strong>Category multipliers:</strong> +2x points on fresh produce or accessories during low season.</li>
    <li><strong>Channel multipliers:</strong> +3x points for app purchases or self-checkout adoption.</li>
    <li><strong>Behavior multipliers:</strong> +2x for referring a friend or completing a product review.</li>
  </ul>
  <p>Used well, multipliers drive both customer learning and business outcomes — shifting spend where you need it most.</p>

  <hr />

  <h2>3. Event-Based Bonuses</h2>
  <p>Event bonuses create emotional spikes and reinforce connection points with the brand. Examples include:</p>
  <ul>
    <li>Welcome bonus on first purchase or registration.</li>
    <li>Birthday bonus — 500 points or €5 credit.</li>
    <li>Anniversary bonus tied to the join date or first purchase.</li>
    <li>“Member Week” campaigns with double points on all orders.</li>
  </ul>
  <p>These moments generate delight, helping members feel seen and appreciated beyond transactions.</p>

  <hr />

  <h2>4. Guardrails &amp; Margin Control</h2>
  <p>Every earn rule has a financial consequence. Loyalty profitability depends on balancing perceived generosity with cost control.</p>

  <ul>
    <li><strong>Set a total reward budget</strong> as a % of sales (often 1–3%).</li>
    <li><strong>Model redemption scenarios</strong> — simulate different earn/burn patterns to predict liability.</li>
    <li><strong>Exclude low-margin items</strong> or use reduced earn rates (e.g., 0.5x points on discounted SKUs).</li>
    <li><strong>Cap high-value transactions</strong> to prevent gaming or abuse.</li>
  </ul>

  <p>Data from mature programs shows that customers respond more to <em>frequency of recognition</em> than raw generosity — small consistent reinforcement beats rare big rewards.</p>

  <hr />

  <h2>5. Real-Life Example</h2>
  <p><strong>Sephora Beauty Insider</strong> balances financial discipline with excitement by offering 1 point per dollar as a base rate, while running periodic 2x and 3x point events that don’t permanently inflate cost.  
  Similarly, <strong>Starbucks Rewards</strong> drives morning routines through category multipliers (2x stars on breakfast sandwiches) — influencing behavior, not just spend.</p>

  <hr />

  <h2>6. Optimization Tips</h2>
  <ul>
    <li>Use analytics to identify underperforming segments — test new multipliers quarterly.</li>
    <li>Bundle multipliers with communication journeys — never launch silent campaigns.</li>
    <li>Keep mechanics transparent; hidden rules erode trust.</li>
    <li>Track incremental revenue per campaign, not just issuance volume.</li>
  </ul>

  <hr />

  <h2>7. Takeaway</h2>
  <p>Earn rules are the engine of engagement. When designed thoughtfully, they create a rhythm of progress — members feel rewarded without overspending your margin.</p>
  <p><em>“Generosity without control leads to cost. Control without creativity leads to boredom.”</em> The best programs balance both.</p>
</section>
`;
