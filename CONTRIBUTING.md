# Contributing

If something is missing or not right, please [submit an issue](https://github.com/abrudz/aplcart/issues/new/choose).

You can also submit a pull request, especially against [table.tsv](table.tsv) — the really simple TSV file database: 

- `<`, `>`, `&`, `'`, and `"` are automatically escaped
- rows are separated by line breaks
- line breaks may be CR+LF or just LF
- no empty rows
- trailing line break is optional
- columns are separated by tabs (`	`)
- do *not* put a trailing tab at the end of any line

## Columns

Each row has nine columns. Only SYNTAX and DESCRIPTION are displayed, but queries search all columns. Reuse values already present in a column where possible.

|COLUMN|CONTENT|
| - | - |
|SYNTAX|The phrase, with arguments and operands named as [below](#notation-for-arguments-and-operands)|
|DESCRIPTION|What the phrase does|
|CLASS|Kind of code: `Primitive`, `System`, `Tacit`, `Dfn`, `Dop`, `Tradfn`, `I-beam`, `Syntax`, `Non-syntax`, `Expression`, `Constant`, or `GUI Object`|
|TYPE|The function SYNTAX is or derives: `Monadic Function`, `Dyadic Function`, or `Ambivalent Monadic Function, Dyadic Function`; otherwise a value such as `Expression`, `Constant`, `Variable`, `Control`, or `Ucmd`, or empty|
|GROUP|For operators, `Monadic Operator` or `Dyadic Operator`; otherwise an area such as `Native files`, `SALT`, or `Performance`, or empty|
|CATEGORY|Topic, such as `Mathematical`, `Structural`, `Text`, `Boolean/Logical`, `Selection`, `Index Generation`, `Comparison`, `Sets`, or `Function Application`|
|KEYWORDS|Space-separated search terms (synonyms, alternative spellings, names used elsewhere) not already in the other columns|
|TIO|Optional [Try It Online](https://tio.run/#apl-dyalog) link, shown as <kbd>▸</kbd> (TIO's Dyalog APL predates version 20.0)|
|DOCS|Optional documentation link, shown as <kbd>?</kbd>|

## Example entries from table.tsv

|SYNTAX|DESCRIPTION|CLASS|TYPE|GROUP|CATEGORY|KEYWORDS|TIO|DOCS|
| - | - | - | - | - | - | - | - | - |
|+Y|Conjugate ('Identity' if Y not complex)|Primitive|Monadic Function| |Mathematical|greek cross plus ¯10○ ¯10∘○ conj() conjugating|[▸](https://tio.run/##SyzI0U2pTMzJT////1Hf1EdtExS0FQz1jBQMskwUDq03zTq03kxBPTEpWf3/fwA)|[?](https://docs.dyalog.com/20.0/language-reference-guide/primitive-functions/conjugate/)|
|(+⌿÷≢)N|Arithmetic mean of N|Tacit|Monadic Function| |Mathematical|average arithmeticmean() AM() avg() mean()| | |
|(f⍤Js)Y|Rank: f on every trailing rank-Js subarray of Y|Primitive|Monadic Function|Dyadic Operator|Function Application|pout ewok jotdiaeresis ö paw sub-arrays subarrays dimensions axes ending|[▸](https://tio.run/##SyzI0U2pTMzJT///P7k0KVXhUdsEBSMgNH7Uu@VR72ZDI65HfVNBgho6j3qXGGkqgFRxJecmlkCVghSqJyYlV1VUqisoPOqdq5CckViUmFySWqQAVFWUWQE34VFvN9AMQ6AZIO1QANKRXpSYkqpbWqCQVKlQlF/@/z8A)|[?](https://docs.dyalog.com/20.0/language-reference-guide/primitive-operators/rank/)|
|X(f⍤Is Js)Y|Rank: f between every trailing rank-Is subarray of X and every trailing rank-Js subarray of Y|Primitive|Dyadic Function|Dyadic Operator|Function Application|pout ewok jotdiaeresis ö paw sub-arrays subarrays dimensions axes ending|[▸](https://tio.run/##SyzI0U2pTMzJT///Py83sUThUdsEBWMFk0e9Wx71bjY0UkACj3rnKuSV5qYWZSYrAJUWZVZwPeqbCtJgaKBgZKBgbKCgof2od4mBgqGmAtgwsJbi5MScxKJihYKc0mKFstTkkvyi4v//AQ)|[?](https://docs.dyalog.com/20.0/language-reference-guide/primitive-operators/rank/)|
|Iv⊂⍛⌷Y|Select major cells Iv from Y|Tacit|Dyadic Function| |Selection|rightshoeunderbar saneindexing ⊇ items elements getting picking selecting| | |

You don't have to fill all the columns, but do try to maximise the number of keyword synonyms in the KEYWORDS column

## Notation for arguments and operands

Note how arguments and operands are given short mnemonic names, as follows:

|NAME<br> |PLACEMENT<br><sup>relative to main subject</sup>|TYPE<br><sup>of array</sup>|
| - | - | -|
|X|left|any array|
|Y|right|any array (can be on the left in combination with Z)|
|Z|right|any array (only used when X and Y are not enough)|
|M|left|numeric array|
|N|right|numeric array|
|I|left|integer array|
|J|right|integer array|
|A|left|Boolean (0/1)|
|B|right|Boolean (0/1)|
|C|left|character|
|D|right|character|
|f|left|function|
|g|mid|function|
|h|right|function|
|ax|right|axis specification (`[`…`]`)|

A name can optionally be followed by a specification of its (maximum) rank:

|SUFFIX|RANK|DESCRIPTION|
| - | - | -|
|s|0|scalar/singleton|
|v|1|vector/list|
|m|2|matrix/table|

## Placement of entries

Add entries anywhere, for example at the end. Then, in Dyalog APL with the repository linked (`]Link.Create # path/to/aplcart`):

- `Test''` gives `1` if every line has exactly nine columns; if not, `File''` reports the first bad line
- `ReorderFile''` sorts the entries by CLASS (`Primitive`, `System`, `Tacit`, `Dfn`, `Dop`, then the rest), then by SYNTAX length ignoring spaces, names, and numbers, then by the glyphs used
