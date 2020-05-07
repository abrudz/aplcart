C=_=>F(history.replaceState({},document.title,location.pathname+(q.value?"?q="+encodeURIComponent(q.value):"")))
F=_=>q.focus()
I=_=>{
  var s=new URLSearchParams(location.search)
  b.className=0==s.get("w")?"w":0==s.get("b")?"b":""
  fetch("table.tsv").then(d=>d.text()).then(d=>{
    ps=d.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x])).split(/\r?\n/g).splice(1).map(r=>r.split("\t"))
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
    for(var j=0;j<l.length;j++){f=p[i].indexOf(l[j])>-1;if(!f)break}
    n+=!(r[i].hidden=!f)}
  z.textContent="Showing "+n+" of "+r.length}
W=x=>F(b.className=x?x:"wb"[1+"wb".indexOf(b.className[0])])
X=_=>F(Q(q.value=""))
