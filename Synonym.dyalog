 table←terms Synonym table;mask;In;i;in;relevant;add;report;file;∆CSV
 ⍝ Add synonyms to table.tsv
 In←{∨/≢¨('\b\Q',⍺,'\E\b')⎕S ⍬⍠'ML' 1⍠1¨⍵}

 :If 2=≢table
     (table report)←table
 :Else
     report←0
 :EndIf
 :If 1≥≢⍴table
     file←table
     ∆CSV←⎕CSV⍠'Separator'(⎕UCS 9)⍠'QuoteChar' ''⍠'IfExists' 'Replace'∘⊂
     table←∆CSV file
 :Else
     file←''
 :EndIf
 terms(∪⊣,~¨)←'-'
 in←terms In¨⊂table
 relevant←⍸⊃∨/in
 :For i :In relevant
     add←,/' ',¨terms/⍨~i⊃¨in
     :If report
     :AndIf ×≢¨add
         ⎕←add,⍨i⍕⍨2↑1+⌊10⍟≢table
     :EndIf
     table[i;7],←add
 :EndFor
 :If ×≢file
     table ∆CSV file
 :EndIf
 :If report
     table{⍺ ⍵}←report
 :EndIf
