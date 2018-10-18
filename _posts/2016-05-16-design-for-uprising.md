---
layout: post
title: Design for Uprising
subtitle: 
tags:
  urban design
  academic
  gis
  data science
  social media

---

# Design for Uprising

In 2015, I was away from my hometown Baltimore during the Uprising. Though its lasting macro-political effects will be debated (maybe forever), this was a moment that changed politics for basically everyone I know from home. As I watched it all unfold on Twitter and pirated streams of local news, I had some hunches about the role urban design and planning had on where it all went down. After that point, my distant and weird way of getting involved was to study what had just happened.

To do this, I took a snowball sample of activists and journalists on Twitter who were in Baltimore for the Uprising (roughly 10 in total). I logged every tweet they made during the Uprising with the location (manually gathered via photos or text descriptions), time, type of event depicted, and a few other descriptors. I then used GIS to calculate urban design characteristics for all of Baltimore. Controlling for a number of demographic (race, income, etc.) and historical urban planning characteristics (redlining?), and regressed the uprising activity locations against the urban design characteristics. The characteristics with the most explanatory power in the end were the overall (global) betweenness of the sites within the total street network, and the closeness to historical landmarks. In some respects, this contradicted media narratives and the past quantitative literature on urban unrest, while affirming some insights from theoretical research.

Admittedly, the study was too all-encompassing to yield results I'm fully confident in. In another world, I would hone in more. I thought of this project at the time as a way to contribute to oppressed people. With the right insights, an urban design down with protest could design spaces more amenable to questioning and ultimately taking power...or so the thinking went. One prominent activist, at least, made clear that as long as the people involved in the decision-making processes re: urban design came from a priveleged place, the *process* of urban design would only reify power. I'd like to believe there's still room at the margins to make change from a priveleged position, but this activist's argument was pretty compelling.

Tech: ArcGIS, StatsPlus

## [Read here.](https://issuu.com/jomccartin/docs/thesis_book2)

