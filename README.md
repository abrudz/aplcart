# APLcart – <sub><sup>*A novel approach to finding your way in [APL](#apl)*</sup></sub>

**There is plenty of documentation on what parts of APL do. APLcart seeks to answer *How do I…* questions.**

## Usage

Access-keys are <kbd>Alt</kbd>+<kbd>⇧ Shift</kbd> (<kbd>∧ control</kbd>+<kbd>⌥ option</kbd> on macOS)

- Click [here](https://abrudz.github.io/aplcart/) and start typing (access-key <kbd>Q</kbd> to re-focus)

- Click [`×`](https://abrudz.github.io/aplcart/) in the top right corner to start a new query (access-key <kbd>X</kbd>)

- Click [APLcart](abrudz/aplcart) in the top left corner to go to the source code (access-key <kbd>A</kbd>)

- Click [`🔅︎︎︎`](https://abrudz.github.io/aplcart?w) in the bottom right corner to toggle white theme (access-key <kbd>W</kbd>)

Access-key <kbd>Z</kbd> focuses on the results' listing for keyboard scrolling.

## URL API ("permalinks")

As the query is modified, the browser address bar is updated too. Simply copy the current address to share the current query.

### Manual construction

After [abrudz.github.io/aplcart](https://abrudz.github.io/aplcart) you can add `?` and the following options, separated by `&` if you want both:

- [`w`](https://abrudz.github.io/aplcart?w) use white theme
- [<code>q=<i>query</i></code>](https://abrudz.github.io/aplcart?q=query) prepopulate query field

For example for a white interface looking for "find", use [abrudz.github.io/aplcart?w&q=find](https://abrudz.github.io/aplcart?w&q=find)

## Scope

APLcart currently encompasses:

- General syntax, like `name f←Y`
- Primitives, like `!`
- Control structures, like `:If`
- Keywords, like `:Access`
- System commands, like `)CLEAR`
- System functions, like `⎕SIGNAL`
- System constants, like `⎕A`
- System operators, like `⎕R`
- System variables, like `⎕IO`
- I-beams, like `819⌶`
- Errors numbers and messages, like `11::DOMAIN ERROR`
- User commands, like `]Box`
- A selection of simple dfns, dops, and derived functions like `(0=|)`
- All of dfns.dws, like `dfns.cal`
- Idioms from the APL2 idiom list, like `(+/|)`
- Performance idioms from Dyalog's idiom list, like `{(+/∨\' '≠⌽⍵)↑¨↓⍵}`
- Entries from Dyalog's #onelinerwednesday series, like `(×/⊢÷+/-2×⊢)`

### Coming soon

- Subset of idioms from the FinnAPL idiom list, like `(⊢⍳⌈/)`

## Features wish list
- links to documentation
- links to TIO examples

## Contributing

Wrote a cool train? Found a clever dfn? [Please contribute!](CONTRIBUTING.md)

Missing something? Faulty content? [Submit an issue!](https://github.com/abrudz/aplcart/issues/new)

# APL?

- <a href="https://www.dyalog.com/what-is-dyalog.htm" target="_blank">What is Dyalog APL?</a>

- <a href="https://www.dyalog.com/mastering-dyalog-apl.htm" target="_blank"><em>Mastering Dyalog APL</em></a> by Bernard Legrand: a complete guide, beginning with a thorough introduction to the language and progressing to worked examples. Free to download, but can be bought printed.
- <a href="https://tryapl.org/" target="_blank">TryAPL</a>: an online interactive environment that allows users to play with simple expressions. Includes tutorial mode in which various scenarios are explored.
- <a href="http://tutorial.dyalog.com/" target="_blank">The APL tutor</a>: online system that takes a complete novice through terminology, conventions and functionality
- <a href="https://chat.stackexchange.com/rooms/info/52405/the-apl-orchard?tab=conversations" target="_blank">APL Cultivation</a>: a Stack Exchange repository of text-based lesson transcripts.
- <a href="https://chat.stackexchange.com/rooms/52405/the-apl-orchard" target="_blank">The APL Orchard</a>: a Stack Exchange chatroom.
- <a href="https://stackoverflow.com/questions/ask?tags=apl+dyalog&title=How+do+I%E2%80%A6" target="_blank">Stack Overflow</a>: a question & answer site where APL questions are usually answered very quickly.
- <a href="https://help.dyalog.com/latest/" target="_blank">Full online documentation</a> of the core language.
- <a href="https://docs.dyalog.com/" target="_blank">The Documentation Centre</a>: the complete documentation set for download.
- <a href="https://dfns.dyalog.com/n_contents.htm" target="_blank">The dfns workspace</a>: a library installed with Dyalog. In APLcart, entries from here are prefixed `dfns.` . To use, insert `{(⍎⍵⎕NS⍬).⎕CY⍵}'dfns'` into your code, then call, for example, `dfns.cal`.
- <a href="https://forums.dyalog.com" target="_blank">The Dyalog Forums</a>: FAQs, advice, and tips.
