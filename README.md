# APLcart – <sub><sup>*A novel approach to finding your way in [APL](https://aplwiki.com)*</sup></sub>

**There is plenty of documentation on what parts of APL do. APLcart seeks to answer *How do I…* questions.**

APLcart is a searchable collection of short APL phrases intended for both beginners and professionals, with content provided by the community. Knowledge of basic APL syntax is a prerequisite. 

Note that Internet Explorer is not supported.

## Usage

*→ See also [the video introduction](https://dyalog.tv/Dyalog19/?v=r3owA7tfKE8).*

**Note that APLcart is not intended for finding out, for example, what a symbol means or what a system function does. Please use the <a href="https://help.dyalog.com/latest/" target="_blank">language documentation</a> for such purposes. Rather, APLcart is for finding out *how to do* things.**

The site may take some seconds to load due to the information being processed by the browser. Once ready, it does not require internet access any more.

- Hit [here](https://aplcart.info) and start typing ([access-key](https://www.w3schools.com/tags/att_global_accesskey.asp#table2) <kbd>Q</kbd> — for _**Q**uery_ — to re-focus)
- [Some entries](https://aplcart.info?q=(>)) have a <kbd>▸</kbd> which can be clicked to open example code in a sandbox
- [Some entries](https://aplcart.info?q=(?)) have a <kbd>?</kbd> which can be clicked to open online documentation
- Hit the logo [⊆⌈](abrudz/aplcart) in the top left corner to go to the source code (access-key <kbd>A</kbd> — for _**A**PLcart_)
- Hit [<kbd>?</kbd>](#usage) in the top left corner to start a new query (access-key <kbd>E</kbd> — for _**E**xplain_)
- Hit [<kbd>×</kbd>](https://aplcart.info?q=) at the end of the input field to clear it (access-key <kbd>X</kbd> — for _e**x**punge_)
- Hit [<kbd>#</kbd>](https://aplcart.info?q=42) in the top right corner copy to the current search to the address bar (access-key <kbd>C</kbd> — for _**C**opy_)
- Hit [<kbd>◐</kbd>](https://aplcart.info?w) in the bottom right corner to cycle theme (access-keys <kbd>B</kbd> for **B**lack, <kbd>G</kbd> for **G**rey, <kbd>W</kbd> for **W**hite)
- Hit the result list to enable movement keys for scrolling (access-key <kbd>Z</kbd>)
- Hit [the input field](https://aplcart.info) at the top to start a new query (access-key <kbd>E</kbd> — for _**Q**uery_)

## DuckDuckGo support

DuckDuckGo allows you to search APLcart directly using the `!aplcart` bang. For example, [searching for `!aplcart 42`](https://duckduckgo.com/?q=!aplcart+42) redirects to APLcart. This also means that if you set your browser's default search engine to DuckDuckGo, you can search APLcart directly from your browser address bar by prefixing your search with `!aplcart`.

## Application ntegration

### Dyalog Windows IDE

The Windows Dyalog IDE allows using an online search when <kbd>F1</kbd> is pressed with the cursor on an unknown word:

- Options ▸ Configure ▸ Help/DMX ▸ Use online help for non-Dyalog topics ▸ URL: `https://aplcart.info/?q=%s`

### Dyalog RIDE

RIDE allows adding a website to its menu bar:

- Edit ▸ Preferences ▸ Menu, then below `&Help` insert <code>&APLcart =https://aplcart.info</code>

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
- links to documentation
- links to TIO examples (in progress)

Got an idea for improving the site? [Suggest it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=enhancement&template=feature_request.md&title=)

## [Contributing](CONTRIBUTING.md)

Wrote a cool train? Found a clever dfn? [Submit it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=addition&template=content-request.md&title=)

Missing something? Faulty content? [Report it!](https://github.com/abrudz/aplcart/issues/new?assignees=abrudz&labels=bug&template=bug_report.md&title=)
