(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{799:function(t,s,e){"use strict";e.r(s);var a=e(29),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tested-one-judge-to-rule-them-all"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tested-one-judge-to-rule-them-all"}},[t._v("#")]),t._v(" TESTed: one judge to rule them all")]),t._v(" "),e("p",[t._v("TESTed is an "),e("em",[t._v("educational software testing framework")]),t._v(" (also known as a "),e("em",[t._v("judge")]),t._v(")\nto test submissions for programming exercises using a programming-language-independent test suite.\nIt allows specifying software requirements (i.e. the tests) for an exercise once,\nwhile submissions in different programming languages can be tested automatically.\nTESTed can be used as a standalone command line tool,\nbut it's also integrated as a judge into the online learning platform "),e("a",{attrs:{href:"https://dodona.ugent.be",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dodona"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"when-to-use-tested"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-tested"}},[t._v("#")]),t._v(" When to use TESTed?")]),t._v(" "),e("p",[t._v("The first requirement to using TESTed is that TESTed must support your target programming language(s).\nCurrently, the following languages are supported:")]),t._v(" "),e("ul",[e("li",[t._v("Bash")]),t._v(" "),e("li",[t._v("C (gcc)")]),t._v(" "),e("li",[t._v("Haskell (ghc)")]),t._v(" "),e("li",[t._v("Java")]),t._v(" "),e("li",[t._v("JavaScript (NodeJS)")]),t._v(" "),e("li",[t._v("Kotlin")]),t._v(" "),e("li",[t._v("Python")])]),t._v(" "),e("p",[t._v("Because programming exercises underpinned by TESTed are independent of any programming language,\nTESTed is best suited for the following kinds of exercises:")]),t._v(" "),e("ul",[e("li",[t._v("Exercises on generic concepts that are found in (almost) all programming languages.")]),t._v(" "),e("li",[t._v("Exercises that focus on algorithms or high-level programming concepts, not on specific syntax or constructs of programming languages.")])]),t._v(" "),e("p",[t._v("TESTed is thus less suitable for exercises that focus on syntax or concepts for a specific programming language.\nFor example, exercises on C pointers won't work well with TESTed.")]),t._v(" "),e("h2",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),e("p",[t._v("The next section gives a short tutorial on designing programming exercises with TESTed for use in the online learning platform Dodona.\nIf you want to use TESTed outside of Dodona, we recommend following "),e("a",{attrs:{href:"https://github.com/dodona-edu/universal-judge",target:"_blank",rel:"noopener noreferrer"}},[t._v("this tutorial"),e("OutboundLink")],1),t._v(" instead.")]),t._v(" "),e("p",[t._v("A number of technical specifications are also available:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"/en/tested/exercise-config"}},[t._v("Configuration options")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/en/tested/json"}},[t._v("Test suite format")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/en/tested/types"}},[t._v("Data types for programming languages")])])]),t._v(" "),e("p",[t._v("Useful guides if you want to work on TESTed itself:")]),t._v(" "),e("ul",[e("li",[t._v("The "),e("a",{attrs:{href:"https://github.com/dodona-edu/universal-judge",target:"_blank",rel:"noopener noreferrer"}},[t._v("installation instructions"),e("OutboundLink")],1),t._v(" to run TESTed locally.")]),t._v(" "),e("li",[t._v("A "),e("a",{attrs:{href:"/en/tested/new-programming-language"}},[t._v("guide on adding a programming language")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"designing-exercises-for-dodona"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#designing-exercises-for-dodona"}},[t._v("#")]),t._v(" Designing exercises for Dodona")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("In this short tutorial, we assume you'll use TESTed within Dodona.\nIf you want to use TESTed as a standalone tool,\nwe refer you to the "),e("a",{attrs:{href:"https://github.com/dodona-edu/universal-judge",target:"_blank",rel:"noopener noreferrer"}},[t._v("tutorial in the repository"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"system-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-requirements"}},[t._v("#")]),t._v(" System requirements")]),t._v(" "),e("p",[t._v("To follow this tutorial, you'll need the following on your system:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git")]),t._v(" - to push exercises to Dodona. You can find more information in "),e("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"}},[t._v("chapter 1 of the book "),e("em",[t._v("Pro Git")]),e("OutboundLink")],1),t._v(", which explains how to install Git for various operating systems (Mac, Windows, Linux).")]),t._v(" "),e("li",[t._v("a text editor (like Notepad++) to create and edit text files")])]),t._v(" "),e("p",[t._v('We\'ll explain how to create a simple programming exercise that uses TESTed to provide automated feedback,\nand how to make the exercise available on Dodona.\nThe exercise is called "echo" and has the following problem statement:')]),t._v(" "),e("blockquote",[e("p",[t._v("Define a function "),e("code",[t._v("echo")]),t._v(" that outputs its string argument to stdout.")])]),t._v(" "),e("p",[t._v("Here are some correct submissions for this exercise in a couple of different programming languages:")]),t._v(" "),e("tabs",[e("tab",{attrs:{name:"Bash"}},[e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("tab",{attrs:{name:"C"}},[e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" what"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" what"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("tab",{attrs:{name:"Haskell"}},[e("div",{staticClass:"language-haskell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-haskell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("putStrLn")]),t._v("\n")])])])]),t._v(" "),e("tab",{attrs:{name:"Java"}},[e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Submission")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" what"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("what"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("tab",{attrs:{name:"JavaScript"}},[e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("what")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("what"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("tab",{attrs:{name:"Kotlin"}},[e("div",{staticClass:"language-kotlin extra-class"},[e("pre",{pre:!0,attrs:{class:"language-kotlin"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("what"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("what"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("tab",{attrs:{name:"Python"}},[e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("echo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1),t._v(" "),e("p",[t._v("We can use those solutions as the submissions we want to test with TESTed.")]),t._v(" "),e("h3",{attrs:{id:"_1-git-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-repository"}},[t._v("#")]),t._v(" 1. Git repository")]),t._v(" "),e("p",[t._v("Dodona uses Git repositories to manage exercises.\nFollow the guide "),e("a",{attrs:{href:"/en/guides/teachers/new-exercise-repo"}},[e("em",[t._v("Creating a new exercise repo")])]),t._v("\nand return to this tutorial as soon as your repository has been set up.")]),t._v(" "),e("h3",{attrs:{id:"_2-folder-structure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-folder-structure"}},[t._v("#")]),t._v(" 2. Folder structure")]),t._v(" "),e("p",[t._v("Now we need to create the correct directory structure for Dodona exercises in the repository you just created.\nCreate the following directories:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("├── echo/          # Directory for the new exercise\n|   ├── evaluation/\n|   └── description/\n")])])]),e("p",[t._v("This is the Dodona directory structure for exercises.\nMore information can be found in "),e("a",{attrs:{href:"/en/references/exercise-directory-structure"}},[e("em",[t._v("Exercise directory structure")])]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"_3-configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-configuration-options"}},[t._v("#")]),t._v(" 3. Configuration options")]),t._v(" "),e("p",[t._v("To inform Dodona we are creating an exercise, we must add a configuration file to the "),e("code",[t._v("echo")]),t._v(" directory.\nThis configuration file contains some options and metadata used by Dodona.")]),t._v(" "),e("p",[t._v("Create a new file "),e("code",[t._v("config.json")]),t._v(" in the "),e("code",[t._v("echo")]),t._v(" directory, with the following content:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"names"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"en"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Echo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Echo"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"evaluation"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plan_name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tests.json"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"programming_language"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"python"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This configuration file specifies, in order:")]),t._v(" "),e("ol",[e("li",[t._v("An exercise name in Dutch and in English.")]),t._v(" "),e("li",[t._v("The path name of the test suite ("),e("code",[t._v("tests.json")]),t._v(") relative to the "),e("code",[t._v("echo/evaluation")]),t._v(" directory.")]),t._v(" "),e("li",[t._v("Python as the default programming language.\nWhile TESTed supports multiple programming languages,\nDodona currently supports only a single programming language per exercise.")]),t._v(" "),e("li",[t._v("Private access to the exercise.\nWe use this default since this is a tutorial, but we encourage making exercises publicly available on Dodona.")])]),t._v(" "),e("p",[t._v("See "),e("a",{attrs:{href:"/en/references/exercise-config"}},[e("em",[t._v("Exercise configuration")])]),t._v(" for more details on the configuration options for Dodona exercises.\nThe "),e("a",{attrs:{href:"/en/tested/exercise-config"}},[t._v("options specific to TESTed")]),t._v(" can also be interesting.")]),t._v(" "),e("h3",{attrs:{id:"_4-problem-statement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-problem-statement"}},[t._v("#")]),t._v(" 4. Problem statement")]),t._v(" "),e("p",[t._v("The problem statement instructs students on how to solve the exercise.\nWe'll use the problem statement from above and add an example.\nCreate a file "),e("code",[t._v("echo/description/description.en.md")]),t._v(" with the following content:")]),t._v(" "),e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[t._v("Define a function "),e("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`echo`")]),t._v(" that outputs its string argument to stdout.\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" Example in Python")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token code"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")]),e("span",{pre:!0,attrs:{class:"token code-language"}},[t._v("pycon")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token code-block language-pycon"}},[t._v('>>> echo("5");\n"5"\n>>> echo("OK");\n"OK"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("```")])]),t._v("\n")])])]),e("p",[t._v("As a check, the file structure should now look like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("├── echo/\n|   ├── config.json\n|   ├── evaluation/\n|   ├── description/\n|   |   └── description.en.md\n")])])]),e("p",[t._v("This is again something that is specific for Dodona and has nothing to do with TESTed.\nSee "),e("a",{attrs:{href:"/en/references/exercise-description"}},[e("em",[t._v("Exercise descriptions")])]),t._v(" for more information on how to describe problem statements for Dodona exercises.")]),t._v(" "),e("h3",{attrs:{id:"_5-test-suite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-test-suite"}},[t._v("#")]),t._v(" 5. Test suite")]),t._v(" "),e("p",[t._v("Specifying a test suite is the part of creating a Dodona exercise that is specific to a particular judge,\nso we must adhere to the TESTed specification for test suites.\nA test suite contains all test cases that will be executed on the submission to check if the submission is correct.")]),t._v(" "),e("p",[t._v("For brevity, we will only include a single test case in our test suite.\nBut a real test suite would contain many more test cases.\nCreate a new file "),e("code",[t._v("evaluation/tests.json")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tabs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Echo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"runs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contexts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"testcases"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"input"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"arguments"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input-1"')]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"output"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stdout"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n           "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input-1"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This test suite specifies that:")]),t._v(" "),e("ol",[e("li",[t._v("All feedback is included in a single tab called "),e("em",[t._v("Echo")]),t._v(".")]),t._v(" "),e("li",[t._v("The tab contains feedback on a single test case.")]),t._v(" "),e("li",[t._v("The test case calls the function "),e("code",[t._v("echo")]),t._v(" with a string argument "),e("code",[t._v("input-1")]),t._v(".\nConceptually, this is equivalent to calling "),e("code",[t._v('write("input-1")')]),t._v(" in Python.")]),t._v(" "),e("li",[t._v("The expected behavior of the test case is that the text "),e("code",[t._v("input-1")]),t._v(" is generated on stdout.")])]),t._v(" "),e("p",[t._v("The file structure now looks like this:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("├── echo/\n|   ├── config.json\n|   ├── evaluation/\n|   |   └── tests.json\n|   ├── description/\n|   |   └── description.en.md\n")])])]),e("h3",{attrs:{id:"_6-add-to-dodona"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-add-to-dodona"}},[t._v("#")]),t._v(" 6. Add to Dodona")]),t._v(" "),e("p",[t._v("Now we commit the new exercise with the following "),e("code",[t._v("git")]),t._v(" commands:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My first exercise"')]),t._v("\n")])])]),e("p",[t._v("Then we must push the changes in the repository to Dodona:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),e("p",[t._v("The exercise is now fully configured and available on Dodona as a private exercise,\nready to be included in the learning path of your courses.")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);