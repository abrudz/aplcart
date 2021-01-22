:Namespace APLcart
⍝ Search aplcart.info    
    ⎕IO←1 ⋄ ⎕ML←1

    :Section Interface   
⍝ User Command Interface

    ∇ r←List
      r←⎕NS¨1⍴⊂⍬
    ⍝ Name, group, short description and parsing rules
      r.Name←⊂'APLcart'
      r.Group←⊂'ABrudz'
      r[1].Desc←'Search aplcart.info for idioms'
      r.Parse←⊂'1L -results∊¯0123456789 -r∊¯0123456789' ⍝ ENTER NUMBER OF ARGS AND OPTIONALLY -modifiers HERE
    ∇

    ∇ r←Run(cmd input)
      :Select cmd
      :Case 'APLcart'
          (args parms)←input
          query←⊃args.Arguments
          results←parms.(r results⌿⍨0∘≢¨r results)
          search←Search' '(≠⊆⊢)query
          length←¯1+≢search
          :If 1=≢results
              n←⍎⊃results
              :If ¯1=n
                  ⎕←'Showing all of',length,' results'
                  r←search
              :Else
                  ⎕←'Showing',(length⌊n),'of',length,' results'
                  r←((1+length)⌊n+1)↑search
              :EndIf
          :ElseIf 1<≢results
              r←'Only a single modifier allowed'
          :Else
              ⎕←'Showing',(length⌊10),'of',length,' results'
              r←((1+length)⌊11)↑search
          :EndIf
      :EndSelect
    ∇

    ∇ r←level Help cmd
      :Select cmd
      :Case 'APLcart'
          r←⊂'Search aplcart.info'
          r,←⊂''
          r,←⊂']APLcart <terms> [-r(esults)=n]'
          :If level>0
              r,←⊂''
              r,←⊂'<terms>:   space separated search terms'
              r,←⊂''
              r,←⊂'results:   number of results to print'
              r,←⊂'           r=¯1 to return all results'
              r,←⊂''
              r,←⊂'Example:'
              r,←⊂']APLcart remove blanks -r=5'
          :Else
              r,←⊂''
              r,←⊂']APLcart -?? for details and examples'
          :EndIf
      :EndSelect
    ∇

    :EndSection

    :Section API
⍝ API        
      FetchTable←{
          _←⎕SE.UCMD'Load HttpCommand'
          tsv←(HttpCommand.Get'https://raw.githubusercontent.com/abrudz/aplcart/master/table.tsv').Data
          (⎕CSV⍠'Separator'(⎕UCS 9)⍠'QuoteChar' ''⊢tsv'S')(tsv(≠⊆⊣)⎕UCS 10)
      }
      Search←{
          (table tsv)←FetchTable ⍬
          terms←⊆⍵
          ⍕table[1,1+⊃∩/{∪⍵ ⎕S{⍵.BlockNum}⍠'Regex' 0⊢(1↓tsv)}¨terms;1 2 3]
      }
    :EndSection

:EndNamespace
