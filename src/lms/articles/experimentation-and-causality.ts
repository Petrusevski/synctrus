// src/lms/articles/experimentation-and-causality.ts
// HTML export — consistent with Operations, Automation & Analytics lessons

export default `
<section>
  <h1>Experimentation &amp; Causality</h1>
  <p>Data-driven marketing is only as strong as its experiments. Without proper causal design, you risk shipping <strong>false wins</strong> — changes that look good but don’t truly move the needle. This lesson covers how to design, measure, and interpret loyalty experiments with scientific confidence.</p>

  <hr />

  <h2>1. The Goal of Experimentation</h2>
  <p>Experimentation helps answer one question: <em>Did this change cause the outcome?</em> Whether it’s a new tier benefit, push timing, or bonus multiplier, you need structure to separate signal from noise.</p>

  <ul>
    <li><strong>Causality</strong> ≠ correlation. It isolates the true effect of your intervention.</li>
    <li><strong>Randomization</strong> ensures fairness — every member has an equal chance to be in any group.</li>
    <li><strong>Control groups</strong> provide the counterfactual — what would have happened without the change.</li>
  </ul>

  <p>Without causality, loyalty programs drift into superstition — reacting to coincidence instead of cause.</p>

  <hr />

  <h2>2. Holdouts &amp; Control Design</h2>
  <p>Holdout groups are members deliberately excluded from receiving a campaign or benefit. They serve as the baseline to measure lift.</p>
  <ul>
    <li><strong>Example:</strong> Send a double-points offer to 90% of members; hold out 10% as control.</li>
    <li>After one week, compare KPIs (spend, visits, redemption) between the two groups.</li>
    <li>If the treated group shows statistically significant lift, the campaign worked.</li>
  </ul>

  <p>Holdouts prevent over-attribution. Sometimes, members would have purchased anyway — the holdout reveals how much was truly incremental.</p>

  <hr />

  <h2>3. CUPED Adjustment</h2>
  <p><strong>CUPED</strong> (Controlled-experiment Using Pre-Experiment Data) improves precision by adjusting for pre-existing differences between control and treatment groups.</p>

  <p>It uses members’ prior behavior (e.g., last month’s spend or visit frequency) as a covariate to reduce variance in the measured outcome. This allows for smaller sample sizes and faster experiment conclusions.</p>

  <blockquote>Think of CUPED as “noise cancellation” for your experiment.</blockquote>

  <hr />

  <h2>4. Stratification &amp; Randomization</h2>
  <p>Pure randomness isn’t always optimal. Stratification ensures key member types are evenly represented across groups (e.g., by tier, geography, or channel preference).</p>

  <ul>
    <li><strong>Example:</strong> Randomize within each tier — 10% control per tier level.</li>
    <li>Prevents bias where, for instance, one group has more VIPs than another.</li>
  </ul>

  <p>Always confirm balance before starting your test — uneven groups make your results unreliable.</p>

  <hr />

  <h2>5. Novelty &amp; Regression-to-Mean</h2>
  <p>Many early “wins” are illusions caused by novelty or natural variation.</p>

  <ul>
    <li><strong>Novelty Effect:</strong> New features get short-term spikes from curiosity, not value.</li>
    <li><strong>Regression-to-Mean:</strong> Members with extreme early results tend to normalize over time — not because of your intervention.</li>
  </ul>

  <p>To combat these, run experiments long enough to stabilize (at least 2–4 weeks) and evaluate repeat behavior, not just immediate responses.</p>

  <hr />

  <h2>6. Metrics That Matter</h2>
  <p>Pick primary metrics that represent true member value, not vanity stats.</p>
  <ul>
    <li><strong>Primary:</strong> LTV lift, repeat purchase rate, redemption rate, or engagement frequency.</li>
    <li><strong>Secondary:</strong> Email open rate, clickthrough, session count.</li>
    <li><strong>Guardrail:</strong> Churn, complaints, or redemption delays.</li>
  </ul>

  <p>Ensure your metric window matches your program cycle (e.g., 30-day retention for monthly shoppers).</p>

  <hr />

  <h2>7. Interpreting Results</h2>
  <p>Focus on statistical confidence and practical significance:</p>
  <ul>
    <li><strong>Confidence:</strong> The probability your results are not due to chance (e.g., p &lt; 0.05).</li>
    <li><strong>Lift:</strong> The real-world effect size (e.g., +4% visits per member).</li>
    <li><strong>Practical significance:</strong> Whether the effect is big enough to matter economically.</li>
  </ul>

  <p>Report both — a statistically significant 0.2% lift is still meaningless in practice.</p>

  <hr />

  <h2>8. Real-Life Example</h2>
  <p><strong>Airbnb</strong> uses CUPED to improve experiment power — reducing noise from member heterogeneity and shortening test durations.</p>
  <p><strong>Amazon Prime</strong> applies stratified randomization by member tenure and geography to keep treatment and control groups balanced across behaviors and regions.</p>

  <hr />

  <h2>9. Takeaway</h2>
  <ul>
    <li>Design for causality — randomize, control, and measure against baselines.</li>
    <li>Adjust for variance using CUPED and stratification.</li>
    <li>Beware novelty — only sustained lift counts as real impact.</li>
  </ul>

  <p>True optimization comes from disciplined experimentation — not just dashboards.</p>
</section>
`;
