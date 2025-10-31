// src/lms/articles/caas-for-loyalty-agents.ts
export const caasForLoyaltyAgents = `

  <h2>Why Context-as-a-Service (CaaS) Matters</h2>
  <p>
  AI agents are only as good as the context they see. In loyalty programs, context means <strong>rules,
  wallets, offers, tiers, consent, and brand voice</strong>. A Context-as-a-Service layer supplies
  <em>trusted, up-to-date</em> knowledge to every agent (support, marketing, analytics) so they answer
  correctly and act safely.
  </p>

  <h3>1. What Is CaaS?</h3>
  <p>
  CaaS is a managed knowledge layer that packages domain knowledge into reusable <strong>context packs</strong>
  (schemas, policies, examples, FAQs, API specs) and delivers it to agents via APIs. It separates
  <em>knowledge</em> from <em>reasoning</em>: models do the thinking; CaaS guarantees the right facts.
  </p>

  <h3>2. Core Building Blocks</h3>
  <ul>
    <li><strong>Context Packs:</strong> Versioned bundles (e.g., “Loyalty Rules v3”, “Voucher Policy EU”).</li>
    <li><strong>Retrieval Layer:</strong> RAG/GraphRAG over documents, ledgers, product &amp; wallet data.</li>
    <li><strong>Tool Catalog:</strong> Typed tools the agent may call (issueVoucher, getBalance, applyTierMultiplier).</li>
    <li><strong>Guardrails:</strong> Policies for consent, PII masking, channel restrictions, and rate limits.</li>
    <li><strong>Observability:</strong> Tracing, prompt + tool logs, and evaluation sets for accuracy.</li>
  </ul>

  <h3>3. How Agents Use CaaS</h3>
  <ol>
    <li>Agent receives a task (e.g., “Can I redeem 1,500 pts on alcohol?”).</li>
    <li>CaaS retrieves relevant rules (SKU exclusions, store policy, member balance).</li>
    <li>Guardrails filter PII and apply consent checks.</li>
    <li>Agent reasons with the retrieved snippets; if allowed, calls the right tool (e.g., <code>getBalance</code>).</li>
    <li>Response cites sources and logs decisions for audit.</li>
  </ol>

  <h3>4. Designing Context Packs</h3>
  <ul>
    <li><strong>Schema-first:</strong> Define entities (Member, Tier, Voucher, EarnEvent, Redemption).</li>
    <li><strong>Policy Cards:</strong> Human-readable rules (breakage window, SKU exclusions, returns).</li>
    <li><strong>Few-shot Examples:</strong> “Do / Don’t” answers for tricky edge cases.</li>
    <li><strong>Live Data Pointers:</strong> Connectors to wallets, CRM, POS, and consent store.</li>
    <li><strong>Versioning &amp; Diff Notes:</strong> Explain what changed and why.</li>
  </ul>

  <h3>5. Retrieval Patterns for Loyalty</h3>
  <ul>
    <li><strong>Rules Retrieval:</strong> Exact policy lookup by tier, region, or SKU category.</li>
    <li><strong>Member-centric Retrieval:</strong> Fuse profile + latest events for precise answers.</li>
    <li><strong>Offer Matching:</strong> Graph edges connect member affinities to eligible rewards.</li>
    <li><strong>Freshness:</strong> Time-weighted indexing so new promos outrank stale ones.</li>
  </ul>

  <h3>6. Safety, Consent &amp; Governance</h3>
  <ul>
    <li>Mask PII by default; unmask only when legal basis = consent/contract.</li>
    <li>Enforce regional policies (e.g., alcohol redemption) via tool-call allowlists.</li>
    <li>Keep an <strong>audit trail</strong>: context used, tools called, sources cited.</li>
    <li>Red-team prompts and run automated evals before promoting new packs.</li>
  </ul>

  <h3>7. Example: “Eligible Reward” Agent</h3>
  <ol>
    <li>Input: memberId, basket (SKUs), storeId.</li>
    <li>CaaS retrieves: tier rules, exclusions, balance, time-boxed promos.</li>
    <li>Agent computes: applicable earn/burn, best reward, and terms.</li>
    <li>Returns: recommendation + rationale + source citations + tool receipts.</li>
  </ol>

  <h3>8. Metrics That Prove CaaS Value</h3>
  <ul>
    <li>Answer accuracy and citation coverage.</li>
    <li>Time-to-resolution in support flows.</li>
    <li>Incremental redemptions from smarter recommendations.</li>
    <li>Policy violations prevented (blocked tool calls).</li>
  </ul>

  <h3>9. Operating the CaaS Layer</h3>
  <ul>
    <li><strong>Publishing:</strong> PR-style review for new packs; semantic tests must pass.</li>
    <li><strong>Metering:</strong> Track context tokens, retrieval calls, tool usage.</li>
    <li><strong>Rollbacks:</strong> Canary releases and instant revert if accuracy drops.</li>
    <li><strong>SLAs:</strong> Latency budgets for retrieval &amp; tool calls (e.g., &lt; 500 ms p95).</li>
  </ul>

  <h3>10. Conclusion</h3>
  <p>
  CaaS turns fragmented loyalty knowledge into a <strong>single, reliable source of truth</strong> for AI agents.
  With curated packs, guarded tools, and measurable outcomes, teams ship trustworthy assistants that actually
  move revenue and retention — safely.
  </p>

`;
