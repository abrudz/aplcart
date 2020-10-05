# CONTRIBUTING

1. Append new publications to the end of `pub.tsv`
	**(TYPE)**\<tab\>**Authors/Presenters**\<tab\>**Title/Link**\<tab\>**Description**\<tab\>**YEAR**\<tab\>**Space-separated tags**
1. Use Dyalog to sort entries
	By year, then alphabetical titles
	
```APL
	]get pub.tsv
	head←1↑pub
	tail←1↓pub
	tail←tail[⍒tail[;5];]                  ⍝ By year
	tail←,[1 2]tail[;5]{⍵[⍒⍵[;3];]}⌸tail   ⍝ Alphabetical titles
	tail←tail⌿⍨~tail≡⍤1⊢6⍴⊂'   '           ⍝ Remove empties
	r←head⍪tail
	r⎕CSV⍠('Separator'(⎕UCS 9))('IfExists' 'Replace')⊢'pub.tsv'
```
