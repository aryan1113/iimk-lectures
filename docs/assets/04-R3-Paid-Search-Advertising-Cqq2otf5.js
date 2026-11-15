const e=`# R3: Paid Search Advertising (Darden note UV6769)

This reading explains how paid search advertising works and, more importantly, how to bid smartly. Search ads are sold through online auctions, so the note's central argument is that you should not bid the same amount for every searcher. Bid according to each searcher's expected value to your business, using analytics on campaign data. It links the mechanics you saw in the media session (auction, quality score, CPC) to the idea of spending in line with customer worth rather than clicks.

## The opening analogy: hat, espresso maker, Ferrari

The note opens with a story. You want a baseball cap, an espresso maker and a Ferrari F430, and you would pay about $10, $1,000 and $150,000 respectively. Not understanding auctions, you split your whole budget evenly and bid the same average, about $50,337, on each item. You win the hat and the espresso maker (wildly overpaying) and lose the Ferrari.

The point is that paid search can go wrong in exactly this way. Replace the products with **customers of different worth**: some are hat-buyers, some are Ferrari-buyers. Because campaigns generate lots of data about customers, there is no need to throw the same money at everyone. Using linear and logistic regression and cluster analysis, managers can avoid spending $50,000 on a customer who only wants a hat.

## What paid search is

A search results page shows two kinds of links. **Organic** links are ones the engine's algorithm has judged valuable; they are shaped mostly by website architecture. **Paid** links are placed by advertisers who pay for the keyword searched. Because paid search produces so much data, its returns can be improved through marketing analytics. In the reading's car insurance example, Progressive led the organic results while Allstate and Geico headed the paid ones.

It is **pay-per-click**. The advertiser states a **maximum CPC bid**, the most it would pay for one click. The note simplifies by saying the engine typically sells the slot "at a rate just above the next-highest bid", so the average cost actually paid can be well below the maximum. (This is the reading's simplification. The appendix below shows the full rule, which also brings in the quality score, so the two are consistent.) Advertisers can set maximum daily spends to control cost.

### Market context

Search is the dominant online marketing vehicle and still growing, though display advertising has recently been growing faster. **Google** has about 80% of paid search ads and effectively makes the rules; **Bing** holds most of the remaining 20%. **Comparison shopping engines** such as Shopzilla and Amazon matter for firms whose products are sold there. Facebook's pay-per-click offering is different in kind: display ads pushed toward people who have shown interest in product categories and lifestyles.

### Search versus traditional advertising

Search **targets intent**: it catches people at the very moment they express interest. Traditional advertising (direct mail, store signs, TV) pushes the message even to people who are not looking, and so can **create demand**. The note says search is "more akin to the yellow pages": the plumber's ad appears when someone looks for a plumber. The consequence is that it mostly **captures existing demand** and may be weak for a new product nobody has heard of.

Auctions can reflect context: the search term ("car insurance" versus "cheap car insurance"), the device, the time of day and the location. The reading notes that people buy more at some times than others: someone searching at 1 a.m. may just be making a wish list, while a 9 a.m. work search is more likely to be efficient and purposeful.

## The metrics

- **Visits (sessions)** count sessions on a website; **visitors** count the people making them (the same as unique visitors).
- **Abandonment rate** = abandoned shopping carts / carts created.
- **Impressions** are opportunities to see the ad (many are never perceived). Less refined measures are **page views** (times a website is accessed) and **hits** (file requests). With one ad per page, impressions equal page views; with several, ad impressions exceed page views.
- **Four cost metrics**: advertising cost divided by impressions, clicks (CPC), orders, and customers acquired. All four are calculated the same way.

> **Gloss (not the reading's wording):** each divisor sits further down the path to a sale, so cost per customer acquired is closest to real business results.

- **CTR** = clicks / impressions, the share of impressions that make a user click. The reading warns that a click is only a step toward the sale, so other metrics are needed to judge real value.
- **Quality score**: an estimate of the relevance of your ads, keywords and landing page to the person seeing the ad. **Realised CPC**: the actual amount paid, a function of your bid, the next-highest bid and the quality score.

## Strategic objective: match the ad to the moment

The goal is to marry the ad, and the price paid for it, to the consumer's **intent at the moment**. Two ad types: **text ads** (about a dozen words) and **product listings** (pictorial, growing in e-commerce).

The difficulty is greater than in display advertising. A retailer like Wal-Mart needs separate campaigns for, say, televisions (high definition, hi-def, HD, flat screen, LCD) and clothing (blouse, skirt, dress), covering millions of search-term combinations. Managers must also run **controlled copy tests**: better CTR leads the engine to see the ad as relevant and serve it more. And the **landing page** should take people to the product they searched for rather than the home page, because consumers expect that.

The most critical element is bidding: since customers differ in value, the bid should match the anticipated value of the traffic, and a good system measures the value extracted from each user to predict similar ones.

## CLV-based optimisation

Early paid search focused on conversion rate. The note argues the objective should instead be **customer lifetime value (CLV)**, because all orders are not equally valuable.

> **Case in the reading, Sticks Kebob Shop:** from its customer base, Sticks learned that people arriving via the keywords "kids healthy fast food" tend to be in its **Health Conscious** segment (CLV $1,200), while "convenient fast food" attracts the **Convenience** segment (CLV $700). So Sticks should bid more for "kids healthy fast food" even though click-through and conversion rates for the two keywords are similar. The lesson: bid on the value of the customer the keyword brings, not on the click rate.

Other value factors the note adds: profit margins differ by product and **return rates** vary (paint is rarely returned, shoes regularly). For lead-generation campaigns, not all leads are equal. And what happens online is not the whole story: some consumers browse on mobile then buy in store, or shop on a laptop and phone a call centre, so firms should capture some of that data. Some drivers seem obvious (a "Lexus insurance" searcher beats a "cheap car insurance" one), but granular tracking confirms intuition.

## Keyword clouds and sparse data

Firms with huge keyword lists, such as big-box retailers, end up with a **long tail** of keywords with too little data to say anything reliable. The fix is to **aggregate**. At keyword level, group words with their "cousins": the firm may have sparse data on "blue steel widgets" but recognise that "blue wood widgets" behaves similarly, and together they give a statistically meaningful sample. At location level, little data on Charlottesville, Virginia might be pooled with small, higher-income cities in the southeast. Because cost rises per click, not per keyword, there is no downside to a very large keyword list, even for small firms. **Cluster analysis** groups keywords just as it groups customers, since keywords reflect the intent of similar consumers.

## Enhanced campaigns (Google, July 2013)

Google saw early that a keyword is worth different amounts on a smartphone versus a home computer, and within a mile of a store versus 100 miles away. At first each modifier needed its own campaign: a 10,000-keyword base campaign would be replicated for smartphones, tablets, and again for each geography. That did not scale. **Enhanced campaigns** collapsed this to one version of each keyword, with bid adjustments up or down by condition.

The remaining problem is that modifiers **stack on one another**. In the note's example, a firm decides smartphone traffic is worth only 20% of desktop and sets that bid at one-fifth. But within a mile of a store, smartphone traffic is worth the same as desktop, so it raises the bid by a factor of five. In Google's system this also raises the desktop bid by five times near the store, which was not intended. If it then doubles the bid again for high-value geographies, the desktop bid doubles as well. In the reading's table (base bid 5 for laptop, 1 for smartphone), the laptop figure goes 5, then 25, then 50 while the smartphone goes 1, 5, 10.

Google's optimise-conversion option helps smaller businesses somewhat, but ignores CLV and conditions such as promotions.

## Testing and feedback loops

Campaigns are refined through repeated iterations: gather data, revisit, and focus over time.

> **Case in the reading, Suck-It-Up Vacuums:** the firm finds the average search for "vacuum cleaner" is worth $0.45. The value is reduced 5% by location and 2.5% by day of the week, and raised 10% for a tablet, 3% for a wireless connection, 7% for morning and 13% for a repeat buyer. Together these make the search worth about $0.56 at that moment. The lesson: the bid is built from a base value plus adjustments for each factor you can observe.

> **Case in the reading, furniture retailer:** a retailer found significant regional differences in value per click. Further inquiry showed **proximity to shipping locations** was an omitted variable: shipping was reasonable within 100 miles of its distribution centres and skyrocketed beyond. Knowing conversion was higher inside those zones, it corrected its model to optimise CLV and target those zones more. The lesson is the **omitted-variable danger**: a hidden factor can make a visible one look important.

## Appendix: how rank and actual CPC are worked out

**Rank number = maximum CPC bid x quality score.** The highest rank gets the top slot, on the belief that people click the top ads more. The reading's example uses the keyword "cheap car insurance":

| Firm | Max CPC bid | Quality score | Rank | Position | Actual CPC |
|---|---|---|---|---|---|
| Geico | $0.40 | 1.8 | 0.72 | 1 | $0.37 |
| Progressive | $0.65 | 1.0 | 0.65 | 2 | $0.39 |
| Allstate | $0.25 | 1.5 | 0.38 | 3 | $0.01 |

The counterintuitive point: **Allstate has a better quality score than Progressive (1.5 vs 1.0) but ranks lower**, because its maximum bid is much smaller. And Geico wins despite bidding less than Progressive ($0.40 vs $0.65) because its quality score (1.8) more than offsets the lower bid. Neither bid nor quality alone decides it.

**Actual CPC** is the minimum needed to hold your position: the next-ranked firm's rank number divided by your quality score, plus $0.01. For Geico: 0.65 / 1.8 + 0.01 = $0.37 (it was willing to pay $0.40). At $0.37 Geico's rank is 0.67, just above Progressive's 0.65, while at $0.36 it would be 0.648, which would lose. Likewise Progressive pays $0.39, since at that bid its rank (0.39 x 1) beats Allstate's 0.38. Allstate, in last place, pays the $0.01 minimum.

This resembles a **second-price sealed-bid auction**, where the winner pays the runner-up's price rather than its own. (In the reading's analogy, a contractor is paid the second-lowest bidder's quote.) Search adds the quality score as a variation. Research cited says second-price auctions raise the number of people willing to take part, push them to bid their true willingness to pay, and give a higher average clearing price than first-price auctions.

## Closing thoughts

Paid search matches offers to people who are looking, and data on existing customers can tie ad price to customer value. For now the data are limited mostly to location, device and search time, but the future could bring whether someone has bought before or abandoned a cart, connection speed, home versus office, travelling at 5 or 60 mph, online versus offline buying habits, and whether they are a competitor's customer. The basics hold: vary bids to customise ads, group keywords by value like customer segments, and improve through feedback loops.

## Putting it together

Equal bids on unequal opportunities lose the valuable ones. Rank and actual CPC explain how bids become position and cost; CLV and bid adjustments explain how much to bid; keyword clouds solve thin data; testing guards against hidden factors and stacking.

## Likely exam questions

1. **Explain the hat/espresso maker/Ferrari analogy and what it means for search bidding.** Equal bids ignore value; bid by expected value of each searcher using data.
2. **Using the Geico/Progressive/Allstate table, compute ranks and Geico's actual CPC, and explain why Allstate ranks last despite a better quality score than Progressive.** Rank = bid x quality (0.72, 0.65, 0.38); Geico = 0.65 / 1.8 + 0.01 = $0.37; Allstate's bid is too low.
3. **Why use CLV rather than conversion rate? Use Sticks Kebob Shop.** Similar click and conversion rates but $1,200 vs $700 CLV, so bid more on the healthy keyword; also consider margins, returns and offline behaviour.
4. **Explain the stacking problem in enhanced campaigns.** Adjustments multiply: raising the smartphone bid 5x near a store also raises the desktop bid 5x, and again with the geography doubling.
5. **What is the omitted-variable danger and how do keyword clouds help with sparse data?** Furniture retailer and shipping distance; group similar keywords and locations to get statistical power.
`;export{e as default};
