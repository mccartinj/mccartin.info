---
layout: post
title: Fresh Food Access and Housing Prices
subtitle: 
tags:
  - data
  - statistics
  - visualization
  - justice
---

# (Healthy) Food Access and Residential Property Sales

![Fast Food](https://raw.githubusercontent.com/johnmccartin/johnmccartin.github.io/master/img/foodaccess/fast-map.jpg)

## Intro & Method
In this project we measured the effects of access to fresh and fast food on residential property sales in NYC. First we gathered data on grocery stores, farmers markets, and fast food restaurants. We measured access to those food stores from residential properties sold in 2013 using a gravity model. We aggregated those gravities by census tract, and determined average access for tracts with certain demographic characteristics. We fed those gravities into a hedonic price model and determined the impact of fresh food and fast food access on home prices, controlling for a series of variables.

## Significant Findings
We found food access to be a significant component of residential sales pricing. Within Manhattan, homes with the highest _fresh_ food accessibility (within the 90th percentile) were $150,209 more expensive than those with the lowest accessibility (<10th percentile). Conversely, Manhattan's homes in areas of high _fast_ food accessibility were worth $277,169 less than those with the lowest fast food accessibility.

## Example Graphics
#### Legend
![Legend](https://raw.githubusercontent.com/johnmccartin/johnmccartin.github.io/master/img/foodaccess/legend.jpg)
<br /><br />
#### Fresh Food
![Fresh Food](https://raw.githubusercontent.com/johnmccartin/johnmccartin.github.io/master/img/foodaccess/fresh-map.jpg)
<br /><br />
![Fresh Food Demographics](https://raw.githubusercontent.com/johnmccartin/johnmccartin.github.io/master/img/foodaccess/fresh-demos.jpg)
<br /><br />

#### Fast Food
![Fast Food](https://raw.githubusercontent.com/johnmccartin/johnmccartin.github.io/master/img/foodaccess/fast-map.jpg)
<br /><br />
![Fast Food Demographics](https://raw.githubusercontent.com/johnmccartin/johnmccartin.github.io/master/img/foodaccess/fast-demos.jpg)