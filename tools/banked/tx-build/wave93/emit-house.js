#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");

const NOT = "Not listed on Cook Political Report's Sep. 25, 2026 competitive House print page. This card does not invent a Solid rating from that omission.";
const CERT = "Printed on the Texas Secretary of State's Aug. 28, 2026 general-election certification.";
const WIKI = "Wikipedia's 2026 United States House of Representatives elections in Texas page";

function cand(name, party, positions, differentiators, supporters, opponents) {
  const c = { name, party, winner: false, positions, differentiators, supporters, opponents };
  for (const k of ["positions", "differentiators", "supporters", "opponents"]) {
    if (!c[k] || !c[k].length) throw new Error(name + " missing " + k);
    if (c[k].some(v => v === "" || v.includes("`") || v.includes("${"))) throw new Error(name + " bad string in " + k);
  }
  if (positions.length < 3 || differentiators.length < 3) throw new Error(name + " short lists");
  return c;
}

function thin(name, party, who) {
  const label = { R: "Republican", D: "Democratic", L: "Libertarian", G: "Green", I: "independent" }[party];
  return cand(name, party, [
    label + " nominee on the Aug. 28, 2026 Secretary of State certification",
    "A 2026 campaign issues page was not located for this card [Verify]",
    "The November ballot in this district includes this certified name"
  ], [
    who,
    CERT,
    "No current FEC cash-on-hand figure was pulled for this card [Verify]"
  ], [
    "The certification, not an aggregator, is why the name is carded",
    "A certified " + label + " line gives voters a choice beyond a single name"
  ], [
    "No sourced 2026 platform, endorsement list, or fundraising total is printed here [Verify]",
    "Without a public issues page, voters cannot compare this nominee on policy from this card alone"
  ]);
}

function person(name, party, positions, diffs, sup, opp) {
  return cand(name, party, positions, diffs, sup, opp);
}

const seats = [];

function add(n, region, note, candidates) {
  if (note.includes("`") || note.includes("${")) throw new Error("note " + n);
  seats.push({ n, region, note, candidates });
}

// --- 1-8, mostly not on Cook's sheet ---
add(1, "East Texas: Tyler, Longview, Nacogdoches, and Texarkana",
  "Incumbent Nathaniel Moran is seeking another term. " + WIKI + " says he was unopposed in 2024 and that Trump took 74.3% and Ted Cruz 72.5% in the district that year. " + NOT,
  [person("Nathaniel Moran (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee in a district " + WIKI + " describes as East Texas",
      "Unopposed in the 2024 general, per that Wikipedia page",
      "A separate 2026 issues page was not re-fetched for this card [Verify]"
    ], [
      CERT,
      WIKI + " places Tyler, Longview, Nacogdoches, and Texarkana in this district",
      "Wikipedia's page gives Trump 74.3% and Cruz 72.5% here in 2024"
    ], [
      "An unopposed 2024 general is the incumbency argument that page records",
      "The presidential numbers Wikipedia prints are heavily Republican"
    ], [
      "Those 2024 presidential figures are Wikipedia's, not a new canvass pulled for this card",
      "No 2026 Cook competitive rating is printed because the Sep. 25 sheet does not list TX-1"
    ]),
    thin("Yolanda R. Prince", "D", "Democratic nominee for TX-1 on the Aug. 28 certification")
  ]);

add(2, "North and northeast Houston suburbs: The Woodlands, Spring, Kingwood, Humble, Atascocita, and Willowbrook",
  "OPEN. Steve Toth, a state representative, beat incumbent Dan Crenshaw in the Republican primary. " + WIKI + " says Crenshaw won the 2024 general with 65.7%, and that Trump took 60.8% and Cruz 58.0% in 2024. " + NOT,
  [person("Steve Toth", "R", [
      "State representative from HD-15 (2013-2015 and since 2019); he also ran for Congress in the 8th District in 2016 (" + WIKI + ")",
      "Won the Republican nomination by defeating incumbent Dan Crenshaw in the primary (" + WIKI + ")",
      "A detailed 2026 issues page was not re-fetched for this card [Verify]"
    ], [
      CERT,
      "The seat is open because the incumbent lost his primary, not because he retired",
      WIKI + " says Crenshaw's 2024 general was 65.7%"
    ], [
      "Primary voters replaced a sitting member, which is the change in this district",
      "Toth already represents a slice of this suburban Houston area in the Legislature (" + WIKI + ")"
    ], [
      "Beating Crenshaw does not say how he will vote in Congress; that platform was not re-fetched [Verify]",
      "Wikipedia's 2024 presidential margin here still favors Republicans (Trump 60.8%)"
    ]),
    thin("Shaun Finnie", "D", "Democratic nominee for TX-2 on the Aug. 28 certification")
  ]);

add(3, "Collin and Hunt counties: eastern Plano, McKinney, Allen, Wylie, Greenville, and the I-30 corridor toward Sulphur Springs and Mount Pleasant",
  "Incumbent Keith Self is seeking another term. " + WIKI + " says he won the 2024 general with 62.5%, and that Trump took 60.3% and Cruz 57.7%. " + NOT,
  [person("Keith Self (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 62.5%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, WIKI + " describes the district as Collin and Hunt, including eastern Plano and McKinney", "Wikipedia prints Trump 60.3% and Cruz 57.7% in 2024"],
    ["The 2024 margin is the incumbency fact that page records", "Not on Cook's Sep. 25 competitive sheet"],
    ["No fresh platform was pulled for this wave [Verify]", "Wikipedia's presidential numbers are that page's figures, not a new canvass"]),
    thin("Evan Hunt", "D", "Democratic nominee for TX-3 on the Aug. 28 certification")
  ]);

add(4, "Texoma and the Red River: Sherman, Paris, Frisco, most of Plano, and the Collin County portion of Dallas",
  "Incumbent Pat Fallon is seeking another term. " + WIKI + " says he won 2024 with 68.4%, and that Trump took 61.2% and Cruz 59.0%. " + NOT,
  [person("Pat Fallon (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 68.4%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "District geography from " + WIKI, "Wikipedia prints Trump 61.2% and Cruz 59.0% in 2024"],
    ["A 68.4% general is the recorded incumbency margin", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Jason Pearce", "D", "Democratic nominee for TX-4 on the Aug. 28 certification")
  ]);

add(5, "Southeast Dallas-Fort Worth: Mesquite, Terrell, Palestine, Athens, Canton, Kaufman, south Garland and Rowlett, and Lakewood and Lake Highlands",
  "Incumbent Lance Gooden is seeking another term. " + WIKI + " says he won 2024 with 64.1%, and that Trump took 60.1% and Cruz 56.9%. " + NOT,
  [person("Lance Gooden (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 64.1%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Trump 60.1% and Cruz 56.9% in 2024"],
    ["The 2024 margin is the incumbency fact on that page", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Chelsey Hockett", "D", "Democratic nominee for TX-5 on the Aug. 28 certification")
  ]);

add(6, "Southern Dallas-Fort Worth: Midlothian, Mansfield, Burleson, Waxahachie, Corsicana, west Arlington, and south and central Irving",
  "Incumbent Jake Ellzey is seeking another term. " + WIKI + " says he won 2024 with 66.4%, that Trump took 60.4% and Cruz 57.4%, and that the page notes a Trump endorsement. " + NOT,
  [person("Jake Ellzey (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 66.4%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "That page notes a Trump endorsement and prints Trump 60.4% and Cruz 57.4% in 2024"],
    ["The 2024 margin and the endorsement note are what Wikipedia records", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "The endorsement note is Wikipedia's, not a 2026 letter re-read for this card"]),
    thin("Danny Minton", "D", "Democratic nominee for TX-6 on the Aug. 28 certification")
  ]);

add(7, "Southwest Houston and Fort Bend: Galleria, Montrose, Meyerland, the Heights, Westchase, Sharpstown, Gulfton, Alief, and parts of Sugar Land and Mission Bend",
  "Lizzie Pannill Fletcher is the incumbent. This district is the population plurality of no county, so it is reachable only through ds. " + WIKI + " says she won 2024 with 61.2%, that Kamala Harris took 60.3% and Colin Allred 63.1%, and that the NEA and the Texas AFL-CIO have endorsed her. " + NOT,
  [person("Lizzie Pannill Fletcher (incumbent)", "D", [
      "Seeks reelection as the certified Democratic nominee",
      "2024 general: 61.2%, per " + WIKI,
      "A fresh 2026 issues page was not re-fetched; the endorsement note below is Wikipedia's [Verify the 2026 letters]"
    ], [CERT, "NEA and Texas AFL-CIO endorsements are what " + WIKI + " records", "Wikipedia prints Harris 60.3% and Allred 63.1% in 2024"],
    ["Labor and the NEA are the coalition that page names", "A 61.2% general is the incumbency margin it records"],
    ["The Republican nominee is certified and is not a write-in", "Endorsement letters were not re-opened for this wave [Verify]"]),
    thin("Alexander Hale", "R", "Republican nominee for TX-7 on the Aug. 28 certification"),
    thin("Espoir Ngabo", "G", "Green nominee for TX-7 on the Aug. 28 certification")
  ]);

add(8, "Northern and northwest Houston exurbs: Conroe, part of Huntsville, Willis, Magnolia, Brookshire, Hempstead, and the west Houston Energy Corridor, Bear Creek, and Addicks",
  "OPEN. Morgan Luttrell is not seeking reelection. The Republican nominee on the certification is Jessica Hart Steinmann; " + WIKI + " describes her as attorney Jessica Steinmann. That page says Luttrell won 2024 with 68.2%, and that Trump took 63.2% and Cruz 60.1%. " + NOT,
  [person("Jessica Hart Steinmann", "R", [
      "Republican nominee for the open seat; Wikipedia's Texas 2026 House page describes her as an attorney",
      "The incumbent, Morgan Luttrell, is not seeking reelection (" + WIKI + ")",
      "A detailed 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "The certification spells the name Jessica Hart Steinmann", "Wikipedia prints Luttrell's 2024 general at 68.2% and Trump at 63.2%"],
    ["An open Republican-leaning seat, on Wikipedia's 2024 presidential numbers, is the structural case", "She is the certified nominee, not a primary rumor"],
    ["No platform was re-fetched [Verify]", "The attorney description is Wikipedia's short label, not a full biography"]),
    thin("Laura Jones", "D", "Democratic nominee for TX-8 on the Aug. 28 certification")
  ]);

add(9, "East Harris County and Liberty County: East End, Pasadena, Baytown, Deer Park, La Porte, and Cleveland",
  "OPEN and Cook Likely Republican. Cook's Sep. 25, 2026 print page lists TX-09 OPEN (Green) under Likely Republican. USA Today the same day reported Cook moved it from Solid Republican to Likely Republican. The old 9th was Al Green's district; the Texas Tribune's Sep. 30, 2026 congressional guide says under 3% of the new district's voters come from that old seat, and that Trump would have carried the new lines by about 20 points. Population in that guide: 62% Hispanic, 25% white, 10% Black, 2% Asian.",
  [person("Alex Mealer", "R", [
      "Ship Channel and Port Houston, border security and law enforcement, and Lake Houston flood mitigation (Texas Tribune, Sep. 30, 2026)",
      "The United States, not China, should set the rules for AI (Tribune)",
      "Election-integrity legislation (Tribune)"
    ], [
      "Army captain, West Point, Harvard MBA and JD; 2022 Harris County judge nominee (Tribune)",
      "Won the May runoff over Briscoe Cain by nearly 40 points after a Trump endorsement (Tribune)",
      "Tribune money: about $2.1 million raised, $1.7 million spent, $362,000 cash on hand; more than $4.8 million in outside spending, mostly in the primary",
      "Endorsements in that guide: Trump, Steve Scalise, Tom Emmer, Brian Babin, the National Border Patrol Council, and TMPA"
    ], [
      "The runoff margin and the Trump endorsement are the primary facts the Tribune records",
      "Port Houston and flood control are local to the east Harris and Liberty County seat",
      "Cook Likely Republican is a move toward competitiveness, via USA Today, and still a Republican-favored rating"
    ], [
      "She lost the 2022 Harris County judge race, which Democrats will use as a countywide loss (Tribune)",
      "Outside groups spent millions in the primary; the Tribune's general-election cash figure is $362,000",
      "The new district is not Al Green's old seat, so her coalition is not the old Democratic 9th"
    ]),
    person("Leticia Gutierrez", "D", [
      "Wages, jobs, health care, and childcare, and a path for port-corridor residents into higher-paying work (Tribune, Sep. 30)",
      "Rebuild infrastructure for disasters (Tribune)",
      "Immigrants work, pay taxes, and start businesses (Tribune)"
    ], [
      "Government relations and community outreach at Air Alliance Houston for more than 10 years; former Houston City Council chief of staff (Tribune)",
      "Won a six-way March primary with 54% (Tribune)",
      "Tribune money: about $55,000 raised, $37,000 spent, $19,000 cash on hand, mostly ActBlue; Domingo Garcia gave $3,500",
      "Endorsements in that guide include Adrian Garcia, Sheriff Ed Gonzalez, and several Houston-area Democratic legislators"
    ], [
      "A 54% primary win avoided a runoff (Tribune)",
      "The port-jobs message matches the district the Tribune describes",
      "Cook's move off Solid Republican is the opening her campaign can cite"
    ], [
      "About $19,000 cash on hand against Mealer's $362,000 is the money gap (Tribune)",
      "Cook still rates the seat Likely Republican",
      "Trump plus-20 on the new lines, as the Tribune states it, is the presidential baseline"
    ])
  ]);

add(10, "Downtown and west Austin, including Lake Travis; Bryan-College Station; and rural east-central Texas including Crockett, Livingston, and Madisonville",
  "OPEN. Michael McCaul is retiring. " + WIKI + " says Chris Gober was retained by 22 Republican legislators for the 2021 redistricting and that the RNC retained him in 2025 to represent the Texas GOP congressional delegation, with Adam Kincaid drawing maps. " + NOT,
  [person("Chris Gober", "R", [
      "Republican nominee for McCaul's open seat",
      WIKI + " says he worked professionally on the 2021 and 2025 Republican redistricting efforts",
      "A separate 2026 issues page was not re-fetched for this card [Verify]"
    ], [
      CERT,
      "That Wikipedia account says 22 GOP legislators retained him in 2021 and the RNC retained him in 2025",
      "The seat is open because McCaul is retiring, per " + WIKI
    ], [
      "Redistricting counsel is a real professional record, and it is why he knows the lines (Wikipedia)",
      "He is the certified nominee in an open seat"
    ], [
      "The same redistricting work is the criticism: he helped draw maps he is now running under (Wikipedia's account)",
      "No 2026 platform was re-fetched [Verify]"
    ]),
    thin("Caitlin Rourk", "D", "Democratic nominee for TX-10 on the Aug. 28 certification")
  ]);

add(11, "Midland, Odessa, San Angelo, and Brownwood, plus a thin Austin-area stretch through Pflugerville and Horseshoe Bay",
  "Incumbent August Pfluger is seeking another term. " + WIKI + " says he was unopposed in 2024, that Trump took 66.5% and Cruz 64%, and that the page notes a Trump endorsement. " + NOT,
  [person("August Pfluger (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "Unopposed in the 2024 general, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Trump 66.5% and Cruz 64% and notes a Trump endorsement"],
    ["An unopposed 2024 general is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Claire Reynolds", "D", "Democratic nominee for TX-11 on the Aug. 28 certification")
  ]);

add(12, "West Dallas-Fort Worth: most of Parker County, western Tarrant, west Fort Worth, Benbrook, Saginaw, Haltom City, and Weatherford",
  "Incumbent Craig Goldman is seeking another term. " + WIKI + " says he was elected with 63.5% in 2024, that Trump took 61.3% and Cruz 57.9%, and that the page notes a Trump endorsement. " + NOT,
  [person("Craig Goldman (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 63.5%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Trump 61.3% and Cruz 57.9% and notes a Trump endorsement"],
    ["The 2024 margin is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "The endorsement note was not re-verified against a 2026 letter"]),
    thin("Angela \"Heli\" Rodriguez Prilliman", "D", "Democratic nominee for TX-12; the certification prints the nickname Heli")
  ]);

add(13, "The Panhandle and west Texoma: Amarillo, Wichita Falls, and Denton",
  "Incumbent Ronny Jackson is seeking another term. " + WIKI + " says he was unopposed in 2024, and that Trump took 72.5% and Cruz 70.3%. " + NOT,
  [person("Ronny Jackson (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "Unopposed in the 2024 general, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI + ", including Amarillo, Wichita Falls, and Denton", "Wikipedia prints Trump 72.5% and Cruz 70.3% in 2024"],
    ["An unopposed general and those presidential numbers are the structural facts", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Mark Nair", "D", "Democratic nominee for TX-13 on the Aug. 28 certification")
  ]);

add(14, "Galveston, League City, Friendswood, Texas City, Manvel, Alvin, southern Missouri City, Bolivar, Port Arthur, and Orange",
  "Incumbent Randy Weber is seeking another term. " + WIKI + " says he won 2024 with 68.7%, and that Trump took 61.5% and Cruz 58.6%. " + NOT,
  [person("Randy Weber (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 68.7%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Trump 61.5% and Cruz 58.6% in 2024"],
    ["The 2024 margin is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Thurman Bill Bartie", "D", "Democratic nominee for TX-14 on the Aug. 28 certification")
  ]);

add(15, "Hidalgo County anchor plus the Coastal Bend, including Beeville, and rural counties between San Antonio and Houston",
  "Cook Republican Toss-up. Cook's own TX-15 page, last updated Sep. 25, 2026, moved the race from Lean Republican to Toss-up. It says Trump carried the district by 18 points in 2024 and by 3 in 2020, and that Monica De La Cruz won her last general with 57.1%. Cook PVI is R+7 (Nov. 17, 2025). Cook's summary says public and private polling shows the race tied or Bobby Pulido ahead; this card does not name a pollster Cook did not name. The Texas Tribune's Sep. 30 guide says the redraw left the presidential margin about Trump 58.5-40.6 and traded parts of McAllen for Donna and Weslaco. Counties in that guide: Aransas, Bee, Brooks, DeWitt, Goliad, Gonzales, Hidalgo, Jim Wells, Lavaca, Refugio, and San Patricio. About 81% Hispanic.",
  [person("Monica De La Cruz (incumbent)", "R", [
      "Finish border infrastructure and restore Remain in Mexico (Texas Tribune, Sep. 30, 2026)",
      "Oil and gas jobs, fewer energy regulations, and safe nuclear (Tribune)",
      "Protect Medicare and Social Security (Tribune)"
    ], [
      "In Congress since 2023; former insurance agent (Tribune)",
      "Cook: last general 57.1%; first elected 2022; last primary 88.2% (Cook's TX-15 page)",
      "Tribune money: $5.27 million raised, $3.42 million spent, $2.46 million cash on hand",
      "Endorsements in the Tribune guide: Trump and Speaker Mike Johnson. Outside groups named there include the Congressional Leadership Fund"
    ], [
      "Cash on hand above $2 million is the resource argument (Tribune)",
      "Cook still records an 18-point Trump district and a 14-point last win",
      "Johnson and Trump are the endorsements the Tribune lists"
    ], [
      "Cook moved the seat to Toss-up on Sep. 25 and says polling shows it tied or Pulido ahead",
      "A Toss-up rating means the presidential lean has not closed the race",
      "The redraw kept a large Trump margin, so a loss would be a Republican underperformance, which is the risk Cook is flagging"
    ]),
    person("Bobby Pulido", "D", [
      "Corporations that raised prices, and a cut in red tape for small business (Tribune, Sep. 30)",
      "A secure border by going after the drug trade and expanding vetting hubs in Central America, plus what he calls a reasonable path to legalization (Tribune)",
      "Hold Mexico to its water-treaty obligations (Tribune)"
    ], [
      "Tejano musician and actor; Latin Grammy winner; the Tribune describes him as a moderate Democrat",
      "Tribune money: $2.96 million raised, $1.8 million spent, $1.16 million cash on hand",
      "Endorsements in that guide: James Talarico, the Blue Dog PAC, and the Latino Victory Fund",
      "USA Today's Sep. 25 account of Cook's move cites his public profile as one reason the rating changed"
    ], [
      "More than $1 million on hand is a real campaign, not a protest filing (Tribune)",
      "Blue Dog and a water-treaty plank are aimed at a district that is not a national-Democratic primary electorate",
      "Cook's Toss-up move is the rating his campaign can cite"
    ], [
      "De La Cruz still leads in cash on hand, $2.46 million to $1.16 million (Tribune)",
      "Trump's 18-point margin, on Cook's page, is the baseline he has to overcome",
      "Celebrity is not a voting record; he has not held this seat"
    ])
  ]);

add(16, "Entirely inside El Paso County",
  "Incumbent Veronica Escobar is seeking another term. " + WIKI + " says she won 2024 with 59.5%, and that Harris took 57.4% and Allred 58.4%. " + NOT,
  [person("Veronica Escobar (incumbent)", "D", [
      "Seeks reelection as the certified Democratic nominee",
      "2024 general: 59.5%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "The district is entirely El Paso County, per " + WIKI, "Wikipedia prints Harris 57.4% and Allred 58.4% in 2024"],
    ["A 59.5% general in a single-county district is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Adam Bauman", "R", "Republican nominee for TX-16 on the Aug. 28 certification")
  ]);

add(17, "Waco, a sliver of east Temple, southern Williamson County, and Cedar Park via a Round Rock sliver",
  "Incumbent Pete Sessions is seeking another term. " + WIKI + " says he won 2024 with 66.4%, that Trump took 60% and Cruz 57.5%, and that the page notes a Trump endorsement. " + NOT,
  [person("Pete Sessions (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 66.4%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Trump 60% and Cruz 57.5% and notes a Trump endorsement"],
    ["The 2024 margin is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "The endorsement note was not re-read as a 2026 letter"]),
    thin("Casey Shepard", "D", "Democratic nominee for TX-17 on the Aug. 28 certification")
  ]);

add(18, "Downtown Houston, East Downtown, Midtown, Third Ward, Fifth Ward, the Texas Medical Center, the Museum District, NRG, Settegast, Fall Creek, Sunnyside, Brays Oaks, northern Missouri City, Stafford, and Fresno",
  "Christian Dashaun Menefee is the incumbent. He won the January 2026 special runoff after Sylvester Turner died in March 2025, and the Texas Tribune reported March 11, 2026 that he took office in February. Al Green, the former 9th District incumbent, ran here and lost the Democratic runoff to Menefee. " + WIKI + " describes the district as about 45% Black and 32.2% Hispanic voting-age population, and says Harris took 76.7% and Allred 78.5% in 2024. This district is the plurality of no county. " + NOT,
  [person("Christian Dashaun Menefee (incumbent)", "D", [
      "Seeks a full term as the certified Democratic nominee after winning the special",
      "The Tribune's March 11, 2026 account: he took office in February and then led Green in the March primary short of a majority, with the runoff deciding it",
      "A fresh 2026 issues page beyond the special-election record was not re-fetched [Verify]"
    ], [
      CERT,
      "Two incumbents were drawn toward this seat; Green lost the runoff and is not the nominee",
      "Wikipedia's page gives Harris 76.7% and Allred 78.5% in 2024"
    ], [
      "He has already won a runoff in this district once, in the special",
      "Beating Green, a longtime member, is the primary fact",
      "The presidential numbers Wikipedia prints are heavily Democratic"
    ], [
      "A member seated in February 2026 has a short congressional record",
      "Not on Cook's Sep. 25 competitive sheet, which is not the same thing as an official Solid rating",
      "Platform detail beyond the runoff was not re-fetched [Verify]"
    ]),
    thin("Ronald Dwayne Whitfield", "R", "Republican nominee for TX-18 on the Aug. 28 certification")
  ]);

add(19, "Lubbock, Abilene, and Big Spring",
  "OPEN. Jodey Arrington is not seeking a sixth term. Tom Sell, a businessman, beat Abraham Enriquez in the runoff. " + WIKI + " says Arrington won 2024 with 80.7%, and that Trump took 75.3% and Cruz 73%. " + NOT,
  [person("Tom Sell", "R", [
      "Republican nominee for Arrington's open seat",
      WIKI + " describes him as a businessman who beat Abraham Enriquez in the runoff",
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Arrington is not seeking a sixth term (" + WIKI + ")", "Wikipedia prints Arrington's 2024 general at 80.7% and Trump at 75.3%"],
    ["A runoff win is a demonstrated primary victory", "Wikipedia's presidential numbers are heavily Republican"],
    ["No platform was re-fetched [Verify]", "The businessman label is Wikipedia's, not a company filing re-read here"]),
    thin("Kyle Rable", "D", "Democratic nominee for TX-19 on the Aug. 28 certification")
  ]);

add(20, "Downtown San Antonio, the east side, Kirby, Leon Valley, and north of Lackland",
  "Incumbent Joaquin Castro is seeking another term. " + WIKI + " says he was unopposed in 2024, that Harris took 63.5% and Allred 66.6%, and that the Texas AFL-CIO is an endorser. " + NOT,
  [person("Joaquin Castro (incumbent)", "D", [
      "Seeks reelection as the certified Democratic nominee",
      "Unopposed in the 2024 general, per " + WIKI,
      "A 2026 issues page was not re-fetched; the AFL-CIO note is Wikipedia's [Verify the 2026 letter]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Harris 63.5% and Allred 66.6% and names the Texas AFL-CIO"],
    ["An unopposed 2024 general is the incumbency fact", "Labor is the endorser that page names"],
    ["Platform not re-fetched [Verify]", "Not on Cook's Sep. 25 competitive sheet"]),
    thin("Edgardo Rafael Baez", "R", "Republican nominee for TX-20 on the Aug. 28 certification")
  ]);

add(21, "The Hill Country: Fredericksburg, Boerne, Kerrville, Bandera, Comal and New Braunfels, most of Hays County, northwest San Antonio, Alamo Heights, Castle Hills, east Stone Oak, and Fort Sam Houston",
  "OPEN. Chip Roy ran for attorney general and lost that primary. " + WIKI + " says Roy won this district with 61.9% in 2024, that the GOP has held it since 1978, and that Trump took 60.3% and Cruz 57.7%. The Republican nominee is Mark Teixeira. " + NOT,
  [person("Mark Teixeira", "R", [
      "Republican nominee for the open seat",
      WIKI + " identifies him as the former Major League Baseball player",
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Roy left the seat to run for attorney general and lost that primary (" + WIKI + " and the Tribune attorney-general guide)", "Wikipedia says Republicans have held the district since 1978 and prints Trump at 60.3% in 2024"],
    ["Name recognition from a major-league career is the biography Wikipedia leads with", "An open seat that page dates to 1978 as Republican-held is the structural case"],
    ["Baseball fame is not a congressional record", "No platform was re-fetched [Verify]"]),
    thin("Kristin Hook", "D", "Democratic nominee for TX-21 on the Aug. 28 certification")
  ]);

add(22, "Southwest Houston suburbs: Sugar Land, Rosenberg, Lake Jackson, Angleton, Katy, and Fulshear",
  "OPEN. Troy Nehls is not seeking reelection. " + WIKI + " says he won 2024 with 62.1%, and that Trump took 59.9% and Cruz 56.9%. The Republican nominee is Trever Nehls, whom that page describes as a former Fort Bend constable, precinct 4, from 2013 to 2020, and as Troy Nehls's brother. " + NOT,
  [person("Trever Nehls", "R", [
      "Republican nominee for his brother's open seat",
      "Former Fort Bend constable, precinct 4, 2013-2020 (" + WIKI + ")",
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Troy Nehls is not seeking reelection; Wikipedia prints his 2024 general at 62.1%", "Wikipedia prints Trump 59.9% and Cruz 56.9% in 2024"],
    ["A decade as constable is a local law-enforcement record", "The family name is already on the district's ballot history"],
    ["A brother succeeding a brother is the nepotism argument", "No platform was re-fetched [Verify]"]),
    thin("Marquette Greene-Scott", "D", "Democratic nominee for TX-22 on the Aug. 28 certification")
  ]);

add(23, "A large border and Hill Country district that includes the Big Bend and reaches San Antonio's western edge",
  "VACANT and Cook Likely Republican. Cook's Sep. 25, 2026 print page lists TX-23 VACANT under Likely Republican. Tony Gonzales resigned in April 2026 after admitting an affair with an aide who later died by suicide; the Texas Tribune reported that he had denied it earlier. Brandon Herrera missed the 2024 runoff by about 400 votes, led Gonzales by fewer than 1,000 votes in the March 2026 primary, and became the nominee when Gonzales dropped out on March 5 before a runoff. " + WIKI + " says Trump took 56.8% and Cruz 52.9% in 2024, and that Gonzales won the 2024 general with 62.3%. The Tribune's Sep. 30 guide is the source for the money and the issue lists below. It also reported polls showing a narrow Herrera lead; no pollster is named here because the guide's polling line, as used for this card, was not a named public survey.",
  [person("Brandon Herrera", "R", [
      "Remain in Mexico, the Americans for Tax Reform taxpayer pledge, and national concealed-carry reciprocity (Tribune, Sep. 30, 2026)",
      "Opposes red-flag laws and abortion funding; supports term limits and funding for homeschool and private school (Tribune)",
      "Opposes spending on foreign wars and says he will protect Social Security and Medicare (Tribune)"
    ], [
      "YouTube creator focused on guns, memes, and politics; small-arms manufacturer near San Antonio; worked on Trump's 2016 campaign (Tribune)",
      "Tribune money: $1.96 million raised, $1.64 million spent, $309,000 cash on hand; he loaned the committee $420,000",
      "Endorsements in that guide include Trump, Mike Johnson, Steve Scalise, Tom Emmer, Chip Roy, the Freedom Caucus Fund, and Gun Owners of America",
      "Cook Likely Republican, and the seat is vacant"
    ], [
      "Trump, the Speaker, and Gun Owners of America are the coalition the Tribune lists",
      "He has now won the nomination in a district where he narrowly missed a runoff in 2024",
      "Cook still rates the seat Likely Republican"
    ], [
      "The Tribune describes edgy Holocaust jokes and derogatory comments about women as controversies Democrats cite; this card reports that characterization, not a court finding",
      "Gonzales's resignation is about an admitted affair and a death by suicide, which is the context of the vacancy, not Herrera's conduct",
      "Cash on hand of $309,000 is not a large general-election reserve after a loan-heavy primary (Tribune)"
    ]),
    person("Katy Padilla Stout", "D", [
      "Opposes a border wall in Big Bend; wants a middle-class tax code (Tribune, Sep. 30)",
      "Medicare for All, a stronger ACA, and community health centers; universal pre-K, a higher minimum wage, and paid parental leave (Tribune)",
      "Rejoin the Paris accord, restore the Voting Rights Act, pathways to citizenship, universal background checks, a bump-stock ban, and red-flag laws (Tribune)"
    ], [
      "First-time candidate; former Northside ISD elementary teacher; child-welfare and education lawyer at a family firm in Carrizo Springs (Tribune)",
      "Bexar County Child Welfare Board since 2017; won the Democratic primary with a majority against three opponents (Tribune)",
      "Tribune money: $485,000 raised, $314,000 spent, $171,400 cash on hand",
      "Endorsements in that guide include Greg Casar, Joaquin Castro, Beto O'Rourke, the Texas State Teachers Association, and the Texas AFL-CIO. AB PAC spent $268,000 against Herrera, the Tribune reported"
    ], [
      "A majority primary win and a Carrizo Springs law practice are local roots (Tribune)",
      "The issue list is long and sourced, not a placeholder",
      "Outside spending against Herrera is already on the record (Tribune)"
    ], [
      "Cook Likely Republican is not a toss-up",
      "She has less cash on hand than Herrera (Tribune)",
      "Medicare for All and a wall opposition are the lines Republicans will call out of step with a Trump district"
    ]),
    thin("Ben Mendoza", "I", "Independent nominee for TX-23 on the Aug. 28 certification; no platform was located in the Tribune's Sep. 30 guide")
  ]);

add(24, "Dallas-Fort Worth airport suburbs: Grapevine, Bedford, North Richland Hills, Southlake, the Park Cities, Knox and Lower Greenville, Preston Hollow, Farmers Branch, and Coppell",
  "Incumbent Beth Van Duyne is seeking another term. This district is the plurality of no county. " + WIKI + " says she won 2024 with 60.3%, that Julie Johnson was drawn into the district and then ran in the 33rd, and that Trump took 57.1% and Cruz 54.6%. " + NOT,
  [person("Beth Van Duyne (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 60.3%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia says Julie Johnson chose the 33rd District instead and prints Trump 57.1% and Cruz 54.6%"],
    ["She is the incumbent who stayed; Johnson left for another district", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Kevin Burge", "D", "Democratic nominee for TX-24 on the Aug. 28 certification")
  ]);

add(25, "Northern Arlington and south and east Fort Worth, plus Cleburne, Granbury, Mineral Wells, Stephenville, and Eastland",
  "Incumbent Roger Williams is seeking another term. " + WIKI + " says he was unopposed in 2024, that Marc Veasey was drawn in from the old 33rd and did not run, and that Trump took 61.4% and Cruz 58.4%. " + NOT,
  [person("Roger Williams (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "Unopposed in the 2024 general, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia says Veasey was drawn in and did not run, and prints Trump 61.4% and Cruz 58.4%"],
    ["An unopposed general is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Veasey's short-lived Tarrant judge bid is Wikipedia's account of why he is not on this ballot"]),
    thin("Dione Sims", "D", "Democratic nominee for TX-25 on the Aug. 28 certification")
  ]);

add(26, "Northwest Dallas-Fort Worth: south and east Denton County, including a share of Carrollton, Lewisville, Flower Mound, and Little Elm; Cooke County; and the south two-thirds of Wise County",
  "Incumbent Brandon Gill is seeking another term. " + WIKI + " says he was elected with 62.1% in 2024, and that Trump took 61.2% and Cruz 58.4%. " + NOT,
  [person("Brandon Gill (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 62.1%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Trump 61.2% and Cruz 58.4% in 2024"],
    ["The 2024 margin is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Steven Shook", "D", "Democratic nominee for TX-26 on the Aug. 28 certification"),
    thin("Phil Gray", "L", "Libertarian nominee for TX-26 on the Aug. 28 certification")
  ]);

add(27, "The Coastal Bend: Corpus Christi, Port Aransas, Victoria, Brenham, Bay City, Sealy, La Grange, Bastrop, Kyle, Lockhart, and an east Travis County sliver",
  "Incumbent Michael Cloud is seeking another term. " + WIKI + " says he won 2024 with 66%, and that Trump took 60% and Cruz 57.1%. " + NOT,
  [person("Michael Cloud (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 66%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Trump 60% and Cruz 57.1% in 2024"],
    ["The 2024 margin is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Tanya Lloyd", "D", "Democratic nominee for TX-27 on the Aug. 28 certification")
  ]);

add(28, "Laredo and Webb County, south toward McAllen, and north into Atascosa County",
  "Cook Lean Democratic. Cook's Sep. 25, 2026 print page lists TX-28 Cuellar under Lean Democratic. The Texas Tribune's Sep. 30 guide says Henry Cuellar has served since 2005, won a 2024 federal bribery and money-laundering indictment fight when Trump pardoned him after Cuellar denied the charges, and won the old district by about 6 points (Wikipedia's page says 52.8%) while Trump carried the new lines. The Tribune says Trump ran about 10 points ahead on the redrawn district (54.8-44.4) after the map dropped San Antonio and added McAllen-area Trump voters. About 91% Hispanic. Counties in that guide: Atascosa, Dimmit, Duval, Hidalgo, Jim Hogg, La Salle, Live Oak, Maverick, McMullen, Starr, Webb, and Zapata.",
  [person("Henry Cuellar (incumbent)", "D", [
      "Tariff-inflation refund payments (Tribune, Sep. 30, 2026)",
      "A secure border and deportation of violent criminals without, he argues, billions in new detention or detaining children and longtime residents (Tribune)",
      "Eliminate provisions that reduce Social Security benefits (Tribune)"
    ], [
      "In Congress since 2005; former Texas secretary of state and state representative (Tribune)",
      "Tribune money: $2.23 million raised, $1.15 million spent, $1.13 million cash on hand",
      "Endorsements in that guide: Hakeem Jeffries; LUPE Votes endorsed with conditions",
      "Cook Lean Democratic as of Sep. 25, 2026"
    ], [
      "Two decades in the seat and a Lean Democratic rating are the incumbency case",
      "Jeffries's endorsement is the House Democratic leadership signal the Tribune records",
      "The pardon closed the federal case; he denied the charges (Tribune)"
    ], [
      "The indictment happened, even though a pardon followed; opponents will keep describing the charges (Tribune)",
      "Trump carried the new lines, which is why Cook's Lean Democratic is not a safe seat",
      "LUPE's endorsement came with conditions, which is not a blank check (Tribune)"
    ]),
    person("Tano E. Tijerina", "R", [
      "Stop illegal crossings, support law enforcement, and back bipartisan immigration reform (Tribune, Sep. 30)",
      "Lower taxes and cut regulations (Tribune)",
      "South Texas artificial-intelligence and tech growth that protects water, land, and rural communities (Tribune)"
    ], [
      "Webb County judge since 2015; a former Democrat who switched after 2024 (Tribune)",
      "Tribune money: $1.28 million raised, $510,000 spent, $765,000 cash on hand",
      "Endorsements in that guide: Trump, Mike Johnson, Ted Cruz, and Greg Abbott",
      "The certification prints the name Tano E. Tijerina"
    ], [
      "A sitting county judge in the district's anchor county is a local record (Tribune)",
      "Trump, Johnson, Cruz, and Abbott are the endorsement stack the Tribune lists",
      "More than $700,000 on hand funds a real challenge (Tribune)"
    ], [
      "Cuellar still leads in cash on hand (Tribune)",
      "Cook Lean Democratic means the rating still favors the incumbent",
      "A party switch after 2024 is something both sides will explain differently"
    ]),
    thin("Marlon Durán", "G", "Green nominee for TX-28; the certification prints Marlon Duran with an accent")
  ]);

add(29, "North Houston: Lindale, Northline, Acres Homes, Independence Heights, Garden Oaks, Oak Forest, Fairbanks, Aldine, Greenspoint, and Bush Intercontinental",
  "Incumbent Sylvia Garcia is seeking another term. Harris County's plurality district is the 29th. " + WIKI + " says she won 2024 with 65.2%, and that Harris took 64.5% and Allred 67.6%. " + NOT,
  [person("Sylvia Garcia (incumbent)", "D", [
      "Seeks reelection as the certified Democratic nominee",
      "2024 general: 65.2%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI, "Wikipedia prints Harris 64.5% and Allred 67.6% in 2024"],
    ["The 2024 margin is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Martha Fierro", "R", "Republican nominee for TX-29 on the Aug. 28 certification")
  ]);

add(30, "South Dallas, Fair Park, Lancaster, Duncanville, DeSoto, Wilmer, Cedar Hill, and southern Grand Prairie",
  "OPEN. Jasmine Crockett was drawn into the 33rd and ran for the Senate. This district is the plurality of no county. " + WIKI + " says Frederick D. Haynes III is a pastor and a former Rainbow PUSH president and CEO, that Crockett endorsed him, and that Harris took 72.7% and Allred 75.1% in 2024. " + NOT,
  [person("Frederick D. Haynes III", "D", [
      "Democratic nominee for the open seat",
      WIKI + " describes him as a pastor and a former Rainbow PUSH president and CEO, endorsed by Jasmine Crockett",
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Crockett left the seat to run for the Senate (" + WIKI + ")", "Wikipedia prints Harris 72.7% and Allred 75.1% in 2024"],
    ["Crockett's endorsement is the succession argument that page records", "The presidential numbers Wikipedia prints are heavily Democratic"],
    ["A pastor's national civil-rights title is not a congressional voting record", "No platform was re-fetched [Verify]"]),
    thin("Everett Jackson", "R", "Republican nominee for TX-30 on the Aug. 28 certification")
  ]);

add(31, "Georgetown, Burnet, Killeen, most of Temple, Fort Hood, and north to Hamilton",
  "Incumbent John Carter is seeking another term. " + WIKI + " says he won 2024 with 64.5%, and that Trump took 60.1% and Cruz 57.6%. " + NOT,
  [person("John Carter (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 64.5%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI + ", including Fort Hood", "Wikipedia prints Trump 60.1% and Cruz 57.6% in 2024"],
    ["The 2024 margin is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Justin Early", "D", "Democratic nominee for TX-31 on the Aug. 28 certification"),
    thin("Greg Stoker", "G", "Green nominee for TX-31 on the Aug. 28 certification")
  ]);

add(32, "North and northeast Dallas suburbs: Carrollton in Dallas County, Addison, Richardson, north Garland and Rowlett, north Dallas, Rockwall, Lake Tawakoni, Mineola, and Gilmer",
  "OPEN. Julie Johnson was drawn out and ran in the 33rd District, where she lost the Democratic nomination. " + WIKI + " says Trump took 57.7% and Cruz 55.2% in 2024. Cook's Sep. 25 print page does not list TX-32. The Texas Tribune reported March 17, 2026 that Ryan Binkley withdrew after finishing second, leaving Jace Yarbrough as the Republican nominee. Yarbrough had 49% to Binkley's 22% in the March 3 primary. The NRCC called him an Air Force veteran and said Trump had endorsed him.",
  [person("Jace Yarbrough", "R", [
      "He told CBS Texas the first duty of government is to preserve the American way of life and fight for the prosperity of the American people first",
      "The NRCC's March 18, 2026 statement says he will fight for safer communities, a stronger economy, and policies that put Texas families first",
      "The Tribune described his law practice as constitutional cases on vaccine mandates and religious freedom"
    ], [
      "Conservative attorney; Air Force veteran, per the NRCC statement the Tribune quoted",
      "Trump endorsed him Feb. 4, 2026; Binkley dropped out March 17 and the runoff was canceled (Tribune; Ballotpedia's runoff page)",
      "March 3 primary: 49% to Binkley's 22% (Tribune)",
      "He faces Dan Barrios in November (Tribune)"
    ], [
      "Trump's endorsement and the collapsed runoff made him the nominee without a second election",
      "The Tribune says he is favored in the redrawn district",
      "Seven defeated primary rivals endorsed him before Binkley quit (Ballotpedia's runoff account)"
    ], [
      "49% is not a majority primary; the runoff was avoided by a withdrawal, not by clearing 50%",
      "Not on Cook's Sep. 25 competitive sheet, which is not an official Solid rating",
      "A full issue questionnaire was not re-read beyond the CBS Texas and NRCC lines [Verify]"
    ]),
    person("Dan Barrios", "D", [
      "Democratic nominee and a Richardson city council member (" + WIKI + " and the Tribune, March 17, 2026)",
      "A 2026 issues page was not re-fetched for this card [Verify]",
      "He is the certified Democrat against the Republican nominee in an open seat"
    ], [
      CERT,
      "Richardson City Council is the current office the Tribune names",
      "Wikipedia prints Trump 57.7% and Cruz 55.2% in this district in 2024"
    ], [
      "A sitting council member in a city inside the district is a local record",
      "The certification makes the race a two-way ballot"
    ], [
      "The Tribune's March story called Yarbrough the presumptive next member, which is the expectation Barrios is running against",
      "No platform was re-fetched [Verify]"
    ])
  ]);

add(33, "Exclusively inside Dallas County, including downtown and uptown",
  "OPEN. Marc Veasey was drawn toward the 25th and left Congress. Jasmine Crockett ran for the Senate. Julie Johnson ran here and lost the Democratic nomination to Colin Allred. " + WIKI + " and the certification name Allred, the former congressman and 2024 Senate nominee who lost to Ted Cruz, as the Democratic nominee. " + NOT + " Johnson's primary margin is not printed because it was not in the sources used for this card.",
  [person("Colin Allred", "D", [
      "Democratic nominee for the open Dallas seat",
      "Former member of Congress and the 2024 Democratic nominee for U.S. Senate, who lost to Ted Cruz (" + WIKI + ")",
      "A 2026 House issues page was not re-fetched for this card [Verify]"
    ], [
      CERT,
      "He won the Democratic nomination over Julie Johnson (" + WIKI + ")",
      "The district is entirely in Dallas County, per " + WIKI
    ], [
      "A former member and a statewide nominee has name recognition no first-time candidate matches",
      "Beating Johnson, herself a member drawn out of the 32nd, is the primary fact"
    ], [
      "Losing to Cruz in 2024 is the statewide loss opponents will cite",
      "No 2026 platform was re-fetched [Verify]"
    ]),
    thin("Patrick David Gillespie", "R", "Republican nominee for TX-33 on the Aug. 28 certification")
  ]);

add(34, "Brownsville north along the Gulf to most of Corpus Christi: Cameron, Willacy, Kenedy, Kleberg, and most of Nueces",
  "Cook Democratic Toss-up. Cook's Sep. 25, 2026 print page lists TX-34 Gonzalez in the Democratic Toss-up column. The Texas Tribune's Sep. 30 guide says the redraw traded Democratic-leaning McAllen areas for Republican turf around Corpus Christi. Vicente Gonzalez has served three terms in the old 15th and then the 34th, beat democratic socialist Etienne Rosas by 25 points in the primary, and is described there as a staunch moderate. " + WIKI + " says he won 2024 with 51.3% and that Trump took 54.6% in the new district in 2024, Cruz 49.7% as a plurality, and Beto O'Rourke 55% there in 2018. Eric Flores's biography is from the Tribune's July 21, 2025 profile and from Ballotpedia's certified March 3, 2026 primary (56.7%, 20,726 votes).",
  [person("Vicente Gonzalez (incumbent)", "D", [
      "The Tribune's Sep. 30 guide calls him a staunch moderate running in a redrawn district",
      "He beat Etienne Rosas by 25 points in the Democratic primary (Tribune)",
      "A line-by-line 2026 issues page was not re-fetched beyond that guide's framing [Verify]"
    ], [
      "In Congress since the old 15th, then the 34th; 2024 general 51.3% on Wikipedia's page",
      "Cook Democratic Toss-up as of Sep. 25, 2026",
      "Wikipedia's page says Trump took 54.6% in the new district in 2024",
      CERT
    ], [
      "A 25-point primary win over a democratic socialist is the moderate argument (Tribune)",
      "He has won this region before, including a 51.3% general in 2024",
      "Cook still puts the seat in the Democratic Toss-up column, not the Republican one"
    ], [
      "Trump carried the new lines, which is why Cook calls it a toss-up",
      "The redraw removed Democratic McAllen precincts and added Corpus-area Republican turf (Tribune)",
      "A full 2026 platform was not re-fetched [Verify]"
    ]),
    person("Eric Flores", "R", [
      "He told the Tribune he prosecuted cases while thousands of people were entering unlawfully and that he wants to change those policies in Washington (Tribune, July 21, 2025)",
      "Border prosecutions, support for law enforcement, and the local economy are the themes of that profile",
      "A Ballotpedia account of a campaign ad says he will secure the border, defend law enforcement, and fight alongside Trump"
    ], [
      "Rio Grande Valley native and Spanish speaker; Army veteran and lawyer from Mission (Tribune, July 21, 2025)",
      "City attorney and municipal judge in Alton; assistant U.S. attorney in McAllen from 2021 until early 2025, prosecuting transnational human smuggling (Tribune)",
      "Won the March 3, 2026 Republican primary with 56.7% (20,726 votes), certified, over Mayra Flores's 23.7% (Ballotpedia)",
      "The Tribune reported in July 2025, before this map governed the election, that he lived in the neighboring 15th District. Members need not live in the district. Whether the redraw moved that address was not re-checked [Verify]"
    ], [
      "A federal prosecutor and a National Guard infantry officer is the resume Republicans recruited (Tribune)",
      "Clearing 50% in a primary that included a former member, Mayra Flores, avoided a runoff (Ballotpedia)",
      "Cook's Democratic Toss-up rating means the seat is one of the closest Democratic holds"
    ], [
      "The July 2025 residency note is a real attack line if the address is still outside the district [Verify]",
      "Gonzalez has won the seat; Flores has not",
      "The Tribune said he is less hardline than some Republicans on immigration labor, which primary voters on his right can use against him"
    ]),
    thin("Chris Royal", "L", "Libertarian nominee for TX-34 on the Aug. 28 certification")
  ]);

add(35, "South and northeast San Antonio, Live Oak, Converse, Elmendorf, Guadalupe County including Seguin and Schertz, plus Wilson and Karnes counties",
  "OPEN and Cook Lean Republican. Cook's own TX-35 page, last updated Sep. 25, 2026, says Greg Casar is running in TX-37 and moved the open seat from Likely Republican to Lean Republican. Cook PVI is R+4 (Nov. 17, 2025). Cook's summary: Democrat Johnny Garcia, a Bexar County deputy sheriff, faces Republican Carlos De La Cruz, an Air Force veteran and the brother of Rep. Monica De La Cruz, and both parties' super PACs are investing. " + WIKI + " says Hispanic voting-age population is 53.7% and white voting-age population 34.6%, and that Trump took 54.6% and Cruz 50.6% in 2024. Dollar figures beyond Cook's qualitative line were not pulled.",
  [person("Carlos De La Cruz", "R", [
      "Republican nominee for the open seat",
      "Air Force veteran and the brother of Rep. Monica De La Cruz (Cook's TX-35 page, Sep. 25, 2026)",
      "A detailed issues page was not re-fetched beyond that Cook description [Verify]"
    ], [
      CERT,
      "Cook Lean Republican, moved from Likely Republican on Sep. 25; PVI R+4",
      "Cook says both parties' super PACs are investing",
      WIKI + " prints Trump 54.6% and Cruz 50.6% in 2024"
    ], [
      "Cook still rates the open seat Lean Republican",
      "The family name is already on a South Texas ballot via his sister",
      "An Air Force biography is what Cook prints"
    ], [
      "Cook moved the seat toward the Democrat, from Likely to Lean",
      "Super PAC spending means the race is not being left to the candidates (Cook)",
      "No personal fundraising total is printed because it was not pulled [Verify]"
    ]),
    person("Johnny C. Garcia", "D", [
      "Democratic nominee for the open seat",
      "Bexar County deputy sheriff (Cook's TX-35 page)",
      "A detailed issues page was not re-fetched beyond that description [Verify]"
    ], [
      CERT,
      "The certification spells the name Johnny C. Garcia",
      "Wikipedia's page says he beat Maureen Galindo in a runoff",
      "Cook treats the seat as competitive because of statewide dynamics and outside spending"
    ], [
      "A deputy sheriff is a local law-enforcement biography in Bexar County",
      "A runoff win is a demonstrated primary victory",
      "Cook's move from Likely Republican to Lean Republican is the opening"
    ], [
      "Lean Republican is still a Republican advantage",
      "PVI R+4 and Trump 54.6%, on the sources above, are the baseline",
      "No fundraising total is printed [Verify]"
    ])
  ]);

add(36, "Southeast Texas, including Lufkin and the Piney Woods, Silsbee, Jasper, most of Beaumont, almost all of Chambers County, and southeast Houston around Hobby and Ellington",
  "Incumbent Brian Babin is seeking another term. Chambers County is voter-facing whole in this district (a zero-population CD-14 sliver was not given to voters). " + WIKI + " says he won 2024 with 69.4%, and that Trump took 61.8% and Cruz 59.1%. " + NOT,
  [person("Brian Babin (incumbent)", "R", [
      "Seeks reelection as the certified Republican nominee",
      "2024 general: 69.4%, per " + WIKI,
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Geography from " + WIKI + "; Chambers is whole CD-36 on this page's map", "Wikipedia prints Trump 61.8% and Cruz 59.1% in 2024"],
    ["The 2024 margin is the incumbency fact", "Not on Cook's Sep. 25 competitive sheet"],
    ["Platform not re-fetched [Verify]", "Presidential figures are Wikipedia's"]),
    thin("Rhonda Hart", "D", "Democratic nominee for TX-36 on the Aug. 28 certification")
  ]);

add(37, "Austin and Travis County except the westernmost precincts",
  "Greg Casar is the incumbent and moved here from the 35th. He is chair of the Congressional Progressive Caucus. Lloyd Doggett, who won 2024 with 75.9% on Wikipedia's page, retired rather than primary Casar; Casar announced for this seat on Aug. 25, 2025, after Doggett's Aug. 21 retirement. " + WIKI + " says Harris took 76.8% and Allred 79.2%, the highest of any new Texas district, with a white plurality and 34% Hispanic voting-age population. " + NOT,
  [person("Greg Casar (incumbent)", "D", [
      "Seeks reelection in the redrawn Austin seat after his old 35th was reconfigured",
      "Congressional Progressive Caucus chair (" + WIKI + ")",
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [
      CERT,
      "Doggett retired rather than run against him (Wikipedia dates: Doggett Aug. 21, 2025; Casar Aug. 25, 2025)",
      "Wikipedia prints Harris 76.8% and Allred 79.2% in 2024",
      "Cook's TX-35 page says Casar is running in TX-37, which matches this nomination"
    ], [
      "The presidential numbers Wikipedia prints are the most Democratic of the new Texas districts",
      "Doggett's retirement cleared the primary",
      "Not on Cook's Sep. 25 competitive sheet"
    ], [
      "Progressive Caucus leadership is the contrast Republicans use where the district is less one-sided; here the presidential baseline is not close",
      "He is a new incumbent of this district number even though he is already in Congress",
      "Platform not re-fetched [Verify]"
    ]),
    thin("Lauren B. Pena", "R", "Republican nominee for TX-37 on the Aug. 28 certification")
  ]);

add(38, "West Houston and northwest Harris County: River Oaks, Tanglewood, Memorial, Spring Branch, the Energy Corridor, Jersey Village, Cypress, Klein, and Tomball",
  "OPEN. Wesley Hunt ran for the Senate. This district is the plurality of no county. " + WIKI + " says Hunt won 2024 with 62.9%, that Trump took 59.5% and Cruz 56.6%, that Cruz lives in the district, and that Jon Bonck, a mortgage broker who had previously filed in the 2nd District, beat Shelly deZevallos in a runoff. " + NOT,
  [person("Jon Bonck", "R", [
      "Republican nominee for Hunt's open seat",
      WIKI + " describes him as a mortgage broker who previously filed in TX-2 and won a runoff over Shelly deZevallos",
      "A 2026 issues page was not re-fetched for this card [Verify]"
    ], [CERT, "Hunt left the seat to run for the Senate; Wikipedia prints his 2024 general at 62.9%", "Wikipedia prints Trump 59.5% and Cruz 56.6%, and says Cruz lives in the district"],
    ["A runoff win over the West Houston Airport president, as Wikipedia identifies deZevallos, is the primary fact", "Wikipedia's presidential numbers favor Republicans"],
    ["A mortgage-broker label is not a voting record", "No platform was re-fetched [Verify]"]),
    thin("Melissa McDonough", "D", "Democratic nominee for TX-38 on the Aug. 28 certification"),
    thin("Alex McMenemy", "G", "Green nominee for TX-38 on the Aug. 28 certification")
  ]);

if (seats.length !== 38) throw new Error("seats " + seats.length);
const nums = new Set(seats.map(s => s.n));
for (let i = 1; i <= 38; i++) if (!nums.has(i)) throw new Error("missing " + i);

const lines = seats.sort((a, b) => a.n - b.n).map(s => {
  const body = JSON.stringify({
    name: "U.S. House — TX District " + s.n,
    region: s.region,
    races: [{ date: "Nov 3, 2026", type: "upcoming", note: s.note, candidates: s.candidates }]
  }, null, 2).split("\n").map((l, i) => i === 0 ? l : "  " + l).join("\n");
  return "  " + s.n + ": " + body;
});

const out = `// (3) HOUSE_RACES — all 38 Texas U.S. House districts on the Nov. 3, 2026 ballot.
// Nominees: Texas Secretary of State Ballot Certification, Aug. 28, 2026.
// Map: PLAN C2333. Ratings: Cook Political Report public print page, Sep. 25, 2026
// (cookpolitical.com/print/ratings/races/house) plus Cook's own TX-15 and TX-35 pages.
// Competitive and open-seat detail: Texas Tribune, Sep. 30, 2026 congressional guide,
// and the Tribune profiles cited in the cards. Other districts use Wikipedia's
// 2026 Texas House elections page for geography and 2024 margins, attributed as such.
// A district absent from Cook's competitive sheet is NOT labeled Solid here.
// Write-ins are not carded. No past primary cards: the November field is the ballot.
const HOUSE_RACES = {
${lines.join(",\n")}
};
`;
const dest = path.join(__dirname, "house.js");
fs.writeFileSync(dest, out);
const nC = seats.reduce((n, s) => n + s.candidates.length, 0);
console.log("wrote", dest, "candidates", nC, "bytes", out.length);
