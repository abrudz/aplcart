# CONTRIBUTING

1. Append new publications to the end of `pub.tsv`
	**(TYPE)**\<tab\>**Authors/Presenters**\<tab\>**Title/Link**\<tab\>**Description**\<tab\>**YEAR**\<tab\>**Space-separated tags**
1. Use Dyalog to sort entries
	By year, then alphabetical titles
	
```APL
	]get pub/pub.tsv
	]get file.aplf
	head←1↑pub
	tail←1↓pub
	tail←tail[⍒tail[;3];]    ⍝ Alphabetical titles	
	tail←tail[⍒tail[;5];]    ⍝ By year
	r←head⍪tail
	r File 'pub/pub.tsv'
```
