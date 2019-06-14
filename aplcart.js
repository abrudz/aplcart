function esc(s){return s.replace(/[<>&'"]/g,x=>ESC[x])};
var ESC={'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}
var table;
function setTit(t){document.title=t?"APLcart: "+t:"APLcart - Find your way in APL"};
function setUrl(q){history.replaceState({},document.title,window.location.pathname+(q?"?q="+q:""))};
$(document).ready(function(){
  $.get("table.tsv",function(w){
    table=(esc(w)).split(/\r?\n/g).slice(1).map(w=>w.split('\t')).filter(w=>w!="");
    s=new URLSearchParams(window.location.search)
    q=s.get("q");
    setTit(q);
    $('table').DataTable({
      data:table,
      paging:false,
      scrollY:"calc(100vh - 110px)",
      searchDelay:250,
      search:{search:(q?q:"")},
      language:{search:"query:"}
    });
    $(".dataTables_scrollBody").attr("accesskey","z");
    $("input").focus().attr({
      accesskey:"q",
      onkeyup:'q=$("input").val();setTit(q);setUrl(q)'
    });
    $("body").addClass(null!=s.get("w")?"w":"")
  });
});