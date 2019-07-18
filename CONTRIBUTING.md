# Contributing

If something is missing or not right, please [submit an issue](https://github.com/abrudz/aplcart/issues/new/choose).

You can also submit a pull request, especially against [table.tsv](table.tsv) — the really simple TSV file database: 

- `<`, `>`, `&`, `'`, and `"` are automatically escaped
- rows are separated by line breaks
- line breaks may be CR+LF or just LF
- empty rows are ignored
- trailing line break is optional
- columns are separated by tabs (`	`)
- do *not* put a trailing tab at the end of any line

## Example entries from table.tsv

|SYNTAX|DESCRIPTION|CLASS|TYPE|GROUP|CATEGORY|KEYWORDS|
|------|-----------|-----|----|-----|---------|--------|
| +Y   |Conjugate ('Identity' if Y not complex)|Primitive|Monadic|Function|Scalar|Function|Mathematical|plus complex|
|(+⌿÷≢)N|Mean of N|Tacit|Monadic Function| |Mathematical|average arithmeticmean|
|(f⍤r)Y|Rank: f on or between trailing rank-r subarrays|Primitive|Monadic Function|Dyadic Operator|Function Application|	jotdiaeresis rank paw|
|X(f⍤r)Y|Rank: f on or between trailing rank-r subarrays|Primitive|Monadic Function|Dyadic Operator|Function Application|	jotdiaeresis rank paw|
|X⌷⍨∘⊂J|Items of X at positions J|Tacit|Dyadic Function| |Selection|index|

You don't have to fill all the columns, but do try to maximise the number of keyword synonyms in the KEYWORDS column

### Notation for arguments and operands

Note how arguments and operands are given short menmonic names, as follows:

|NAME<br> |PLACEMENT<br><sup>relative to main subject</sub>|TYPE<br><sup>of array</sup>|
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
