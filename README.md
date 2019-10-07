# APLcart – <sub><sup>*A novel approach to finding your way in [APL](#apl)*</sup></sub>

**There is plenty of documentation on what parts of APL do. APLcart seeks to answer *How do I…* questions.**

APLcart is a searchable collection of short APL phrases intended for both beginners and professionals, with content provided by the community. Knowledge of basic APL syntax is a prerequisite. 

Note that Internet Explorer is not supported.

## Usage

**Note that APLcart is not intended for finding out, for example, what a symbol means or what a system function does. Please use the <a href="https://help.dyalog.com/latest/" target="_blank">language documentation</a> for such purposes. Rather, APLcart is for finding out *how to do* things.**

The site may take some seconds to load due to the information being processed by the browser. Once ready, it does not require internet access any more.

Access-keys are <kbd>Alt</kbd>+<kbd>⇧ Shift</kbd> (<kbd>∧ control</kbd>+<kbd>⌥ option</kbd> on macOS)

- Click [here](https://abrudz.github.io/aplcart) and start typing (access-key <kbd>Q</kbd> — for _**Q**uery_ — to re-focus)
- Click the logo [⊆⌈](abrudz/aplcart) in the top left corner to go to the source code (access-key <kbd>A</kbd> — for _**A**PLcart_)
- Click [<kbd>?</kbd>](#usage) in the top left corner to start a new query (access-key <kbd>E</kbd> — for _**E**xplain_)
- Click [<kbd>×</kbd>](https://abrudz.github.io/aplcart) at the end of the input field to clear it (access-key <kbd>X</kbd> — for _e**x**punge_)
- Click [<kbd>¶</kbd>](https://abrudz.github.io/aplcart?q=42) in the top right corner copy to the current search to the address bar (access-key <kbd>C</kbd> — for _**C**opy_)
- Click [<kbd>◐</kbd>](https://abrudz.github.io/aplcart?w) in the bottom right corner to cycle theme (access-keys <kbd>B</kbd> for **B**lack, <kbd>G</kbd> for **G**rey, <kbd>W</kbd> for **W**hite)

Access-key <kbd>Z</kbd> focuses on the results' listing for keyboard scrolling.

## URL API ("permalinks")

After clicking [<kbd>¶</kbd>](https://abrudz.github.io/aplcart?q=42) simply copy the current address from your browser's address bar to share the current query. Note that your current theme is intentionally not included, to avoid blinding the recipient.

### Manual construction

After [aplcart.info](https://aplcart.info/) you can add `?` and the following options, separated by `&` if you want both a theme and a query:

- [<code>w</code>](https://abrudz.github.io/aplcart?w) select **w**hite theme
- [<code>b</code>](https://abrudz.github.io/aplcart?b) select **b**lack theme
- [<code>q=<i>query</i></code>](https://abrudz.github.io/aplcart?q=query) prepopulate the _Tell me about_ **q**uery field

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
- links to documentation
- links to TIO examples

Got an idea for improving the site? [Suggest it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=enhancement&template=feature_request.md&title=)

## [Contributing](CONTRIBUTING.md)

Wrote a cool train? Found a clever dfn? [Submit it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=addition&template=content-request.md&title=)

Missing something? Faulty content? [Report it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=bug&template=bug_report.md&title=)

# APL?
- <a href="https://www.dyalog.com/what-is-dyalog.htm" target="_blank">What is Dyalog APL?</a>
- <a href="https://www.dyalog.com/mastering-dyalog-apl.htm" target="_blank"><em>Mastering Dyalog APL</em></a> by Bernard Legrand: a complete guide, beginning with a thorough introduction to the language and progressing to worked examples. Free to download, but can be bought printed.
- <a href="https://tryapl.org/" target="_blank">TryAPL</a>: an online interactive environment that allows users to play with simple expressions. Includes tutorial mode in which various scenarios are explored.
- <a href="http://tutorial.dyalog.com/" target="_blank">Dyalog APL Tutor</a>: ancient online system that takes a complete novice through terminology, conventions and functionality
- <a href="https://chat.stackexchange.com/rooms/info/52405/the-apl-orchard?tab=conversations" target="_blank">APL Cultivation</a>: a Stack Exchange repository of text-based lesson transcripts.
- <a href="https://chat.stackexchange.com/rooms/52405/the-apl-orchard" target="_blank">The APL Orchard</a>: a Stack Exchange chatroom.
- <a href="https://stackoverflow.com/questions/ask?tags=apl+dyalog&title=How+do+I%E2%80%A6" target="_blank">Stack Overflow</a>: a question & answer site where APL questions are usually answered very quickly.
- <a href="https://help.dyalog.com/latest/" target="_blank">Full online documentation</a> of the core language.
- <a href="https://docs.dyalog.com/" target="_blank">The Documentation Centre</a>: the complete documentation set for download.
- <a href="https://dfns.dyalog.com/n_contents.htm" target="_blank">The dfns workspace</a>: a library installed with Dyalog. In APLcart, entries from here are prefixed `dfns.` . To use, insert `{(⍎⍵⎕NS⍬).⎕CY⍵}'dfns'` into your code, then call, for example, `dfns.cal`.
- <a href="https://forums.dyalog.com" target="_blank">The Dyalog Forums</a>: FAQs, advice, and tips.
