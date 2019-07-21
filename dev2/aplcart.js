function D(){return document};
function B(){return D().body};
function $(s){return document.querySelectorAll(s)};
function E(s){return s.replace(/[<>&'"]/g,function(x){return {'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[x]})};
function I(){
  fetch("table.tsv").then(function(d){d.text()}).then(function(d){
    t.innerHTML='<tbody><tr><td>'+E(d).replace(/\r?\n/g,'<tr><td>').replace(/\t/g,'<td>')+'</tbody>'
  });

  if("undefined"===typeof(URLSearchParams)){
    B().className='w';
    B().removeChild(w);
  }else{
    var s=new URLSearchParams(window.location.search);
    B().className=null!=s.get("w")?"w":"";
    q.value=s.get("q");
    Q();
  };
  Z();
}
function Z(){
  z.textContent="Showing "+$("tr:not([hidden])").length+" of "+$("tr").length;
}
function W(){B().classList.toggle('w');q.focus()}
function X(){
  q.value="";
  Q();
  q.focus();
}
function C(){
  var qv=q.value;
  history.replaceState({},D().title,window.location.pathname+(qv?"?q="+encodeURIComponent(qv):""))
  q.focus();
};
function Q() {
  var fw,ws=q.value.toLowerCase().split(' '),tr=t.getElementsByTagName("tr")
  for(var i=0;i<tr.length;i++){
    var s=tr[i].textContent.toLowerCase()
    for(var j=0;j<ws.length;j++){fw=s.indexOf(ws[j])>-1;if(!fw)break}
    tr[i].hidden=!fw
  }
  Z()
}