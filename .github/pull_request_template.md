Before submitting this Pull Request, please go through the following checklist: 

---

Describe what this PR changes:

This change …

---

If you've fixed [a logged issue](https://github.com/abrudz/APLcart/issues), complete the following line by putting the issue number to the immediate right of the # symbol:

Fixes #

---

If you've made changes to `table.tsv`:

- [ ] from your APL session, check that the table is well-formatted
  - `]link.import # path/aplcart`
  - `Test'path/aplcart/table.tsv'` should return `1`
  
---

If you've made code or styling changes:

- [ ] Fire up a local server and check that the site functions properly.  
  For example, you can use [MiServer](https://github.com/Dyalog/MiServer/releases/latest):
  
  - `)load miserver.dws`
  - `Start'path/aplcart'`
  - Open [`localhost:8080`](http://localhost:8080/) in your browser

---

Thank you for your contribution to APLcart, @abrudz will have a look as soon as convenient.
