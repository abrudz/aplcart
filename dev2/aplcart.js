function E(s){return s.replace(/[<>&'"]/g,function(x){return {'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x]})}
function I(){
  fetch("/table.tsv"
  ).then(function(d){return d.text()}
  ).then(function(d){t.innerHTML=E(d).replace(/.*/,'<tbody>').replace(/\r?\n/g,'<tr><td>').replace(/\t/g,'<td>')+'</tbody>'}
  ).then(function(){
      if("undefined"===typeof(URLSearchParams)){document.body.className='w';document.body.removeChild(w)}
      else{var s=new URLSearchParams(window.location.search);document.body.className=null!=s.get("w")?"w":"";q.value=s.get("q")}
      Q()})}
function W(){document.body.classList.toggle('w');q.focus()}
function X(){q.value="";Q();q.focus()}
function C(){var qv=q.value;history.replaceState({},document.title,window.location.pathname+(qv?"?q="+encodeURIComponent(qv):""));q.focus()}
function Q(){
  var fw,ws=q.value.toLowerCase().split(' '),tr=t.rows,n=0
  for(var i=0;i<tr.length;i++){
    var s=tr[i].textContent.toLowerCase()
    for(var j=0;j<ws.length;j++){fw=s.indexOf(ws[j])>-1;if(!fw)break}
    n+=tr[i].hidden=!fw}
  z.textContent='Showing '+n+' of '+tr.length}
