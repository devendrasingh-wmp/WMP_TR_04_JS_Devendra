const dt1 = document.getElementById('date1');
const dt2 = document.getElementById('date2');

const date = new Date();
const d = date.toLocaleDateString();
const dArray = d.split('/')
console.log(dArray)
let dd = dArray[0];
let mm = dArray[1];
let yyyy = dArray[2];

dt1.innerHTML = `<h1>DD/MM/YYYY formate:   ${dd}/${mm}/${yyyy} <h1>`
dt2.innerHTML = `<h1>MM/DD/YYYY formate:   ${mm}/${dd}/${yyyy} <h1>`