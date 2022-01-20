# APLcart – <sub><sup>*A novel approach to finding your way in [APL](https://aplwiki.com)*</sup></sub>

**There is plenty of documentation on what parts of APL do. APLcart seeks to answer *How do I…* questions.**

APLcart is a searchable collection of over two thousand short APL phrases intended for both beginners and professionals, with content provided by the community. Knowledge of basic APL syntax is a prerequisite. 

Note that Internet Explorer is not supported.

APLcart can also be used for [exercising your APL skills](#quiz).

## Usage

*→ See also [the video introduction](https://dyalog.tv/Dyalog19/?v=r3owA7tfKE8).*

### Notes

- APLcart is for finding out *how to do* things, not for finding out, for example, what a symbol means or what a system function does. Please use the <a href="https://help.dyalog.com/latest/" target="_blank">language documentation</a> for such purposes.

- The site may take some seconds to load due to the information being processed by the browser. Once ready, it does not require internet access any more.

- All code in APLcart assumes the latest version of Dyalog APL Unicode edition and system defaults, for example `⎕IO←1`, `⎕ML←1`, `⎕DIV←0`.

### Interface

See [here](https://www.w3schools.com/tags/att_global_accesskey.asp#table2) how to use access-keys on your system.

- Hit [here](https://aplcart.info) and start typing (access-key <kbd>q</kbd> — for _**q**uery_ — to re-focus)
- Insert leading and trailing slashes to [use regex](https://aplcart.info?q=%2F\b11\b%2F) (access-key <kbd>r</kbd>  ― for _**r**egex_ ― to toggle)
- [Some entries](https://aplcart.info?q=(>)) have a <kbd>▸</kbd> which can be clicked to open example code in a sandbox
- [Some entries](https://aplcart.info?q=(?)) have a <kbd>?</kbd> which can be clicked to open online documentation
- Hit the logo [⊆⌈](abrudz/aplcart) in the top left corner to reload the main page
- Hit [<kbd>?</kbd>](#usage) in the top left corner to access this documentation (access-key <kbd>e</kbd> — for _**e**xplain_)
- Hit [<kbd>×</kbd>](https://aplcart.info?q=) at the end of the input field to clear it (access-key <kbd>x</kbd> — for _e**x**punge_)
- Hit [<kbd>#</kbd>](https://aplcart.info?q=42) in the top right corner copy to the current query to the address bar and to your clipboard (access-key <kbd>c</kbd> — for _**c**opy_)
- Hit <kbd>:octocat:︎</kbd> in the bottom right corner to access APLcart's source-code on GitHub (access-key <kbd>a</kbd> — for _**a**plcart_)
- Hit <kbd>♥︎</kbd> in the bottom right corner to donate to the author (access-key <kbd>d</kbd> — for _**d**onate_)
- Hit [<kbd>◐</kbd>](https://aplcart.info?w) in the bottom right corner to cycle theme (access-keys <kbd>b</kbd> for _**b**lack_, <kbd>g</kbd> for _**g**rey_, <kbd>w</kbd> for _**w**hite_)
- Hit the result list to enable movement keys for scrolling (access-key <kbd>z</kbd>)
- Hit [the input field](https://aplcart.info) at the top to start a new query (access-key <kbd>e</kbd> — for _**q**uery_)

## Quiz

You can use APLcart to exercise your APL skills by solving various types of tasks:

* Writing a function for a given task
* Explaining the purpose of a given function
* Filling in an obscured symbol

While APLcart does not feature checking of your answer (indeed, there can often be various answers to any given task), you can compare your answer to APLcart's.

### Interface

See [here](https://www.w3schools.com/tags/att_global_accesskey.asp#table2) how to use access-keys on your system.

- Hit [here](https://aplcart.info/quiz) and choose task type, and figure out the answer. You may want to use [an APL interpreter](https://aplwiki.com/wiki/Running_APL).
- Hit the logo [⊆⌈](abrudz/aplcart) in the top left corner to go to the main APLcart page (access-key <kbd>a</kbd> — for _**a**plcart_)
- Hit [<kbd>?</kbd>](#usage) in the top left corner to access this documentation (access-key <kbd>e</kbd> — for _**e**xplain_)
- Hit one of the <kbd>Reveal</kbd> buttons to reveal APLcart's answer (there may be other correct answers) to that task
- Hit one of the <kbd>Next…</kbd> buttons to proceed to the next task of that type
- Hit <kbd>:octocat:︎</kbd> in the bottom right corner to access APLcart's source-code on GitHub (access-key <kbd>a</kbd> — for _**a**plcart_)
- Hit <kbd>♥︎</kbd> in the bottom right corner to donate to the author (access-key <kbd>d</kbd> — for _**d**onate_)
- Hit [<kbd>◐</kbd>](https://aplcart.info?w) in the bottom right corner to cycle theme (access-keys <kbd>b</kbd> for _**b**lack_, <kbd>g</kbd> for _**g**rey_, <kbd>w</kbd> for _**w**hite_)

The access keys for the  <kbd>Reveal</kbd> and <kbd>Next…</kbd> buttons are the first letter of the second word on each button:

* Writing a function for a given task: <kbd>c</kbd> to _reveal **c**ode_ and <kbd>t</kbd> for _next **t**ask_
* Explaining the purpose of a given function: <kbd>p</kbd> to  _reveal **p**urpose_ and <kbd>f</kbd> for _next **f**unction_
* Filling in an obscured symbol: <kbd>o</kbd> to _reveal **o**bscured_ and <kbd>q</kbd> for _next **q**uest_

## DuckDuckGo support

DuckDuckGo allows you to search APLcart directly using the `!aplcart` bang. For example, [searching for `!aplcart 42`](https://duckduckgo.com/?q=!aplcart+42) redirects to APLcart. This also means that if you set your browser's default search engine to DuckDuckGo, you can search APLcart directly from your browser address bar by prefixing your search with `!aplcart`.

## Application Integration

### Browsers

APLcart supports [OpenSearch](https://en.wikipedia.org/wiki/OpenSearch) and as such can be added as search engine on various browsers, including Safari, Edge, Firefox, and Chrome.

### Dyalog Windows IDE

The Windows Dyalog IDE allows using an online search when <kbd>F1</kbd> is pressed with the cursor on an unknown word:

- Options ▸ Configure ▸ Help/DMX ▸ Use online help for non-Dyalog topics ▸ URL: `https://aplcart.info?q=%s`

### Dyalog RIDE

RIDE allows adding a website to its menu bar:

- Edit ▸ Preferences ▸ Menu, then below &Help` line, insert a line containing <code>&APLcart =https://aplcart.info</code>

You can now press <kbd>Alt</kbd>-<kbd>Alt</kbd>,<kbd>a</kbd> to launch APLcart.

## URL API ("permalinks")

After clicking [<kbd>#</kbd>](https://aplcart.info?q=42) simply copy the current address from your browser's address bar to share the current query. Note that your current theme is intentionally not included, to avoid blinding the recipient. Note that the result for such a URL isn't permanent; it depends on APLcart's content at the time of usage.

### Manual construction

After [aplcart.info](https://aplcart.info/) you can add `?` and the following options, separated by `&` if you want both a theme and a query:

- [<code>w</code>](https://aplcart.info?w) select **w**hite theme
- [<code>b</code>](https://aplcart.info?b) select **b**lack theme
- [<code>q=<i>query</i></code>](https://aplcart.info?q=query) prepopulate the _Tell me about_ **q**uery field

For example, for a white interface looking for "find", use [aplcart.info?w&q=find](https://aplcart.info?w&q=find)

## Scope

To answer *how do I* questions, APLcart currently searches over 2000 entries:

- General syntax, like `name f←Y`
- Primitives, like `!`
- Control structures, like `:If`
- Keywords, like `:Access`
- System commands, like `)CLEAR`
- System functions, like `⎕SIGNAL`
- System constants, like `⎕A`
- System operators, like `⎕R`
- System variables, like `⎕IO`
- GUI objects, like `HTMLRenderer`
- I-beams, like `819⌶`
- Errors numbers and messages, like `11::DOMAIN ERROR`
- User commands, like `]Box`
- A selection of simple dfns, dops, and derived functions like `(0=|)`
- All of dfns.dws, like `dfns.cal` (In APLcart, entries from here are prefixed `dfns.` . To use, insert `{(⍎⍵⎕NS⍬).⎕CY⍵}'dfns'` into your code, then call, for example, `dfns.cal`.)
- Performance idioms from Dyalog's idiom list, like `{(+/∨\' '≠⌽⍵)↑¨↓⍵}`
- Idioms from the APL2 idiom list, like `(+/|)` (fully updated to use modern APL)
- James A. Brown's favourite idioms (fully updated to use modern APL)
- All idioms from the FinnAPL idiom list, like `(⊢⍳⌈/)` (fully updated to use modern APL)
- The Yale/APL79 idiom list (fully updated to use modern APL)
- Selected entries from Dyalog's #onelinerwednesday series, like `(×/⊢÷+/-2×⊢)` 
- Adapted entries from JSoftware's Phrase Book (translated to APL)
- and other entries [submitted](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=addition&template=content-request.md&title=) by users like you!

## Features wish list
- more links to TIO examples

Got an idea for improving the site? [Suggest it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=enhancement&template=feature_request.md&title=)

## [Contributing](CONTRIBUTING.md)

Wrote a cool train? Found a clever dfn? [Submit it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=addition&template=content-request.md&title=)

Missing something? Faulty content? [Report it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=bug&template=bug_report.md&title=)
