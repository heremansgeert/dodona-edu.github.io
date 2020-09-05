(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{384:function(t,e,s){t.exports=s.p+"assets/img/judge-output.49fc02f2.png"},582:function(t,e,s){"use strict";s.r(e);var a=s(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-new-judge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-judge"}},[t._v("#")]),t._v(" Creating a new Judge")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This is an advanced guide aimed at developers. You will probably not need the info on this page. If you plan to create a judge, please contact us at "),a("a",{attrs:{href:"mailto:dodona@ugent.be"}},[t._v("dodona@ugent.be")]),t._v(".")])]),t._v(" "),a("p",[t._v("For each judge in Dodona, there is one git repository. This git repository requires a "),a("a",{attrs:{href:"#_2-repository-structure"}},[t._v("predefined structure")]),t._v(" and "),a("a",{attrs:{href:"#_3-judge-interface"}},[t._v("interface")]),t._v(" to fit into Dodona. Once created, a judge should be "),a("a",{attrs:{href:"#_1-adding-a-judge"}},[t._v("added to Dodona")]),t._v(", so it can be used for exercises.")]),t._v(" "),a("h2",{attrs:{id:"_1-adding-a-judge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-adding-a-judge"}},[t._v("#")]),t._v(" 1. Adding a Judge")]),t._v(" "),a("p",[t._v('As a Dodona staff member, you can go to the "Judges" page through the administrator header in the hamburger menu. To add a new judge, hit the '),a("code",[t._v("+")]),t._v(" action button. Supply a human-readable name, the name of the Docker image the judge should run in, the git clone url, the pathname (where to store the repository on the server relative to the directory containing all judges, usually the name of the repository, however, this needs to be unique) and the "),a("a",{attrs:{href:"#_4-feedback-renderers"}},[t._v("feedback renderer")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"_2-repository-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-repository-structure"}},[t._v("#")]),t._v(" 2. Repository Structure")]),t._v(" "),a("p",[t._v("The only thing a judge repository requires is a "),a("code",[t._v("run")]),t._v(" executable in the root of the repository. This file willed be executed inside a docker container, where it can use the rest of the files in the repository. Optionally, the repository also contains a "),a("code",[t._v("config.json")]),t._v(" file in the root, "),a("a",{attrs:{href:"#input"}},[t._v("used to overwrite configurations")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"_3-judge-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-judge-interface"}},[t._v("#")]),t._v(" 3. Judge Interface")]),t._v(" "),a("p",[t._v("The judge is basically the "),a("code",[t._v("run")]),t._v(" executable, and interfaces with Dodona through its standard input and standard output.")]),t._v(" "),a("h3",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("run")]),t._v(" executable should accept JSON input with the following fields as configuration:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("memory_limit")]),t._v(': An integer, the memory limit in bytes. The docker container will be killed when it\'s internal processes exceed this limit. The judge can use this value to cut of the tests, so he might be able to give more feedback to the student than just the default "Memory limit exceeded."')]),t._v(" "),a("li",[a("strong",[t._v("time_limit")]),t._v(': An integer, the time limit in seconds. Just like the memory limit, the docker will be killed if the judging takes longer. Can be used to for instance specify the specific test case the limit would be exceeded, instead of just "Time limit exceeded."')])]),t._v(" "),a("p",[t._v("These two values can be overwritten and extended with random other key-value pairs in "),a("em",[t._v("(1)")]),t._v(" the Judge configuration, found as "),a("code",[t._v("config.json")]),t._v(" in the judge repository root and "),a("em",[t._v("(2)")]),t._v(" the "),a("code",[t._v("evaluation")]),t._v(" subobject in the configuration of the submitted exercise, the latter overwriting the former.")]),t._v(" "),a("p",[t._v("In addition to the previous two, the following fields are also part of the input:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("programming_language")]),t._v(': The full name (e.g. "python", "haskell") of the programming language the student submitted his code for.')]),t._v(" "),a("li",[a("strong",[t._v("natural_language")]),t._v(': The natural language (e.g. "nl", "en") in which the student submitted his code.')]),t._v(" "),a("li",[a("strong",[t._v("resources")]),t._v(': Full path to a directory containing the resources for the evaluation. This is the "evaluation" directory of an exercise.')]),t._v(" "),a("li",[a("strong",[t._v("source")]),t._v(": Full path to a file containing the code the user submitted.")]),t._v(" "),a("li",[a("strong",[t._v("judge")]),t._v(": Full path to a directory containing a copy of the judge repository.")]),t._v(" "),a("li",[a("strong",[t._v("workdir")]),t._v(": Full path to the directory in which all user code should be executed.")])]),t._v(" "),a("h3",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("run")]),t._v(" executable should output JSON to "),a("em",[t._v("stdout")]),t._v(', which will be interpreted by the Feedback Renderer to form the feedback table. There are two output schemas available: full and partial. "Full" should output a single JSON object at the end of its judgement. "Partial" should output multiple small JSON objects during it\'s run, describing its progress.')]),t._v(" "),a("h4",{attrs:{id:"full-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-output"}},[t._v("#")]),t._v(" Full output")]),t._v(" "),a("p",[t._v("The complete format description can be found on "),t._v(" "),a("a",{attrs:{href:"https://github.com/dodona-edu/dodona/wiki/Judge-output-format-(proposal)",target:"_blank",rel:"noopener noreferrer"}},[t._v("the wiki"),a("OutboundLink")],1),t._v(" and is specified through a "),a("a",{attrs:{href:"https://github.com/dodona-edu/dodona/tree/develop/public/schemas",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON schema"),a("OutboundLink")],1),t._v(". A more concise format can be found below. (Note: all items are rendered in the order used below; all list-type keys are optional, defaulting to the empty list as value)")]),t._v(" "),a("p",[t._v("The full output returns a single JSON at the end. You must ensure that this is emitted before the docker runs out of time or memory.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("A feedback JSON consists of:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("accepted")]),t._v(", a boolean indicating whether this submission passes the tests.")]),t._v(" "),a("li",[a("code",[t._v("status")]),t._v(", a "),a("code",[t._v("Status")]),t._v(" string")]),t._v(" "),a("li",[a("code",[t._v("description")]),t._v(", a string describing the status more freely.")]),t._v(" "),a("li",[a("code",[t._v("messages")]),t._v(", a list of "),a("code",[t._v("Message")]),t._v(" objects, the first thing shown to the user.")]),t._v(" "),a("li",[a("code",[t._v("groups")]),t._v(", a list of "),a("code",[t._v("Tab")]),t._v(' objects, which define the visible tabs. Independent of this list, a "code" tab showing the submitted code will also be included.')]),t._v(" "),a("li",[a("code",[t._v("annotations")]),t._v(", a list of "),a("code",[t._v("Annotation")]),t._v(" objects, used to annotate the submitted source code.")])])]),t._v(" "),a("li",[a("p",[t._v("A "),a("code",[t._v("Tab")]),t._v(" object consists of:")]),t._v(" "),a("ul",[a("li",[t._v("An optional "),a("code",[t._v("description")]),t._v(', the string used as title for the tab (defaults to "Test").')]),t._v(" "),a("li",[t._v("An optional "),a("code",[t._v("badgeCount")]),t._v(", an integer shown next to the title if present and non-zero. Use this "),a("em",[t._v("only")]),t._v(" for the number of remarks (failing tests, failing testcases, style issues, ...) with the submission. No remarks (value "),a("code",[t._v("0")]),t._v(" or just absense of this key) will show no badge, to avoid drawing the user's attention.")]),t._v(" "),a("li",[a("code",[t._v("messages")]),t._v(", a list of "),a("code",[t._v("Message")]),t._v(" objects, shown in order at the top of the tab if present.")]),t._v(" "),a("li",[a("code",[t._v("groups")]),t._v(", a list of "),a("code",[t._v("Context")]),t._v(" objects, shown in order at the bottom of the tab if present.")])])]),t._v(" "),a("li",[a("p",[t._v("A "),a("code",[t._v("Context")]),t._v(" object consists of:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("accepted")]),t._v(", a boolean indicating whether this context (could be a grouping of testcase executed in the same context) is considered correct. Reflected in the feedback as a green or red bar on the left side of the group.")]),t._v(" "),a("li",[t._v("An optional "),a("code",[t._v("description")]),t._v(", a "),a("code",[t._v("Message")]),t._v(" object.")]),t._v(" "),a("li",[a("code",[t._v("messages")]),t._v(", a list of "),a("code",[t._v("Message")]),t._v(" objects.")]),t._v(" "),a("li",[a("code",[t._v("groups")]),t._v(", a list of "),a("code",[t._v("Testcase")]),t._v(" objects.")])])]),t._v(" "),a("li",[a("p",[t._v("A "),a("code",[t._v("Testcase")]),t._v(" object consists of:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("accepted")]),t._v(", a boolean indicating whether this testcase (could be a single statement or expression) is considered correct. Reflected in the feedback as a green checkmark or a red cross on the right side of the testcase.")]),t._v(" "),a("li",[t._v("An optional "),a("code",[t._v("description")]),t._v(", a "),a("code",[t._v("Message")]),t._v(" object (probably a statement formatted as "),a("code",[t._v("code")]),t._v(").")]),t._v(" "),a("li",[a("code",[t._v("tests")]),t._v(", a list of "),a("code",[t._v("Test")]),t._v(" objects.")]),t._v(" "),a("li",[a("code",[t._v("messages")]),t._v(", a list of message objects.")])])]),t._v(" "),a("li",[a("p",[t._v("A "),a("code",[t._v("Test")]),t._v(" object (used, e.g. to test either the returned and printed output of a statement) consists of:")]),t._v(" "),a("ul",[a("li",[t._v("An optional "),a("code",[t._v("description")]),t._v(", a "),a("code",[t._v("Message")]),t._v(" object.")]),t._v(" "),a("li",[a("code",[t._v("accepted")]),t._v(", a boolean indicating whether this test is considered correct. "),a("code",[t._v("true")]),t._v(" results in only showing the "),a("code",[t._v("generated")]),t._v(" string, "),a("code",[t._v("false")]),t._v(' results in showing a "diff" between the '),a("code",[t._v("generated")]),t._v(" and "),a("code",[t._v("expected")]),t._v(" strings.")]),t._v(" "),a("li",[a("code",[t._v("generated")]),t._v(", a string containing the output of the user.")]),t._v(" "),a("li",[a("code",[t._v("expected")]),t._v(", a string containing what the user should have outputted. Only used when this test is not "),a("code",[t._v("accepted")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("messages")]),t._v(", a list of message objects.")])])]),t._v(" "),a("li",[a("p",[t._v("An "),a("code",[t._v("Annotation")]),t._v(" object consists of:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("row")]),t._v(", a zero-based index indicating the annotated line (start).")]),t._v(" "),a("li",[t._v("An optional "),a("code",[t._v("column")]),t._v(", a zero-based index indicating the annotated character on "),a("code",[t._v("row")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("text")]),t._v(", a string containing the annotation")]),t._v(" "),a("li",[a("code",[t._v("type")]),t._v(", the severity of the annotation, either "),a("code",[t._v('"info"')]),t._v(", "),a("code",[t._v('"warning"')]),t._v(" or "),a("code",[t._v('"error"')]),t._v(".")]),t._v(" "),a("li",[t._v("An optional "),a("code",[t._v("rows")]),t._v(", a zero-based index indicating the end of the annotation span.")]),t._v(" "),a("li",[t._v("An optional "),a("code",[t._v("columns")]),t._v(", a zero-based index indicating the end of the annotation span.")])])]),t._v(" "),a("li",[a("p",[t._v("A "),a("code",[t._v("Message")]),t._v(" object is either a plain string or consists of:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("format")]),t._v(", the format in which the message should be rendered. This format can be any of\n"),a("ul",[a("li",[a("code",[t._v('"plain"')]),t._v(", which will render the message as normal text;")]),t._v(" "),a("li",[a("code",[t._v('"html"')]),t._v(", which allows for HTML markup in this message. Note that the HTML output is sanitised to prevent "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank",rel:"noopener noreferrer"}},[t._v("XSS"),a("OutboundLink")],1),t._v(" issues. JavaScript, for example, is not allowed, but most other tags should work.")]),t._v(" "),a("li",[a("code",[t._v('"markdown"')]),t._v(", so the containing string is interpreted as markdown and converted to HTML;")]),t._v(" "),a("li",[a("code",[t._v('"code"')]),t._v(", which will render the message in monospace and preserve all included whitespace;")]),t._v(" "),a("li",[a("code",[t._v('"python"')]),t._v(", which is the same as "),a("code",[t._v('"code"')]),t._v(" with Python highlighting;")]),t._v(" "),a("li",[a("code",[t._v('"javascript"')]),t._v(", which is the same as "),a("code",[t._v('"code"')]),t._v(" with JavaScript highlighting.")])])]),t._v(" "),a("li",[a("code",[t._v("description")]),t._v(", the actual text of the message as a string.")]),t._v(" "),a("li",[a("code",[t._v("permission")]),t._v(", a string specifiying the visibility of this message. The permission can be any of\n"),a("ul",[a("li",[a("code",[t._v('"student"')]),t._v(", which makes the message visible for everyone;")]),t._v(" "),a("li",[a("code",[t._v('"staff"')]),t._v(", which makes the message visible only for staff members (e.g. for judge debug output);")]),t._v(" "),a("li",[a("code",[t._v('"zeus"')]),t._v(", which make is visible only for almighty Zeus (e.g. for application debug output);")])])])])]),t._v(" "),a("li",[a("p",[t._v("A "),a("code",[t._v("Status")]),t._v(" string indicates the status of the submission. They can be separated in two cathegories")]),t._v(" "),a("ul",[a("li",[t._v("Available for output by the judge:\n"),a("ul",[a("li",[a("code",[t._v('"compilation error"')]),t._v(", the submitted code did not compile.")]),t._v(" "),a("li",[a("code",[t._v('"runtime error"')]),t._v(", the submitted code crashed during the tests.")]),t._v(" "),a("li",[a("code",[t._v('"memory limit exceeded"')]),t._v(", the submitted code exceeded the memory limit during the tests.")]),t._v(" "),a("li",[a("code",[t._v('"time limit exceeded"')]),t._v(", the submitted code did not finish the tests withing the given time.")]),t._v(" "),a("li",[a("code",[t._v('"wrong"')]),t._v(", the submitted code finished the tests, but did not pass all tests.")]),t._v(" "),a("li",[a("code",[t._v('"correct"')]),t._v(", the submitted code finished and passed all tests.")])])]),t._v(" "),a("li",[t._v("Valid values, but used only by the platform:\n"),a("ul",[a("li",[a("code",[t._v('"queued"')]),t._v(", the submitted code is in the queue for testing.")]),t._v(" "),a("li",[a("code",[t._v('"running"')]),t._v(", the judge/tests are currently executing.")]),t._v(" "),a("li",[a("code",[t._v('"internal error"')]),t._v(", the judge exited with a non-zero status code.")]),t._v(" "),a("li",[a("code",[t._v('"unknown"')]),t._v(", something went wrong.")])])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:s(384),alt:"judge-output-reflection"}})]),t._v(" "),a("h4",{attrs:{id:"partial-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partial-output"}},[t._v("#")]),t._v(" Partial output")]),t._v(" "),a("p",[t._v("The partial output consists of multiple smaller JSON objects, validated by "),a("a",{attrs:{href:"https://github.com/dodona-edu/dodona/tree/develop/public/schemas/partial_output.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("this JSON schema"),a("OutboundLink")],1),t._v(". Each JSON object describes part of the judgement. An example judgement can be found below.")]),t._v(" "),a("p",[t._v("Because the format is split up in smaller commands, it can be parsed partially (hence the name). This implies a judge killed by the time limit or memory limit might still have judged the exercise partially.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start-judgement"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"append-message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"will be added to the judgement"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"annotate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"row"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"column"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some info on the fourth line, fifth column of the source"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start-tab"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tab One"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start-context"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start-testcase"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"case 1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start-test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expected"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SOMETHING"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"append-message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some more info about the test"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close-test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"generated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SOMETHING"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"correct"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"human"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Correct"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close-testcase"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close-context"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start-context"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start-testcase"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"case 2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start-test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expected"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SOMETHING"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close-test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"generated"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ELSE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrong"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"human"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wrong"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close-testcase"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close-context"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close-tab"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close-judgement"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Note that the nesting of judgement, tab, context, testcase and test is enforced. Messages can occur on any level.")]),t._v(" "),a("h2",{attrs:{id:"_4-feedback-renderers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-feedback-renderers"}},[t._v("#")]),t._v(" 4. Feedback Renderers")]),t._v(" "),a("p",[t._v("Currently two feedback renderers are available: the "),a("code",[t._v("FeedbackRenderer")]),t._v(" and the "),a("code",[t._v("PythiaFeedbackRenderer")]),t._v(". You should probably use the former, as the latter contains some extra features specifically for the Python judge.")])])}),[],!1,null,null,null);e.default=n.exports}}]);