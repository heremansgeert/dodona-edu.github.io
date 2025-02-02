---
title: "Dodona 3.6"
description: "Release notes Dodona 3.6"
permalink: '/news/:year/:month/:day/:slug'
date: "2020-04-26"
---

<NewsHeader :title="$frontmatter.title" :date="$frontmatter.date" lang="en" />

> Dodona 3.6 introduces the concept of reading activities, next to the existing exercises.

This release was [the result](https://devpost.com/software/dodona-learn-to-code) of the [#EUvsVirus hackathon](https://euvsvirus.org/).

## Reading activities

Next to exercises, Dodona now also supports reading activities. This type of content page can be used to introduce new programming concepts without being linked with an exercise. On such pages, the text editor at the bottom of the page is replaced with a "mark as read" button. You can mix both exercises and reading activities in the series of your course.

![Mark as read](./mark-as-read.png)

The creation of a reading activity is very similar to the way exercises are created. They use the same directory structure and description format. The only difference is that the config file contains an additional value: `type` is set to `content`.

## The Coder's Apprentice

To showcase the abilities of content pages, we added [a complete Python programming course](https://dodona.ugent.be/en/courses/296/) aimed at secondary education. The course is an adapted version of [The Coder's Apprentice](http://www.spronck.net/pythonbook/index.xhtml) by Pieter Spronck of Tilburg University. More information on how to use this course can be found in [this guide](/en/guides/the-coders-apprentice/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/eAp-ftrZQDE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Full list of changes

Aside from this big change, we have also worked on a number of smaller issues. Please check [our GitHub release](https://github.com/dodona-edu/dodona/releases/tag/3.6) for a full list of changes.
