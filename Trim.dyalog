 Trim←{
     {
         words←819⌶Words←' '(≠⊆⊢)⊃⌽⍵
         notin7←(∧/∘.≢⍨⍲∘.(⊃⍷)⍨)words
         in1to6←words(∨/⍷)¨⊂819⌶∊¯1↓⍵
         kws←⊂1↓∊' ',¨Words/⍨notin7>in1to6
         kws,⍨¯1↓⍵
     }⍤1⊢⍵
 }
