# APLcart – <sub><sup>*A novel approach to finding your way in APL*</sup></sub>

**There is plenty of documentation on what parts of APL do. APLcart seeks to answer *How do I…* questions.**

## Usage

Access-keys are <kbd>Alt</kbd>+<kbd>⇧ Shift</kbd> (<kbd>∧ control</kbd>+<kbd>⌥ option</kbd> on macOS)

- Click [here](https://abrudz.github.io/aplcart/) and start typing (access-key <kbd>Q</kbd> to re-focus)

- Click [`×`](https://abrudz.github.io/aplcart/) in the top right corner to start a new query (access-key <kbd>X</kbd>)

- Click [APLcart](abrudz/aplcart) in the top left corner to go to the source code (access-key <kbd>A</kbd>)

- Click [`🔅︎︎︎`](https://abrudz.github.io/aplcart?w) in the bottom right corner to toggle white theme (access-key <kbd>W</kbd>)

Access-key <kbd>Z</kbd> focuses on the results' listing for keyboard scrolling.

## URL API ("permalinks")

As the query is modified, the browser address bar is updated too. Simply copy the current address to share a current query.

### Manual construction

After [abrudz.github.io/aplcart](https://abrudz.github.io/aplcart) you can add `?` and the following options, separated by `&` if you want both:

- [`w`](https://abrudz.github.io/aplcart?w) use white theme
- [<code>q=<i>query</i></code>](https://abrudz.github.io/aplcart?q=query) prepopulate query field

For example for a white interface looking for "find", use [abrudz.github.io/aplcart?w&q=find](https://abrudz.github.io/aplcart?w&q=find)

## Scope

APLCart currently searches a table of:

- General APL syntax
- Primitives
- Control structures
- Keywords
- System commands
- System functions
- System constants
- System operators
- System variables
- I-beams
- Errors
- User commands
- A selection of simple dfns, dops, and derived functions
- All of dfns.dws
- Idioms from the APL2 idiom list
- Performance idioms from Dyalog's idiom list
- Entries from Dyalog's #onelinerwednesday series

### Coming soon

- Subset of idioms from the FinnAPL idiom list

## Features wish list
- links to documentation
- links to TIO examples

## Contributing

Wrote a cool train? Found a clever dfn? [Please contribute!](CONTRIBUTING.md)

Missing someting? Faulty content? [Submit an issue!](https://github.com/abrudz/aplcart/issues/new)