C=_=>F(history.replaceState({},document.title,location.pathname+(q.value?"?q="+encodeURIComponent(q.value):"")))
E=s=>s.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x]))
F=_=>q.focus()
I=_=>{
  var s=new URLSearchParams(location.search);b.className=0==s.get("w")?"w":0==s.get("b")?"b":""
  fetch("table.tsv").then(d=>d.text()).then(d=>{t.innerHTML=E(d).replace(/.*/,'<tbody>').replace(/\r?\n/g,'<tr><td>').replace(/\t/g,'<td>')+'</tbody>';F(Q(q.value=s.get("q")))})}
Q=_=>{
  var f,l=q.value.toLowerCase().split(' '),tr=t.rows,n=0
  for(var i=0;i<tr.length;i++){
    var s=tr[i].textContent.toLowerCase()
    for(var j=0;j<l.length;j++){f=s.indexOf(l[j])>-1;if(!f)break}
    n+=!(tr[i].hidden=!f)}
  z.textContent="Showing "+n+" of "+tr.length}
W=x=>F(b.className=x?x:"wb"[1+"wb".indexOf(b.className[0])])
X=_=>F(Q(q.value=""))
