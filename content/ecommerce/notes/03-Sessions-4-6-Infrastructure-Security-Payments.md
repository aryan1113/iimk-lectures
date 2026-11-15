# Sessions 4-6: Infrastructure, Security and Payments

These sessions open up the hidden machinery of e-commerce: the technology layers, the attacks, and the chain of actors that moves money. When it fails, it becomes lost revenue, lost trust and legal trouble. The general manager needs to know which questions to ask.

## Session 4: Infrastructure

### Five layers, in two slightly different diagrams

The slides give two five-layer models, and it helps to know both.

The **architecture diagram** goes from bottom to top: (1) physical and network (fibre, submarine cables, ISP tiers); (2) the protocol stack (TCP/IP packet switching, IPv6); (3) web services (HTTP/HTTPS, APIs, GraphQL); (4) application and platform (cloud microservices, CDNs); (5) user interface (progressive web apps, headless commerce, voice UI).

The **implementation-sequence diagram** is a second model: physical infrastructure; network infrastructure (ISP tiers, CDN nodes, 5G); transport and protocol (TCP/IP, DNS, IPv6, the SSL/TLS handshake, with the question "can customers trust us with their data?"); application services (payment gateways, search APIs, recommendation engines, chatbots, with the question "does the business solve customer problems?"); and the presentation and device layer (apps, PWAs, IoT, AR/VR, with "is it delightful enough to return?"). DNS and SSL/TLS appear only in this second diagram.

The slide questions per layer give the idea: the transport layer asks whether customers can trust us with their data, application services ask whether the business solves customer problems, and the presentation layer asks whether it is delightful enough to bring customers back. (Extra context: roughly, the bottom layers move data, the middle ones make it trustworthy and useful, the top ones make it pleasant.)

### Built bottom-up, fail top-down

Layers are built from the bottom up, but failures are felt differently. If the user interface fails, only that feature breaks. If the physical layer fails, **everything** stops. (Extra context: it follows that lower layers carry more systemic risk and deserve more redundancy; that is my inference.)

> **In class:** A diagnosis exercise gave five symptoms and asked which layer was at fault. The slides give no answer key; the likely mapping (inferred, not stated) is: app unreachable (physical), payments failing (application services), slow only in one state (network), irrelevant recommendations (application), confusing app (presentation). The lesson is to locate the layer before choosing a fix.

### Mobile technologies and omnichannel

The slide puts India's mobile share of e-commerce traffic at 73% (2025) and lists six technologies, each with a managerial question that the slides leave open:

- **QR commerce**: UPI QR codes at kirana stores and vending machines (PhonePe, GPay, Paytm). Question: how does QR reduce the cost of bringing merchants and customers into digital commerce?
- **NFC and tap-to-pay**: UPI Lite, tokenised card payments, wearables such as smartwatches and rings. Question: how much does removing one or two steps from payment matter commercially?
- **Vernacular voice**: voice search in Hindi, Tamil, Bengali integrated into e-commerce platforms. Question: if customers do not browse a catalogue, how do we ensure our products are found and correctly understood? The slide also asks, when the interface is invisible, what becomes important and how it affects conversion.
- **AR/VR**: virtual try-on for fashion and furniture (Meesho, Nykaa, IKEA). Question: which categories does AR create measurable customer value in?
- **5G**: sub-10 ms latency, enabling live commerce, AR try-ons and real-time inventory sync. Question: what new customer experience becomes possible only when connectivity is fast and reliable?
- **IoT-triggered commerce**: smart fridges auto-ordering groceries, connected vehicles enabling in-car purchases. Question: **when should a device be allowed to trigger a purchase without explicit customer action?** Left open by the slides.

Omnichannel (selling consistently across channels) needs **unified systems**: central APIs and databases, so that one price change appears everywhere. Each extra channel linked in adds complexity and more points of failure. The slide asks "what happens when Nykaa changes a product price?" (open question; the principle is that one central update should reach every touchpoint).

### Failure becomes financial damage

Technical problems turn into money problems: downtime; payment gateway failure (checkout abandonment spikes); traffic surges beyond capacity; slow mobile pages (users leave after about three seconds); and breaches with regulatory penalties (India's DPDP Act). So managers should ask about uptime and recovery, payment success rates and backup providers, peak capacity, and privacy and consent. The summary line: **technology is strategy**, and managers need literacy, not specialist skill.

The slide pairs each risk with a question for managers: uptime and recovery arrangements (downtime), payment success rate and alternate providers (gateway failure), current capacity and a peak plan (surges), devices and locations giving poor experience (mobile), data safeguards, access and breach consequences (breaches), privacy, consent and security measures (regulation).

> **Extra context (not on the slides):** "Peak capacity" is simply whether the system was built for the busiest hour, not the average one, as on a big sale day.

## Session 5: Security

### Why e-commerce is exposed

The slides give five reasons: identity must be verified remotely, stored credentials can be stolen, attacks can be automated, third-party integrations widen the surface, and the business must be available 24/7. The stakes are financial, operational and reputational.

> **In class:** An activity presented several incidents at once (an outage, an account takeover, tampered orders, data shared without consent). The task was to rank them by what is at stake: revenue, trust, customer harm, legal exposure and continuity. The lesson is that you will rarely fix everything at once, so prioritise by consequence.

### Six dimensions of security

1. **Integrity**: data is not altered.
2. **Confidentiality**: only authorised people can access it.
3. **Non-repudiation**: no party can deny its role in a transaction; this supports disputes and chargebacks.
4. **Privacy**: control over how data is used, even when access is legitimate.
5. **Authenticity**: identity is verified.
6. **Availability**: access when needed.

(Extra context: a quick way to separate the last two pairs is that confidentiality is about who may see data, privacy about what may then be done with it.)

### Four pillars

Security is not only technology. The four pillars are **technology** (encryption, firewalls, WAF, biometrics, AI anomaly detection), **policy** (acceptable use, retention, access control, incident response), **procedure** (audits, training, vendor governance, SLAs) and **law** (DPDP 2023, GDPR, PCI-DSS, IT Act). The slides call security socio-technical: a costly firewall fails if staff click phishing links.

## Session 6: Payments

### Six actors

A card or online payment involves more parties than just buyer and seller: the **customer**; the **merchant**; the **payment gateway** (secure transmission, settlement, compliance and fraud checks); the **acquiring bank** (the merchant's bank); the **payment network** (for example NPCI); and the **issuing bank** (the customer's bank, which authorises the funds).

### Six stages

1. **Request**: the customer initiates payment.
2. **Authorisation**: the issuer checks credentials and funds.
3. **Capture**: the merchant confirms it is collecting.
4. **Settlement**: funds move from issuer to acquirer.
5. **Payout**: money reaches the merchant's bank.
6. **Reconciliation**: the firm matches orders to bank and gateway records.

> **Extra context (not on the slides):** Authorisation versus capture is like a hotel holding an amount on your card at check-in and charging it at check-out: the hold proves the money exists, the capture actually takes it.

### Method choice is a business decision

Which payment methods to offer is judged on six criteria: customer preference, transaction cost, success rate, fraud exposure, refund experience and settlement time. The slides' summary: UPI and wallets are cheap, convert well on mobile and refund instantly; cards suit high-value users but carry chargeback risk; cash on delivery and buy-now-pay-later bring trust and reach but also fake orders, returns and working-capital strain. The slide asks "why not offer every payment method?" and leaves it open; its stated principle is that payments are business decisions reflecting managerial impact.

### Diagnose the stage before the root cause

When a payment goes wrong, first ask which stage failed:

- No debit: authentication or authorisation.
- Debited but no order: callback or order creation.
- Paid twice: duplicate authorisation or retries.
- Refund delay: refund processing or issuer posting.
- Finance cannot match payment to order: reconciliation.

Then choose the action: retry, reconcile, refund, communicate or escalate. The slide's diagnostic principle: the symptom only shows the customer-visible outcome, so managers must trace the transaction across gateway, bank, network, order and reconciliation layers. The slide also lists **what management should check** for each:

- No debit: bank decline reason, gateway/API timeout, authentication result, fraud/risk rejection.
- Debited, no order: payment transaction ID, capture status, merchant webhook and operation logs, reconciliation.
- Paid twice: duplicate transaction IDs, repeated clicks or retries, duplication control, order timestamps.
- Refund delay: refund reference, provider status, whether the refund time has elapsed, issuer-bank posting or reversal status.
- Finance cannot match: order ID to payment ID mapping, settlement batch, partial or refund adjustments, provider reports.

### Health metrics

Six numbers tell you whether payments are healthy: **success rate** (share of completed transactions; payment-funnel health), **checkout abandonment** (customers leaving before payment; friction or missing preferred methods), **failure by method** (comparing providers to spot gateway-specific issues), **refund turnaround** (time to process returns; affects satisfaction and loyalty), **chargeback rate** (signals fraud or deep dissatisfaction, hurting merchant standing) and **cost per transaction** (balancing low fees against success rates to find the genuinely cheapest option).

### Fraud: ten attacks, four categories

The slide names ten attacks every manager must recognise:

1. **Account takeover (ATO)**: a fraudster uses stolen credentials to access customer accounts and redirect orders.
2. **Credit card testing**: bots run thousands of micro-transactions to validate stolen card numbers before bulk fraud.
3. **Chargeback / friendly fraud**: the customer receives the goods, then disputes the payment with the bank, so the merchant loses both product and payment.
4. **Triangulation fraud**: the fraudster sells a product cheaply through a fake storefront, then buys it from a real retailer with a stolen card and ships it to the original buyer; the victim is the cardholder.
5. **Coupon / promo abuse**: multiple fake accounts exploit new-user discounts and referral bonuses.
6. **Refund fraud (INR)**: a customer claims non-delivery of items that were delivered, to extract a refund.
7. **Fake returns**: empty boxes or wrong items returned with valid return labels.
8. **App clone scam**: a fake app that looks identical to the legitimate platform harvests login credentials.
9. **Credential stuffing**: bots test credentials from breach databases at scale on login pages.
10. **Flash-sale bot attack**: scripts buy out discounted inventory instantly, locking real customers out.

They fall into four categories: **identity fraud** (account takeover, credential stuffing, app cloning), **payment fraud** (card testing, triangulation, chargeback or friendly fraud), **promotion abuse** (coupon abuse, flash-sale bots) and **fulfilment fraud** (refund fraud, fake returns). The slide's message: design controls around the specific mechanism of abuse, not one undifferentiated risk.

### Fraud controls follow the whole journey

Controls are needed at four points: **discovery** (fraud can enter during initial discovery and identity-verification stages, so security starts before payment), **browsing and cart** (monitoring customer intent as users browse and add items), **payment** (a critical friction point: multi-factor authentication improves security, but extra verification steps may lower conversion) and **post-payment** (transaction-data analysis detects anomalies while balancing security and customer effort). Account-integrity controls and strict return policies reduce abuse but can harm the customer experience if applied excessively. The final assessment weighs security against friction.

> **In class:** The **10-minute Infrastructure and Risk challenge**: for your assigned industry, pick one critical business challenge and trace how technology affects it, answering four questions. Which one infrastructure layer is most critical, and why? Which one mobile or digital capability (5G, NFC, QR, voice, AR/VR, IoT-triggered, other) would improve performance or create advantage? What is the most serious failure, security or fraud risk this dependence creates? What should management prioritise? Output: a 60-second answer in the format *business challenge, critical infrastructure layer, technology opportunity, key risk, management priority*. The slides give no answers; it is an application exercise.

## Putting it together

Infrastructure carries the transaction, security protects it, payments move the money. The shared habits: locate the failing layer or stage before choosing a fix, judge choices by trade-offs (cost, success, fraud, friction), and treat technology as strategy.

## Likely exam questions

1. **Explain the five infrastructure layers and why failures lower down are worse.** Describe each layer briefly; built bottom-up, fail top-down: a UI fault hurts one feature, a physical fault stops everything.
2. **Apply the six security dimensions to a scenario.** Define integrity, confidentiality, non-repudiation, privacy, authenticity and availability; match each to the incident; mention the four pillars.
3. **Walk through a card payment with all actors and stages.** Six actors, six stages from request to reconciliation, noting where the issuer, acquirer and gateway act.
4. **Customers were debited but got no order. Diagnose and respond.** Identify the stage (callback or order creation), check the transaction ID, capture status and webhook logs, then retry, reconcile, refund, communicate or escalate.
5. **Recommend payment methods and fraud controls for a new store.** Use the six criteria and trade-offs (UPI cheap and fast, cards chargeback risk, COD fake orders); define the relevant attacks, place controls at discovery, cart, payment and post-payment, and weigh MFA against conversion.
