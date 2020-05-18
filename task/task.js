var ps
I=_=>{
  var s=new URLSearchParams(location.search)
  b.className=0==s.get("w")?"w":0==s.get("b")?"b":""
  fetch("/table.tsv").then(d=>d.text()).then(d=>{
    ps=d.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x])).split(/\r?\n/g).splice(1).map(r=>r.split("\t"))
    .filter(x=>-1===x[0].indexOf("dfns.") && ["Tacit", "Dfn"].includes(x[2]) && ["Monadic Function", "Dyadic Function"].includes(x[3]) && x[4]==="")
    Q()})}
Q=_=>{
  c=(x=>x[Math.floor(Math.random()*x.length)])(ps)
  a=c[0].match(/^[a-z]*/i)[0]
  w=c[0].match(/[a-z]*$/i)[0]
  E=x=>(["any","a numeric","an integer","a Boolean","a character"]["XMIACYNJBD".indexOf(x[0])%5]+(x[1]?[" scalar"," vector"," matrix"]["svm".indexOf(x[1])]:" array")+(x?" <code>"+x+"</code>":""))
  q.innerHTML=`Write a ${c[3].match(/\w+/)[0].toLowerCase()} ${c[5].toLowerCase()} function, <code>${a?a+" ":""}YourFunction ${w}</code>, that for ${a?E(a)+" and ":""}${E(w)}, solves the following task:<p>${c[1]}</p>Difficulty: ${["Easy","Medium","Hard"][(x=>Math.floor(3*x.indexOf(c)/x.length))(ps.filter(x=>x[2]===c[2]))]}`
}
W=x=>b.className=x?x:"wb"[1+"wb".indexOf(b.className[0])]
