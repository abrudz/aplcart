function esc(s){return s.replace(/[<>&'"]/g,function(x){return E[x]})};
var E={'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}
function setUrl(q){history.replaceState({},document.title,window.location.pathname+(q?"?q="+encodeURIComponent(q):""))};
$(function(){
  $.get("table.tsv",function(w){
    t=(esc(w)).split(/\r?\n/g).slice(1).map(function(w){return w.split('\t')}).filter(function(w){return w!=""});
    if("undefined"===typeof(URLSearchParams)){
      $("body").addClass("w");
      $('#w').remove();
      q="";
    }else{
      s=new URLSearchParams(window.location.search);
      $("body").addClass(null!=s.get("w")?"w":"");
      q=s.get("q");
    };
    $('table').DataTable({
      data:t,
      paging:false,
      scrollY:"calc(100vh - 110px)",
      searchDelay:250,
      search:{search:(q?q:"")},
      language:{search:"Tell me about:"},
      initComplete:function(s,j){$('aside').remove();$('a,p').show();}
    });
    $(".dataTables_scrollBody").attr("accesskey","z");
    $("tr>*").attr('tabindex','-1');
    $("label,input").prop('title',"What to search for (access-key: Q)");
    $("input").focus().attr({
      accesskey:"q",
      tabindex:"3"
    });
  });
});