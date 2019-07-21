 json←TsvToJson file;tsv;columns;data;entry;column;value
 tsv←⎕CSV⍠'Separator'(⎕UCS 9)⍠'QuoteChar' ''⊢file
 (columns data)←1(⌷{⍺ ⍵}(↓↓))tsv
 json←'['
 :For entry :In data
     json,←'{'
     :For column value :InEach columns entry
         json,←'"',column,'":',1 ⎕JSON value
         json,←','
     :EndFor
     json↓⍨←¯1
     json,←'},'
 :EndFor
 json↓⍨←¯1
 json,←']'
 json←⎕JSON⍠'Compact' 0⍣2⊢json
