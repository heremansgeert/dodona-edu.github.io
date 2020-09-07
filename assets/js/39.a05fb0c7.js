(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{653:function(e,n,r){e.exports=r.p+"assets/img/diff-split.e96b1554.png"},654:function(e,n,r){e.exports=r.p+"assets/img/diff-unified.1ed422e9.png"},655:function(e,n,r){e.exports=r.p+"assets/img/series-order.1d9b7a4f.png"},752:function(e,n,r){"use strict";r.r(n);var a=r(26),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("NewsHeader",{attrs:{title:e.$frontmatter.title,date:e.$frontmatter.date,lang:"nl"}}),e._v(" "),a("p",[e._v("Release 2.6 bevat een verbeterde diff view op de feedbackpagina, herwerkte caching waardoor pagina’s sneller worden geladen, een pagina met nieuwsberichten over Dodona (waar onder andere de release notes zullen op verschijnen), de mogelijkheid voor cursusbeheerders om de volgorde van reeksen aan te passen in een cursus en de mogelijkheid voor judges om tabs te maken die enkel zichtbaar zijn voor cursusbeheerders (niet voor studenten).")]),e._v(" "),a("h2",{attrs:{id:"verbeterde-diff-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verbeterde-diff-view"}},[e._v("#")]),e._v(" Verbeterde diff view")]),e._v(" "),a("p",[e._v("Als er voor een bepaalde oefeningen een oplossing wordt ingediend, dan wordt die automatisch beoordeeld door een "),a("strong",[e._v("judge")]),e._v(" die aan de oefening gekoppeld is. Als resultaat van die beoordeling produceert de judge gedetailleerde feedback, waarbij de mogelijkheid bestaat om voor individuele testen een waarde die gegenereerd werd aan de hand van de ingediende oplossing te koppelen aan een verwachte waarde. Om duidelijk de verschillen te zien tussen de gegenereerde en de verwachte waarde, worden deze twee waarden tekstueel met elkaar vergeleken op de feedbackpagina in een zogenaamde "),a("em",[e._v("diff view")]),e._v(". In de nieuwe release werd visuele weergave van deze "),a("em",[e._v("diff view")]),e._v(" verbeterd, waarbij het voor gebruikers nog duidelijker geworden is om onderscheid te maken tussen welke waarde gegenereerd werd door hun oplossing en wat de verwachte waarde is. Er worden nu ook regelnummers weergegeven naast de gegenereerde en de verwachte waarde om de vergelijking tussen de twee resultaten te bevorderen.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(653),alt:"split diff"}})]),e._v(" "),a("p",[e._v("Bovenaan de feedbackpagina is er ook een knop bijgekomen waarmee gebruikers kunnen kiezen om de gegenereerde en de verwachte waarde naast elkaar (“split” mode) of door elkaar (“unified” mode) weer te geven. Deze feedback die hierboven naast elkaar werd weergegeven ziet er dan als volgt uit als die door elkaar wordt weergegeven.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(654),alt:"unified diff"}})]),e._v(" "),a("h2",{attrs:{id:"herwerkte-caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#herwerkte-caching"}},[e._v("#")]),e._v(" Herwerkte caching")]),e._v(" "),a("p",[e._v("Om pagina’s zo snel mogelijk weer te gegeven, probeert Dodona berekende waarden te onthouden zodat ze niet opnieuw moeten berekend worden als ze later opnieuw nodig zijn. Dit trucje wordt "),a("em",[e._v("caching")]),e._v(" genoemd. Het caching-mechanisme van Dodona werd herschreven, waardoor Dodona nu meer controle heeft om te beslissen welke waarden moeten onthouden worden en wanneer het wel nodig is om de waarden opnieuw te berekenen. Dit zorgt er voor dat sommige pagina's nu sneller geladen worden.")]),e._v(" "),a("h2",{attrs:{id:"dodona-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dodona-blog"}},[e._v("#")]),e._v(" Dodona blog")]),e._v(" "),a("p",[e._v("Klik op “Nieuws” in het menu aan de linkerkant van elke Dodona-pagina om naar de blog te navigeren. Als je deze release notes aan het lezen bent dan heb je de blog van Dodona dus al gevonden. Vanaf nu kan je nieuwsberichten over Dodona volgen in de blog: release notes, nieuwe onderwijs- of onderzoeksinstellingen die Dodona gebruiken, events rond Dodona, … Kortom, alles wat de Dodona-community zou kunnen interesseren.")]),e._v(" "),a("h2",{attrs:{id:"volgorde-van-reeksen-aanpassen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volgorde-van-reeksen-aanpassen"}},[e._v("#")]),e._v(" Volgorde van reeksen aanpassen")]),e._v(" "),a("p",[e._v("Dit moet zowat de meest gevraagde functionaliteit zijn onder lesgevers, en nu is die er. Onderaan de pagina waar je de eigenschappen van een cursus kan bewerken, vind je een overzicht met de reeksen van de cursus. Door in dit overzicht de reeksen te verslepen, kan je de volgorde aanpassen waarin de reeksen weergegeven worden.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(655),alt:"reeks volgorde"}})]),e._v(" "),a("h2",{attrs:{id:"verborgen-tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verborgen-tabs"}},[e._v("#")]),e._v(" Verborgen tabs")]),e._v(" "),a("p",[e._v("Dodona geeft judges de kans om feedback te groeperen in verschillende tabs. Nu is er de mogelijkheid om een tab enkel zichtbaar te maken voor lesgevers en niet voor studenten. Dit maakt het bijvoorbeeld mogelijk om een reeks testen uit te voeren waarover de studenten feedback krijgt, maar ook een reeks “verborgen” testen waarover de student geen feedback krijgt. De judge kan zelf bepalen of de resultaten van deze verborgen testen in rekening gebracht worden (bijvoorbeeld in de globale beoordeling van de oplossing, of een korte rapportering in de top-level feedback). Op die manier kan bijvoorbeeld de mogelijkheid geboden worden om een aantal verborgen testen te hebben, waarvoor de student geen kans krijgt om die te gamen (code schrijven die er specifiek voor zorgt dat bepaalde testen slagen).")]),e._v(" "),a("p",[e._v("Bestaande judges en oefeningen kunnen vanaf nu aangepast worden om de mogelijkheid van verborgen tabs uit te buiten. Specifieke vragen hierover kan je richten aan de auteurs van de judges en de oefeningen.")]),e._v(" "),a("h2",{attrs:{id:"nieuwe-onderwijs-en-onderzoeksinstellingen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nieuwe-onderwijs-en-onderzoeksinstellingen"}},[e._v("#")]),e._v(" Nieuwe onderwijs- en onderzoeksinstellingen")]),e._v(" "),a("p",[e._v("Bij deze release verwelkomen we twee nieuwe onderwijsinstellingen die Dodona gebruiken: "),a("a",{attrs:{href:"https://www.scheppers-wetteren.be/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scheppersinstituut"),a("OutboundLink")],1),e._v(" (Wetteren, België) en "),a("a",{attrs:{href:"https://www.ucll.be/",target:"_blank",rel:"noopener noreferrer"}},[e._v("UC Leuven Limburg"),a("OutboundLink")],1),e._v(" (Hasselt, België).")]),e._v(" "),a("h2",{attrs:{id:"volledige-lijst-van-veranderingen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volledige-lijst-van-veranderingen"}},[e._v("#")]),e._v(" Volledige lijst van veranderingen")]),e._v(" "),a("p",[e._v("Voor een volledige lijst van veranderingen verwijzen we naar "),a("a",{attrs:{href:"https://github.com/dodona-edu/dodona/releases/tag/2.6",target:"_blank",rel:"noopener noreferrer"}},[e._v("onze GitHub release"),a("OutboundLink")],1),e._v(", maar hieronder lijsten we ook kort de belangrijkste dingen op.")]),e._v(" "),a("ul",[a("li",[e._v("diff view herwerken")]),e._v(" "),a("li",[e._v("caching herwerken")]),e._v(" "),a("li",[e._v("mindere lege waarden naar configuratiebestanden schrijven")]),e._v(" "),a("li",[e._v("tooltip toevoegen aan status van reeks")]),e._v(" "),a("li",[e._v("blog toevoegen")]),e._v(" "),a("li",[e._v("visuele weergave feedbackpagina herwerken")]),e._v(" "),a("li",[e._v("verborgen tabs ondersteunen in feedbackpagina")]),e._v(" "),a("li",[e._v("cursusbeheerders toelaten om volgorde van reeksen aan te passen")]),e._v(" "),a("li",[e._v("polling interval gradueel verlengen voor status-update van niet-verwerkte oplossingen")]),e._v(" "),a("li",[e._v("bugfixes en kleine verbeteringen")])])],1)}),[],!1,null,null,null);n.default=t.exports}}]);