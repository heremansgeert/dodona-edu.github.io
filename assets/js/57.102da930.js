(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{516:function(e,i,t){"use strict";t.r(i);var r=t(26),o=Object(r.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"exercise-directory-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exercise-directory-structure"}},[e._v("#")]),e._v(" Exercise directory structure")]),e._v(" "),t("p",[e._v("Inside an exercise repository, Dodona handles every directory containing a "),t("code",[e._v("config.json")]),e._v(" file as a separate exercise or reading activity. We expect this exercise directory to have a specific structure:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("A "),t("code",[e._v("config.json")]),e._v(" file")]),e._v(": this file contains the "),t("a",{attrs:{href:"/en/references/exercise-config"}},[e._v("exercise-specific configuration")]),e._v(". This configuration will be merged with all "),t("code",[e._v("dirconfig.json")]),e._v(" files in the exercise's ancestor directories. You can always override config values set by a higher directory.")]),e._v(" "),t("li",[t("strong",[e._v("An optional  "),t("code",[e._v("readme.md")]),e._v(", "),t("code",[e._v("readme.en.md")]),e._v(" and/or "),t("code",[e._v("readme.nl.md")]),e._v(" file:")]),e._v(" The content of these files will be shown on the exercise info page. These files are meant to give extra context to teachers who might be interested in using this exercise in a course. If a localized file is available for a user's language ("),t("code",[e._v("readme.<lang>.md")]),e._v(") that will be shown instead of the generic "),t("code",[e._v("readme.md")]),e._v(". This is useful because "),t("code",[e._v("readme.md")]),e._v(" is rendered and shown by GitHub in the exercise directory. We suggest creating a "),t("code",[e._v("readme.md")]),e._v(" in the language of your target audience and optionally creating a translated "),t("code",[e._v("readme.nl.md")]),e._v(" or "),t("code",[e._v("readme.en.md")]),e._v(" file in the other language. Take a look at the "),t("a",{attrs:{href:"https://github.com/dodona-edu/example-exercises",target:"_blank",rel:"noopener noreferrer"}},[e._v("example exercises repository"),t("OutboundLink")],1),e._v(" to see some examples on how to use these files.")]),e._v(" "),t("li",[t("strong",[e._v("A "),t("code",[e._v("description")]),e._v(" directory")]),e._v(": this directory contains the files describing the exercise containing:\n"),t("ul",[t("li",[t("strong",[e._v("A "),t("code",[e._v("description.en.md")]),e._v(" and/or "),t("code",[e._v("description.nl.md")]),e._v(" file")]),e._v(": these files contain the English and/or Dutch description of the exercise.")]),e._v(" "),t("li",[t("strong",[e._v("An optional "),t("code",[e._v("media")]),e._v(" directory")]),e._v(": this directory contains static files such as images used in the exercise description.")]),e._v(" "),t("li",[t("strong",[e._v("An optional "),t("code",[e._v("boilerplate")]),e._v(" directory")]),e._v(": this directory contains the files "),t("code",[e._v("boilerplate.en")]),e._v(", "),t("code",[e._v("boilerplate.nl")]),e._v(", and/or "),t("code",[e._v("boilerplate")]),e._v(". The contents of these files are loaded automatically in the submission text area of the users. You can use this to provide some starting code or structure to your students.")])])]),e._v(" "),t("li",[t("strong",[e._v("An "),t("code",[e._v("evaluation")]),e._v(" directory")]),e._v(": the content of this directory is made available to the judge and can, for example, contain files containing the test code. This directory is unnecessary for reading activities.")]),e._v(" "),t("li",[t("strong",[e._v("An optional "),t("code",[e._v("workdir")]),e._v(" directory")]),e._v(": The content of this directory is made available when running the judge and can, for example, contain data files needed during execution. This directory is unnecessary for reading activities.")]),e._v(" "),t("li",[t("strong",[e._v("An optional "),t("code",[e._v("solutions")]),e._v(" directory")]),e._v(": Files in this directory will be shown on the exercise info page as sample solutions. Multiple sample solutions are possible, but files with a name starting with 'solution' will be sorted first. This directory is unnecessary for reading activities.")])]),e._v(" "),t("p",[e._v("Dodona ignores every other file and directory. You can thus freely create additional files (for example, containing the solutions to your exercises) or create a personal exercise hierarchy. The only thing that isn't allowed is placing exercise directories inside other exercise directories.")]),e._v(" "),t("h2",{attrs:{id:"example-of-a-valid-repository-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-valid-repository-structure"}},[e._v("#")]),e._v(" Example of a valid repository structure")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-- README.md                      # Describes the repository\n+-- dirconfig.json                 # Shared config for all exercises in subdirs\n+-- week01                         # We could group exercises per week\n|   +-- intsum                     # short name for the exercise\n|   |   +-- config.json            # configuration of the exercise\n|   |   +-- evaluation             #\n|   |   |   ` intsum_test.hs       # A Haskell test file\n|   |   +-- description            #\n|   |   |   +-- description.nl.md  # The description in dutch\n|   |   |   +-- description.en.md  # The description in english\n|   |   |   +-- media              #\n|   |   |   |   `-- some_image.png # An image used in the description\n|   |   |   `-- boilerplate        #\n|   |   |       +-- boilerplate    # Default (here dutch?) boilerplate code\n|   |   |       `-- boilerplate.en # English boilerplate code\n|   |   `-- workdir                # current working dir for student code\n|   |       `-- intlines.txt       # a file available to the student\n|   :\n:\n")])])])])}),[],!1,null,null,null);i.default=o.exports}}]);