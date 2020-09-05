(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{603:function(e,t,s){"use strict";s.r(t);var o=s(26),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("NewsHeader",{attrs:{title:e.$frontmatter.title,date:e.$frontmatter.date,lang:"en"}}),e._v(" "),s("blockquote",[s("p",[e._v("The release of Dodona 3.1 makes Dodona more secure and faster.")])]),e._v(" "),s("h2",{attrs:{id:"security"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),s("p",[e._v("Until now, exercises could change the entire layout of Dodona and execute "),s("em",[e._v("scripts")]),e._v(". These "),s("em",[e._v("scripts")]),e._v(" were able to do anything the user looking at the page could do on Dodona (e.g., submit solutions) which is a potential security risk. While we fully trust our exercise creators and don't have any evidence that this feature was misused, it is better to prevent any future problems.")]),e._v(" "),s("p",[e._v("We fixed it by placing exercise descriptions in an "),s("em",[e._v("iframe")]),e._v(". This ensures that your browser will not allow the contents of the "),s("em",[e._v("iframe")]),e._v(" to do things outside of the "),s("em",[e._v("iframe")]),e._v(" (i.e. in the rest of Dodona). Additionally, we made sure that the contents of the feedback table of submitted solutions and the descriptions of courses and series are stripped of any malicious code before they are shown to users.")]),e._v(" "),s("h2",{attrs:{id:"speed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#speed"}},[e._v("#")]),e._v(" Speed")]),e._v(" "),s("p",[e._v("For really large feedback tables it could take a while before the feedback table was shown after the submission was evaluated (sometimes up to 40 seconds!). By performing some smart tricks and falling back to a simpler output format for large results, we managed to significantly reduce the loading time. Now, it should never takes more than a second to load a feedback table.")]),e._v(" "),s("p",[e._v("We also added a loading indicator to indicate that the feedback table is busy loading.")]),e._v(" "),s("h2",{attrs:{id:"full-list-of-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-list-of-changes"}},[e._v("#")]),e._v(" Full list of changes")]),e._v(" "),s("p",[e._v("Aside from these two big items we of course also improved a number of small things. For a full list of changes we refer to "),s("a",{attrs:{href:"https://github.com/dodona-edu/dodona/releases/tag/3.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("our GitHub release"),s("OutboundLink")],1),e._v(", but we list the most important things beneath.")]),e._v(" "),s("ul",[s("li",[e._v("Clean up the feedback table contents before they're shown to a user")]),e._v(" "),s("li",[e._v("Show exercise descriptions inside of an iframe")]),e._v(" "),s("li",[e._v("Merge the scoresheet on the course level and the series level")]),e._v(" "),s("li",[e._v("Make sure striped tables look good in dark mode")]),e._v(" "),s("li",[e._v("Make sure users can subscribe to hidden courses that are open for everyone to subscribe")]),e._v(" "),s("li",[e._v("Only use evaluated submissions to determine the status of an exercise or a series")]),e._v(" "),s("li",[e._v("Some more small fixes for dark mode")]),e._v(" "),s("li",[e._v("Restore the icon for queued or running submissions")]),e._v(" "),s("li",[e._v("Update to Ruby 2.6.5")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);