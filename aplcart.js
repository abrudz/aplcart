C=_=>{
  history.replaceState({},document.title,location.pathname+(q.value?"?q="+encodeURIComponent(q.value):""))
  u=location.toString().replace("#","").replace(/^https:\/\/aplcart\.info\//,"https://aplcart.info")
  F(navigator.clipboard.writeText(u).catch(_=>prompt("Query URL:",u)))
}
F=_=>q.focus()
I=_=>{
  var s=new URLSearchParams(location.search)
  b.className=0==s.get("b")?"b":0==s.get("g")?"g":0==s.get("w")?"w":window.getComputedStyle(b).content[1]
  um.href="/quiz?"+b.className
  if(s.get("self")!=null){document.querySelectorAll("[target]").forEach(e=>e.target="_self");um.href+="&self"}
  fetch("table.tsv").then(d=>d.text()).then(d=>{
    ps=d.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x])).trim().split(/\r?\n/g).splice(1).map(r=>r.split("\t"))
    c=ps.map(r=>r[0])
    e=ps.map(r=>r[1])
    u=ps.map(r=>r[7])
    h=ps.map(r=>r[8])
    p=d.split(/\r?\n/g).splice(1).map(x=>x.toLowerCase().replace(/http\S+\t/,"(>)").replace(/http\S+$/,"(?)"))
    r=""
    for(var i=0;i<c.length;i++){r+='<tr><td>'+(u[i]?'<a href="'+u[i]+'" target="_blank" title="Try it online!"></a>':'')+c[i]+'</td><td>'+(h[i]?'<a href="'+h[i]+'" target="_blank" title="Documentation">?</a>':'')+e[i]+'</td></tr>'}
    t.innerHTML=r
    F(Q(q.value=s.get("q")))})}
Q=_=>{
  var f,l=q.value.toLowerCase().split(' '),r=t.rows,n=0
  for(var i=0;i<r.length;i++){
    for(var j=0;j<l.length;j++){w=l[j];f=(w[0]+w[wl=w.length-1]=="//"?(new RegExp(w.slice(1,wl),"iu")).test(p[i]):p[i].indexOf(l[j])>-1);if(!f)break}
    n+=!(r[i].hidden=!f)}
  z.textContent="Showing "+n+" of "+r.length}
R=_=>{qs=q.selectionStart;qe=q.selectionEnd
  if((v=q.value)[0]+v[vl=v.length-1]=="//"){q.value=v.slice(1,vl);q.selectionStart=qs-1;q.selectionEnd=qe-1
    }else{q.value="/"+v+"/";q.selectionStart=qs+1;q.selectionEnd=qe+1};Q()}
W=x=>{F(b.className=x?x:"wbg"[1+"wb".indexOf(b.className)]);um.href="/quiz?"+b.className}
X=_=>F(Q(q.value=""))
