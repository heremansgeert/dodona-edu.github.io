(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{513:function(e,o,t){e.exports=t.p+"assets/img/search.c899fec1.png"},514:function(e,o,t){e.exports=t.p+"assets/img/skeleton.ed57d1d8.png"},515:function(e,o,t){e.exports=t.p+"assets/img/teachmeet.dc2c5ad9.jpg"},751:function(e,o,t){"use strict";t.r(o);var a=t(26),s=Object(a.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("NewsHeader",{attrs:{title:e.$frontmatter.title,date:e.$frontmatter.date,lang:"en"}}),e._v(" "),a("p",[e._v("The arrival of the 2.5 millionth submission on Dodona is celebrated with the release of Dodona version 2.5 bringing label management to config files, improved search functionality, a new page to keep track of user progress through the learning path of a course and faster loading of course pages.")]),e._v(" "),a("p",[e._v("We welcome two new secondary schools to the Dodona family: MSKA Roeselare and Don Bosco College Kortrijk (both using Smartschool login) that are mentored by prof. dr. Veerle Fack.")]),e._v(" "),a("p",[e._v("From now on, new Dodona features will be released as soon as they are ready and tested instead of grouped into larger updates. These smaller intermediate releases will allow deploying without any service interruptions, bring new features to you faster, reduce the risk of something going wrong and enable quick rollbacks in case of problems. Please keep forwarding your feedback, comments and suggestions, either as Dodona Github issues or using the "),a("a",{attrs:{href:"https://dodona.ugent.be/contact/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dodona contact form"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"manage-labels-using-config-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manage-labels-using-config-files"}},[e._v("#")]),e._v(" Manage labels using config files")]),e._v(" "),a("p",[e._v("As you might have seen in your exercise repositories, the exercise configuration files gained a new labels entry that allows you to specify a list of labels (strings) for a specific exercise (config.json) or all exercises under the directory (dirconfig.json). This allows specification of exercise labels in the exercise repositories without using the web interface, which allows scripting the assignment of labels to exercises. Feel free to keep experimenting with labels and give us your feedback.")]),e._v(" "),a("h2",{attrs:{id:"improved-search-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improved-search-functionality"}},[e._v("#")]),e._v(" Improved search functionality")]),e._v(" "),a("p",[e._v("Additional metadata was added to both courses and exercises to increase the usefulness of the search feature. Courses can now optionally specify the institution to which they belong and exercises now also contain their programming language, repository name and location within the repository. This information was added automatically for all existing courses and exercises, so no action from you is required.")]),e._v(" "),a("p",[e._v("When searching for labels, programming languages or repositories, Dodona now tries to autocomplete your query and displays the matched item as a token. Search itself also got smarter by searching for individual words in a query instead of only matching the entire string. The example below shows how exercises can be added to a course series when searching all exercises for the “python” programming language that are labelled with “loops” and that match the term “number” (in this case matches with the names of the exercises in any of the supported languages).")]),e._v(" "),a("p",[a("img",{attrs:{src:t(513),alt:"search"}})]),e._v(" "),a("h2",{attrs:{id:"user-progress-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-progress-pages"}},[e._v("#")]),e._v(" User progress pages")]),e._v(" "),a("p",[e._v("Clicking on the name of a user in the member list of a course now takes you to a new page where you can inspect the progress of that user in your course. For now, this page shows the status for each of the exercises and series, but in the future we plan to add more statistics and graphs.")]),e._v(" "),a("p",[e._v("By the way, users are now listed using their full name instead of their username across the entire Dodona platform.")]),e._v(" "),a("h2",{attrs:{id:"faster-loading-of-course-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faster-loading-of-course-pages"}},[e._v("#")]),e._v(" Faster loading of course pages")]),e._v(" "),a("p",[e._v("Course pages were sometimes slow to load and for courses with many series, getting to the bottom series required scrolling and waiting multiple times. This has now been fixed with a new loading behaviour where only basic series information is loaded initially with more details only being added when a series becomes visible in your browser. Swapping out the basic version for a more detailed version happens so fast that you need expert scroll skills (or a really slow connection) to see it in action.")]),e._v(" "),a("p",[a("img",{attrs:{src:t(514),alt:"skeleton"}})]),e._v(" "),a("h2",{attrs:{id:"dodona-school-mentoring-program"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dodona-school-mentoring-program"}},[e._v("#")]),e._v(" Dodona school mentoring program")]),e._v(" "),a("p",[e._v("Dodona has generic authentication support for Smartschool and Office 365 accounts that are commonly used in secondary education in Flanders. However, during the current pilot phase we block access by default and give controlled access to schools that have a mentor from the Dodona community who wants to provide help and feedback to the schools for getting started with Dodona.")]),e._v(" "),a("p",[e._v("When a school enters the mentoring program, all student and teacher accounts from the school (Smartschool or Office 365) are given access to Dodona. Some teachers from the school are given “staff” rights on Dodona that allows them to start preparing: creating courses with a learning path of exercise series and/or creating new exercise repositories. As the school plans to start working on Dodona with their students, a specific login button for the school is added to the Dodona login page.")]),e._v(" "),a("p",[e._v("If you want to become a Dodona school mentor yourself, please ask the school to send us (and you) the following information by email to "),a("a",{attrs:{href:"mailto:dodona@ugent.be"}},[e._v("dodona@ugent.be")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("name of the school (as it will appear on the login page)")]),e._v(" "),a("li",[e._v("high-resolution logo of the school (as it will appear on the login page)")]),e._v(" "),a("li",[e._v("authentication method: Smartschool or Office 365")]),e._v(" "),a("li",[e._v("names of teachers that request “staff” role on Dodona")]),e._v(" "),a("li",[e._v("name of school mentor from the Dodona community")])]),e._v(" "),a("p",[e._v("What we expect from you as a mentor is that you provide first-line assistance to the school in getting started with Dodona. We anticipate that most schools will start by making courses using existing exercises that are shared on the Dodona platform, and will only develop their own collection of new exercises (or even new judges) as they become more experienced. This mentoring program is definitely also open for secondary school teachers that want to mentor their colleagues.")]),e._v(" "),a("h2",{attrs:{id:"dodona-teachmeet-19-09-2018"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dodona-teachmeet-19-09-2018"}},[e._v("#")]),e._v(" Dodona TeachMeet (19/09/2018)")]),e._v(" "),a("p",[a("img",{attrs:{src:t(515),alt:"teachmeet"}})]),e._v(" "),a("h2",{attrs:{id:"full-list-of-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-list-of-changes"}},[e._v("#")]),e._v(" Full list of changes")]),e._v(" "),a("p",[e._v("For a full list of changes we refer to "),a("a",{attrs:{href:"https://github.com/dodona-edu/dodona/releases/tag/2.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("our GitHub release"),a("OutboundLink")],1),e._v(", but we list the most important things below.")]),e._v(" "),a("ul",[a("li",[e._v("load series via skeleton in course")]),e._v(" "),a("li",[e._v("rate limit submissions")]),e._v(" "),a("li",[e._v("make programming language a full model")]),e._v(" "),a("li",[e._v("change homepage dynamically when favoriting and unfavoriting courses")]),e._v(" "),a("li",[e._v("use the name of the user instead of the username in most places")]),e._v(" "),a("li",[e._v("allow the Python Tutor to be used for private exercises")]),e._v(" "),a("li",[e._v("allow docker container to be overridden in exercise configuration")]),e._v(" "),a("li",[e._v("use the user's name and email address in commits by Dodona")]),e._v(" "),a("li",[e._v("limit the number of PIDs an evaluation container can use (prevents fork bombs)")]),e._v(" "),a("li",[e._v("add a user page scoped in the course (showing user progress within the course)")]),e._v(" "),a("li",[e._v("allow setting labels via exercise config files")]),e._v(" "),a("li",[e._v("allow search by repository")]),e._v(" "),a("li",[e._v("add institution to course")]),e._v(" "),a("li",[e._v("allow searching for users by full name")]),e._v(" "),a("li",[e._v("limit write speeds during evaluation to 1 Mbps")]),e._v(" "),a("li",[e._v("allow searching in multiple categories at the same time (e.g. status and exercise name in submissions)")]),e._v(" "),a("li",[e._v("allow course admins to mass rejudge submissions")])])],1)}),[],!1,null,null,null);o.default=s.exports}}]);