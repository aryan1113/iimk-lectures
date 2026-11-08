const e=`# Sessions 10-12: E-Commerce Analytics

## Key Concepts

- **Why analytics**: traffic is an input; value depends on intent, experience, conversion and retention. Web analytics answers where customers come from, what they do, where they drop off and which actions create value, informing channel investment, site/app experience, funnel fixes, segmentation and retention.
- **Web analytics** = systematic use of digital behaviour data to improve decisions: collect, measure, analyse, interpret, decide. **Reporting** shows *what* happened (visitors, revenue, bounce); **analytics** explains *why* and what to do. A metric without decision context is a **vanity metric**.
- **Four types**: descriptive (what happened); diagnostic (why); predictive (what may happen, e.g. churn risk); prescriptive (what should we do). Do not stop at "what happened".
- **Maturity ladder**: data capture (tags, events, logs); reports (dashboards); insights (root causes); experiments (A/B tests); decision advantage. Dashboards can create confidence without improving decisions.
- **Conversion funnel**: visitors, product views, add to cart, checkout, purchase. Drops point to causes (navigation, pricing or mobile UI early; unexpected costs or complex forms at checkout). Prioritise the leak that is actionable and economically meaningful. **LTV:CAC of 3:1** is considered healthy.
- **Macro vs micro conversions**: macro = business outcomes (purchase, subscription, lead); micro = leading indicators of intent (wishlist, add to cart, newsletter, comparison). Open question: which micro best predicts macro.
- **A/B testing logic**: funnel leak, hypothesis, control, variant, measure, decide; keep the variant only if conversion improves without hurting AOV or margin. It turns assumptions into evidence. A variant changing many things tests a redesigned experience (fine for a replace decision) but cannot show which element caused the lift.
- **Pitfalls**: wrong metric (CTR up, purchases down); too short (weekend spikes; need full weekly cycles); too many changes; no segment view (overall lift hides a new-user drop); **statistical significance is not business significance**.
- **Cohort analysis**: groups customers by acquisition period and compares CAC and 30/90-day repeat. A growing base is not healthy if newer cohorts retain worse; it informs channel quality, discount effects and acquisition vs retention spend.
- **Attribution models** (credit across touchpoints): *first-click*; *last-click*; *linear* (equal); *position-based* (more to first and last); *data-driven* (algorithmic estimate of actual impact). Attribution changes budget decisions, which is why it is political.
- **Unit economics**: *CAC* = acquisition spend / new customers (lower is better only if quality is stable); *CLV* = AOV x frequency x lifespan x gross margin; *ROAS* = ad revenue / ad spend (incomplete without margin); *AOV* = revenue / orders. Healthy growth needs CLV > CAC.
- **KPI tree**: revenue is driven by traffic, conversion rate, AOV and channel mix, which depend on traffic quality, landing fit, checkout friction, basket size and pricing/offers. When revenue changes, ask which layer changed first.
- **Experiment design (GA4 lab)**: start with evidence, not a solution; state hypothesis, control and variant, a **primary metric** (what to improve) and a **guardrail metric** (what must not worsen), plus a rollout condition.
- **Lesson of the A/B simulation**: **A/B testing is not about finding which version wins; it is about reducing uncertainty enough to make a better decision.** The apparent winner may not stay the winner, and one cannot experiment forever.

## Why This Matters

Analytics turns behaviour data into decisions on channels, experience and retention, but only when tied to a business question and a test.

## Relevance for Exams / Cases

Diagnose a funnel leak and design an A/B test with primary and guardrail metrics, compare attribution models, compute CAC/CLV/ROAS/AOV, and read a cohort table.
`;export{e as default};
