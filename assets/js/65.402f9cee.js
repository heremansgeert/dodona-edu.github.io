(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{612:function(e,t,s){"use strict";s.r(t);var a=s(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"exercise-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exercise-configuration"}},[e._v("#")]),e._v(" Exercise configuration")]),e._v(" "),s("p",[e._v("Dodona allows setting the configuration of an exercise and a reading activity using config files. These files are in the JSON format and must be named "),s("code",[e._v("config.json")]),e._v(" in exercise directories and "),s("code",[e._v("dirconfig.json")]),e._v(" for other directories. To determine the final config values for a learning activity, Dodona merges the default config file with the dirconfigs in the parent directories of the exercise and with the exercise config. Merging happens in such a way that you can always override values set in a parent directory.")]),e._v(" "),s("h2",{attrs:{id:"config-file-structure-for-exercises"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-file-structure-for-exercises"}},[e._v("#")]),e._v(" Config file structure for exercises")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("type")]),e._v(": Must be set to "),s("code",[e._v("exercise")]),e._v(" for exercises. Defaults to "),s("code",[e._v("exercise")]),e._v(" if not present")]),e._v(" "),s("li",[s("code",[e._v("programming_language")]),e._v(" (string): the programming language of the exercise, used for syntax highlighting and correct file extensions")]),e._v(" "),s("li",[s("code",[e._v("access")]),e._v(" ("),s("code",[e._v("public")]),e._v(" or "),s("code",[e._v("private")]),e._v("): determines who can use this exercise\n"),s("ul",[s("li",[e._v("public: any other teacher on Dodona can use this exercise")]),e._v(" "),s("li",[e._v("private: only teachers with explicit permission can use this exercise")])])]),e._v(" "),s("li",[s("code",[e._v("description")]),e._v(" (object): the specification of the description of the exercise\n"),s("ul",[s("li",[s("code",[e._v("names")]),e._v(" (object): the name of the exercise\n"),s("ul",[s("li",[s("code",[e._v("nl")]),e._v(": the name of the exercise in Dutch")]),e._v(" "),s("li",[s("code",[e._v("en")]),e._v(": the name of the exercise in English")])])])])]),e._v(" "),s("li",[s("code",[e._v("evaluation")]),e._v(": the specification of the evaluation procedure\n"),s("ul",[s("li",[s("code",[e._v("handler")]),e._v(" (string, optional): the name of the judge that is used for evaluation. By default, Dodona uses the judge specified for the repository.")]),e._v(" "),s("li",[s("code",[e._v("image")]),e._v(" (string, optional): the name of the docker image that is used for evaluation. By default, Dodona uses the image specified by the judge.")]),e._v(" "),s("li",[s("code",[e._v("time_limit")]),e._v(" (integer, optional): the time in seconds before the evaluations times out. By default, the limit is 42 seconds.")]),e._v(" "),s("li",[s("code",[e._v("memory_limit")]),e._v(" (integer, optional): the amount of memory in bytes that is available for running the evaluation. By default, the limit is 100MB.")]),e._v(" "),s("li",[s("code",[e._v("network_enabled")]),e._v(" (boolean, optional): set to "),s("code",[e._v("true")]),e._v(" if internet access should be enabled. This optional setting is false by default.")])])]),e._v(" "),s("li",[s("code",[e._v("labels")]),e._v(" (array of strings, optional): a list of labels that can be used to search for this exercise using the Dodona web interface.")]),e._v(" "),s("li",[s("code",[e._v("contact")]),e._v(" (string, optional): info about the author of this exercise, formatted like an email To header.")])]),e._v(" "),s("h2",{attrs:{id:"config-file-structure-for-reading-activities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-file-structure-for-reading-activities"}},[e._v("#")]),e._v(" Config file structure for reading activities")]),e._v(" "),s("p",[e._v("The structure for a reading activity is identical to that of an exercise. There are 2 big differences: the value of "),s("code",[e._v("type")]),e._v(" must be set to "),s("code",[e._v("content")]),e._v(" and keys that are not relevant for exercises can be omitted. The format of the description is also identical.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("type")]),e._v(": Must be set to "),s("code",[e._v("content")]),e._v(" for reading activities")]),e._v(" "),s("li",[s("code",[e._v("access")]),e._v(" ("),s("code",[e._v("public")]),e._v(" or "),s("code",[e._v("private")]),e._v("): determines who can use this exercise\n"),s("ul",[s("li",[e._v("public: any other teacher on Dodona can use this exercise")]),e._v(" "),s("li",[e._v("private: only teachers with explicit permission can use this exercise")])])]),e._v(" "),s("li",[s("code",[e._v("description")]),e._v(" (object): the specification of the description of the exercise\n"),s("ul",[s("li",[s("code",[e._v("names")]),e._v(" (object): the name of the exercise\n"),s("ul",[s("li",[s("code",[e._v("nl")]),e._v(": the name of the exercise in Dutch")]),e._v(" "),s("li",[s("code",[e._v("en")]),e._v(": the name of the exercise in English")])])])])]),e._v(" "),s("li",[s("code",[e._v("labels")]),e._v(" (array of strings, optional): a list of labels that can be used to search for this exercise using the Dodona web interface.")]),e._v(" "),s("li",[s("code",[e._v("contact")]),e._v(" (string, optional): info about the author of this reading activity, formatted like an email To header.")])]),e._v(" "),s("h2",{attrs:{id:"example-config-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-config-file"}},[e._v("#")]),e._v(" Example config file")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"exercise"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"programming_language"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"access"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"public"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"names"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"nl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Voorbeeld oefening"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Example exercise"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"evaluation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"handler"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"image"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"dodona/dodona-python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"time_limit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"memory_limit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"network_enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"labels"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"voorbeeld"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"eenvoudige oefening"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"contact"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Dodona <dodona@ugent.be>"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);