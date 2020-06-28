 Trim←{
     {
         (first7 url)←¯1(↓{⍺⍵}↑)⍵

         words←819⌶Words←' '(≠⊆⊢)⊃⌽first7
         notin7←(∧/∘.≢⍨⍲∘.(⊃⍷)⍨)words
         in1to6←words(∨/⍷)¨⊂819⌶∊¯1↓first7
         kws←⊂1↓∊' ',¨Words/⍨notin7>in1to6
         url,⍨kws,⍨¯1↓first7
     }⍤1⊢⍵
 }
