var ps
I=_=>{
  var s=new URLSearchParams(location.search)
  console.log(window.getComputedStyle(b).content[1])
  b.className=0==s.get("b")?"b":0==s.get("g")?"g":0==s.get("w")?"w":window.getComputedStyle(b).content[1]
  console.log(window.getComputedStyle(b).content[1])
  um.href="/?"+b.className
  if(s.get("self")!=null){document.querySelectorAll("[target]").forEach(e=>e.target="_self");um.href+="&self"}
  fetch("/table.tsv").then(d=>d.text()).then(d=>{
    ps=d.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x])).trim().split(/\r?\n/g).splice(1).map(r=>r.split("\t"))
    .filter(x=>-1===x[0].indexOf("dfns.") && ["Tacit", "Dfn"].includes(x[2]) && ["Monadic Function", "Dyadic Function"].includes(x[3]) && x[4]==="")
    Q1();Q2();Q3()})}
E=x=>(["any","a numeric","an integer","a Boolean","a character"]["XMIACYNJBD".indexOf(x[0])%5]+(x[1]?[" scalar"," vector"," matrix"]["svm".indexOf(x[1])]:" array")+(x?" <code>"+x+"</code>":""))
R=x=>x[Math.floor(Math.random()*x.length)]
X=x=>x[0].match(/^[a-z]*/i)[0]
Y=x=>x[0].match(/[a-z]*$/i)[0]
Q1=_=>{
  c1=R(ps);a=X(c1);w=Y(c1)
  q1.innerHTML=`Write a ${c1[3].match(/\w+/)[0].toLowerCase()} ${c1[5].toLowerCase()} function, <code>${a?a+" ":""}YourFunction ${w}</code>, that for ${a?E(a)+" and ":""}${E(w)}, solves the following ${["easy","medium-difficulty","hard"][(x=>Math.floor(3*x.indexOf(c1)/x.length))(ps.filter(x=>x[2]===c1[2]))]} task:<p>${c1[1]}</p>`
}
Q2=_=>{
  c2=R(ps);a=X(c2);w=Y(c2)
  q2.innerHTML=`What does the following ${c2[3].match(/\w+/)[0].toLowerCase()} ${c2[5].toLowerCase()} function compute when given ${a?E(a)+" and ":""}${E(w)}?<p><code>${c2[0]}</code></p>`
}
Q3=_=>{
  c3=R(ps);a=X(c3);w=Y(c3)
  r=/[^\[\]\{\}\(\)\w¯\d&;⋄'#∆⍙⍺⍵⎕⍞ ]/g
  n=Math.floor(Math.random()*c3[0].match(r).length)
  i=0;c3d=c3[0].replace(/&lt;|&gt;/g,x=>({'&lt;':'<','&gt;':'>'}[x])).replace(r,x=>i++==n?"@@":x).replace(/<|>/g,x=>({'<':'&lt;','>':'&gt;'}[x])).replace('@@','<del> </del>')
  i=0;c3i=c3[0].replace(/&lt;|&gt;/g,x=>({'&lt;':'<','&gt;':'>'}[x])).replace(r,x=>i++==n?"@←@"+x+"@→@":x).replace(/<|>/g,x=>({'<':'&lt;','>':'&gt;'}[x])).replace('@←@','<ins>').replace('@→@','</ins>')
  q3.innerHTML=`What is the obscured symbol in the following ${c3[3].match(/\w+/)[0].toLowerCase()} ${c3[5].toLowerCase()} function:<p><code id='p3'>${c3d}</code></p>which when given ${a?E(a)+" and ":""}${E(w)}, solves the task: <p>${c3[1]}</p>`
}
W=x=>{b.className=x?x:"wbg"[1+"wb".indexOf(b.className)];um.href="/?"+b.className}
