// src/lms/articles/advanced-scheduling-throttling.ts
export const advancedSchedulingThrottling = `

  <h2>Why Scheduling and Throttling Matter</h2>
  <p>
  When loyalty programs scale, automation runs continuously — sending messages, syncing data, and issuing rewards.
  Without proper scheduling or throttling, systems can overwhelm APIs, delay customer communication, or 
  create duplicate triggers. Advanced scheduling ensures every journey runs at the right time, while throttling
  keeps your integrations healthy and compliant with rate limits.
  </p>

  <h3>1. Understanding Scheduling</h3>
  <p>
  Scheduling determines <em>when</em> automation should run. Loyalty platforms use different methods:
  </p>
  <ul>
    <li><strong>Cron-based scheduling:</strong> Runs flows on fixed intervals (e.g., every hour or every Monday at 9:00 AM).</li>
    <li><strong>Event-based scheduling:</strong> Starts workflows when a specific trigger occurs (e.g., new purchase, tier upgrade).</li>
    <li><strong>Hybrid scheduling:</strong> Combines time-based and event-based logic for dynamic flows.</li>
  </ul>
  <p>
  Efficient scheduling helps balance workloads, avoid spikes, and maintain real-time responsiveness.
  </p>

  <h3>2. Why Throttling Is Essential</h3>
  <p>
  <strong>Throttling</strong> controls how many executions or API calls can happen per second or per minute.
  It prevents overloading systems, ensures fair usage, and reduces failed transactions or “429 Too Many Requests” errors.
  </p>
  <ul>
    <li>Protects external APIs like CRM, SMS gateways, and POS systems.</li>
    <li>Improves delivery reliability during peak reward campaigns.</li>
    <li>Maintains consistent user experience across all channels.</li>
  </ul>

  <h3>3. Common Scheduling Use Cases in Loyalty</h3>
  <ul>
    <li><strong>Daily Point Expiry Jobs:</strong> Run every midnight to revoke expired balances.</li>
    <li><strong>Tier Evaluation:</strong> Weekly or monthly recalculation of member tiers.</li>
    <li><strong>Campaign Sync:</strong> Fetch new offers or vouchers from partner APIs every 4 hours.</li>
    <li><strong>Reactivation Reminders:</strong> Scheduled daily, but throttled to limit message bursts.</li>
  </ul>

  <h3>4. Throttling Techniques</h3>
  <ul>
    <li><strong>Rate-limiting by token bucket:</strong> Allow defined request bursts followed by cooldown.</li>
    <li><strong>Queue-based throttling:</strong> Use message queues (RabbitMQ, Kafka) to distribute load evenly.</li>
    <li><strong>Per-channel caps:</strong> Limit SMS, email, and push messages separately.</li>
    <li><strong>Concurrency control:</strong> Restrict the number of parallel flows running simultaneously.</li>
  </ul>

  <h3>5. Architecture Considerations</h3>
  <ul>
    <li><strong>Retry policies:</strong> Set exponential backoff for failed API calls.</li>
    <li><strong>Batch execution:</strong> Process 500–1000 records per cycle for efficiency.</li>
    <li><strong>Distributed load:</strong> Split schedules by region or business unit to reduce global contention.</li>
    <li><strong>Time zones:</strong> Align scheduling with customer local time (avoid 3AM messages).</li>
  </ul>

  <h3>6. Example: Voucher Sync Flow</h3>
  <ol>
    <li>Scheduler triggers every 15 minutes.</li>
    <li>Flow fetches newly issued vouchers from external API.</li>
    <li>Throttling limits 5 requests per second to prevent rate-limit blocks.</li>
    <li>Queue ensures retry and delivery confirmation.</li>
  </ol>
  <p>
  This pattern keeps systems responsive even under heavy loads during campaigns.
  </p>

  <h3>7. Monitoring & Reporting</h3>
  <ul>
    <li>Track <strong>execution latency</strong> — how long each flow takes to complete.</li>
    <li>Log throttling events and dropped executions.</li>
    <li>Alert when queue backlogs exceed thresholds.</li>
    <li>Provide dashboards showing success rate per integration.</li>
  </ul>

  <h3>8. Best Practices</h3>
  <ul>
    <li>✅ Spread automation across different time slots to prevent API congestion.</li>
    <li>✅ Use batch and queue orchestration instead of running all flows concurrently.</li>
    <li>✅ Prioritize transactional flows (rewards, vouchers) over analytics or sync jobs.</li>
    <li>✅ Implement adaptive throttling — dynamically reduce speed when API errors rise.</li>
  </ul>

  <h3>9. Conclusion</h3>
  <p>
  Advanced scheduling and throttling ensure loyalty automations scale safely.
  By balancing precision timing with flow control, brands maintain reliable integrations,
  consistent communication, and uninterrupted customer experiences — even during peak events.
  </p>

`;
