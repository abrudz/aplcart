:Namespace APLcart ⍝ v1.00
⍝ 2021 02 04 Adam: Initial code
    ⎕IO←1 ⋄ ⎕ML←1

    :Section Interface for user command system
    desc←'Search APLcart for how to do things'
    syntax←']APLcart [<terms>] [[-list[=n]] [-raw[=all]] | [-url]] [-browser] [-popup] [-theme=b|w]'

    ∇ r←List
      r←⎕NS ⍬
      r.Name←'APLcart'
      r.Group←'Tools'
      r.Desc←desc
      r.Parse←'99S -browser -popup -theme=b w g -list[∊]0123456789 -open -raw[=]all -url'
    ∇

    ∇ r←Run(cmd input);legend;list;help;n;url;msg;lines;hr;args;fmt;limit;theme
      list←0≢input.list
      args←×≢input.Arguments
      fmt←0≡input.raw
     
      :If fmt≤input.url∨input.browser∨input.window∨list∨args
          theme←input.theme∊'bw'
          :If input.url
              '-list and -raw conflict with -url'⎕SIGNAL 11↑⍨list>fmt
              '-list conflicts with -url'⎕SIGNAL list↑11
              '-raw conflicts with -url'⎕SIGNAL fmt↓11
          :EndIf
     
          url←'https://aplcart.info'
          url,←'?'/⍨args∨theme
          url,←input.theme∩'bw'
          url,←'&'/⍨args∧theme
          url,←args/'q=',1↓∊' ',¨input.Arguments
     
          r←0⍴⊂''
          :If input.browser
              {}⎕SE.UCMD'open ',url
          :EndIf
          :If input.window
              hr←⍎'⎕SE.Dyalog.APLcartWindow'⎕WC'HtmlRenderer'('URL'url)
              hr.(⎕WS'Event'('DoPopup' 'Popup'))
              hr.Popup←'⎕SE.Dyalog.APLcartPopup'∘{
                  uu←'URL'(⊃⍬⍴2⌽⍵)
                  ×⎕NC ⍺:⍺ ⎕WS uu
                  ⍺ ⎕WC'HtmlRenderer'uu
              }
          :EndIf
          :If list∨args∧input.url⍱input.window∨input.browser
              n←≢r←(input.raw≡'all')Q input.Arguments
              help←''
              :Select input.list
              :CaseList 0(,'0') ⋄ limit←10 ⋄ help←(limit<n)/') (-list=<n> to show up to <n>; -list to show all'
              :Case 1 ⋄ limit←n ⋄ help←') (-list=<n> to show no more than <n>'/⍨10<n
              :Else ⋄ limit←⍎input.list ⋄ help←''
              :EndSelect
              r↑⍨←limit⌊n
              :If fmt
                  msg←'Showing ',(⍕≢r),' of ',(⍕n),' matches',1⌽help
                  lines←{(+/∨\' '≠⌽⍵)↑¨↓⍵}0 1↓⍕r
                  legend←'X, Y, Z: any type array  M, N: numeric array  I, J: integer array  A, B: Boolean array  C, D: character array  f, g, h: function  ax: bracket axis  s: scalar  v: vector  m: matrix'
                  :If ⎕PW<≢legend
                      legend←'X,Y,Z:any M,N:num I,J:int A,B:Bool C,D:char f,g,h:fn ax:axis s:scal v:vec m:mat'
                  :EndIf
                  r←legend'',lines,''msg
                  r[2,¯1+≢r]←⊂'─'⍴⍨⎕PW⌊⌈/≢¨r
              :EndIf
          :EndIf
          :If fmt
              r,←input.url/''url↓⍨0=≢r
              r←⎕SE.Dyalog.Utils.layoutText⍣(×≢r)⊢r
              r,¨←⎕UCS 13
              r←∊r
              r↓⍨←¯1
              :If ''≡r
                  r⍴⍨←0 0
              :EndIf
          :EndIf
      :Else
          r←syntax
      :End
    ∇

      Help←{
          r←⊂List.Desc
          r,←⊂''
          r,←⊂syntax
          r,←⊂''
          0=⍺:r,⊂']APLcart -??  ⍝ for details and examples'
          r,←⊂'<terms>     space separated search terms (use /term/ for regex)'
          r,←⊂''
          r,←⊂'-list       list all results (not valid with -url; default: 10)'
          r,←⊂'-list=<n>   list no more than <n> results'
          r,←⊂''
          r,←⊂'-raw        return raw two-column matrix (not valid with -url)'
          r,←⊂'-raw=all    return raw eight-column matrix'
          r,←⊂''
          r,←⊂'-browser    open website in browser'
          r,←⊂'-popup      open website in a popup window'
          r,←⊂'-url        return URL for online query (not valid with -list or -raw)'
          r,←⊂'-theme=b|w  use black or white theme in browser/popup (default: grey)'
          r,←⊂''
          r,←⊂'Examples:'
          r,←⊂'    ]APLcart remove blanks -l=5  ⍝ list first five results for "remove blanks"'
          r,←⊂'    ]APLcart /highest|lowest/    ⍝ list up to 10 results for "highest" or "lowest"'
          r,←⊂'    ]APLcart -b                  ⍝ open APLcart in browser'
          r,←⊂'    ]APLcart -p -t=b             ⍝ open black APLcart GUI'
          r,←⊂'    ]APLcart -u                  ⍝ internet address for APLcart'
          r,←⊂'    ]table←APLcart -r=all        ⍝ database dump'
          r,←⊂''
          r,←⊂']Open https://github.com/abrudz/aplcart/blob/master/README.md  ⍝ for APLcart documentation'
          r
      }

    :EndSection

    :Section API functions
    ∇ t←table;hc;data;resp
      hc←⎕SE.SALT.Load'HttpCommand -nolink'
      resp←hc.Get'https://raw.githubusercontent.com/abrudz/aplcart/master/table.tsv'
      {0≠⍵:⎕SIGNAL⊂('EN' 26)('EM' 'CONNECTION ERROR')('Message'('Response code ',⍕⍵))}resp.rc
      t←'.*\r?\n'⎕R''⍠'Mode' 'D'⍠'ML' 1⍠'ResultText' 'Nested'⊢'http\S+(\t|$)'⎕R''⊢resp.Data ⍝ remove header and URLs
      ⎕EX'table' ⋄ table←t ⍝ cache
    ∇
      Q←{
          ⍺←0 ⍝ all columns
          terms←' '(≠⊆⊢)⍣(' '∊⍵)⊢⍵
          Filter←{
              regex←'//'≡(⊃,⊃∘⌽)⍺
              pat←regex↓(-regex)↓⍺
              pat ⎕S'%'⍠'Regex'(regex 1)⍠'ML' 1⍠1⊢⍵
          }
          26::⎕SIGNAL⊂⎕DMX.(('EN'EN)('EM'EM)('Message'Message))
          r←⊃Filter/terms,⊂table
          ↑(⎕UCS 9)(≠⊆⊢)¨'^[^\t]+\t[^\t]+'⎕S'&'⍣(~⍺)⊢r
      }
    :EndSection

:EndNamespace
