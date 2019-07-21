function filterTable() {
    var input, filter, found, table, tr, td, i, j, k;
    input = document.getElementById("q");
    filter = input.value.toLowerCase();
    words = filter.split(' ')
    table = document.getElementById("t");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (k = 0; k < words.length; k++) {
            found = false;
            for (j = 0; j < td.length; j++) {
                if (td[j].innerHTML.toLowerCase().indexOf(words[k]) > -1) {
                    found = true;
                };
            };
            if (!found){break};
        }
        if (found) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}
