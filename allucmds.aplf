 allucmds←{

     r←⎕FMT ⎕SE.UCMD'??'
     s←2↓¯3↓r
     t←1↓¨s⊂[1]⍨∧/' '=s
     groups←{'^ (\w+).+'⎕R'\1'⊃↓⍵}¨t
     gdescrs←{':'~⍨'^ \w+ +(.+)'⎕R'\1'⊃↓⍵}¨t
     u←1↓¨t
     v←(groups{⊂⍺ ⍵}¨gdescrs){
         syntax←∊']',⍺[1],'.','^ +(\w+)'⎕S'\1'⊢⍵
         description←∊'^ +\w+ +(.+)'⎕S'\1'⊢⍵
         class←'Non-syntax'
         type←'Ucmd'
         group←1⊃⍺
         category←'User command'
         keywords←2⊃⍺
         ' +$'⎕R''⊢syntax description class type group category keywords
     }¨¨↓¨u
     ↑⊃⍪/v
 }
