// src/lms/content/loyalty-economics-101.ts
const html = `
<h1>Loyalty Economics 101</h1>

<p><strong>Duration:</strong> 28 min &nbsp;|&nbsp; <strong>Type:</strong> Article</p>

<h2>1) Why economics matters</h2>
<p>Loyalty programs are financial products disguised as marketing. Points are a <em>currency</em>, rewards have a real <em>cost</em>, and balances create <em>liabilities</em>. A program wins when the <strong>incremental margin</strong> it creates (uplift × margin) sustainably exceeds the <strong>total cost of rewards + operations + risk</strong>.</p>

<div class="note">
  <strong>Core goal:</strong> Fund differentiated value (rewards/benefits) <em>without</em> eroding unit margins.
</div>

<h2>2) Funding models (who pays?)</h2>
<ul>
  <li><strong>Self-funded</strong>: brand pays for accrual &amp; rewards from its own margin.</li>
  <li><strong>Supplier-funded</strong>: vendors subsidize points on their SKUs or fund bespoke rewards.</li>
  <li><strong>Partner-funded / coalition</strong>: third parties buy your points or provide benefits in exchange for traffic.</li>
  <li><strong>Member-funded</strong>: paid tiers / subscriptions offset program cost (e.g., free shipping, VIP perks).</li>
</ul>

<h2>3) Key terms &amp; ratios</h2>
<table>
  <thead>
    <tr>
      <th>Metric</th><th>Symbol</th><th>Definition</th><th>Typical range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Point Face Value (customer)</td>
      <td>PFV</td>
      <td>Retail value returned per point (e.g., € off).</td>
      <td>€0.002–€0.02</td>
    </tr>
    <tr>
      <td>Cost per Point (brand)</td>
      <td>CPP</td>
      <td>Your real unit cost to fulfill 1 point (based on COGS of rewards).</td>
      <td>€0.001–€0.01</td>
    </tr>
    <tr>
      <td>Accrual rate</td>
      <td>A</td>
      <td>Points earned per € revenue (e.g., 1 pt / €1 ⇒ A = 1).</td>
      <td>0.5–2.0</td>
    </tr>
    <tr>
      <td>Redemption rate</td>
      <td>R<sub>r</sub></td>
      <td>% of issued points eventually redeemed.</td>
      <td>40%–90%</td>
    </tr>
    <tr>
      <td>Breakage</td>
      <td>B</td>
      <td>% of issued points that never redeem (B = 1 − R<sub>r</sub>).</td>
      <td>10%–60%</td>
    </tr>
    <tr>
      <td>Effective reward cost % sales</td>
      <td>ERC</td>
      <td>What rewards truly cost as % of revenue.</td>
      <td>1%–5% (retail), 2%–8% (grocery/QSR)</td>
    </tr>
    <tr>
      <td>Liability (expected)</td>
      <td>L</td>
      <td>Expected cost to fulfill outstanding points.</td>
      <td>Proportional to balance × CPP × R<sub>r</sub></td>
    </tr>
  </tbody>
</table>

<h3>Useful formulas</h3>
<pre><code>CPP          = Reward_COGS / Points_required
PFV          = Reward_Retail / Points_required
ERC (% rev)  = A × CPP × Rr / Avg_Basket
Effective discount to customer ≈ A × PFV × Rr / Avg_Basket
Liability L  = Outstanding_points × CPP × Rr
Incremental margin (per period)
             = (Revenue_uplift × GM%) − Reward_cost − Opex − Fraud_loss
Payback (periods)
             = Customer_Acquisition_Cost / Incremental_margin_per_period
</code></pre>

<h2>4) How rewards hit P&amp;L</h2>
<ol>
  <li><strong>At earn</strong>: recognize a <em>deferred revenue</em> element (contract liability) equal to expected fulfillment cost (CPP × points × R<sub>r</sub>).</li>
  <li><strong>At redeem</strong>: release the liability and recognize COGS for the reward item/service.</li>
  <li><strong>Breakage</strong>: recognized as revenue when deemed remote / statistical, per policy &amp; IFRS 15.</li>
</ol>

<h2>5) Worked example — Café program</h2>
<p><em>Scenario.</em> Cappuccino price €4.00, COGS €1.60 (GM% = 60%). Program: earn <strong>1 pt / €1</strong>. A free cappuccino requires <strong>60 pts</strong>. Reward COGS = €1.60, retail €4.00.</p>

<ul>
  <li>CPP = €1.60 / 60 = <strong>€0.0267</strong></li>
  <li>PFV = €4.00 / 60 = <strong>€0.0667</strong></li>
  <li>Accrual per € revenue (A) = 1 pt</li>
</ul>

<p><strong>Effective reward cost as % of sales.</strong> Assume redemption rate R<sub>r</sub> = 70%.</p>
<pre><code>ERC = A × CPP × Rr
    = 1 × €0.0267 × 0.70
    = €0.0187 per € revenue  →  <strong>1.87% of sales</strong></code></pre>

<p><strong>Liability example.</strong> 10,000 points outstanding at period end.</p>
<pre><code>L = Outstanding × CPP × Rr
  = 10,000 × 0.0267 × 0.70
  = <strong>€187</strong></code></pre>

<p><strong>Behavioral uplift.</strong> Members buy 1.2 drinks / week vs 1.0 baseline (20% uplift).</p>
<pre><code>ΔRevenue per visit     = €4.80 − €4.00 = €0.80
Incremental gross margin = €0.80 × 60%  = €0.48
Reward cost per visit   ≈ 1.87% × €4.80 = €0.090
Net uplift margin/visit = €0.48 − €0.090 = <strong>€0.39</strong></code></pre>

<p><strong>Payback.</strong> If acquisition cost for a new member is €1.00:</p>
<pre><code>Payback (visits) = €1.00 / €0.39 ≈ <strong>2.6 visits</strong></code></pre>

<h3>Sensitivity — redemption vs cost</h3>
<table>
  <thead>
    <tr><th>R<sub>r</sub></th><th>ERC (% of sales)</th><th>Notes</th></tr>
  </thead>
  <tbody>
    <tr><td>50%</td><td>1.33%</td><td>Low liability, slower burn; watch perceived value.</td></tr>
    <tr><td>70%</td><td>1.87%</td><td>Healthy redemption; sustainable for cafés.</td></tr>
    <tr><td>90%</td><td>2.40%</td><td>Great engagement; tighten guardrails.</td></tr>
  </tbody>
</table>

<h2>6) Guardrails &amp; design heuristics</h2>
<ul>
  <li><strong>Target ERC</strong>: start 1.5–2.5% in QSR/coffee; 1–2% specialty retail; adjust after 8–12 weeks of data.</li>
  <li><strong>Protect margin</strong>: use <em>COGS-cheap</em> rewards with high perceived value (upsizes, add-ons, time-boxed perks).</li>
  <li><strong>Steer redemption</strong>: nudge toward high-margin items; require combos or minimum basket.</li>
  <li><strong>Breakage realism</strong>: don’t base viability on extreme breakage. Model at 20–30% unless you have proof.</li>
  <li><strong>Liability cap</strong>: build deflation mechanics (expiry, missions that burn points, bundles) if L grows faster than revenue.</li>
  <li><strong>Fraud</strong>: velocity limits, device binding, receipt OCR risk signals, staff misuse controls.</li>
</ul>

<h2>7) Mini-exercise — compute ROI</h2>
<p>Use the café program. Assume a member makes <strong>10 visits</strong> in 8 weeks at the uplifted frequency (1.2/week), with the economics above. Acquisition cost = €1. Redeem rate = 70%.</p>
<ol>
  <li>What’s total incremental margin from uplift?</li>
  <li>What’s total reward cost?</li>
  <li>ROI and payback in visits?</li>
</ol>

<details>
  <summary><strong>Solution</strong></summary>
  <pre><code>Total incremental margin  = €0.39 × 10 = €3.90
Total reward cost (already included in €0.39 calc)
ROI (gross)               = (€3.90 − €1.00) / €1.00 = <strong>+290%</strong>
Payback                   ≈ 2.6 visits (as above)</code></pre>
</details>

<h2>8) Executive checklist</h2>
<ul>
  <li>We know our <strong>CPP, PFV, ERC</strong> and monitor R<sub>r</sub>, breakage, and liability weekly.</li>
  <li>Rewards are aligned to high-margin items; ERC kept within guardrail for our vertical.</li>
  <li>We measure uplift with <strong>holdouts</strong> and attribute incrementality, not correlation.</li>
  <li>We designed <strong>burn mechanics</strong> (bundles, missions) to manage liability.</li>
  <li>We run a quarterly <strong>pricing &amp; tiers review</strong> with scenario analysis (±10–20% on redemption).</li>
</ul>
`;
export default html;
