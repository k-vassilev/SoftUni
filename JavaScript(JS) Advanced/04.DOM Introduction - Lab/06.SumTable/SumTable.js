function sumTable() {
    let table = document.querySelectorAll("table tr");
    let total = 0;
   for (let i = 1 ; i < table.length; i++) {
       let colms = table[i].children; // gets all children from the given row
       let cost = colms[colms.length - 1].textContent; //gets the value of the last child of the row
       total += Number(cost);
   }
   document.getElementById("sum").textContent = total;
}   
