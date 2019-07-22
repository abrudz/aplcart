C=_=>{var qv=q.value;history.replaceState({},document.title,location.pathname+(qv?"?q="+encodeURIComponent(qv):""));F()}
E=s=>s.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x]))
F=_=>q.focus()
I=_=>{
  fetch("table.tsv")
  .then(d=>d.text())
  .then(d=>{t.innerHTML=E(d).replace(/.*/,'<tbody>').replace(/\r?\n/g,'<tr><td>').replace(/\t/g,'<td>')+'</tbody>'
  var s=new URLSearchParams(location.search);document.body.className=null!=s.get("w")?"w":"";q.value=s.get("q");Q();F()})}
Q=_=>{
  var f,l=q.value.toLowerCase().split(' '),tr=t.rows,n=0
  for(var i=0;i<tr.length;i++){
    var s=tr[i].textContent.toLowerCase()
    for(var j=0;j<l.length;j++){f=s.indexOf(l[j])>-1;if(!f)break}
    n+=!(tr[i].hidden=!f)}
  z.textContent="Showing "+n+" of "+tr.length}
W=_=>{document.body.classList.toggle('w');F()}
X=_=>{q.value="";Q();F()}
