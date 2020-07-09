(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{379:function(e,t,s){e.exports=s.p+"assets/img/diff-split.e96b1554.png"},380:function(e,t,s){e.exports=s.p+"assets/img/diff-unified.1ed422e9.png"},381:function(e,t,s){e.exports=s.p+"assets/img/series-order.1d9b7a4f.png"},472:function(e,t,s){"use strict";s.r(t);var a=s(26),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("NewsHeader",{attrs:{title:e.$frontmatter.title,date:e.$frontmatter.date,lang:"en"}}),e._v(" "),a("p",[e._v("Release 2.6 contains an improved diff view on the feedback page, improved caching resulting in faster page loads, a blog with posts related to Dodona (where future release notes will be published), support for course admins to reorder the series in a course, and support for judges to include tabs that are only visible for course admins (not for students).")]),e._v(" "),a("h2",{attrs:{id:"improved-diff-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improved-diff-view"}},[e._v("#")]),e._v(" Improved diff view")]),e._v(" "),a("p",[e._v("If a solution is submitted for a given exercise, it is automatically evaluated by the "),a("strong",[e._v("judge")]),e._v(" linked to the exercise. The judge can report detailed feedback as a result of this evaluation process. When reporting on an individual test, the judge has the option to link a value generated from the submitted solution to an expected value. To highlight possible differences between the expected and generated values, Dodona shows a textual comparison on the feedback page in a so-called "),a("em",[e._v("diff view")]),e._v(". This diff view has been improved in the latest release, to enable users to make a clear distinction between the generated value and the expected value. The diff view now also contains line numbers next to the generated and expected values, improving the experience in comparing both results.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(379),alt:"split diff"}})]),e._v(" "),a("p",[e._v("A new button has been added on top of the feedback page, allowing users to toggle between “split” mode (expected and generated values are displayed side-by-side) and “unified” mode (lines of expected and generated values are interleaved). The feedback shown above in “split” mode looks as follows when displayed in “unified” mode.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(380),alt:"unified diff"}})]),e._v(" "),a("p",[e._v("This new representation is mostly helpful with multiline values.")]),e._v(" "),a("h2",{attrs:{id:"improved-caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#improved-caching"}},[e._v("#")]),e._v(" Improved caching")]),e._v(" "),a("p",[e._v("Dodona caches computed values to speed-up page loads. The caching mechanism has been improved to give Dodone more fine-grained control over the values that require caching and when cached values need to be recomputed. This reduces load times for some of the pages.")]),e._v(" "),a("h2",{attrs:{id:"dodona-blog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dodona-blog"}},[e._v("#")]),e._v(" Dodona blog")]),e._v(" "),a("p",[e._v("Navigate to the Dodona blog by clicking “News” in the menu to the left of each Dodona page. If you’re these release notes, you already found your way to the blog posts. From now on you can follow Dodona updates in the blog: release notes, new research and education federations using Dodona, events related to Dodona, … In short, anything of interest to the Dodona community.")]),e._v(" "),a("h2",{attrs:{id:"reorder-series-in-learning-path-of-a-course"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reorder-series-in-learning-path-of-a-course"}},[e._v("#")]),e._v(" Reorder series in learning path of a course")]),e._v(" "),a("p",[e._v("By far the #1 feature request among course admins now has been implemented. An overview of the series in a course has been appended at the bottom of the course edit page. This overview supports drag-and-drop to change the order of the series.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(381),alt:"series order"}})]),e._v(" "),a("h2",{attrs:{id:"hidden-tabs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hidden-tabs"}},[e._v("#")]),e._v(" Hidden tabs")]),e._v(" "),a("p",[e._v("Judges can organize their feedback in multiple tabs. Tabs can now be made visible for course admins only, not for students. Group “hidden” tests in “hidden” tabs to hide them from users. Judges can decide if and how these “hidden” tests are taken into account (e.g. in the global assessment of the submission or in the short top-level description of the feedback). This may prevent that students can game failing tests (write specific snippets of code whose only goal is to make certain tests pass).")]),e._v(" "),a("p",[e._v("Existing judges and exercises must be adjusted to incorporate the use of hidden tabs. Specific questions related to the use of hidden tabs can be address to the authors of judges and exercises.")]),e._v(" "),a("h2",{attrs:{id:"full-list-of-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-list-of-changes"}},[e._v("#")]),e._v(" Full list of changes")]),e._v(" "),a("p",[e._v("For a full list of changes we refer to "),a("a",{attrs:{href:"https://github.com/dodona-edu/dodona/releases/tag/2.6",target:"_blank",rel:"noopener noreferrer"}},[e._v("our GitHub release"),a("OutboundLink")],1),e._v(", but we list the most important things below.")]),e._v(" "),a("ul",[a("li",[e._v("rework diffing")]),e._v(" "),a("li",[e._v("rework caching")]),e._v(" "),a("li",[e._v("write less empty values in config files")]),e._v(" "),a("li",[e._v("add tooltip to series status")]),e._v(" "),a("li",[e._v("add version blog")]),e._v(" "),a("li",[e._v("visual improvements to feedback table")]),e._v(" "),a("li",[e._v("allow hidden tabs in feedback")]),e._v(" "),a("li",[e._v("allow course admins to reorder series in learning path of a course")]),e._v(" "),a("li",[e._v("gradually increase polling intervals for status of unprocessed submissions")]),e._v(" "),a("li",[e._v("bug fixes and small improvements")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);