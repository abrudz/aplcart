C=_=>F(history.replaceState({},document.title,location.pathname+(q.value?"?q="+encodeURIComponent(q.value):"")))
F=_=>q.focus()
I=_=>{
  var s=new URLSearchParams(location.search)
  b.className=0==s.get("w")?"w":0==s.get("b")?"b":""
  um1.href="/?"+b.className
  um2.href="/quiz?"+b.className
  fetch("pub.tsv").then(d=>d.text()).then(d=>{
    ps=d.replace(/[<>&'"]/g,x=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x]))
    .replace(/.+\r?\n/,'<tr><td>')
    .replace(/\[(.+?)\]\(([\S\b]+)\)/g,'<a href="$2" target="_blank">$1</a>')
    .replace(/\t[^\t]*\r?\n/g,"</td></tr>\r\n<tr><td>")
    .replace(/\t/g,"</td><td>")
    p=d.toLowerCase().split(/\r?\n/g).splice(1)
    t.innerHTML=ps
    F(Q(q.value=s.get("q")))})}
Q=_=>{
  var f,l=q.value.toLowerCase().split(' '),r=t.rows,n=0
  for(var i=0;i<r.length;i++){
    for(var j=0;j<l.length;j++){f=p[i].indexOf(l[j])>-1;if(!f)break}
    n+=!(r[i].hidden=!f)}
  z.textContent="Showing "+n+" of "+r.length}
W=x=>{F(b.className=x?x:"wbg"[1+"wb".indexOf(b.className[0])]);um.href="/quiz?"+b.className}
X=_=>F(Q(q.value=""))
