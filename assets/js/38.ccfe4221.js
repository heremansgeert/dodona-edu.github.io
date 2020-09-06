(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{649:function(e,n,a){e.exports=a.p+"assets/img/search.c899fec1.png"},650:function(e,n,a){e.exports=a.p+"assets/img/skeleton.ed57d1d8.png"},651:function(e,n,a){e.exports=a.p+"assets/img/teachmeet.dc2c5ad9.jpg"},749:function(e,n,a){"use strict";a.r(n);var o=a(26),r=Object(o.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("NewsHeader",{attrs:{title:e.$frontmatter.title,date:e.$frontmatter.date,lang:"nl"}}),e._v(" "),o("p",[e._v("We vieren de 2.5 miljoenste ingezonden oplossing op Dodona met de release van Dodona versie 2.5, met de mogelijkheid om labels te beheren via configuratiebestanden, verbeterde zoekfunctionaliteit, een nieuwe pagina om de voortgang van een gebruiker doorheen het leerpad van een cursus beter te kunnen opvolgen en het sneller inladen van cursuspagina’s.")]),e._v(" "),o("p",[e._v("We verwelkomen twee nieuwe middelbare scholen in de Dodona-familie: MSKA Roeselare en Don Bosco College Kortrijk (aanmelden verloopt in beide gevallen via Smartschool) die worden gecoacht door prof. dr. Veerle Fack.")]),e._v(" "),o("p",[e._v("Vanaf nu zullen nieuwe Dodona-functionaliteiten in productie genomen worden van zodra ze afgewerkt en getest zijn, in plaats van ze te groeperen in grotere updates. Door deze kleinere tussentijdse releases kan Dodona meestal zonder onderbreking blijven functioneren tijdens het releasen, kunnen jullie sneller van nieuwe functionaliteiten gebruikmaken, vermindert het risico dat er iets fout gaat en kunnen we updates sneller bijsturen of terugdraaien in geval van problemen. Blijf alvast jullie feedback, opmerkingen en suggesties doorsturen als issue op de GitHub repository van Dodona of via "),o("a",{attrs:{href:"https://dodona.ugent.be/contact/",target:"_blank",rel:"noopener noreferrer"}},[e._v("het Dodona contactformulier"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"beheren-van-labels-via-configuratiebestanden"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#beheren-van-labels-via-configuratiebestanden"}},[e._v("#")]),e._v(" Beheren van labels via configuratiebestanden")]),e._v(" "),o("p",[e._v("Zoals je misschien gemerkt hebt in je repositories met oefeningen, is er in de configuratiebestanden van de oefeningen een nieuwe record labels bijgekomen die toelaat om een lijst van labels (strings) in te stellen voor een specifieke oefening (config.json) of voor alle oefeningen onder een directory (dirconfig.json). Dit laat toe om rechtstreeks labels toe te kennen aan oefeningen in een repository los van de web interface, waardoor het toekennen van labels ook makkelijker kan geautomatiseerd worden. We nodigen je alvast uit om te blijven experimenteren met labels en horen graag je feedback hierover.")]),e._v(" "),o("h2",{attrs:{id:"meer-mogelijkheden-om-te-zoeken"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#meer-mogelijkheden-om-te-zoeken"}},[e._v("#")]),e._v(" Meer mogelijkheden om te zoeken")]),e._v(" "),o("p",[e._v("Zowel aan cursussen als aan oefeningen werd bijkomende metadata toegevoegd om het zoeken naar specifieke cursussen of oefeningen nog te verbeteren. Voor cursussen kan nu optioneel ingesteld worden door welke een onderzoeks- of onderwijsinstelling ze aangeboden worden, en aan oefeningen wordt de programmeertaal, de naam van de repository en de locatie binnen de repository gekoppeld. Deze nieuwe informatie werd automatisch toegevoegd voor alle bestaande cursussen en oefeningen, waardoor je hiervoor geen extra acties moet ondernemen.")]),e._v(" "),o("p",[e._v("Bij het zoeken naar labels, programmeertalen of repository’s probeert Dodona nu zelf je zoekopdracht aan te vullen en toont het overeenkomstige items als een token. Het zoeken zelf is ook slimmer geworden door te zoeken met individuele woorden in een zoekopdracht in plaats van de volledige zoekopdracht. Onderstaand voorbeeld toont hoe oefeningen aan een reeks kunnen toegevoegd worden door te zoeken naar alle oefeningen voor de programmeertaal “python” die gelabeld zijn met “loops” en die corresponderen met de term “number” (gezocht in alle velden, en in dit geval gevonden in de namen van oefeningen in één van de ondersteunde talen).")]),e._v(" "),o("p",[o("img",{attrs:{src:a(649),alt:"search"}})]),e._v(" "),o("h2",{attrs:{id:"gebruikerspagina-s-met-voortgang"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gebruikerspagina-s-met-voortgang"}},[e._v("#")]),e._v(" Gebruikerspagina’s met voortgang")]),e._v(" "),o("p",[e._v("Wanneer je op de naam van een gebruiker klikt in de gebruikerslijst van een cursus wordt je naar een nieuwe pagina gebracht waar je de voortgang van die gebruiker in je cursus kan bekijken. Momenteel toont deze pagina de status voor elk van de oefeningen en reeksen maar we zijn van plan hier in de toekomst meer statistieken en grafieken aan toe te voegen (maakt ook deel uit van een masterthesis rond "),o("em",[e._v("learning analytics")]),e._v(" and "),o("em",[e._v("educational data mining")]),e._v(").")]),e._v(" "),o("p",[e._v("Even terzijde, vanaf nu worden alle gebruikers over het gehele Dodona platform opgelijst met hun volledige naam (voor- en familienaam) in plaats van hun gebruikersnaam.")]),e._v(" "),o("h2",{attrs:{id:"sneller-inladen-van-cursuspagina-s"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sneller-inladen-van-cursuspagina-s"}},[e._v("#")]),e._v(" Sneller inladen van cursuspagina’s")]),e._v(" "),o("p",[e._v("Cursuspagina’s werden soms traag ingeladen en voor cursussen met veel reeksen moest je om aan de onderste reeks te geraken meerdere keren scrollen en wachten. We hebben dit opgelost met nieuw gedrag voor het inladen waar initieel enkel basisinformatie over de reeks wordt ingeladen en er meer details worden toegevoegd wanneer de reeks zichtbaar wordt in je browser. Het vervangen van de basisversie door de gedetailleerde versie gebeurt zo snel dat je goed moet kunnen scrollen (of op een trage connectie zitten) om dit te zien gebeuren.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(650),alt:"skeleton"}})]),e._v(" "),o("h2",{attrs:{id:"dodona-coachingsprogramma-voor-middelbare-scholen"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dodona-coachingsprogramma-voor-middelbare-scholen"}},[e._v("#")]),e._v(" Dodona coachingsprogramma voor middelbare scholen")]),e._v(" "),o("p",[e._v("Dodona heeft generieke ondersteuning voor authenticatie via Smartschool en Office 365 accounts die vaak gebruikt worden door middelbare scholen in Vlaanderen. Tijdens de huidige pilootfase blokkeren we standaard nog de toegang en geven we gecontroleerd toegang tot scholen met een ervaren “coach” uit de Dodona community die de school helpt om met Dodona aan de slag te gaan en eerste-hulp-bij-vragen ondersteuning kan bieden.")]),e._v(" "),o("p",[e._v("Als een school instapt in het coachingsprogramma, dan krijgen alle gebruikersaccounts van leerlingen en leerkrachten van de school (Smartschool of Office 365) meteen toegang tot Dodona. Sommige leerkrachten van de school krijgen ook de rol “staff” in Dodona waardoor ze kunnen beginnen met de voorbereidingen: aanmaken van cursussen met oefeningenreeksen en/of het toevoegen van nieuwe oefeningen. Van zodra de school concrete plannen heeft om haar leerlingen te laten werken met Dodona, voegen we een specifieke aanmeldknop voor de school toe op de aanmeldpagina van Dodona.")]),e._v(" "),o("p",[e._v("Als je zelf voor een school Dodona-coach wil worden, vraag de school dan om naar ons (en jezelf) de volgende informatie door te mailen via "),o("a",{attrs:{href:"mailto:dodona@ugent.be"}},[e._v("dodona@ugent.be")])]),e._v(" "),o("ul",[o("li",[e._v("naam van de school (zichtbaar op de aanmeldpagina)")]),e._v(" "),o("li",[e._v("logo van de school in hoge resolutie (zichtbaar op de aanmeldpagina)")]),e._v(" "),o("li",[e._v("authenticatiemethode: Smartschool of Office 365")]),e._v(" "),o("li",[e._v("namen van lesgevers die de rol “staff” moeten krijgen op Dodona")]),e._v(" "),o("li",[e._v("naam van de coach voor de school vanuit de Dodona community")])]),e._v(" "),o("p",[e._v("Als coach voor een school verwachten we van je dat je eerstelijnshulp biedt aan de school om met Dodona aan de slag te gaan. We vermoeden dat de meeste scholen in eerste instantie zullen beginnen met het aanmaken van cursussen op basis van bestaande oefeningen die reeds op het Dodona-platform gedeeld worden, en dat ze pas zullen beginnen om zelf oefeningen (of judges) aan het platform toe te voegen als ze wat meer ervaring hebben. Dit coachingsprogramma staat zeker ook open voor lesgevers uit het middelbaar onderwijs die graag collega’s van andere scholen willen helpen begeleiden.")]),e._v(" "),o("h2",{attrs:{id:"dodona-teachmeet-19-09-2018"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dodona-teachmeet-19-09-2018"}},[e._v("#")]),e._v(" Dodona TeachMeet (19/09/2018)")]),e._v(" "),o("p",[o("img",{attrs:{src:a(651),alt:"teachmeet"}})]),e._v(" "),o("h2",{attrs:{id:"volledige-lijst-van-veranderingen"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#volledige-lijst-van-veranderingen"}},[e._v("#")]),e._v(" Volledige lijst van veranderingen")]),e._v(" "),o("p",[e._v("Voor een volledige lijst van veranderingen verwijzen we naar "),o("a",{attrs:{href:"https://github.com/dodona-edu/dodona/releases/tag/2.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("onze GitHub release"),o("OutboundLink")],1),e._v(", maar hieronder lijsten we ook kort de belangrijkste dingen op.")]),e._v(" "),o("ul",[o("li",[e._v("inladen van reeksen via "),o("em",[e._v("skeletons")])]),e._v(" "),o("li",[e._v("snelheidsbeperkingen voor het inzenden van oplossingen")]),e._v(" "),o("li",[e._v("programmeertalen vormen nu een eigen model")]),e._v(" "),o("li",[e._v("dynamisch aanpassen van landingspagina bij selecteren van favoriete cursussen")]),e._v(" "),o("li",[e._v("gebruik op meeste plaatsen naam van gebruiker in plaats van loginnaam")]),e._v(" "),o("li",[e._v("geef Python Tutor toegang tot privé oefeningen")]),e._v(" "),o("li",[e._v("toelaten om specifieke Docker-container in te stellen voor oefening")]),e._v(" "),o("li",[e._v("gebruik naam en emailadres van gebruiker bij git commits door Dodona")]),e._v(" "),o("li",[e._v("beperk aantal PIDs die judges tegelijkertijd kunnen opstarten (preventie voor "),o("em",[e._v("fork bombs")]),e._v(")")]),e._v(" "),o("li",[e._v("gebruikerspagina toevoegen die gekoppeld is aan cursus (toont voortgang van gebruiker binnen cursus)")]),e._v(" "),o("li",[e._v("instellen van labels toelaten via configuratiebestanden van oefeningen")]),e._v(" "),o("li",[e._v("toelaten om oefeningen te zoeken op naam van repository en locatie binnen repository")]),e._v(" "),o("li",[e._v("onderwijs- en onderzoeksinstelling instellen voor cursussen")]),e._v(" "),o("li",[e._v("zoeken van gebruikers op basis van hun volledig naam")]),e._v(" "),o("li",[e._v("schrijfsnelheid beperken tot 1 Mbps tijdens het evalueren")]),e._v(" "),o("li",[e._v("tegelijkertijd zoeken binnen meerdere informatievelden (e.g. status en naam van oefening voor ingezonden oplossingen)")]),e._v(" "),o("li",[e._v("cursusbeheerders toelaten om ingediende oplossingen in bulk te herevalueren")])])],1)}),[],!1,null,null,null);n.default=r.exports}}]);