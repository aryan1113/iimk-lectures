# Sessions 10-12: E-Commerce Analytics

Getting visitors to a site is only the start. This block is about turning behaviour data into decisions: where customers come from, what they do, where they leave and which actions create value. It covers the language of analytics, the conversion funnel, A/B testing, cohorts, attribution and unit economics, then a hands-on GA4 lab and an A/B simulation. The theme throughout is that a number matters only when tied to a decision.

## Opening exercises

> **In class:** The block opened with an **acquisition and channel table** for four channels (users, conversion rate, CAC, 30-day repeat): Organic (32k users, 3.8%, CAC 190, 22% repeat), Paid Search (41k, 2.1%, 610, 9%), Social (58k, 0.8%, 420, 6%) and Email (16k, 5.2%, 70, 31%). Question: **which channel should receive more budget next month?** The slides give no answer. The table is a good worked example for the whole block: it shows that the biggest channel by users (Social) is not obviously the best, and invites you to weigh conversion, cost and repeat together.
>
> A second slide, **"Same traffic, different business outcomes"**, compared Firm A (revenue 12 crore, high conversion, strong repeat purchase) with Firm B (revenue 2 crore, weak conversion, poor retention): **what explains the gap?** The slide's takeaway: traffic is an input; value depends on intent, experience, conversion and retention.

## Why analytics, and what it helps decide

Web analytics helps answer: where are customers coming from (decision area: channel investment), what are they doing (website or app experience), where are they dropping off (funnel improvement), which customers are valuable (segmentation and retention), and which actions create value (revenue, ROI and growth). It converts behaviour data into managerial decisions.

## Web analytics versus reporting

**Web analytics** is the systematic use of digital behaviour data to improve decisions: collect, measure, analyse, interpret, decide. **Reporting** shows *what* happened (visitors, sessions, revenue, bounce, clicks); **analytics** explains *why* and what to do. The slide contrasts mindsets: a reporting mindset asks how many visitors, what was revenue, which page had high exits, what was the CTR; an analytics mindset asks why visits did not convert, which channel created profitable customers, where the friction is, what to test next and what decision changes. A metric with no decision context is a **vanity metric**.

## Four types of analytics

With the slide's examples: **descriptive** (what happened: sessions fell 18%, cart abandonment rose); **diagnostic** (why: paid traffic quality declined, page load time rose, the payment gateway failed); **predictive** (what may happen: high churn risk in a cohort, demand rising in a category); **prescriptive** (what should we do: shift budget, test an offer, improve checkout, retarget abandoned carts, change the landing page). Do not stop at "what happened".

## The maturity ladder

Five rungs: **data capture** (tags, events, logs such as page views and add-to-cart actions), **reports** (standard dashboards), **insights** (root-cause explanation, such as payment failure or high delivery charges), **experiments** (A/B tests on checkout design, product layout, delivery promise or call-to-action button) and **decision advantage** (faster, better choices on marketing spend and website design). Note from the slide: dashboards can create confidence without improving decisions.

## The conversion funnel

The slide's example funnel: 100,000 visitors, 35,000 product views, 12,000 add to cart, 4,800 checkout and 3,100 purchases. The loss at each step is about 65% (visitor to view), 66% (view to cart), 60% (cart to checkout) and 35% (checkout to purchase). Early steps reveal navigation effectiveness and, at add-to-cart, pricing or mobile UI issues; the checkout step reveals friction such as unexpected costs or complex forms. Measures include conversion rate, revenue, AOV and checkout completion. The slide adds **LTV:CAC of 3:1** as a healthy target and says: **prioritise the leak that is actionable and economically meaningful**.

> **Extra context (not on the slides):** "Actionable and economically meaningful" means the biggest percentage drop is not automatically the one to fix first. A modest leak with a cheap, clear fix (say, a hidden delivery charge that can simply be shown earlier) may be worth more than a bigger leak with no obvious cause.

## Macro versus micro conversions

**Macro conversions** create business value (purchase, subscription, lead submission). **Micro conversions** are leading indicators of intent before the purchase (wishlist, add to cart, newsletter, product comparison).

> **In class:** Discussion questions on the slide, with no answers given: which micro conversion best predicts the macro conversion, and is it different for different industries? What would a micro conversion be for a B2B marketplace? Should businesses be worried if there are more micro conversions than macro ones?

## A/B testing

The logic: funnel leak, hypothesis, control, variant, measure, decide. The slide's worked example: the leak is a high drop from add-to-cart to checkout; the hypothesis is that a hidden delivery charge causes abandonment; the **control** shows the delivery charge at checkout; the **variant** shows it on the product or cart page; the metric is checkout completion or purchase rate; keep the variant only if it improves conversion without hurting AOV or margin. A/B testing converts assumptions about behaviour into evidence.

A second slide compared a control (current checkout, single call-to-action, standard copy, no urgency cue) with a treatment (shorter checkout, trust badges, clear delivery promise, stronger call-to-action) and asked: if the treatment wins, what exactly worked? The point: it tests a redesigned experience, which is fine if the decision is whether to replace the old checkout, but less useful for knowing which element caused the lift. Two insights quoted: small tweaks at Microsoft generated millions in incremental revenue, and **only 10-20% of experiments yield positive results at Google and Bing**, which is why testing avoids rolling out the many changes that do not work.

### Pitfalls

1. **Wrong metric**: CTR rises but purchases fall.
2. **Too short**: a weekend spike is misread as a genuine lift; results need full weekly cycles.
3. **Too many changes**: you cannot isolate what worked; test one variable at a time.
4. **No segment view**: an overall lift hides a new-user drop; drill into cohorts.
5. **Statistical significance is not business value**: a tiny lift does not justify the cost. Ask whether the experiment changed customer value, not just a click.

## Cohort analysis

A **cohort** is a group of customers acquired in the same period. The slide's table: January CAC 210 with 24% 30-day and 18% 90-day repeat; February CAC 260 with 18% and 16%; March CAC 180 with 31% and 27%. Cohorts reveal whether growth is improving or weakening: a growing customer base is not healthy if newer cohorts retain worse. Questions cohorts answer: which channels bring better customers, whether discounts attract poor-quality buyers, whether retention improved after a loyalty programme, whether app users are more loyal than website users, whether festival-acquired customers return later, and whether to spend more on acquisition or retention.

## Attribution models

A buyer's path in the slide: Instagram ad (awareness), Google search (consideration), review site (evaluation), email offer (conversion), purchase. How to split the credit:

- **First-click**: all credit to the first touchpoint.
- **Last-click**: all credit to the final touchpoint.
- **Linear**: equal credit to every touchpoint.
- **Position-based**: higher weight to first and last, less to the middle.
- **Data-driven**: algorithmic estimates based on actual impact.

The insight: attribution changes budget decisions, which is why it is political. (Extra context: last-click tends to favour channels close to the purchase and undervalue discovery channels; the slide does not say this.)

## Unit economics

- **CAC** (customer acquisition cost): cost to acquire a customer; lower is better only if quality is stable. Slide example: spend 1,00,000 and acquire 500 customers, so CAC = 200.
- **CLV** (customer lifetime value): expected future value; AOV x frequency x lifespan x gross margin. Slide example: 800 x 4 orders a year x 2 years x 30% = 1,920.
- **ROAS** (return on ad spend): ad revenue per rupee of ad spend; useful but incomplete without margin. Example: spend 50,000, revenue 2,00,000, ROAS = 4.
- **AOV** (average order value): revenue per transaction, useful for basket size and offer design. Example: 10,00,000 over 2,000 orders = 500.

Healthy growth usually needs CLV greater than CAC and profitable repeat behaviour.

> **Extra context (not on the slides):** ROAS of 4 sounds great, but at a 30% gross margin each 4 of revenue yields about 1.2 of margin against 1 of ad cost, so profit is thin. That is what "incomplete without margin" means.

## The KPI tree

The slide lists ten items: traffic quality, landing fit (match between ad promise and landing page), checkout friction (abandonment and completion ease), basket size, pricing and offers, traffic, conversion rate, AOV, channel mix and revenue, and asks: **when revenue changes, which layer changed first?** (Extra context: reading them as a tree, revenue is driven by traffic, conversion rate, AOV and channel mix, which in turn depend on the first five; the slide lists the items without drawing the links in the text.)

## GA4 hands-on lab

> **In class:** A 60-minute group lab on the Google Merchandise Store demo account in Google Analytics 4: experience the store (note one positive cue and one friction), map the journey into events (view, cart, checkout, purchase), investigate acquisition, engagement, conversion and revenue, capture one focused screenshot, design an experiment and post it. The rule: **start with evidence, not a solution.** Under the screenshot write the evidence, the interpretation (cautiously: "may indicate") and the decision implication. The experiment needs a hypothesis ("If we ___, then ___ will improve because ___"), control and variant, a **primary metric** (what you want to improve), a **guardrail metric** (what must not get worse) and a rollout condition (for example, implement if checkout completion improves without reducing AOV).

## A/B testing simulation

> **In class:** You play **Nano's director of eCommerce**, deciding which website components increase **smartphone sales**, balancing acting quickly on limited data against gathering more information, across **12 periods** (you must complete all 12 even if you lock a decision earlier). Tips: use practice first; pay attention to whether information after a test is performance or noise; agree as a team how to choose what to test, how much evidence is enough and when to act. The tournament poses: *are you optimising your score, or learning something about the customer? Are those always the same thing?* The debrief questions were: what was one important decision and what evidence supported it; **did the apparent winner always remain the winner? why didn't you simply keep experimenting forever? what should determine whether an experiment is successful?** The slides pose these and leave them open. What they do state: **A/B testing is not about finding which version "wins"; it is about reducing uncertainty sufficiently to make a better decision**, in a cycle of intuition, hypothesis, experiment, evidence, decision, learn, next experiment.

## Putting it together

Define the business question; use the funnel to find where value leaks; track intent with micro conversions; test fixes with a primary and guardrail metric; read cohorts to check the quality of growth; use attribution with care; and check everything against unit economics. The KPI tree stops you chasing symptoms, and the maturity ladder says the goal is better decisions, not more dashboards.

## Likely exam questions

1. **Distinguish reporting from analytics and describe the four types.** Reporting = what; analytics = why and what next; descriptive, diagnostic, predictive, prescriptive with examples; define vanity metric.
2. **A funnel shows a large drop between cart and checkout. Diagnose and design an A/B test.** Likely cause: unexpected costs or complex forms; hypothesis (hidden delivery charge), control, variant, primary metric (checkout completion), guardrail (AOV or margin), full weekly cycles, segment view.
3. **Compare attribution models and explain why attribution is political.** Describe first, last, linear, position-based, data-driven; credit determines budget.
4. **Define CAC, CLV, ROAS and AOV and say when growth is healthy.** Give formulas; CLV must exceed CAC (3:1 cited); ROAS ignores margin.
5. **Read a cohort table.** Compare CAC and 30/90-day repeat across cohorts; newer cohorts retaining worse signals weak growth even if the base grows. (For the channel table, justify any budget choice using conversion, CAC and repeat together; the slides give no answer.)
