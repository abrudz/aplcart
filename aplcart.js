function esc(s){return s.replace(/[<>&'"]/g,x=>ESC[x])};
var ESC={'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}
var table;
$(document).ready(function(){
  $.get("table.tsv",function(w){table=(esc(w)).split(/\r?\n/g).slice(1).map(w=>w.split('\t')).filter(w=>w!="");
    s=(new URLSearchParams(window.location.search)).get("q")
    $('table').DataTable({
      data:table,
      paging:false,
      scrollY:"calc(100vh - 110px)",
      searchDelay:250,
      search:{search:(s?s:"")},
      "language":{"search": "query:"}
    });
    $(".dataTables_scrollBody").attr("accesskey","z");
    $("input").attr("accesskey","q");
    $("input").focus();
  });
  if(null!=(new URLSearchParams(window.location.search)).get("w")){$("body").addClass("w")};
});