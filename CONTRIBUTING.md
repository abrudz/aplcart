Feel free to submit PR, especially against [table.tsv](table.tsv) which is the database. It is a really simple TSV file, 

- `<`, `>`, `&`, `'`, and `"` are automatically escaped
- rows are separated by line breaks
- line breaks may be CR+LF or just LF
- empty rows are ignored
- trailing line break is optional
- columns are separated by tabs (`	`)
- do *not* put a trailing tab at the end of any line

|SYNTAX|DESCRIPTION|CLASS|TYPE|GROUP|CATERGORY|KEYWORDS|
|------|-----------|-----|----|-----|---------|--------|
| +Y   |Conjugate ('Identity' if Y not complex)|Primitive|Monadic|Function|Scalar|Function|Mathematical|plus complex|

You don't have to fill all the columns, but do try to maximise the number of keyword synonyms in the KEYWORDS column
