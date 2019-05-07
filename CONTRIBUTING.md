# Contributing

Feel free to submit PR, especially against [table.tsv](table.tsv) which is the database. It is a really simple TSV file, 

- `<`, `>`, `&`, `'`, and `"` are automatically escaped
- rows are separated by line breaks
- line breaks may be CR+LF or just LF
- empty rows are ignored
- trailing line break is optional
- columns are separated by tabs (`	`)
- do *not* put a trailing tab at the end of any line

### Example entries from table.tsv

|1<br>SYNTAX|2<br>DESCRIPTION|3<br>CLASS|4<br>TYPE|5<br>GROUP|6<br>CATEGORY|7<br>KEYWORDS|
|------|-----------|-----|----|-----|---------|--------|
| +Y   |Conjugate ('Identity' if Y not complex)|Primitive|Monadic|Function|Scalar|Function|Mathematical|plus complex|
|(+⌿÷≢)N|Mean of N|Tacit|Monadic Function| |Mathematical|average arithmeticmean|
|(f⍤r)Y|Rank: f on or between trailing rank-r subarrays|Primitive|Monadic Function|Dyadic Operator|Function Application|	jotdiaeresis rank paw|
|X(f⍤r)Y|Rank: f on or between trailing rank-r subarrays|Primitive|Monadic Function|Dyadic Operator|Function Application|	jotdiaeresis rank paw|
|X⌷⍨∘⊂J|Items of X at positions J|Tacit|Dyadic Function| |Selection|index|

You don't have to fill all the columns, but do try to maximise the number of keyword synonyms in the KEYWORDS column
