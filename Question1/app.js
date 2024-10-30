const dt1 = document.getElementById('date1');
const dt2 = document.getElementById('date2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2')

const date = new Date();
const d = date.toLocaleDateString();
const dArray = d.split('/')
console.log(dArray)
let dd = dArray[0];
let mm = dArray[1];
let yyyy = dArray[2];

btn1.addEventListener('click', (e) => {
   dt1.innerHTML = `<h1> ${dd}/${mm}/${yyyy} <h1>`
});

btn2.addEventListener('click', (e) => {
    dt2.innerHTML = `<h1> ${mm}/${dd}/${yyyy} <h1>`
 });

