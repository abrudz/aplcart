C=_=>F(history.replaceState({},document.title,location.pathname+(q.value?"?q="+encodeURIComponent(q.value):"")))
F=_=>q.focus()
I=_=>{
  var s=new URLSearchParams(location.search)
  b.className=0==s.get("w")?"w":0==s.get("b")?"b":""
  fetch("table.tsv").then(d=>d.text()).then(d=>{
    p=d.split(/\r?\n/g).splice(1)
    u=p.map(p=>p.split("\t")[7])
    p=p.map(x=>x.toLowerCase())
    var i=-1
    ti=t.innerHTML=d.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x])).replace(/.*/,'<tbody>').replace(/\r?\n/g,x=>{i++;return'<tr><td'+(u[i]?' title="Try it online!" onclick="window.open(\''+u[i]+'\')"':'')+'>'}).replace(/\t/g,'<td>').replace(/(<td>[^<]*){6}<tr>/g,'<tr>')+'</tbody>'
    F(Q(q.value=s.get("q")))})}
Q=_=>{
  var f,l=q.value.toLowerCase().split(' '),r=t.rows,n=0
  for(var i=0;i<r.length;i++){
    for(var j=0;j<l.length;j++){f=p[i].indexOf(l[j])>-1;if(!f)break}
    n+=!(r[i].hidden=!f)}
  z.textContent="Showing "+n+" of "+r.length}
W=x=>F(b.className=x?x:"wb"[1+"wb".indexOf(b.className[0])])
X=_=>F(Q(q.value=""))
