(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{823:function(e,n,t){"use strict";t.r(n);var a=t(26),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"oefeningmap-structuur"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oefeningmap-structuur"}},[e._v("#")]),e._v(" Oefeningmap-structuur")]),e._v(" "),t("p",[e._v("Binnenin een oefeningmap behandelt Dodona elke map met een "),t("code",[e._v("config.json")]),e._v("-bestand als een aparte leeractiviteit: dit kan een programmeeroefening zijn of een leesactiviteit. We verwachten dat deze map de volgende structuur heeft:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Een "),t("code",[e._v("config.json")]),e._v("-bestand")]),e._v(": dit bestand bevat de "),t("a",{attrs:{href:"../exercise-config"}},[e._v("oefening-specifieke configuratie")]),e._v(". Deze configuratie zal samengevoegd worden met alle "),t("code",[e._v("dirconfig.json")]),e._v("-bestanden in de bovenliggende map van de oefeningmap. Je kan altijd configuratiewaarden die ingesteld werden door een bovenliggende map overschrijven met het "),t("code",[e._v("config.json")]),e._v("-bestand.")]),e._v(" "),t("li",[t("strong",[e._v("Een optioneel "),t("code",[e._v("readme.md")]),e._v("-, "),t("code",[e._v("readme.en.md")]),e._v("- en/of "),t("code",[e._v("readme.nl.md")]),e._v("-bestand:")]),e._v(" De inhoud van deze bestanden zal getoond worden op de oefening-infopagina. Deze bestanden hebben als doel extra informatie geven aan leerkrachten die deze oefening misschien willen gebruiken in een cursus. Als er een bestand beschikbaar is in de taal van de gebruiker ("),t("code",[e._v("readme.<taal>.md")]),e._v("), dan zal deze getoond worden in plaats van het generieke "),t("code",[e._v("readme.md")]),e._v("-bestand. Dit is nuttig omdat "),t("code",[e._v("readme.md")]),e._v(" getoond wordt door GitHub in de oefeningmap. We suggereren om een "),t("code",[e._v("readme.md")]),e._v("-bestand te maken in de taal van je doelpubliek en dit optioneeel te vertalen door "),t("code",[e._v("readme.nl.md")]),e._v(" of "),t("code",[e._v("readme.en.md")]),e._v(" te voorzien.")]),e._v(" "),t("li",[t("strong",[e._v("Een "),t("code",[e._v("description")]),e._v("-map")]),e._v(": deze map bevat de volgende bestanden die de oefening beschrijven:\n"),t("ul",[t("li",[t("strong",[e._v("Een "),t("code",[e._v("description.en.md")]),e._v("- en/of "),t("code",[e._v("description.nl.md")]),e._v("-bestand")]),e._v(": deze bestanden bevatten de Engelse en/of Nederlandse beschrijving van de oefening.")])])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Voorbeelden")]),e._v(" "),t("p",[e._v("Neem een kijkje in de "),t("a",{attrs:{href:"https://github.com/dodona-edu/example-exercises",target:"_blank",rel:"noopener noreferrer"}},[e._v("voorbeeldoefeningenrepository"),t("OutboundLink")],1),e._v(" en "),t("a",{attrs:{href:"https://dodona.ugent.be/en/courses/358/",target:"_blank",rel:"noopener noreferrer"}},[e._v("voorbeeldcursus"),t("OutboundLink")],1),e._v(" om een voorbeeld te vinden van hoe je deze bestanden gebruikt.")])]),e._v(" "),t("h2",{attrs:{id:"oefening-specifieke-configuratie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oefening-specifieke-configuratie"}},[e._v("#")]),e._v(" Oefening-specifieke configuratie")]),e._v(" "),t("blockquote",[t("p",[e._v("Deze mappen zijn enkel relevant voor programmeeroefeningen en niet voor leesactiviteiten.")])]),e._v(" "),t("p",[e._v("Binnenin de "),t("code",[e._v("description")]),e._v("-map kan je volgende mappen specifiëren:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Een optionele "),t("code",[e._v("media")]),e._v("-map")]),e._v(": deze map bevat statische bestanden zoals afbeeldingen die gebruikt worden in de oefeningbeschrijving.")]),e._v(" "),t("li",[t("strong",[e._v("Een optionele "),t("code",[e._v("boilerplate")]),e._v("-map")]),e._v(": deze map bevat de bestanden "),t("code",[e._v("boilerplate.en")]),e._v(", "),t("code",[e._v("boilerplate.nl")]),e._v(", en/of "),t("code",[e._v("boilerplate")]),e._v(". De inhoud van deze bestanden worden automatisch ingeladen in het inzendingstekstveld van de gebruikers. Je kan deze bestanden gebruiken om startcode of structuur te voorzien voor de studenten.")]),e._v(" "),t("li",[t("strong",[e._v("Een "),t("code",[e._v("evaluation")]),e._v("-map")]),e._v(": de inhoud van deze map wordt beschikbaar gesteld voor de judge en kan bijvoorbeeld bestanden met de testcode bevatten.")]),e._v(" "),t("li",[t("strong",[e._v("Een optionele "),t("code",[e._v("workdir")]),e._v("-map")]),e._v(": de inhoud van deze map worddt beschikbaar gesteld tijdens het uitvoeren van de judge en kan bijvoorbeeld databestanden bevatten die nodig zijn tijdens het uitvoeren van de tests.")]),e._v(" "),t("li",[t("strong",[e._v("Een optionele "),t("code",[e._v("solution")]),e._v("-map")]),e._v(": bestanden in deze map zullen getoond worden op de oefening-informatiepagina als voorbeeldoplossing. Meerdere voorbeeldoplossingen zijn mogelijk, maar bestanden met een naam beginnend met "),t("em",[e._v("solution")]),e._v(" zullen vooraan staan.")])]),e._v(" "),t("p",[e._v("Dodona negeert elk ander bestand of elke andere map. Je kan dus vrijuit andere bestanden (bijvoorbeeld met oplossingen voor je oefeningen) aanmaken of een persoonelijke oefeningenhiërarchie maken. Het enige dat niet is toegelaten is oefeningenmappen in andere oefeningenmappen plaatsen.")]),e._v(" "),t("h2",{attrs:{id:"voorbeeld-van-de-structuur-van-een-geldige-oefeningmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#voorbeeld-van-de-structuur-van-een-geldige-oefeningmap"}},[e._v("#")]),e._v(" Voorbeeld van de structuur van een geldige oefeningmap")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-- intsum                     # Korte naam voor de oefening\n|   +-- config.json            # Configuratie van de oefening\n|   +-- evaluation             #\n|   |   +-- intsum_test.hs     # Een Haskell testbestand\n|   +-- description            #\n|   |   +-- description.nl.md  # De beschrijving in het Nederlands\n|   |   +-- description.en.md  # De beschrijving in het Engels\n|   |   +-- media              #\n|   |   |   +-- some_image.png # Een afbeelding die gebruikt wordt in de beschrijving\n|   |   +-- boilerplate        #\n|   |       +-- boilerplate    # Standaard boilerplate code\n|   |       +-- boilerplate.en # Engelse boilerplate code\n|   +-- solution               # Bestanden in deze map zullen getoond worden op de oefening-informatiepagina\n|   |   +-- solution.nl.hs     #\n|   |   +-- solution.en.hs     #\n|   +-- workdir                # Huidige werkmap voor de code van de student\n|       +-- intlines.txt       # Een bestand beschikbaar voor de student\n:\n")])])]),t("h2",{attrs:{id:"voorbeeld-van-de-structuur-van-een-geldige-leesactiviteitmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#voorbeeld-van-de-structuur-van-een-geldige-leesactiviteitmap"}},[e._v("#")]),e._v(" Voorbeeld van de structuur van een geldige leesactiviteitmap")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-- Aeneas                     # Korte naam voor de leesactiviteit\n|   +-- config.json            # Configuratie van de leesactiviteit\n|   +-- README.md              # Beschrijving van de leesactiviteit\n|   +-- description            #\n|   |   +-- description.nl.md  # De beschrijving in het Nederlands\n|   |   +-- description.en.md  # De beschrijving in het Engels\n|   |   +-- media              #\n|   |   |   +-- some_image.png # Een afbeelding die gebruikt wordt in de beschrijving\n:\n")])])])])}),[],!1,null,null,null);n.default=i.exports}}]);