import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Stock from './Stock';

export default class News extends Component {

    static defaultProps = {
      category: 'General',
  
    }
   
    static propsTypes = {
      category: PropTypes.string,

    }



   articles = [
    
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Justine Calma",
        "title": "Can banks push Bitcoin to clean up its act?",
        "description": "Banks and asset managers have a big stake in Bitcoin, so Greenpeace wants them to crack down on the cryptocurrency’s pollution.",
        "url": "https://www.theverge.com/2023/7/11/23778688/bitcoin-energy-emissions-climate-change-banks-asset-managers-greenpeace",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/ODx_QBV2qCE_dfhHtwtaZ8W6J8I=/0x0:7144x4743/1200x628/filters:focal(3572x2372:3573x2373)/cdn.vox-cdn.com/uploads/chorus_asset/file/24763884/1235926940.jpg",
        "publishedAt": "2023-07-11T14:00:00Z",
        "content": "Can banks push Bitcoin to clean up its act?\r\nCan banks push Bitcoin to clean up its act?\r\n / Banks and asset managers have a big stake in Bitcoin, so Greenpeace wants them to crack down on the crypto… [+4372 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Kevin Hurler",
        "title": "SEC Reportedly Asked Coinbase to Halt All Trading—Except for Bitcoin",
        "description": "Coinbase’s CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities & Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. According to Armstrong, the suggestion came just before the SEC sue…",
        "url": "https://gizmodo.com/sec-asked-coinbase-to-halt-trading-except-for-bitcoin-1850691411",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/76f95899df261776c441932b344183f1.jpg",
        "publishedAt": "2023-07-31T14:55:00Z",
        "content": "Coinbases CEO Brian Armstrong reportedly told the Financial Times that the U.S. Securities &amp; Exchange Commission asked him to halt trading in the exchange with all currencies except bitcoin. Acco… [+1850 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Cheryl Eddy",
        "title": "Everyone's Favorite Knife-Wielding Robot Returns in Next Week's Futurama",
        "description": "Futurama’s new season continues its examination of 3023 by way of 2023 with next week’s “How the West Was 1010001,” which sees the gang heading to, ahem, Doge City to cash in on the bitcoin mining craze. Like most places they visit, they encounter absurdities…",
        "url": "https://gizmodo.com/futurama-hulu-new-ep-3-clips-bitcoin-crypto-wild-west-1850708869",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/11cf0e30bb3cfd27a7b0f55aa6eddfd3.jpg",
        "publishedAt": "2023-08-04T20:45:00Z",
        "content": "Futuramas new season continues its examination of 3023 by way of 2023 with next weeks How the West Was 1010001, which sees the gang heading to, ahem, Doge City to cash in on the bitcoin mining craze.… [+2351 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Emma Roth",
        "title": "PayPal launches PYUSD stablecoin backed by the US dollar",
        "description": "PayPal has launched a stablecoin called PayPal USD, starting today and “rolling out in the coming weeks.” The new stablecoin can be used for purchases and person-to-person payments.",
        "url": "https://www.theverge.com/2023/8/7/23822752/paypal-pyusd-stablecoin-cryptocurrency",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/AzUxs8UmwIY2lOByn5LIX8geWjY=/0x0:2200x1650/1200x628/filters:focal(1100x825:1101x826)/cdn.vox-cdn.com/uploads/chorus_asset/file/24835037/PayPal_stablecoin.png",
        "publishedAt": "2023-08-07T14:07:51Z",
        "content": "PayPal launches PYUSD stablecoin backed by the US dollar\r\nPayPal launches PYUSD stablecoin backed by the US dollar\r\n / PayPal USD is built on Ethereum and is 1:1 redeemable for US dollars.\r\nPayPal is… [+1960 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Matthew Fox",
        "title": "Bitcoin could soar to $180,000 before the April 2024 halving as potential BlackRock ETF helps drive demand, Fundstrat says",
        "description": "\"We anticipate [a bitcoin ETF] would attract new investors and generate increased demand for bitcoin,\" Fundstrat said.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-blackrock-etf-filing-demand-180000-crypto-halving-2023-7",
        "urlToImage": "https://i.insider.com/64bebc9fbea3440019602937?width=1200&format=jpeg",
        "publishedAt": "2023-07-24T18:47:22Z",
        "content": "Wenjin Chen/Getty Images\r\n<ul><li>The price of bitcoin could soar to $180,000 before the scheduled April 2024 halving, according to Fundstrat.</li><li>Fundstrat said a bitcoin ETF from BlackRock coul… [+2884 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "Move over, bitcoin: El Salvador's sovereign bonds haven't finished rallying - Reuters.com - OltNews",
        "description": "Move over, bitcoin: El Salvador's sovereign bonds haven't finished rallying - Reuters.com  OltNews",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vb2x0bmV3cy5jb20vbW92ZS1vdmVyLWJpdGNvaW4tZWwtc2FsdmFkb3JzLXNvdmVyZWlnbi1ib25kcy1oYXZlbnQtZmluaXNoZWQtcmFsbHlpbmctcmV1dGVycy1jb23SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-07-19T13:13:40Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "Analysis: Partnering with Coinbase could hinder bid for bitcoin ETF approval - Reuters",
        "description": "Analysis: Partnering with Coinbase could hinder bid for bitcoin ETF approval  Reuters",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvcGFydG5lcmluZy13aXRoLWNvaW5iYXNlLWNvdWxkLWhpbmRlci1iaWQtYml0Y29pbi1ldGYtYXBwcm92YWwtMjAyMy0wNy0xMy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-07-13T20:05:00Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "Before suing Coinbase, SEC asked it to trade only in bitcoin -FT - Reuters",
        "description": "Before suing Coinbase, SEC asked it to trade only in bitcoin -FT  Reuters",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMifmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvc2VjLWFza2VkLWNvaW5iYXNlLXN0b3AtdHJhZGluZy1jcnlwdG9jdXJyZW5jaWVzLW90aGVyLXRoYW4tYml0Y29pbi1wcmlvci1zdWluZy0yMDIzLTA3LTMxL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-07-31T05:06:42Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "Crypto stocks dip after bitcoin slumps to six-week low - Reuters",
        "description": "Crypto stocks dip after bitcoin slumps to six-week low  Reuters",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvLXN0b2Nrcy1kaXAtYWZ0ZXItYml0Y29pbi1zbHVtcHMtc2l4LXdlZWstbG93LTIwMjMtMDgtMDEv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-08-01T13:59:00Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "Move over, bitcoin: El Salvador sovereign bonds not done rallying - Reuters",
        "description": "Move over, bitcoin: El Salvador sovereign bonds not done rallying  Reuters",
        "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvcmF0ZXMtYm9uZHMvbW92ZS1vdmVyLWJpdGNvaW4tZWwtc2FsdmFkb3Itc292ZXJlaWduLWJvbmRzLW5vdC1kb25lLXJhbGx5aW5nLTIwMjMtMDctMTkv0gEA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
        "urlToImage": null,
        "publishedAt": "2023-07-19T12:25:08Z",
        "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "Bitcoin could hit a new high now that BlackRock's Larry Fink got 'orange-pilled' and became a true believer, billionaire Mike Novogratz says",
        "description": "\"The most important thing that happened this year in bitcoin is Larry Fink,\" Galaxy Digital CEO Mike Novogratz said.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-record-high-blackrock-larry-fink-mike-novogratz-2023-7",
        "urlToImage": "https://i.insider.com/64c7db55cf0778001967ad85?width=1200&format=jpeg",
        "publishedAt": "2023-07-31T17:57:08Z",
        "content": "BlackRock CEO Larry FinkSpencer Platt/Getty Images\r\n<ul>\n<li>Bitcoin could hit a new record high now that Blackrock's Larry Fink is a believer, Mike Novogratz said. </li>\n<li>\"The most important thin… [+2697 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "Here's how to invest $100,000 right now, according to billionaire Mike Novogratz",
        "description": "The crypto-enthusiast suggested that young and risk-tolerant investors buy Alibaba stock, silver, ether, and bitcoin.",
        "url": "https://markets.businessinsider.com/news/currencies/how-to-invest-100000-mike-novogratz-bitcoin-ether-gold-alibaba-2023-8",
        "urlToImage": "https://i.insider.com/64c8fcf1cf077800196853a9?width=1200&format=jpeg",
        "publishedAt": "2023-08-01T14:28:51Z",
        "content": "Mike Novogratz.Marco Bello / Stringer /Getty Images\r\n<ul>\n<li>Billionaire Mike Novogratz would put $100,000 in Alibaba stock, silver, gold, ether, and bitcoin.</li>\n<li>That advice is for young and r… [+2047 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "A bitcoin positive-feedback loop could more than quadruple the price beyond $120,000, analyst says",
        "description": "\"And so your point about this becoming self-fulfilling, I suspect is actually a very important driver,\" Standard Chartered's Geoff Kendrick said.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-miner-feedback-loop-120000-ripple-xrp-etf-2023-7",
        "urlToImage": "https://i.insider.com/64baccad006a5e00194a4d27?width=1200&format=jpeg",
        "publishedAt": "2023-07-23T12:30:01Z",
        "content": "Namthip Muanthongthae/Getty Images\r\n<ul>\n<li>Bitcoin could soar above $120,000 if miners keep holding onto tokens, Standard Chartered analyst Geoff Kendrick said.</li>\n<li>In an interview with Inside… [+3362 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "George Glover",
        "title": "Bitcoin is finally trading like 'digital gold' – but only because nobody cares about crypto anymore",
        "description": "Investors fled digital assets after a nightmarish 2022, and the largest token by market capitalization now trades way below its record high.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-digital-gold-crypto-crash-volatility-ftx-sbf-2023-8",
        "urlToImage": "https://i.insider.com/64cb879095fe1f0019df9fc4?width=1200&format=jpeg",
        "publishedAt": "2023-08-05T09:00:01Z",
        "content": "Bitcoin's 30-year volatility is close to a five-year low, per Bloomberg.Marco Bello/Getty Images\r\n<ul>\n<li>The price of Bitcoin is as stable as it's been for five years, according to one gauge.</li>\n… [+1737 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Michelle Mark",
        "title": "The 'crypto couple' is pleading guilty in their alleged $4.5 billion bitcoin heist. Here's how the saga unfolded.",
        "description": "Ilya Lichtenstein and Heather Morgan, an eccentric couple known for walking a leashed Bengal cat, will plead guilty in a bitcoin-laundering scheme.",
        "url": "https://www.businessinsider.com/crypto-couple-to-plead-guilty-in-45-billion-bitcoin-heist-2023-7",
        "urlToImage": "https://i.insider.com/620516e33b86990018b2afa1?width=1200&format=jpeg",
        "publishedAt": "2023-07-31T11:58:01Z",
        "content": "Heather Morgan and her husband Ilya \"Dutch\" Lichtenstein are expected to plead guilty to bitcoin laundering scheme.AP Photo/Elizabeth Williams\r\n<ul>\n<li>The \"crypto couple\" Ilya Lichtenstein and Heat… [+3568 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "mmark@businessinsider.com (Michelle Mark)",
        "title": "'Crypto couple' husband confesses to being the original Bitfinex hacker during plea hearing",
        "description": "Ilya Lichtenstein pleaded guilty to conspiring to launder the stolen cryptocurrency, and even admitted to the original 2016 Bitfinex hack.",
        "url": "https://www.businessinsider.com/crypto-couple-husband-admits-to-bitfinex-hack-at-plea-hearing-2023-8",
        "urlToImage": "https://i.insider.com/620467843b86990018b2a8cb?width=1200&format=jpeg",
        "publishedAt": "2023-08-03T17:41:50Z",
        "content": "Ilya Lichtenstein pleaded guilty on Thursday to a $4.5 billion bitcoin-laundering scheme in which they plotted to sell cryptocurrency stolen during the 2016 hack of Bitfinex.\r\nLichtenstein, a Russian… [+2239 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "msmash",
        "title": "BlackRock Has 'Responsibility To Democratize Investing', Including in Crypto, Larry Fink Says",
        "description": "BlackRock's move into crypto fits into the asset management giant's broader mission of creating products that are easy to use and cheap for investors, CEO Larry Fink said Friday. From a report: \"We believe we have a responsibility to democratize investing. We…",
        "url": "https://news.slashdot.org/story/23/07/14/1911231/blackrock-has-responsibility-to-democratize-investing-including-in-crypto-larry-fink-says",
        "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
        "publishedAt": "2023-07-14T19:20:00Z",
        "content": "\"We believe we have a responsibility to democratize investing. We've done a great job, and the role of ETFs in the world is transforming investing. And we're only at the beginning of that,\" Fink said… [+786 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "Bitcoin was the only cryptocurrency the SEC asked Coinbase not to delist, CEO says",
        "description": "The Securities and Exchange Commission asked Coinbase to delist virtually all its crypto assets, CEO Brian Armstrong told the Financial Times.",
        "url": "https://markets.businessinsider.com/news/currencies/bitcoin-crypto-token-sec-coinbase-delist-gary-gensler-brian-armstrong-2023-7",
        "urlToImage": "https://i.insider.com/64c7bbb4cf077800196788c7?width=1200&format=jpeg",
        "publishedAt": "2023-07-31T15:16:39Z",
        "content": "Coinbase CEO Brian Armstrong.Patrick Fallon/Getty Images\r\n<ul>\n<li>The Securities and Exchange Commission asked Coinbase to delist over 200 crypto assets, CEO Brian Armstrong said.</li>\n<li>He told t… [+2601 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Gordon Jackson and James Whitbrook",
        "title": "It's Time For Even More Casting Rumors for Fantastic Four",
        "description": "Final Destination’s Jeffrey Reddick says the sixth film is ready to enter production—as soon as the SAG-AFTRA strike comes to an end. Dracula strikes in even more footage from Last Voyage of the Demeter. Plus, you’re not ready for the first details about Rive…",
        "url": "https://gizmodo.com/fantastic-four-casting-rumors-sue-storm-vanessa-kirby-1850703547",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/42c099e27de9e20476aba1b5d4f5d590.png",
        "publishedAt": "2023-08-04T14:00:00Z",
        "content": "Final Destinations Jeffrey Reddick says the sixth film is ready to enter productionas soon as the SAG-AFTRA strike comes to an end. Dracula strikes in even more footage from Last Voyage of the Demete… [+3331 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "msmash",
        "title": "Crypto Miner Hive Drops 'Blockchain' From Name in Pivot To AI",
        "description": "The crypto-mining company formerly known as Hive Blockchain Technologies is pivoting to artificial intelligence and web3, and has changed its name accordingly. From a report: The Vancouver-based miner has dropped the \"blockchain\" marker and said that its new …",
        "url": "https://slashdot.org/story/23/07/12/1923257/crypto-miner-hive-drops-blockchain-from-name-in-pivot-to-ai",
        "urlToImage": "https://a.fsdn.com/sd/topics/ai_64.png",
        "publishedAt": "2023-07-12T19:23:00Z",
        "content": "The Vancouver-based miner has dropped the \"blockchain\" marker and said that its new branding as Hive Digital Technologies is intended to reflect \"its mission to drive advancements\" in AI applications… [+688 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "US stocks fall as bond yields jump and investors await Apple, Amazon earnings",
        "description": "Apple and Amazon stock traded mostly flat as investors waited for the mega-cap tech firms to release second-quarter results.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-apple-amazon-earnings-price-bond-yields-2023-8",
        "urlToImage": "https://i.insider.com/5e8f5b15c0232051c357299d?width=1200&format=jpeg",
        "publishedAt": "2023-08-03T20:03:10Z",
        "content": "Lucas Jackson/Reuters\r\n<ul>\n<li>US stocks closed lower on Thursday as investors awaited for Apple and Amazon earnings to roll out.</li>\n<li>The 10-year Treasury surged 11 basis points, continuing its… [+2563 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Phil Rosen",
        "title": "US stocks fall as Dow sheds nearly 350 points after Fitch credit-rating downgrade",
        "description": "Fitch pointed to a deterioration of US governance and suspect management of fiscal and debt matters, though some experts have shrugged it off.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-fitch-downgrade-fed-debt-credit-2023-8",
        "urlToImage": "https://i.insider.com/64caae27ce6977001984c24c?width=1200&format=jpeg",
        "publishedAt": "2023-08-02T20:06:18Z",
        "content": ": Traders work on the floor of the New York Stock Exchange (NYSE) on June 01, 2023 in New York City. Despite the passing the debt ceiling bill in the U.S. House of Representatives, the Dow was lower … [+2490 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
        "title": "'Rich Dad Poor Dad' author Robert Kiyosaki warns the dollar 'will die' as BRICS nations eye gold-backed alternative",
        "description": "Recently, the Russian embassy in Kenya said the BRICS group of countries are working on a common currency backed by gold in a bid to dedollarize.",
        "url": "https://markets.businessinsider.com/news/stocks/dedollarization-greenback-will-die-brics-nations-gold-backed-crypto-kioysaki-2023-7",
        "urlToImage": "https://i.insider.com/645b44a8c726bc00196aad14?width=1200&format=jpeg",
        "publishedAt": "2023-07-12T12:15:44Z",
        "content": "\"Rich Dad Poor Dad\" author Robert Kiyosaki issued a dire warning for the US dollar as BRICS nations push for an alternative to the greenback in trade and investment. \r\n\"BRICS nations announce gold ba… [+1508 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "madams@businessinsider.com (Max Adams)",
        "title": "US stocks rise after CPI shows inflation came in cooler than expected in July",
        "description": "Inflation in July was higher than June but still lower than what was expected, with markets still eyeing a Fed pause on rate hikes next month.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-reoort-july-cpi-fed-markets-2023-8",
        "urlToImage": "https://i.insider.com/64d4d6124dd2b50019c2aef4?width=1200&format=jpeg",
        "publishedAt": "2023-08-10T13:35:12Z",
        "content": "US stocks jumped on Thursday as July Consumer Price Index data showed inflation rose last month at a slower rate than economists were predicting. \r\nInflation rose 3.2% on an annualized basis in July.… [+1445 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Razzlekhan and husband guilty of $4.5bn Bitcoin launder",
        "description": "Heather Morgan and husband Ilya Lichtenstein plead guilty to money laundering and defrauding the US.",
        "url": "https://www.bbc.co.uk/news/technology-66390639",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11EBB/production/_130630437_3b05fe1d-48e9-40d6-a82c-4e555308aa5d.jpg",
        "publishedAt": "2023-08-03T18:25:11Z",
        "content": "A husband and wife cyber-crime team have pleaded guilty to trying to launder $4.5bn (£3.5bn) of Bitcoin that he had stolen in a hack in 2016. \r\nHeather Morgan and Ilya Lichtenstein were arrested last… [+4217 chars]"
        },
        {
        "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
        },
        "author": "Kevin Purdy",
        "title": "GameStop, citing “regulatory uncertainty,” winds down its crypto and NFT wallet",
        "description": "Layoffs from late last year may have hinted at company's drift away from crypto.",
        "url": "https://arstechnica.com/gaming/2023/08/gamestop-citing-regulatory-uncertainty-winds-down-its-crypto-and-nft-wallet/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/08/gamestop_nft-760x380.png",
        "publishedAt": "2023-08-04T16:20:03Z",
        "content": "Enlarge/ An artifact from an earlier time in GameStop's crypto enthusiasm, the launch of its NFT marketplace in July 2022.\r\n26 with \r\nGameStop will still sell you NFTs, but you now have to store and … [+2679 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Frances Yue",
        "title": ": Why some crypto stocks surged up to 400% this year, outperforming bitcoin",
        "description": "Analysts attributed the outperformance of crypto-related stocks this year to volatility, oversold conditions and increased institutional adoption of digital assets.",
        "url": "https://www.marketwatch.com/story/why-some-crypto-stocks-surged-up-to-400-this-year-outperforming-bitcoin-7838c938",
        "urlToImage": "https://images.mktw.net/im-796455/social",
        "publishedAt": "2023-07-18T21:23:00Z",
        "content": "Several crypto-related stocks and funds have staged a spectacular rally this year, outperforming major cryptocurrencies, despite U.S. regulators ongoing scrutiny of the industry.  Crypto exchange Coi… [+3890 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "US stocks fall after erasing earlier gains as Apple sells off on earnings",
        "description": "For the week, the Dow lost 1%, the S&P 500 fell 2.3%, and the Nasdaq dropped 2.8%.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-apple-amazon-q2-earnings-jobs-report-2023-8",
        "urlToImage": "https://i.insider.com/64cd491ef5d4870019e2046b?width=1200&format=jpeg",
        "publishedAt": "2023-08-04T20:12:51Z",
        "content": "Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks finished lower after reversing earlier gains as Apple dragged down indexes.</li>\n<li>Apple stock tumbled 4.8% as quarterly revenue continued to drop.  <… [+1806 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Cheryl Eddy",
        "title": "Futurama's Return Is Equal Parts Nostalgic and Very, Very 2023",
        "description": "After debuting in 1999, multiple Emmy winner Futurama had an on-and-off existence across Fox, the direct-to-DVD realm, and Comedy Central, with its apparent finale in 2013—until news came last year that Hulu had ordered 20 new episodes. The first 10 arrive Ju…",
        "url": "https://gizmodo.com/futurama-hulu-review-matt-groening-bender-sci-fi-robots-1850642374",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cc668863e1540609395469d4733dfcdc.jpg",
        "publishedAt": "2023-07-22T18:00:00Z",
        "content": "After debuting in 1999, multiple Emmy winner Futurama had an on-and-off existence across Fox, the direct-to-DVD realm, and Comedy Central, with its apparent finale in 2013until news came last year th… [+4094 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Frances Yue",
        "title": "In One Chart: Bitcoin finally decoupled from U.S. stocks. Here’s why it matters",
        "description": "The correlation between bitcoin and the S&P 500 has fallen to close to zero, according to a Tuesday note by Dan Morehead, founder and managing partner at Pantera Capital.",
        "url": "https://www.marketwatch.com/story/bitcoin-finally-decoupled-from-u-s-stocks-heres-why-it-matters-1888645a",
        "urlToImage": "https://images.mktw.net/im-677689/social",
        "publishedAt": "2023-07-11T15:46:00Z",
        "content": "For more than two years, bitcoin and stocks often traded in tandem with each other but maybe no longer.  The correlation between bitcoin \r\n BTCUSD,\r\n -0.74%\r\nand the S&amp;P 500 index \r\n SPX,\r\n +0.36… [+1308 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Medium"
        },
        "author": "allen farrington",
        "title": "Modeling Bitcoin Value with Vibes. This model has an R² of 0.97",
        "description": "Ever since Bitcoin has had a market price, and ever since scarcely imaginable Twitter clout has been up for grabs in attempting to predict it, such predictions have been readily forthcoming. We…",
        "url": "https://allenfarrington.medium.com/modeling-bitcoin-value-with-vibes-99eca0997c5f",
        "urlToImage": "https://miro.medium.com/v2/resize:fit:1200/0*Fl5rBO-RVGZshZcb",
        "publishedAt": "2023-07-23T20:09:20Z",
        "content": "The Market Price of Bitcoin and the Number Go Up Model\r\nvisualization of the analysis presented herein by twitter user @wearehodl123\r\nIntroduction\r\nEver since Bitcoin has had a market price, and ever… [+14194 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Chris Stokel-Walker",
        "title": "Why it’s time to clean up AI’s carbon footprint",
        "description": "Generative AI uses huge amounts of electricity and water to power it, and the problem is only going to get worse• Don’t get TechScape delivered to your inbox? Sign up for the full article hereTechnology never exists in a vacuum, and the rise of cryptocurrency…",
        "url": "https://www.theguardian.com/technology/2023/aug/01/techscape-environment-cost-ai-artificial-intelligence",
        "urlToImage": "https://i.guim.co.uk/img/media/d4ec6ec5e7ca7098603d56923f16fcbb90410501/9_37_5103_3062/master/5103.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=db1f2dcc38af4158b915417d5e024b6b",
        "publishedAt": "2023-08-01T10:40:33Z",
        "content": "Technology never exists in a vacuum, and the rise of cryptocurrency in the last two or three years shows that. While plenty of people were making extraordinary amounts of money from investing in bitc… [+11224 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Krisztian  Sandor",
        "title": "Ron DeSantis Promises to Ban CBDCs if Elected President",
        "description": "DeSantis in March signed a bill as Florida’s governor to prohibit the use of CBDC’s within his state.",
        "url": "https://finance.yahoo.com/news/ron-desantis-promises-ban-cbdcs-165534149.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Fjp2DFXjjZIYb1BTpdwKsQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/coindesk_75/36e905026ec5b7cc6028312bd6313d24",
        "publishedAt": "2023-07-17T16:55:34Z",
        "content": "Current Florida Governor and GOP presidential hopeful Ron DeSantis continued his campaign against central bank digital currencies (CBDCs), vowing a ban if he were elected president.\r\nDone, dead, not … [+921 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "US stocks climb as more signs of cooling inflation lift hopes that Fed rate hikes are near an end",
        "description": "The producer price index for June climbed 0.1%, less than Wall Street forecasts, further underlining a cooling inflation rate.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-cooling-inflation-ppi-fed-hikes-cpi-2023-7",
        "urlToImage": "https://i.insider.com/63f6566788f76900192cd8f4?width=1200&format=jpeg",
        "publishedAt": "2023-07-13T13:36:11Z",
        "content": "Federal Reserve Board Chairman Jerome Powell speaks during a news conference after a Federal Open Market Committee meeting on February 01, 2023 in Washington, DC.Kevin Dietsch/Getty Images\r\n<ul>\n<li>… [+2112 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "US stocks jump as investors cheer lowest inflation reading in over 2 years",
        "description": "Inflation dropped to 3% in June, marking the lowest inflation reading the economy has seen since 2021.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-june-cpi-report-fed-interest-rates-2023-7",
        "urlToImage": "https://i.insider.com/5a87472ed03072fc098b47fc?width=1200&format=jpeg",
        "publishedAt": "2023-07-12T13:42:51Z",
        "content": "JOHANNES EISELE/Getty Images\r\n<ul>\n<li>Headline inflation eased to just 3% in June, marking the lowest inflation reading in 2 years.</li>\n<li>Core inflation, meanwhile, posted a year-per-year increas… [+2345 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "Dow extends winning streak to 7 days as US stocks jump on strong bank earnings",
        "description": "The Dow Jones Industrial Average gained 366 points as earnings reports from Bank of America and Morgan Stanley beat expectations.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-industrial-retail-strong-bank-earnings-2023-7",
        "urlToImage": "https://i.insider.com/60400c3db46d720018b04bc2?width=1200&format=jpeg",
        "publishedAt": "2023-07-18T20:33:12Z",
        "content": "REUTERS/Shannon Stapleton\r\n<ul>\n<li>US stocks gained on a strong earnings season for among lenders.</li>\n<li>Earnings reports from Bank of America and Morgan Stanley beat expectations.</li>\n<li>But r… [+2258 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "US stocks dip as retail sales miss forecasts while earnings season ramps up",
        "description": "US retail sales rose by 0.2% in June from May, a weaker-than-expected gain and slower than the prior month's increase.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-retail-sales-earnings-2023-7",
        "urlToImage": "https://i.insider.com/64b6936676558a00189d16b1?width=1200&format=jpeg",
        "publishedAt": "2023-07-18T13:43:05Z",
        "content": "A store with on-sale items.John Keeble/Getty Images\r\n<ul>\n<li>US stocks dipped Tuesday amid weak consumer data and a rush of earnings reports.</li>\n<li>Retail sales rose by 0.2% in June from May, bel… [+1916 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Max Adams",
        "title": "US stocks trade mixed as China's GDP growth disappoints and investors brace for big week of earnings",
        "description": "China's economy grew at a slower rate than expected in the second quarter, sounding more alarms as the country's post-COVID recovery stumbles.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-2q-earnings-tech-banks-tesla-china-2023-7",
        "urlToImage": "https://i.insider.com/64b54153dcdf1100194c26bf?width=1200&format=jpeg",
        "publishedAt": "2023-07-17T13:35:39Z",
        "content": "Beijing, China.Martin Puddy/Getty Images\r\n<ul>\n<li>US stocks opened mixed to start the week, coming off a week of gains spurred by lower US inflation. </li>\n<li>China's GDP figures for the second qua… [+2472 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Phil Rosen",
        "title": "US stocks drop as bank shares slide after Moody's downgrades 10 firms",
        "description": "The ratings giant slashed the ratings for 10 lenders and also put a handful of other banks on watch for a potential downgrade.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-banks-moodys-downgrades-ratings-finance-2023-8",
        "urlToImage": "https://i.insider.com/64d240e320f1cf0019cce8bf?width=1200&format=jpeg",
        "publishedAt": "2023-08-08T13:50:38Z",
        "content": "Mario Tama/Getty Images\r\n<ul>\n<li>US stocks dropped Tuesday, and the Dow lost more than 260 points at the open.</li>\n<li> Moody's downgraded 10 US banks and also put other firms on downgrade watch.</… [+2392 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "'Rich Dad Poor Dad' author Robert Kiyosaki warns of a market 'crash landing' after US credit rating gets slashed",
        "description": "Kiyosaki, a frequent economic doomsayer, has been sounding the alarm for an epic stock market crash for years.",
        "url": "https://markets.businessinsider.com/news/stocks/market-crash-rich-dad-poor-dad-robert-kiyosaki-fitch-downgrade-2023-8",
        "urlToImage": "https://i.insider.com/61377ce0eedea900193d585c?width=1200&format=jpeg",
        "publishedAt": "2023-08-03T18:20:11Z",
        "content": "The Rich Dad Channel/YouTube\r\n<ul>\n<li>Investors should brace for an epic \"crash landing\" to hit markets and the economy, Robert Kiyosaki said.</li>\n<li>The \"Rich Dad Poor Dad\" author pointed to Fitc… [+2068 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "US stocks rise as investors digest mega-cap earnings and jobs report",
        "description": "The Labor Department's payroll report came in weaker than expected on Friday, with 187,000 new jobs created in July.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-apple-amazon-earnings-jobs-report-2023-8",
        "urlToImage": "https://i.insider.com/64ccf34c0b651c00193ace02?width=1200&format=jpeg",
        "publishedAt": "2023-08-04T13:32:02Z",
        "content": "Stock tradersDrew Angerer/Getty Images\r\n<ul>\n<li>US stocks rose as investors weighed Apple and Amazon earnings as well as payroll data.</li>\n<li>The US jobs report came in weaker than expected on Fri… [+1912 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "US stocks rise as investors look to close out strong month of gains",
        "description": "All three of the major US indices rose at least 3% in July, amid cooling inflation and a strong earnings season.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-jones-sp500-nasdaq-july-gains-2023-7",
        "urlToImage": "https://i.insider.com/64c7b2cccf077800196784b0?width=1200&format=jpeg",
        "publishedAt": "2023-07-31T13:36:12Z",
        "content": "A trader works on the floor of the New York Stock Exchange during the afternoon of December 4, 2015 in New York City.Andrew Burton/Getty Images\r\n<ul>\n<li>US stocks traded higher early Monday as inves… [+1969 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jason Ma",
        "title": "US stocks rally as recession fears ease and investors look to upcoming Big Tech earnings",
        "description": "The odds of a recession hitting the US economy in the next 12 months have fallen to 20% from 25%, Goldman Sachs said.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-recession-outlook-big-tech-earnings-tesla-2023-7",
        "urlToImage": "https://i.insider.com/623b1e5ec9edc20019f5ed35?width=1200&format=jpeg",
        "publishedAt": "2023-07-17T20:11:43Z",
        "content": "Fabrice Cabaud/Getty Images\r\n<ul>\n<li>US stocks finished higher on Monday as fears of a US recession eased on Wall Street.</li>\n<li>The odds of a recession in the next 12 months have fallen to 20% fr… [+1831 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "Dow hits 8-day winning streak as investors hope for more upbeat earnings reports",
        "description": "The Dow Jones Industrial Average's eighth straight gain marked its longest winning streak since September 2019.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-jones-winning-streak-sp500-earnings-2023-7",
        "urlToImage": "https://i.insider.com/602bde302edd0f001a8d5da6?width=1200&format=jpeg",
        "publishedAt": "2023-07-19T20:05:05Z",
        "content": "Reuters / Brendan McDermid\r\n<ul>\n<li>Stocks rose on Wednesday, with the Dow extending its winning streak to eight days.</li>\n<li>Investors are hoping for more upbeat earnings reports for the second q… [+2001 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Phil Rosen",
        "title": "US stocks rise with Dow heading for 10-day streak of gains as traders sift through earnings",
        "description": "Indexes turned higher on the final trading session of the week, with the Dow eyeing its longest winning streak since 2017.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-indexes-economy-finance-investors-fed-rates-2023-7",
        "urlToImage": "https://i.insider.com/64ba878c03c40c001a979f63?width=1200&format=jpeg",
        "publishedAt": "2023-07-21T13:52:38Z",
        "content": ": Traders work on the floor of the New York Stock Exchange (NYSE) on June 01, 2023 in New York City. Despite the passing the debt ceiling bill in the U.S. House of Representatives, the Dow was lower … [+2287 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Matthew Fox",
        "title": "Dow eyes 9-day win streak as US stocks trade mixed after Tesla, Netflix earnings",
        "description": "Initial jobless claims fell to 228,000 last week, below estimates for 242,000, suggesting that the labor market and economy are resilient.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-nasdaq-tesla-netflix-earnings-tsla-2023-7",
        "urlToImage": "https://i.insider.com/648362c7a460da0019243a95?width=1200&format=jpeg",
        "publishedAt": "2023-07-20T13:33:51Z",
        "content": "An American flag hangs behind traders working on the floor of the New York Stock Exchange (NYSE) on October 11, 2019 in New York City.Drew Angerer/Getty Images\r\n<ul><li>US stocks traded mixed on Thur… [+2560 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "'Rich Dad Poor Dad' author Robert Kiyosaki says there's one event looming in coming weeks that will accelerate de-dollarization of the global economy",
        "description": "Kiyosaki is known for being a frequent doomsayer and has warned about the \"death\" of the US dollar multiple times in the past.",
        "url": "https://markets.businessinsider.com/news/currencies/robert-kiyosaki-rich-dad-poor-dad-brics-summit-gold-dedollarization-2023-7",
        "urlToImage": "https://i.insider.com/64c3c36fcf0778001966387e?width=1200&format=jpeg",
        "publishedAt": "2023-07-28T14:30:58Z",
        "content": "The Rich Dad Channel/YouTube\r\n<ul>\n<li>\"Rich Dad Poor Dad\" author Robert Kiyosaki said de-dollarization could accelerate in the coming weeks.</li>\n<li>He pointed to an upcoming BRICS summit and predi… [+2362 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Phil Rosen",
        "title": "US stocks climb as the Dow heads for longest winning streak in 126 years",
        "description": "The Dow was looking to hold onto a historic winning streak as markets digest the latest Fed moves and higher-than-expected GDP growth.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-winning-streak-gdp-fed-inflation-2023-7",
        "urlToImage": "https://i.insider.com/5fb28114402d49001924f12a?width=1200&format=jpeg",
        "publishedAt": "2023-07-27T13:34:35Z",
        "content": "Traders work on the floor at the New York Stock Exchange (NYSE) in New York, U.S., March 2, 2020.Brendan McDermid/Reuters\r\n<ul>\n<li>US stocks climbed Thursday, with the Dow on pace for a 14-day winni… [+2413 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "US stocks extend sell-off as bond yields jump following Fitch downgrade of US credit rating",
        "description": "Investors are waiting for financials from Apple and Amazon, which are set to report earnings after the closing bell.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fitch-us-credit-downgrade-bond-yields-2023-8",
        "urlToImage": "https://i.insider.com/5fa2a0e31df1d50018218c5c?width=1200&format=jpeg",
        "publishedAt": "2023-08-03T13:46:46Z",
        "content": "Don Emmert /AFP/GettyImages\r\n<ul>\n<li>US stocks continued to slide Thursday following Fitch's US credit downgrade.</li>\n<li>The hit to America's credit rating also caused bond yields to jump.</li>\n<l… [+2384 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "Dow notches 11th straight win as traders look to big tech earnings, Fed meeting",
        "description": "The Dow notched its 11th straight winning session on Monday, marking its longest winning streak since 2017.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-11th-straight-win-tech-earnings-2023-7",
        "urlToImage": "https://i.insider.com/5e70c0d9c4854064de57e3f2?width=1200&format=jpeg",
        "publishedAt": "2023-07-24T20:11:01Z",
        "content": "Traders work on the floor of the New York Stock Exchange (NYSE) in New York City, New York, U.S., March 10, 2020.Andrew Kelly/Reuters\r\n<ul>\n<li>The Dow Jones Industrial Average notched its 11th strai… [+2254 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Matthew Fox",
        "title": "US stocks rise after banks set positive tone for 2nd-quarter earnings",
        "description": "Earnings reuslts from JPMorgan and Wells Fargo both beat analyst estimates and showed no signs of a slowing economy.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-banks-positive-tone-2nd-quarter-earnings-2023-7",
        "urlToImage": "https://i.insider.com/64b14e4c29e5fd00190ef8cf?width=1200&format=jpeg",
        "publishedAt": "2023-07-14T13:34:59Z",
        "content": "Drew Angerer / Getty\r\n<ul><li>US stocks jumped on Friday after US banks reported second-quarter earnings results.</li><li>JPMorgan and Wells Fargo both beat estimates and showed no signs of a slowing… [+2404 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jason Ma",
        "title": "US stocks trade mixed amid earnings rush and fresh economic data",
        "description": "The number of job openings in June dropped by more than expected, according to data from the Labor Department.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-earnings-jolts-ism-2023-8",
        "urlToImage": "https://i.insider.com/64c950f0048ff200190f39de?width=1200&format=jpeg",
        "publishedAt": "2023-08-01T20:07:34Z",
        "content": "Gen Z is putting more stock into careers in finance, with one in four recent graduates considering the field a top career sector.Photo by ANGELA WEISS/AFP via Getty Images\r\n<ul>\n<li>US stocks finishe… [+2032 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jason Ma",
        "title": "US stocks fall to begin new month after big rally in July",
        "description": "Later on Tuesday, the Labor Department will release job openings data, and ISM will publish its manufacturing activity index.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-august-july-rally-2023-8",
        "urlToImage": "https://i.insider.com/64676d4dcd3a9c001918519b?width=1200&format=jpeg",
        "publishedAt": "2023-08-01T13:35:07Z",
        "content": "y agTraders work on the floor of the New York Stock Exchange.Michael M. Santiago/Getty Images\r\n<ul>\n<li>US stocks dropped Tuesday, starting off a new month lower after July's big rally.</li>\n<li>Dow … [+2058 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "US stocks climb as traders hope cooler June inflation means end to Fed tightening",
        "description": "Bets that the Federal Reserve will pause rate hikes in September rose to 82% on Wednesday from 72% on Tuesday.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-cpi-economy-outlook-fed-tightening-2023-7",
        "urlToImage": "https://i.insider.com/5eb59db41441927acb5792f6?width=1200&format=jpeg",
        "publishedAt": "2023-07-12T20:05:33Z",
        "content": "Getty Images / Bryan R. Smith\r\n<ul>\n<li>US stocks climbed higher on Wednesday as traders took in good June inflation data.</li>\n<li>Consumer prices rose just 3% year over year, the lowest rate in two… [+2265 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Phil Rosen",
        "title": "Dow snaps historic win streak as US stocks fall amid more earnings results",
        "description": "After 13 consecutive days in the green, the Dow Jones Industrial Average dropped more than 200 points on Thursday.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-win-streak-ends-fed-gdp-2023-7",
        "urlToImage": "https://i.insider.com/64c2c48acf0778001965b121?width=1200&format=jpeg",
        "publishedAt": "2023-07-27T20:05:38Z",
        "content": "Timothy A. Clary/Getty Images\r\n<ul>\n<li>US stocks fell as the Dow Jones Industrial Average snapped its 13-day streak on Thursday.</li>\n<li>Treasury yields shot up after second-quarter GDP growth beat… [+2375 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Will Gendron",
        "title": "Does anyone care about crypto? Consumer transaction volume on Coinbase is down 70% from last year.",
        "description": "Coinbase reported transaction volume is way down on the crypto exchange following a prolonged Crypto Winter.",
        "url": "https://www.businessinsider.com/consumer-transaction-volume-coinbase-earnings-fell-troubling-bad-crypto-trading-2023-8",
        "urlToImage": "https://i.insider.com/62eac2d5c6987600183c781c?width=1200&format=jpeg",
        "publishedAt": "2023-08-05T16:34:34Z",
        "content": "Coinbase, whose CEO Brian Armstrong is pictured, saw transactions drop on the platform.Patrick T. Fallon / Getty Images\r\n<ul>\n<li>Coinbase released its second quarter earnings for 2023 — and the repo… [+2098 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Katie Rees",
        "title": "The Top 5 Cryptos Used By Cybercriminals on the Dark Web",
        "description": "Many hackers now deal in cryptocurrency like Bitcoin. But why? And which cryptocurrencies do they actually use?",
        "url": "https://www.makeuseof.com/top-cryptos-used-by-cybercriminals-dark-web/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/08/crypto-criminal-laptops.jpg",
        "publishedAt": "2023-08-11T15:00:25Z",
        "content": "While there are plenty of benefits crypto can offer, this industry also has a more illicit side. Cryptocurrency has become popular among cybercriminals looking to launder money and make illegal trans… [+7114 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Small Business Trends"
        },
        "author": "Joshua Sophy",
        "title": "Who Accepts Bitcoin as Payment?",
        "description": "As the top cryptocurrency, Bitcoin has seen explosive growth, but do you know who accepts Bitcoin as payment? This list is growing daily.",
        "url": "https://smallbiztrends.com/2023/07/who-accepts-bitcoin.html",
        "urlToImage": "https://media.smallbiztrends.com/2021/12/who-accepts-bitcoin.png",
        "publishedAt": "2023-07-27T07:48:59Z",
        "content": "Over the course of its existence, Bitcoin has steadily risen to become the unrivaled frontrunner in the crowded cryptocurrency market place, capturing global attention and reshaping our understanding… [+12183 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Dmytro Spilka",
        "title": "Will Bitcoin Reach a New All-Time High in 2025?",
        "description": "We've seen price runs after each halving event but is a similar rise on the cards for the future?",
        "url": "https://www.makeuseof.com/will-bitcoin-reach-new-all-time-high-2025/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/bitcoin-coin.jpg",
        "publishedAt": "2023-07-28T11:01:23Z",
        "content": "The cryptocurrency market downturns of 2022 saw the likes of Bitcoin shed their value so drastically that even after months of steady recovery, many assets remain more than 50% adrift from their old … [+6327 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Chris Matthews",
        "title": ": SEC Chair Gensler dismisses industry calls for recusal on crypto decisions",
        "description": "SEC Chair Gary Gensler has no plans to recuse himself from decisions related to cryptocurrencies, despite accusations of bias from the industry.",
        "url": "https://www.marketwatch.com/story/sec-chair-gensler-dismisses-industry-calls-for-recusal-on-crypto-decisions-646908d8",
        "urlToImage": "https://images.mktw.net/im-635756/social",
        "publishedAt": "2023-07-12T18:41:00Z",
        "content": "Securities and Exchange Commission Chair Gary Gensler has no plans to recuse himself from decisions related to cryptocurrencies, despite accusations of bias from the industry. I am well aware of my e… [+2080 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Brandy Betz",
        "title": "Disgraced U.S. Congressman George Santos Involved Crypto in Nigerian Prince-Like Scheme: NYT",
        "description": "A source told The New York Times that Santos and two others appeared to try a crypto-centric version of the classic Nigerian prince email scam.",
        "url": "https://finance.yahoo.com/news/disgraced-u-congressman-george-santos-210725963.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/3ulEhBexh0wd7YVERg0g6A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/coindesk_75/1eb34fe9b97d40f97ff058279f9f4bd1",
        "publishedAt": "2023-07-27T21:07:25Z",
        "content": "George Santos, a first-term member of the House of Representatives, is under indictment for thirteen felonies, including allegedly embezzling contributions from supporters, fraudulently collecting un… [+2041 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Conduit.rs"
        },
        "author": null,
        "title": "Conduit: Simple, fast and reliable chat server powered by matrix",
        "description": "Conduit is a simple, fast and reliable\n    chat server powered by Matrix. Conduit is an alternative to Synapse and\n    tries to be lightweight and easy to install, but it is still in development.",
        "url": "https://conduit.rs/",
        "urlToImage": null,
        "publishedAt": "2023-07-31T00:51:31Z",
        "content": "Note: This project is beta. It can be used already, but is missing some smaller features.\r\nWhat is Matrix?\r\nMatrix is an open network for secure and decentralized\r\ncommunication. Users from every Mat… [+923 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Jennifer Sor",
        "title": "US stocks rise ahead of big tech earnings and the Fed's next rate move",
        "description": "Investors are expecting the Fed to issue its last interest rate hike this week as inflation continues to cool off in the economy.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-faang-tech-earnings-fed-rate-hike-2023-7",
        "urlToImage": "https://i.insider.com/5ebbeb49fc593d69cc5af19b?width=1200&format=jpeg",
        "publishedAt": "2023-07-24T13:35:42Z",
        "content": "An American flag hangs behind traders working on the floor of the New York Stock Exchange (NYSE) on October 11, 2019 in New York City.Drew Angerer/Getty Images\r\n<ul>\n<li>Stocks moved higher on Monday… [+2675 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Matthew Fox",
        "title": "US stocks trade mixed but notch a weekly gain as earnings impress and inflation cools",
        "description": "Earnings results from JPMorgan, Wells Fargo, and BlackRock beat analyst estimates and showed no signs of a slowing economy.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-cool-inflation-earnings-drive-weekly-gain-2023-7",
        "urlToImage": "https://i.insider.com/5fecc995a644880018193e20?width=1200&format=jpeg",
        "publishedAt": "2023-07-14T20:05:24Z",
        "content": "Lucas Jackson/Reuters\r\n<ul><li>US stocks were mixed on Friday but closed higher for the week as investors cheered a cooler June inflation report.</li><li>Second-quarter earnings kicked off on Friday … [+2694 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Phil Rosen",
        "title": "US stocks trade mixed as Dow caps off its longest winning streak since 2017",
        "description": "Investors navigated choppy trading Friday as more earnings rolled in and investors readied for next week's Fed meeting.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-winning-streak-finance-banks-earnings-2023-7",
        "urlToImage": "https://i.insider.com/64bad79cbea34400195eb0a2?width=1200&format=jpeg",
        "publishedAt": "2023-07-21T20:04:23Z",
        "content": "Traders work on the floor of the New York Stock Exchange (NYSE) on March 28, 2023 in New York City.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks traded mixed Friday, with the Dow capping off a 10-da… [+2444 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Filip De Mott",
        "title": "US stocks trade mixed as the Fed begins its 2-day policy meeting",
        "description": "Tuesday marks the start of the Fed's FOMC meeting for July, while investors can also look forward to earnings reports from Microsoft and Alphabet.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-equities-fed-fomc-earnings-soft-landing-2023-7",
        "urlToImage": "https://i.insider.com/64bfcb6ded4f46001962f648?width=1200&format=jpeg",
        "publishedAt": "2023-07-25T13:36:13Z",
        "content": "US Federal Reserve Chair Jerome Powell attends a press conference in Washington, DC, on March 22, 2023.Liu Jie/Xinhua via Getty Images\r\n\n<ul>\n<li>US stocks were mixed on Tuesday as the Fed kicked off… [+2557 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Matthew Fox",
        "title": "The Dow's win streak is at risk as US stocks drop ahead of expected Fed rate hike",
        "description": "Of the 132 S&P 500 companies that have reported second-quarter earnings so far, 77% beat profit estimates by a median of 6%.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-win-streak-fed-rate-hike-2023-7",
        "urlToImage": "https://i.insider.com/64c11b3f671ed60019156717?width=1200&format=jpeg",
        "publishedAt": "2023-07-26T13:36:41Z",
        "content": "Reuters\r\n<ul><li>US stocks fell on Wednesday as investors prepare for another interest rate hike from the Fed.</li><li>Wednesday's decline could end the Dow Jones Industrial Average's 12-day win stre… [+2493 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Theron Mohamed",
        "title": "'Rich Dad Poor Dad' author warns of a massive crash in stocks - and fears the US economy will crater",
        "description": "Robert Kiyosaki, the author of \"Rich Dad Poor Dad,\" says the stock market is flashing red and the US economy faces a long and painful downturn.",
        "url": "https://markets.businessinsider.com/news/stocks/kiyosaki-rich-poor-dad-stock-market-outlook-crash-economy-depression-2023-7",
        "urlToImage": "https://i.insider.com/64b50a55dcdf1100194c22eb?width=1200&format=jpeg",
        "publishedAt": "2023-07-17T10:27:49Z",
        "content": "\"Rich Dad Poor Dad\" author Robert Kiyosaki.The Rich Dad Channel/YouTube\r\n<ul>\n<li>Robert Kiyosaki expects the stock market to crash and the US economy to suffer a historic downturn.</li>\n<li>The \"Ric… [+2666 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Matthew Fox",
        "title": "US stocks rise as investors turn attention to upcoming inflation data",
        "description": "For the Federal Reserve to cut interest rates, inflation would have to be decisively on track to near the central bank's long-term 2% target.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-july-cpi-inflation-data-interest-rates-2023-8",
        "urlToImage": "https://i.insider.com/64caae27ce6977001984c24c?width=1200&format=jpeg",
        "publishedAt": "2023-08-07T13:49:26Z",
        "content": ": Traders work on the floor of the New York Stock Exchange (NYSE) on June 01, 2023 in New York City. Despite the passing the debt ceiling bill in the U.S. House of Representatives, the Dow was lower … [+2724 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Max Adams",
        "title": "US stocks whipsaw but close higher as Wall Street mulls Fed outlook after July CPI",
        "description": "Stocks initially rallied hard after CPI data was published Thursday morning, but had given up most of those gains by the afternoon.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-july-cpi-inflation-dow-sp500-economy-2023-8",
        "urlToImage": "https://i.insider.com/64d53e737e9149001aa4462c?width=1200&format=jpeg",
        "publishedAt": "2023-08-10T20:03:47Z",
        "content": "Photo by Michael Nagle/Xinhua via Getty Images)\r\n<ul>\n<li>US stocks closed higher Thursday but gave up their biggest gains as traders assess July CPI data. </li>\n<li>Inflation last month came in at 3… [+2565 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Matthew Fox",
        "title": "US stocks finish the week mostly lower as July inflation data comes in mixed",
        "description": "Wholesale prices for July edged up more than anticipated, muddling the outlook for when the Fed may declare victory over inflation.",
        "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-mixed-inflation-data-sends-stocks-lower-2023-8",
        "urlToImage": "https://i.insider.com/5f732c1e0ab50d00184aced9?width=1200&format=jpeg",
        "publishedAt": "2023-08-11T20:03:55Z",
        "content": "Lucas Jackson/Reuters\r\n<ul><li>US stocks finished the week mostly lower as investors digest mixed inflation data.</li><li>While the July CPI report came in lower than expected, the producer price ind… [+2639 chars]"
        },
        {
        "source": {
        "id": "politico",
        "name": "Politico"
        },
        "author": "Kelly Garrity",
        "title": "Got Bitcoin? Now you can donate it to this GOP presidential candidate.",
        "description": "This candidate already takes his salary in Bitcoin. Now he'll take political donations in crypto, too.",
        "url": "https://www.politico.com/news/2023/08/04/francis-suarez-2024-bitcoin-00109880",
        "urlToImage": "https://static.politico.com/cb/d6/853e922b42a7a6a40a249d763afd/https-delivery-gettyimages.com/downloads/1258979644",
        "publishedAt": "2023-08-04T18:52:55Z",
        "content": "Officially, my campaign is accepting bitcoin, Suarez said. This is a process of developing technologies that are going to create democratizing opportunities for wealth creation and are not manipulate… [+1656 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Dominic Basulto)",
        "title": "Better Buy: Bitcoin or Bitcoin Mining Stocks?",
        "description": "Over the short term, Bitcoin mining stocks have outperformed Bitcoin. But what about over the long haul?",
        "url": "https://www.fool.com/investing/2023/08/04/better-buy-bitcoin-or-bitcoin-mining-stocks/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/742372/bitcoin-on-a-computer-chip.jpg",
        "publishedAt": "2023-08-04T10:32:00Z",
        "content": "Bitcoin(BTC -0.02%) mining stocks have easily outperformed Bitcoin this year, and it's not even close. Through the first six months of 2023, the nine biggest publicly traded Bitcoin miners were up an… [+4569 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "W Magazine"
        },
        "author": "Ilana Kaplan",
        "title": "O.C. Actor Ben McKenzie's Book 'Easy Money' Exposes the Dark Side of Crypto",
        "description": "With new book 'Easy Money,' the actor takes aim at the dark side of the cryptocurrency craze.",
        "url": "https://www.wmagazine.com/culture/ben-mckenzie-easy-money-crypto-book-interview",
        "urlToImage": "https://imgix.bustle.com/uploads/image/2023/7/20/b6fc609e-9083-4b21-8f09-d2034b7378a5-1dd787af-9c07-4b15-ac58-d5c77724675a-w_benmckenzie.jpeg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.536&fp-y=0.3422",
        "publishedAt": "2023-08-06T16:42:05Z",
        "content": "The inspiration for Ben McKenzie's literary debut came from where many great ideas emerge: getting stoned. \"I took some edibles, and I was like, 'Oh, I'll write a book,'\" the actor says over Zoom fro… [+6243 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Black House Farm",
        "description": "The Black House Farm is a lesson in merging historic architecture with contemporary design. Situated on a 20-acre farm, this project begins with renovating a 17th-century farmhouse. Its oak thatched roof, oak framing, and handmade red brick have been left...",
        "url": "https://uncrate.com/black-house-farm/",
        "urlToImage": "https://uncrate.com/p/2023/08/black-house-farm-1.jpg",
        "publishedAt": "2023-08-08T18:00:08Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Brabus Mercedes-Maybach 850",
        "description": "Brabus' latest creation goes straight to the top of the luxury food chain, remaking the Mercedes Maybach S-Class into an 850-horsepower monster. The 6.3-liter V12 gets upgraded with new internals and larger twin turbos, bringing power up to the aforementioned…",
        "url": "https://uncrate.com/brabus-mercedes-maybach-850/",
        "urlToImage": "https://uncrate.com/p/2023/08/brabus-maybach-850-1.jpg",
        "publishedAt": "2023-08-09T16:00:00Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Magnus Walker's 1977 Porsche 930 Turbo Carrera",
        "description": "Magnus Walker's love for all things Porsche cannot be understated. The fashion industry icon has built one of the most famous collections of Porsches on the planet, with everything from classic examples to wild customs. Owned by Walker since 2013,...",
        "url": "https://uncrate.com/magnus-walkers-1977-porsche-930-turbo-carrera/",
        "urlToImage": "https://uncrate.com/p/2023/08/magnus-walker-930-1.jpg",
        "publishedAt": "2023-08-09T18:55:35Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Playmobil Magnum, P.I. Ferrari 308 GTS",
        "description": "Forget the recent milquetoast reboot. Anyone who saw the original knows there's only one Thomas Magnum - and Playmobil agrees. Clearly based on the '80s series starring Tom Selleck, this play set includes Magnum in his signature Aloha shirt and...",
        "url": "https://uncrate.com/playmobil-magnum-pi-ferrari-308-gts/",
        "urlToImage": "https://uncrate.com/p/2023/07/playmobil-magnum-pi.jpg",
        "publishedAt": "2023-07-25T18:50:37Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "2006 Fleer Buyback Michael Jordan Autographed Rookie Card",
        "description": "Michael Jordan's 1986 Fleer rookie is arguably the most famous basketball card in existence. For its 20th anniversary, new company-owner Upper Deck acquired 23 well-preserved examples, had MJ sign them, and put redemption cards into the 06-07 Fleer set. With.…",
        "url": "https://uncrate.com/2006-fleer-buyback-michael-jordan-autographed-rookie-card/",
        "urlToImage": "https://uncrate.com/p/2023/08/jordan-fleer-buyback.jpg",
        "publishedAt": "2023-08-11T15:00:01Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Legent Yamazaki Cask Finish Blend",
        "description": "2023 marks Suntory's 100th anniversary. As part of the celebration, Legent - a collaboration between Jim Beam Master Distiller Fred Noe and Suntory Chief Blender Shinji Fukuyo - is releasing a limited-edition whiskey. Legent Yamazaki Cask Finish Blend began a…",
        "url": "https://uncrate.com/legent-yamazaki-cask-finish-blend/",
        "urlToImage": "https://uncrate.com/p/2023/08/legent-yamazaki-cask-finish.jpg",
        "publishedAt": "2023-08-02T21:00:01Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Wilt Chamberlain's Game-Worn 1972 NBA Finals Jersey",
        "description": "On May 1972, Wilt Chamberlain led the Lakers to their first NBA Championship. Even with a broken hand, the basketball legend scored 24 points and snagged 29 rebounds to help his team clinch the title in five games against the...",
        "url": "https://uncrate.com/wilt-chamberlains-game-worn-1972-nba-finals-jersey/",
        "urlToImage": "https://uncrate.com/p/2023/08/wilt-chamberlin-game-worn-1972-jersey.jpg",
        "publishedAt": "2023-08-02T22:52:34Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Merrimack + Stranahan's Blue Peak Canoe",
        "description": "Merrimack collaborates with Stranahan's Colorado Whiskey on a custom-built canoe. The Merrimack + Stranahan's Blue Peak Canoe rebuilds the brand's Tennessean model using aging barrels from the distillery. After the single malt whiskey was drained, the barrels…",
        "url": "https://uncrate.com/merrimack-stranahans-blue-peak-canoe/",
        "urlToImage": "https://uncrate.com/p/2023/08/merrimack-stranahan-blue-peak-canoe.jpg",
        "publishedAt": "2023-08-02T21:50:47Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Artisans de Geneve x Adam Levine Neon Rolex Daytona",
        "description": "The Swiss watch atelier unveils the Artisans de Geneve x Adam Levine Neon Rolex Daytona - a masterful reinterpretation of the iconic 116508 gold Daytona for the Maroon 5 frontman. Crafted with meticulous attention to detail, this horological marvel boasts...",
        "url": "https://uncrate.com/artisans-de-geneve-x-adam-levine-neon-rolex-daytona/",
        "urlToImage": "https://uncrate.com/p/2023/08/artisans-de-geneve-adam-levine-neon-rolex.jpg",
        "publishedAt": "2023-08-11T16:35:18Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Prince's Versace Medusa Watch",
        "description": "Avid watch collector and founder of Connoisseur of Time Paul Hoyt is partnering with eBay to sell seven of his most cherished items. Of the pieces in the collection is Prince's Versace Medusa Watch. The vintage is presented with a...",
        "url": "https://uncrate.com/princes-versace-medusa-watch/",
        "urlToImage": "https://uncrate.com/p/2023/08/princes-versace-medusa-watch.jpg",
        "publishedAt": "2023-08-11T22:22:56Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "2023 Land Rover Defender Trophy Edition",
        "description": "Land Rover is releasing its second run of Trophy Edition Defenders for 2023, this time based on the Defender 130 P400 SE. The Defender Trophy Edition is powered by a 3.0-liter turbo-6 with a mild-hybrid system for making 395 horsepower,...",
        "url": "https://uncrate.com/2023-land-rover-defender-trophy-edition/",
        "urlToImage": "https://uncrate.com/p/2023/08/defender-trophy-1.jpg",
        "publishedAt": "2023-08-11T17:50:42Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Github.com"
        },
        "author": "mbnuqw",
        "title": "Sidebery – A Firefox extension for managing tabs and bookmarks in sidebar",
        "description": "Firefox extension for managing tabs and bookmarks in sidebar. - GitHub - mbnuqw/sidebery: Firefox extension for managing tabs and bookmarks in sidebar.",
        "url": "https://github.com/mbnuqw/sidebery",
        "urlToImage": "https://repository-images.githubusercontent.com/149974867/c9c8b475-64dd-4801-a176-168db0933e8d",
        "publishedAt": "2023-07-20T02:57:11Z",
        "content": "Firefox extension for managing tabs and bookmarks in sidebar.\r\nInstall\r\nStable (4.10.2):\r\nRelease page |\r\nAddon page |\r\nInstallBeta (v5.0.0rc4):\r\nRelease page |\r\nInstall\r\nNote: Before installing the … [+1745 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "OSC G-Force Mercedes-AMG G63 6×6",
        "description": "The Mercedes-AMG G63 is already a powerful, capable off-roader. For those looking for something more impressive, Austrian specialist OSC has given it a third axle to create the G-Force 66. It's powered by the same handcrafted AMG 4.0L V8 biturbo...",
        "url": "https://uncrate.com/osc-g-force-mercedes-amg-g63-66/",
        "urlToImage": "https://uncrate.com/p/2023/07/osc-g-force-g63-6x6-1.jpg",
        "publishedAt": "2023-07-25T15:24:03Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "2023 TaylorMade P·790 Irons",
        "description": "Every iron is used for a different purpose, so it only makes sense that they should each have a slightly different design. For 2023, TaylorMade has taken this to heart with a strategic design it calls FLTD CG, which puts...",
        "url": "https://uncrate.com/2023-taylormade-p790-irons/",
        "urlToImage": "https://uncrate.com/p/2023/08/2023-taylormade-p-790-irons.jpg",
        "publishedAt": "2023-08-08T15:00:01Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Uncrate.com"
        },
        "author": "Uncrate",
        "title": "Popsmith Popcorn Popper",
        "description": "While microwave popcorn brought convenience to home snacking, nothing compares to the stovetop preparation. Enter the Popsmith Popcorn Popper, revolutionizing this classic method for modern snackers. This innovation includes a lid with an integrated stirrer, …",
        "url": "https://uncrate.com/popsmith-popcorn-popper/",
        "urlToImage": "https://uncrate.com/p/2023/08/popsmith-popcorn-popper.jpg",
        "publishedAt": "2023-08-10T20:52:12Z",
        "content": "Fine wine returned 13.1% in 2022, outperforming S&amp;P 500, Bitcoin, and even gold, while rare whiskey returned 395% from 2013 to 2023. Vinovest is making this widely untapped resource more accessib… [+668 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Neil Patel)",
        "title": "Bitcoin: Buy the Dip?",
        "description": "This top digital asset is currently 57% off its peak price from November 2021.",
        "url": "https://www.fool.com/investing/2023/07/28/bitcoin-buy-the-dip/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/739380/gold-coins-with-bitcoin-logo-on-them.jpg",
        "publishedAt": "2023-07-28T11:10:00Z",
        "content": "This year has demonstrated that perhaps the so-called crypto winter is thawing, as the overall market for digital assets has climbed in value by about 50%. \r\nBitcoin(BTC -1.08%), the world's most val… [+3610 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Dvsj.in"
        },
        "author": null,
        "title": "Hashing explained for non-tech people",
        "description": "What's hashing anyway? A gentle introduction - go from zero to hackerman in 5 minutes. Guaranteed or your money back.",
        "url": "https://blog.dvsj.in/hashing/",
        "urlToImage": "https://blog.dvsj.in/hash.jpg",
        "publishedAt": "2023-07-31T14:42:40Z",
        "content": "The process of converting lots of text into a really small text. Usually used to verify data integrity.\r\nNote: Not the edibles.\r\nA gentle introduction\r\nLet’s say we need to compare two pages manually… [+7617 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Huileng Tan",
        "title": "3 reasons countries around the world want to break up with the dollar",
        "description": "It's not just due to the West's sanctions against Russia. Other reasons include US monetary policies, a strong USD, and global trade diversification.",
        "url": "https://www.businessinsider.com/de-dollarization-reasons-why-countries-move-away-us-dollar-2023-7",
        "urlToImage": "https://i.insider.com/64aeba0294be880019f394c4?width=1200&format=jpeg",
        "publishedAt": "2023-07-24T00:46:43Z",
        "content": "A few key outside factors are chipping away at the US dollar's dominance in global trade.Getty Images\r\n<ul>\n<li>The US dollar has been the world's reserve currency for decades, but its dominance is f… [+5395 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Katie Rees",
        "title": "Why the Police Won't Investigate Your Lost or Stolen Crypto",
        "description": "Yes, you should report your stolen crypto, but it might not make a difference.",
        "url": "https://www.makeuseof.com/why-police-wont-investigate-lost-stolen-crypto/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/07/crypto-thief-graphic.jpg",
        "publishedAt": "2023-07-14T22:00:18Z",
        "content": "If someone hacks your bank account, steals your wallet, or uses your payment card without your permission, notifying the police is usually standard procedure. But if someone steals your cryptocurrenc… [+6039 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (RJ Fulton)",
        "title": "Bitcoin Cash's Remarkable 195% Rise: Can the Growth Continue?",
        "description": "Bitcoin Cash is on a tear, but there's more for investors to know.",
        "url": "https://www.fool.com/investing/2023/07/14/bitcoin-cashs-remarkable-165-rise-can-the-growth-c/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/739405/stock-market-down-white-arrows-on-red-background.jpg",
        "publishedAt": "2023-07-14T10:45:00Z",
        "content": "In the last month, few other cryptocurrencies have surged as much as Bitcoin Cash(BCH -4.59%). After a lackluster start to 2023, things changed in June and so far this year it's up more than 195%.\r\nH… [+3935 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Leo Sun)",
        "title": "If You'd Invested $1,000 in Riot Platforms in 2017, This Is How Much You'd Have Today",
        "description": "Its unexpected transformation into a Bitcoin miner paid off.",
        "url": "https://www.fool.com/investing/2023/07/21/if-invest-riot-platforms-2017-how-much-today/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/740369/bitcoin-tokens.jpg",
        "publishedAt": "2023-07-21T09:41:00Z",
        "content": "On Oct. 4, 2017, Bioptix, a tiny company that owned a veterinary products patent and was developing new methods for detecting diseases, abruptly abandoned its original business model and renamed itse… [+4449 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Renee Dudley",
        "title": "Who are the ransomware gangs wreaking havoc on the world’s biggest companies? | Renee Dudley",
        "description": "It’s the defining cyber crime of the 2020s, and hackers are only just beginning to exploit its potential to make money and sow mayhemIn the past year, some of the UK’s most recognised institutions, from the Guardian to Royal Mail, have been hit with the defin…",
        "url": "https://www.theguardian.com/commentisfree/2023/jul/17/ransomware-gangs-companies-cyber-crime-hackers",
        "urlToImage": "https://i.guim.co.uk/img/media/c74e1c31849165059d4db511593c093535fc9a7a/103_0_2092_1255/master/2092.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=8a92d285382c961c1b6c5add504ab656",
        "publishedAt": "2023-07-17T09:00:25Z",
        "content": "In the past year, some of the UKs most recognised institutions, from the Guardian to Royal Mail, have been hit with the defining cyber crime of our time: ransomware. Hackers locking up computer netwo… [+6349 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Dominic Basulto)",
        "title": "If This One Valuation Model Is Right, Then Bitcoin Is a Screaming Buy",
        "description": "A growing number of investors are expecting the price of Bitcoin to soar in 2024. Are they right?",
        "url": "https://www.fool.com/investing/2023/08/03/if-this-one-valuation-model-is-right-then-bitcoin/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/742173/golden-bitcoin-coin-representing-the-electronic-currency.jpg",
        "publishedAt": "2023-08-03T10:39:00Z",
        "content": "Looking ahead to 2024, a growing number of investors are expecting the price of Bitcoin(BTC -1.27%) to surge in value. Some expect Bitcoin to soar past the $100,000 level, and still others expect Bit… [+4308 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Dominic Basulto)",
        "title": "Cathie Wood Just Doubled Down On a $1.48 Million Price Target for Bitcoin. Is She Right?",
        "description": "According to Cathie Wood of Ark Invest, Bitcoin is still on a trajectory to hit $1.48 million by 2030.",
        "url": "https://www.fool.com/investing/2023/08/06/cathie-wood-just-doubled-down-on-a-148-million-pri/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/742590/bitcoin-cryptocurrency-on-wall-street.jpg",
        "publishedAt": "2023-08-06T08:52:00Z",
        "content": "In February, Cathie Wood of Ark Invest made headlines when she raised her firm's 2030 price target for Bitcoin(BTC 0.14%) from $1 million to an eye-popping $1.48 million. Now, six months later, she's… [+4134 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Dominic Basulto)",
        "title": "1 Cryptocurrency I'd Buy Right Now",
        "description": "There are three good reasons why Bitcoin could be headed higher.",
        "url": "https://www.fool.com/investing/2023/08/11/1-cryptocurrency-id-buy-right-now/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/743302/gold-coin-with-bitcoin-symbol-on-it-cryptocurrency-btc.jpg",
        "publishedAt": "2023-08-11T10:14:00Z",
        "content": "After a fast start to the year, Bitcoin(BTC -0.48%) has been in a holding pattern of late, unable to break decisively above the $30,000 mark. While Bitcoin is still up 79% for the year, it is actuall… [+4098 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Dominic Basulto)",
        "title": "1 Green Flag and 1 Red Flag for Bitcoin Investors",
        "description": "These two factors could have important implications for the price of Bitcoin.",
        "url": "https://www.fool.com/investing/2023/07/28/1-green-flag-and-1-red-flag-for-bitcoin-investors/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/741242/gold-coin-with-bitcoin-symbol-on-it-cryptocurrency-btc.jpg",
        "publishedAt": "2023-07-28T13:30:00Z",
        "content": "In June, Bitcoin(BTC -0.61%) temporarily broke through the $30,000 mark, and many bulls were convinced that the sky was the limit. But since then, the cryptocurrency has drifted lower and during the … [+4625 chars]"
        
      

    }


   ]

   

    
   


    

     constructor(){
        super();
        console.log("Hello welcome to Finsimple")
        this.state = { articles: this.articles,
            loading: false
   
        }
     }


     //api ka use kiya hai yha mwnw 

async componentDidMount() {
      let url="https://newsapi.org/v2/everything?q=tesla&from=2023-07-13&sortBy=publishedAt&category=$(this.props.category)&apiKey=09e82c50e458409e91959674f27fda46&page=1&pagesize=20";    
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({article: parsedData.articles})
}


handlePrevClick = async ()=>{
console.log("Previous")
let url='https://newsapi.org/v2/everything?q=tesla&from=2023-07-13&sortBy=publishedAt&category=$(this.props.category)&apiKey=09e82c50e458409e91959674f27fda46&page=${this.state.page-1}';    
let data = await fetch(url);
let parsedData = await data.json()
console.log(parsedData);
this.setState({
  page: this.state.page -1,
  article: parsedData.articles

})

}



handlePrevClick = async ()=>{
console.log("Previous")
let url='https://newsapi.org/v2/everything?q=tesla&from=2023-07-13&sortBy=publishedAt&category=$(this.props.category)&apiKey=09e82c50e458409e91959674f27fda46&page=${this.state.page+ 1}&pagesize=20';    
let data = await fetch(url);
let parsedData = await data.json()
console.log(parsedData);
this.setState({
  page: this.state.page +1,
  article: parsedData.articles
})
}


  render() {
    return (
      <div>

      <div className="container my-3">
      
      <center><h2>Finsimple Top Headlines</h2></center> 
      
      <Spinner/>
      
      <div className="row">
      {this.state.articles.map((element)=>{
        return    <div className="col-md-4" key={element.url}>
       
       <NewsItem title= {element.title?element.title.slice(0,45): ""} description={element.description?element.description.slice(0,77):""} imageUrl= {element.urlToImage} newsUrl= {element.url}/>
       <p class="card-text"><small>Last updated 7 mins ago</small></p>
</div>



      
      

      
       
        
        //console.log(element)
    
    
    })}

   

</div>

 <div className='container  d-flex justify-content-around'>
 <button type="button" disable={this.state.page<=1} class="btn btn-success" onClick={this.handlePrevClick}> &larr; Previous</button>
 <button type="button" class="btn btn-success" onClick={this.handleNextClick}>Next &rarr; </button>
 </div>
   
      

    </div>
    




      </div>
    )
  }
}






