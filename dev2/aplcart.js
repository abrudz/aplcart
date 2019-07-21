function D(){return document};
function B(){return D().body};
function $(s){return document.querySelectorAll(s)};
function I(){
    if("undefined"===typeof(URLSearchParams)){
      B().setAttribute('class','w');
      B().removeChild(w);
    }else{
      var s=new URLSearchParams(window.location.search);
      B().setAttribute('class',null!=s.get("w")?"w":"");
      q.value=s.get("q");
      Q();
    };
    Z();
}
function Z(){
    z.textContent="Showing "+$("tr:not([hidden])").length+" of "+$("tr").length;
}
function W(){
    if(B().getAttribute('class')){
        B().setAttribute('class','');
    }else{
        B().setAttribute('class','w');
    };
    q.focus();
}
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
    var fw, tr, td, i, j, k;
    ws = q.value.toLowerCase().split(' ')
    tr = t.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (k = 0; k < ws.length; k++) {
            fw = false;
            for (j = 0; j < td.length; j++) {
                if (td[j].textContent.toLowerCase().indexOf(ws[k]) > -1) {
                    fw = true;
                };
            };
            if(!fw){break};
        };
        tr[i].hidden=!fw;
    };
    Z();
}
