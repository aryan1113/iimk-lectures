const e=`UV6769
Rev. May 3, 2018
Paid Search Advertising
You’re in the market for a baseball cap, an espresso maker, and a Ferrari F430 (lucky you). You decide
you’d like to purchase each of the items in an online auction. You’d like to pay $10 for the hat, $1,000 for the
coffee maker, and $150,000 for the Ferrari, so you set aside $151,010 to make sure you land your items.
Without understanding the nuances of the bidding structure, you decide to take an average of your total
budget and allocate that as your bid amount on each item—$50,336.67 for the hat, $50,336.67 for the espresso
maker, and $50,336.67 for the Ferrari.
Much to your dismay, you later learn you’ve won the auctions for the hat and espresso machine but missed
out on the Ferrari. As ridiculous as the strategy sounds, this is what can happen when businesses run paid
search advertising campaigns without trying to optimize or target their efforts to the business context and
nuances of the system at hand.
Imagine that instead of different products such as hats and Ferraris, you are targeting customers with
different levels of worth. Modern paid search advertising campaigns are based on the technology of online
auctions—they allow businesses to bid on the opportunity to put their ads in front of certain types of customers.
Fortunately, there is no need for companies to divide their budget equally and throw the same amount of money
at every customer regardless of his or her expected value. Instead, the campaigns generate enough data about
those customers to ensure that the companies know what the customers’ values are before deciding whether it
is worth it to place their ad in front of them.
Using linear and logistic regressions and cluster analyses, modern marketing managers can optimize their
paid search advertising campaigns to ensure that they don’t spend $50,000 on a customer who only wants to
buy a hat. In this note, you will learn what paid search advertising is, the principal metrics used to track the
success of the campaigns, the strategic objective of paid search, the relationship between customer lifetime
value and search ads, how to overcome sparse data problems using keyword clouds, and the nature of Google
AdWords’s enhanced campaigns.
What Is Paid Search?
Paid search advertising is one strategy companies can use to increase their digital visibility. It is part of a
broader view of search engine optimization (SEO), the method of improving a company’s performance in
keyword searches on popular search engines (e.g., Google, Bing, and the like).
When a user types keywords into a search engine (e.g., “car insurance”), two types of results are listed:
websites the engine’s algorithm has organically determined to be valuable and websites advertisers have paid to
This technical note was prepared by Shea Gibbs, Research Assistant; Rajkumar Venkatesan, Bank of America Research Professor of Business
Administration; and George Michie, Chief Scientist, RKG Group. Copyright  2013 by the University of Virginia Darden School Foundation,
Charlottesville, VA. All rights reserved. To order copies, send an email to sales@dardenbusinesspublishing.com. No part of this publication may be reproduced, stored
in a retrieval system, used in a spreadsheet, or transmitted in any form or by any means—electronic, mechanical, photocopying, recording, or otherwise—without the permission of
the Darden School Foundation. Our goal is to publish materials of the highest quality, so please submit any errata to editorial@dardenbusinesspublishing.com.
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 2 UV6769
promote based on the keyword searched (see Figure 1). Because of the large amounts of data produced in paid
search advertising campaigns, the returns from paid search advertising can be improved through marketing
analytics, whereas organic search results are influenced more by website architecture.
The structure of paid search advertising has become increasingly complex as additional granularity has been
introduced into the process, but the basis is still the maximum “cost-per-click” (CPC) bid, which is the highest
amount an advertiser would be willing to pay for an individual click. The search engine will typically sell the
link placement to the highest bidder at a rate just above the next-highest bid. This means the maximum cost
per click a company would be willing to pay can be considerably higher than the average cost they actually pay.
To control spending, search engines allow marketers to specify maximum daily spends. For more information
on how search engines determine CPC and an ad’s rank among other search results, please see the Appendix.
The search engine provider allows the advertiser to bid how much it would be willing to pay for the user
to click on its link (a “pay-per-click” pricing structure). If the company’s bid is high enough, its ad will be placed
at the top of the page. Although payment is made only when someone clicks on the ad, the advertiser can be
pushed farther down the page if competitors’ ads are more effective at producing clicks. In Figure 1,
Progressive is the first company listed in the organic search returns, and Allstate and Geico are listed at the top
of the two groups of paid search returns.
Figure 1. Paid search results.
Source: https://www.google.com/#q=car+insurance. Google and the Google logo are registered trademarks of Google Inc., used with permission.
Although search is only one of the platforms companies can use to increase their digital visibility, it is the
dominant online marketing vehicle and is still growing (see Figure 2). Display advertising has been growing
faster than search in recent years, but digital media remains largely weighted toward search. Search advertising
is distinctive from most other forms of marketing media in that it targets intent: it captures prospective
customers right at the moment they are expressing an interest in a company’s product. This makes for a
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 3 UV6769
powerful tool that can deliver a robust return on investment if the company can deliver an offer that resonates
with the customer.
Figure 2. Interactive marketing spending in the United States, 2011–16.
Data source: Forrester Research Interactive Marketing Forecasts, 2011–16.
Furthermore, modern paid search systems allow their advertisers to stipulate exactly what they are willing
to pay for a given customer based on everything they know about him or her. This auction process can account
for the specific search terms entered into a system (“car insurance” versus “cheap car insurance”), the type of
device on which the search is being conducted, the time of day of the search, and the location of the person
searching, allowing a company to bid different amounts based on how valuable they think the searcher might
be. For example, data generated by companies using paid search advertising has shown that people are more
likely to buy at certain times of the day than at others. Individuals searching at 1:00 a.m. might just be making
a wish list, but those searching at 9:00 a.m. while at work typically are trying to be more efficient.
It is important to remember that paid search advertising is different from traditional advertising, which
pushes a firm’s message to consumers even when they are not looking for its products. Direct mail, store
signage, and television advertisements (to name a few) are capable of creating demand by putting a company’s
message in front of people who have been identified as likely customers but who don’t yet realize they want its
products. This is a powerful form of advertising in that the advertiser has complete control of the campaign,
but it isn’t the way search works. Search is more akin to the yellow pages in that the advertisement for a
plumbing service shows up when someone is looking for a plumber.
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 4 UV6769
Again, paid search advertising can be an effective marketing channel, but it is most likely to capture only
existing demand. If you have a new product or service that no one has ever heard of, search may not be as
effective.
Google is the largest and most important player in the paid search advertising arena. The search engine has
captured about 80% of the market for these types of ads and essentially makes the rules of the game. Bing is
also a player, holding most of the remaining 20% of the market share. Comparison shopping engines such as
Shopzilla and Amazon also deserve attention from companies whose products are sold in those arenas. Other
pay-per-click advertising mediums such as the one offered by Facebook are focused on display ads pushed
toward people who have expressed an interest in categories of products and lifestyles.
Metrics of Search Advertising
Before examining the efficacy of a paid search advertising campaign, marketers should be familiar with
several metrics used to understand web traffic in general. The “visits” metric measures the number of sessions
on a website, whereas the “visitors” metric measures the number of people making those visits. (“Visitors” and
“unique visitors” are the same metric.) When a user creates a shopping cart on a website that does not result in
a purchase, this is known as abandonment, and the abandonment rate is the ratio of the number of abandoned
shopping carts to the total number of carts created by users. Table 1 offers a list of terms useful for
understanding paid search advertising metrics.
Table 1. Paid search advertising metrics.
Keyword Term identified as one a customer might use to search for a given product.
CPC Bid The amount an advertiser is willing to spend to place its ad in front of a potential
customer given the keywords entered, device used, geographic location, and other
factors.
Quality Score An estimate of how relevant your ads, keywords, and landing page (website to which
your ad points the customer) are to a person seeing your ad.
Realized CPC The actual amount an advertiser spends to place its ad in front of a potential customer.
This cost is determined as a function of bid amount, amount of the next-highest bid,
and quality score.
Source: Created by case writer. Definitions are adapted from Paul W. Farris, Neil T. Bendle, Phillip E. Pfeifer, and David J. Reibstein, Marketing
Metrics, The Definitive Guide to Measuring Marketing Performance (Upper Saddle River, NJ: FT Press, 2010).
The success of a paid search advertising campaign is dependent on its ability to put the right message in
front of the right consumer and influence him or her to perform an action. Impressions represent the number
of opportunities consumers are given to see an advertisement. Many recorded impressions are not actually
perceived by the intended viewer, however, so some marketers refer to this metric as “opportunities to see.”
Less refined metrics for understanding how often an ad is viewed are page views and hits. Page views
represent the number of times a website is accessed, and hits are a measure of file requests by a website. The
notion of page views was intended to more accurately measure the number of times a site has been displayed
to a user. But for marketing purposes, a further distinction must be made as to how many times an
advertisement has been viewed by unique visitors. For example, the advertisement may be a banner ad that
changes depending on the visitor. So, for a single advertisement served to all visitors on a site, impressions are
equal to the number of page views. If a page carries multiple advertisements, the total number of all ad
impressions will exceed the number of page views.
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 5 UV6769
Cost per impression, CPC, cost per order, and cost per customer acquired are the most critical marketing
metrics for paid search advertisers. All four are calculated in the same way: by dividing advertising cost by,
respectively, number of impressions, number of clicks, number of orders, and number of customers acquired.
Click-through rate is the percentage of impressions that lead a user to click on an ad. It describes the
fraction of impressions that motivate users to visit the web location intended by the advertiser. Most internet-
based businesses use click-through metrics, and the growth of paid search advertising has made them more
common. Advertisers should remember, however, that click-throughs are only a step on the road to a final sale,
and other metrics must be observed to understand the true value of a paid search ad.1
Strategic Objective
The goal of paid search advertising is in many ways to marry the ad Figure 3. Strategic objective.
a company is serving—and the price it is willing to pay for it—to the
intent of the consumer at the moment he or she sees the ad (see Intent
Figure 3).
The two most common types of ads are text ads, which contain
roughly a dozen words (see Figure 4), and product listings, which are
more pictographic and are growing in importance for e-commerce (see
Keyword Value
Figure 5). Both types of advertisement must have messages that are
appropriate and attractive to a user based on what he or she is searching Source: All figures, unless otherwise
for. noted, were created by author.
Figure 4. Google text ad.
Source: Google search,
https://www.google.com/search?q=achron+power+leds&oq=achron+power+leds&aqs=chrome..69i57.3188j0j8&sourceid
=chrome&espv=210&es_sm=122&ie=UTF-8#es_sm=122&espv=210&q=power+leds (accessed Nov. 14, 2013). Google
and the Google logo are registered trademarks of Google Inc., used with permission.
1 For more information on digital marketing metrics, refer to chapter 9 of Farris, Bendle, Pfeifer, and Reibstein, Marketing Metrics.
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 6 UV6769
Figure 5. Google product ad.
Source: Google search,
https://www.google.com/search?q=led+lights&source=lnms&sa=X&ei=gOmEUuCeHpCg4AO48IDw
CQ&ved=0CAUQ_AUoAA&biw=1680&bih=943#q=led+lights&start=10 (accessed Nov. 14, 2013).
Google and the Google logo are registered trademarks of Google Inc., used with permission.
In paid search advertising, the goal of targeting ad copy to customers becomes even more difficult to
achieve than it is when using traditional display ads. For a retailer such as Wal-Mart that sells hundreds of
thousands of products, that means creating appropriate ad copy for millions of possible search-term
combinations. For example, the company might want to promote high-definition televisions with one group of
advertisements and women’s clothing with another. That means creating a campaign that hits the top search
terms for televisions (e.g., high definition, hi-def, HD, flat screen, LCD, digital television) and a completely
separate campaign for clothing (e.g., blouse, skirt, dress, hosiery).
Management’s challenge is not only understanding how to create copy that is relevant for those different
potential search queries, but also performing controlled tests to ensure the copy resonates with the types of
users who are encountering it. This improves the advertisement’s click-through rate, and the search engine will
come to believe that the ad is relevant and serve it to customers more often.
In addition to the ad copy, the landing page to which the customer is directed must be appropriate.
Although it is simple to send every potential customer to a company’s home page, most consumers expect to
be taken directly to the product or service they are seeking.
The most critical piece of the paid advertising system is bidding on ad space. Determining exactly how
much a company is willing to pay for which customers and setting the system up to enter the appropriate bid
are complex processes. This is also where marketing analytics enters into the process, since field testing plays a
critical role in optimizing bids. Because the value of all customers is not equal, the bid a company is willing to
make on any piece of web traffic should be commensurate with the anticipated value of the traffic to the
business. A good management system should measure the value extracted from each user and use that
information to anticipate the value of similar customers in the future.
CLV-Based Optimization
One way to get the most out of paid search advertising is to set customer lifetime value (CLV) as the
objective function. In other words, the goal of the campaign should be to maximize CLV. In the earliest days
of paid search advertising, firms typically focused on optimizing conversion rate. But all orders are not equally
valuable, so measuring sales dollars rather than conversions (or number of orders) makes more sense. Consider
the example of Sticks Kebob Shop in Figure 6. Based on its analysis of the existing customer base, Sticks has
realized that customers who first visited Sticks’s website based on the keywords “kids healthy fast food” are
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 7 UV6769
more likely to belong to the Health Conscious segment of their customer base. Customers who first visit Sticks’s
website through the search keywords “convenient fast food,” however, are more likely to belong to the
Convenience segment. Sticks also knows from its customer database that customers in the Health Conscious
segment have a CLV of $1,200 and customers in the convenience segment have a CLV of $700. This would
imply that Sticks is willing to bid higher for the keywords “kids healthy fast food” than for “convenient fast
food,” even though the click-through and conversion rates for these keywords are similar.
Figure 6. Optimizing paid search bids to maximize CLV.
Health Conscious Convenience
Click-Through Conversion Click-Through Conversion
Keywords Rate Rate Rate Rate
“Kids healthy fast food” 35% 40% 5% 15%
“Convenient fast food” 10% 5% 40% 30%
CLV $1,200 $700
But there is still more to the picture: profit margin rates are also different depending on the product, and
return rates can vary significantly. For example, people who buy paint rarely return it, but shoe buyers return
their purchases regularly.
Different orders have different values to a business in the long term, so the goal of a company engaged in
a paid search advertising campaign should be to use the data it has about its existing customers’ behavior to
optimize CLV. For companies looking to generate only sales leads through their online ads, the process is
similar, as all leads are not equally valuable. Furthermore, what happens online isn’t the whole story, as some
consumers browse on a mobile device before making an in-store purchase. Others shop on a laptop and then
contact a call center. Companies must make an effort to capture some of this data in order to gain an accurate
sense of CLV.
Although some of the elements of CLV might seem obvious to the marketing manager (a customer
searching for “Lexus insurance” is more valuable than a customer searching for “cheap car insurance”), the
ability to track the performance of a paid search ad granularly allows the manager to confirm intuition.
Keyword Clouds
Figure 7. The long tail of keywords.
A challenge does arise for companies that use a
large volume of keywords, such as big-box retailers.
This leads to a number of keywords with relatively
sparse performance (see Figure 7), meaning not enough
is known about the people who click on the ads after
entering those words to make any significant claims
about who they are relative to groups of people who
click on other terms.
To account for sparse data concerns, companies
must attempt to aggregate data. For example, on the
keyword level, the company might group certain words
with their “cousins.” The firm might have sparse data
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 8 UV6769
on “blue steel widgets,” but it might recognize that the phrase “blue wood widgets” behaves in a similar fashion.
By grouping these words into families of search terms, the business can build a statistically significant data set
and make viable claims about the people who are attracted to the keywords (e.g., where they are from, how
they surf the internet, or whether they are likely to be repeat customers).
On the location level, although a firm might have little data on how a keyword performs in, for instance,
Charlottesville, Virginia, it might be able to create a statistically significant amount of data on small cities in the
southeast with above-average income levels. That data can then be used to make assumptions about what type
of keyword will be effective in those types of geographic locations.
Because there is no downside to using a very large number of keywords (the cost only increases per click,
not keyword), even smaller companies may discover some of their words do not produce a large number of
clicks, meaning little is known about the customers who are drawn to those words. One technique that can be
useful in creating keyword clouds to optimize paid search advertising campaigns is cluster analysis. Because
keywords are tied to the intent of similar consumers or consumers who are part of the same market segment,
marketers can group keywords just as they would customers in a given marketplace segment. For more about
how to perform cluster analyses, see “Cluster Analysis for Segmentation” (UVA-M-0748).2
Enhanced Campaigns
Google recognized early on that a keyword on a smartphone would be worth a different amount to a
company than the same keyword on a home computer, and a keyword entered within a mile of a brick-and-
mortar store would be worth more than the same keyword entered 100 miles away. So the company initially set
up its system to allow users to create different campaigns for each modifier to a keyword. In other words, if a
company had a base campaign of 10,000 keywords, it would create a separate 10,000-word campaign for those
keywords searched on a smartphone and another 10,000-word campaign for those keywords searched on a
tablet computer. If the company wanted to further modify the campaign for geography, it would have to create
another three campaigns for searches within a mile of a brick-and-mortar store and another three campaigns
for searches more than 100 miles from a brick-and-mortar store. This led to a replication model that was not
scalable for large customers.
To correct this problem, Google rolled out enhanced campaigns in July 2013, a system that allows
companies to modify their base campaigns. This meant firms had to condense back to a single version of every
keyword and create a system where they could bid up for certain conditions or bid down for others. But one
problem remains—the modifiers in the 2013 iteration are stacked on top of one another. For example, if a firm
determined that smartphone traffic is worth 20% of desktop traffic because it is too hard to shop on the device,
it might set its bid for keywords on smartphones to one-fifth of its bid on desktops. But if the smartphone
search is conducted within a mile of a brick-and-mortar store, the company might believe the traffic is worth
the same as desktop traffic and want to increase the bid by a factor of five. In Google’s current system, this
also increases the cost of desktop traffic for that keyword by a factor of five if the desktop is located within a
mile of a brick-and-mortar store. If the company wanted to further customize the campaign to double its bid
for smartphone users within a mile of a brick-and-mortar store who also reside in a high-value geographic
location, the desktop bid would again be doubled based on the larger bid, even if that were not the intention
(see Figure 8).
2 Rajkumar Venkatesan, “Cluster Analysis for Segmentation,” UVA-M-0748 (Charlottesville, VA: Darden Business Publishing, 2007).
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

| Page 9   |     |     |     | UV6769  |
| -------- | --- | --- | --- | ------- |

Figure 8. Enhanced campaigns.
Bid Amount for
|     |                 | Bid Amount for       | “Television” within One  |     |
| --- | --------------- | -------------------- | ------------------------ | --- |
|     | Bid Amount for  | “Television” within  | Mile of Store in High-   |     |
Device   “Television”  One Mile of Store   Value Geographic Location
| Laptop      | 5 (Base Bid)     | 25  | 50  |     |
| ----------- | ---------------- | --- | --- | --- |
| Smartphone  | 1 (20% of Base)  | 5   | 10  |     |
Search engines deliver reports that  marry each click to the geography from which it  came, and the goal of
the manager is to synthesize that information to determine the value of each type of click. For smaller
businesses, Google’s optimize-conversion option delivers advertisements with some success. The rules are
applied across the board, however, and don’t take into account CLV or conditions unique to a company, such
as promotions.
Testing and Diagnostic Feedback Loops
As with any marketing measure, paid search advertising campaigns must be refined through numerous
iterations. Marketing managers must gather the data available, revisit their campaigns, and make them more
focused over time through testing and experiments.
So how does the ability to target customers based on the different factors analyzed by search engines
actually work in reality? Imagine Suck-It-Up Vacuums determines that the average search for “vacuum cleaner”
is worth $0.45 (see Figure 9). The company then determines that the value is reduced 5% by the location of
the search and 2.5% by the day of the week, but increased 10% because the search is on a tablet, 3% because
it is done on  a wireless internet connection, 7% because the search is done in the morning, and 13% because
the person is a repeat buyer. All of these factors make the value of the search term at that moment $0.56.
Figure 9. Matching bids to value.
Medium  Bid
| Desktop—search engine          |     | $0.45  |      |     |
| ------------------------------ | --- | ------ | ---- | --- |
| More than 10 miles from store  |     |        | −5%  |     |
| Smartphone or tablet           |     | +20%   |      |     |
| Free Wi-Fi hotspot             |     |        | +3%  |     |
| Early morning                  |     |        | +7%  |     |
| Online retail checkout         |     | +13%   |      |     |
| Monday                         |     | −2.5%  |      |     |
As with any model, there is the danger of making assumptions based on incomplete data and omitted
variables. Take a furniture retailer’s campaign, shown in  Figure 10. The company wanted to determine which
regions were performing best nationally and found statistically significant differences in a variety of locations.
Further inquiry, however, determined proximity to shipping locations was an omitted variable in the model.
Shipping costs within 100 miles of the company’s discrete distribution centers were reasonable, but outside
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 10 UV6769
those locations, the costs skyrocketed. Understanding that the conversion rate was higher within those regions,
the company was able to correct its function to optimize CLV and target those zones more heavily than others.
Figure 10. Regional variance in value per click.
r
Conclusion
Paid search advertising is a powerful tool for marketers looking to match their offers with consumers who
are looking for their products. Because it is an auction-like system, wherein marketers bid an amount to put
their ad in front of a customer, the data available from existing customers’ behavior can ensure an optimal
marriage between customer value and the price of the ad.
What’s more, paid search advertising systems are only growing more powerful. For now, the consumer
data are somewhat limited to location, device, and search time, but the future offers far-reaching possibilities.
For example, consumers might be classified according to whether they have purchased anything from a
company’s website in the past or whether they have put something in their cart but never made a purchase.
Search engines might also be able to feed marketers data about the speed of the internet connection used by
customers, whether they are at home or the office, whether they are traveling at 5 miles per hour or 60, whether
they tend to buy online or offline, or whether they are existing customers of a competitor.
The basics of marketing analytics still hold true when analyzing the effectiveness of paid search advertising
campaigns. The advertisements can be customized to the needs of the advertiser through varying bid amounts.
Keywords represent customer intent, so they can be grouped in terms of their value just as customers can be
grouped into segments. And, finally, the whole process can be improved over time through feedback loops,
just like marketing measures in traditional channels.
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 11 UV6769
Appendix
Paid Search Advertising
Google Paid Search Bidding Engine1
Let us consider three firms, Geico, Progressive, and Allstate, bidding for the keywords “cheap car
insurance.” As shown in Table A1, Geico has stated that the maximum amount it is willing to pay for a single
click is $0.40. Progressive and Allstate have stated their maximum bids as $0.65 and $0.25, respectively.
Table A1. Cost-per-click calculations.
Advertising Cost-Per-Click Quality Score Rank Number Position Actual CPC
Firm (CPC) Bid
Geico $0.40 1.8 0.40 × 1.8 = 0.72 1 $0.37
Progressive $0.65 1.0 0.65 × 1 = 0.65 2 $0.39
Allstate $0.25 1.5 0.25 × 1.5 = 0.38 3 $0.01
Based on its proprietary algorithm, Google has assigned a quality score of 1.8 for Geico for the keywords
“cheap car insurance.” Progressive and Allstate have been assigned quality scores of 1.0 and 1.5, respectively.
In general, a higher-quality score indicates that the firm’s advertisement (and the firm’s products) have a higher
match with or relevance for the search keyword. This would imply that Google has determined that a consumer
who searches for the keywords “cheap car insurance” is more likely to click on Geico’s search advertisement
than to click on Progressive’s or Allstate’s advertisements.
Google uses the product of the maximum CPC bid and the quality score to compute a company’s rank
number. A firm with the highest rank number is provided the top spot in the paid search advertising listing.
The belief is that consumers are more likely to click on a paid search advertisement that is at the top of the list
than on the ads lower down the list. In this example, Geico has the highest rank number (0.72) and is provided
the top listing in the paid search advertisement section for the keywords “cheap car insurance,” followed by
Progressive, and then by Allstate. Although Allstate had a better-quality score than Progressive, it was given the
third spot, because the maximum CPC bid provided by Allstate was much lower than Progressive’s maximum
CPC bid.
The final piece of information to consider is the actual CPC paid by the advertising firms. Although Geico
was willing to pay $0.40, Google charges them only $0.37. The formula for calculating the actual CPC paid is
$0.37 = 0.65 ÷ 1.8 + 0.01
1 The explanation in this Appendix is adapted from a Google tutorial, “Search Engine Optimization Starter Guide,” 2010,
http://static.googleusercontent.com/media/www.google.com/en/us/webmasters/docs/search-engine-optimization-starter-guide.pdf (accessed Nov.
18, 2013).
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.

Page 12 UV6769
Appendix (continued)
$0.37 is the minimum Geico would have to pay to obtain the number-one position because Progressive
has a rank number of 0.65 and Geico has a quality score of 1.8. At the actual CPC of $0.37, and a quality score
of 1.8, Geico’s rank number is 0.67—and for a CPC of $0.36 and a quality score of 1.8, Geico’s rank number
would be 0.648. So, given Progressive’s quality score and maximum CPC bid, Geico would need to bid only
$0.37 to have the highest rank number.
Similarly, even though Progressive’s maximum CPC bid is $0.65, its actual CPC is $0.39. At a CPC bid of
$0.39, Progressive’s rank number would be 0.39 (0.39 × 1). This would be sufficient for Progressive to have a
higher rank number than Allstate.
This auction process is similar to the second-price sealed-bid system that is common in government
contract jobs. In the second-price sealed-bid system, the winner of the contract is paid the price quoted by the
second-lowest bidder, not the price the winning contractor itself quoted. In contrast, in a first-price sealed-bid
system, the winner would be paid the amount they themselves quoted.
The variation in the paid search advertising world is the quality score. Academic research has shown that a
second-price sealed-bid auction system increases the number of people willing to participate in the auction
system and motivates people to bid at their true willingness to pay. The second-price sealed-bid system has
been found to empirically have a higher average clearing price than a first-price sealed-bid system.
This document is authorized for use only in Prof. Ekta Srivastava's Integrated Marketing Communications.; at Indian Institute of Management - Kozhikode from Aug 2026 to Feb 2027.`;export{e as default};
