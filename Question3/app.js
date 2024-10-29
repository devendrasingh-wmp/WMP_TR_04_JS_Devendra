const form = document.getElementById('form');
const output = document.getElementById('result')


function RemoveDuplicate(arr){
    let ar1 = new Set(arr);
    let ans = [... ar1];
    console.log(ans);
    return ans;
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const str = form.elements[0].value;
    console.log(str)
    const res = str.split(',');
    console.log(res)
    const ans = RemoveDuplicate(res);
    output.innerHTML = `<h1>[ ${ans} ]</h1>`
})