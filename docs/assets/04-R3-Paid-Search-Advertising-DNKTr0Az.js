const e=`# R3: Paid Search Advertising (Darden note UV6769)

## Key Concepts

- **Argument**: paid search runs on online auctions, so do not bid equally across searchers; bid by each searcher's expected value, using analytics (regression, cluster analysis) on campaign data.
- **What it is**: results show **organic** (algorithm-ranked, shaped by site architecture) and **paid** (advertisers pay per keyword) links; paid improves with analytics because of its data volume. It is **pay-per-click**, based on the **maximum CPC bid**. The engine charges just above the next-highest bid, so actual cost can be well below the maximum; daily caps control spend.
- **Vs traditional advertising**: search **targets intent**, reaching people as they express interest, whereas traditional ads push messages and can create demand. Search therefore mostly captures **existing demand** and is weaker for unknown new products. Google dominates paid search. Bids can vary by context: search term, device, time of day, location.
- **Metrics**: visits (sessions) vs visitors (people); abandonment rate (abandoned carts / carts created); impressions ("opportunities to see"). Four cost metrics = ad cost / impressions, clicks, orders, customers acquired. **CTR** = clicks / impressions, but a click is only a step to sale. **Quality score** = estimate of relevance of ad, keywords and landing page; **realised CPC** = actual cost from bid, next bid and quality score.
- **Strategic objective**: match ad and price to the consumer's intent at that moment. Ad types: **text ads** (about a dozen words) and **product listings** (pictorial, growing in e-commerce). Challenges: relevant copy for millions of keyword combinations, controlled copy tests (better CTR makes the engine serve the ad more), and **landing pages** that take users to the exact product, not the home page.
- **CLV-based optimisation**: make **customer lifetime value** the objective, not conversion rate or orders, since orders differ in value. If a keyword attracts a segment with higher CLV, bid more on it even when click and conversion rates match. Also consider margins and return rates (shoes returned more than paint), lead value, and offline behaviour (browse mobile, buy in store). Granular tracking confirms or corrects intuition.
- **Keyword clouds** handle **sparse data** in the long tail: group similar keywords into families and similar locations into groups to gain statistical power. Many keywords cost nothing extra (pay per click). **Cluster analysis** groups keywords as it groups customer segments, since keywords reflect intent.
- **Enhanced campaigns (Google, 2013)**: earlier, each modifier (device, location) needed its own full campaign, which did not scale. Now one keyword version with bid adjustments up or down by condition. Problem: adjustments **stack on one another**, so raising a bid for one condition (smartphone near a store) can unintentionally raise others. Google's optimise-conversion option ignores CLV and promotions.
- **Testing and feedback loops**: refine by repeated testing; adjust a base keyword value for factors such as location, day, device, time and repeat-buyer status. **Omitted-variable danger**: a retailer's regional differences in value per click were really explained by proximity to distribution centres (shipping cost), so correcting that let it target the right zones for CLV.
- **Appendix, ranking and pricing**: **rank number = max CPC bid x quality score**; highest rank gets the top slot, so a higher quality score can beat a higher bid, and a low bid can lose despite good quality. **Actual CPC** = the minimum needed to hold your position = next-ranked rival's rank / your quality score + $0.01. This resembles a **second-price sealed-bid auction** (winner pays the runner-up's level, not its own bid), which research finds encourages participation and bidding true willingness to pay and gives a higher average clearing price than first-price.
- **Takeaways**: paid search matches offers to searching consumers; analytics ties ad price to customer value; keywords can be segmented like customers; improvement comes via feedback loops.

## Why This Matters

Links the SEM mechanics (auction, quality score, CPC) to value-based bidding so spend follows customer worth, not clicks.

## Relevance for Exams / Cases

Explain intent targeting and its limit, compute rank and actual CPC, justify CLV over conversion, handle sparse keywords, spot omitted variables.
`;export{e as default};
