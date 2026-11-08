# Sessions 4-6: Infrastructure, Security and Payments

## Key Concepts

**Infrastructure (Session 4)**
- **Architecture diagram (five layers)**: (1) physical and network (fibre, submarine cables, ISP tiers); (2) protocol stack (TCP/IP packet switching, IPv6); (3) web services (HTTP/HTTPS, APIs, GraphQL); (4) application and platform (cloud microservices, CDNs); (5) user interface (PWAs, headless commerce, voice UI).
- **Implementation-sequence diagram (a second five-layer model)**: physical infrastructure; network infrastructure (ISP tiers, CDN nodes, 5G); transport and protocol (TCP/IP, DNS, IPv6, SSL/TLS handshake, "can customers trust us with their data?"); application services (payment gateways, search APIs, recommendation engines, chatbots: "does the business solve customer problems?"); presentation and device layer (apps, PWAs, IoT, AR/VR: "is it delightful enough to return?"). DNS and SSL/TLS placement come from this second diagram.
- **Built bottom-up, fail top-down**: if the UI fails only that feature breaks; if the physical layer fails everything stops. Diagnosis exercise (five symptoms, no key; likely mapping inferred): app unreachable (physical), payments failing (application services), slow only in one state (network), irrelevant recommendations (application), confusing app (presentation).
- **Mobile technologies**: QR, NFC/tap-to-pay, vernacular voice, AR/VR try-on, 5G, IoT-triggered ordering; mobile is the main traffic source in India. **Omnichannel needs unified systems** (central APIs and databases so one price change appears everywhere); each added link adds complexity and failure points.
- **Failure becomes financial damage**: downtime, payment gateway failure (abandonment spikes), traffic surges beyond capacity, slow mobile pages (users leave after about 3 seconds), breaches and regulatory penalties (India's DPDP Act). Managers ask about uptime and recovery, payment success and backup providers, peak capacity, and privacy and consent. **Technology is strategy**: general managers need technology literacy, not specialist skill.

**Security (Session 5)**
- **Why exposed**: remote identity verification, stored credential theft, automated attacks, third-party integrations, 24/7 need. Stakes are financial, operational and reputational. Activity lesson: when several incidents hit at once (outage, account takeover, tampered orders, data shared without consent), rank by what is at stake (revenue, trust, customer harm, legal, continuity).
- **Six dimensions**: *integrity* (data unaltered); *confidentiality* (authorised access only); *non-repudiation* (no party can deny its role; supports disputes and chargebacks); *privacy* (control over use even when access is legitimate); *authenticity* (verified identity); *availability* (access when needed).
- **Four pillars**: technology (encryption, firewalls, WAF, biometrics, AI anomaly detection); policy (acceptable use, retention, access control, incident response); procedure (audits, training, vendor governance, SLAs); law (DPDP 2023, GDPR, PCI-DSS, IT Act). Security is socio-technical: a costly firewall fails if staff click phishing links.

**Payments (Session 6)**
- **Six actors**: customer; merchant; payment gateway (secure transmission, settlement, compliance, fraud checks); acquiring bank (merchant's); payment network (e.g. NPCI); issuing bank (customer's; authorises funds).
- **Six stages**: request; authorisation (issuer checks credentials and funds); capture (merchant confirms collection); settlement (funds move issuer to acquirer); payout (to merchant's bank); reconciliation (match orders to bank and gateway records).
- **Method choice is a business decision, not a feature**, judged on six criteria: customer preference, transaction cost, success rate, fraud exposure, refund experience, settlement time. UPI/wallets: cheap, mobile conversion, instant refunds; cards: high-value users but chargeback risk; COD/BNPL: trust and reach but fake orders, returns and working-capital strain.
- **Diagnose the stage before the root cause**: no debit (authentication/authorisation); debited but no order (callback or order creation); paid twice (duplicate authorisation or retries); refund delay (refund processing or issuer posting); finance cannot match payment to order (reconciliation). Then retry, reconcile, refund, communicate or escalate.
- **Six health metrics**: success rate, checkout abandonment, failure by method, refund turnaround, chargeback rate, cost per transaction.
- **Fraud, four categories** (ten attacks): *identity* (account takeover); *payment* (card testing, triangulation, chargeback/friendly fraud); *promotion abuse* (coupon abuse, flash-sale bots); *fulfilment* (refund fraud, fake returns). Design controls around the mechanism, across the whole journey, balancing security against friction (MFA improves safety but may lower conversion).

## Why This Matters

These layers are invisible when working and the main source of lost revenue and trust when they fail.

## Relevance for Exams / Cases

Locate the failing layer, apply the six security dimensions, trace a payment failure to its stage, and recommend payment methods and fraud controls with trade-offs.
