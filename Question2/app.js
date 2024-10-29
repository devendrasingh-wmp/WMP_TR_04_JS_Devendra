const form = document.getElementById('form');
const output = document.getElementById('output')

function fun(Str){
    let result = '';
    for(let i=0; i < Str.length; i++){
        if(Str[i] === Str[i].toUpperCase()){
           result += Str[i].toLowerCase(); 
        } else {
            result += Str[i].toUpperCase();
        }
    }
    return result;
}



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const str = form.elements[0].value;
    const ans = fun(str);
    output.innerHTML = `<h1>${ans}</h1>`
})