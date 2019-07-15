 table←terms Synonym table;mask;In;i;in;relevant;add;report
 ⍝ Add synonyms to table.tsv
 In←{∨/≢¨('\b\Q',⍺,'\E\b')⎕S ⍬⍠'ML' 1⍠1¨⍵}

 :If 2=≢table
     (table report)←table
 :Else
     report←¯1
 :EndIf
 terms(∪⊣,~¨)←'-'
 in←terms In¨⊂table
 relevant←⍸⊃∨/in
 :For i :In relevant
     add←,/' ',¨terms/⍨~i⊃¨in
     :If 0<report
     :AndIf ×≢¨add
         :If 1=report
             ⍞←'⎕'
         :Else
             ⎕←add,⍨i⍕⍨2↑1+⌊10⍟≢table
         :EndIf
     :EndIf
     table[i;7],←add
 :EndFor
 :If ¯1≠report
     table{⍺ ⍵}←report
 :EndIf
