---
title: "Dodona 3.6"
description: "Release notes Dodona 3.6"
permalink: '/news/:year/:month/:day/:slug'
date: "2020-04-26"
---

<NewsHeader :title="$frontmatter.title" :date="$frontmatter.date" lang="nl" />

> Dodona 3.6 introduceert het concept van leesactiviteiten naast de bestaande oefeningen.

Deze release was [het resultaat](https://devpost.com/software/dodona-learn-to-code) van de [#EUvsVirus hackathon](https://euvsvirus.org/).

## Leesactiviteiten

Naast oefeningen ondersteunt Dodona nu ook leesactiviteiten. Dit type pagina kan gebruikt worden om bijvoorbeeld nieuwe programmeerconcepten uit te leggen zonder gelinkt te zijn aan een oefening. Op dergelijke pagina is de indienmogelijkheid onderaan de pagina vervangen door een "markeren als gelezen knop". Je kan eenvoudig oefeningen en leesactiviteiten combineren binnen een zelfde opdrachtenreeks binnen je cursus.

![Markeren als gelezen](./markeren-als-gelezen.png)

Het aanmaken van een leesactiviteit is zeer gelijkaardig aan hoe oefeningen worden aangemaakt. Ze gebruiken dezelfde mappenstructuur en hetzelfde beschrijvingsformaat. Het enige verschil is dat in het configuratiebestand de extra waarde `type` op `content` moet gezet worden.

## De Programmeursleerling

Om de mogelijkheden van leesactiviteiten te demonstreren hebben we [een volledige Python programmeercursus](https://dodona.ugent.be/nl/courses/293/) gericht op het secundair onderwijs toegevoegd aan Dodona. Deze cursus is een aangepaste versie van het boek [De Programmeursleerling](http://www.spronck.net/pythonbook/dutchindex.xhtml) van Pieter Spronck van de Universiteit van Tilburg. Meer informatie over hoe je deze cursus zelf kan gebruiken kan gevonden worden in [deze handleiding](/nl/guides/the-coders-apprentice/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/CGdVEJk1Y9s" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Volledige lijst van veranderingen

Naast deze grotere uitbreidingen zijn er natuurlijk ook een hoop andere kleine dingen verbeterd. Voor een volledige lijst van veranderingen verwijzen we naar [onze GitHub release](https://github.com/dodona-edu/dodona/releases/tag/3.6).
