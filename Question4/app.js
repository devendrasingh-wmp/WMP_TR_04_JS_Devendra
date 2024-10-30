let form = document.getElementById('form')
let result = document.getElementById('result');


function fun(obj){
    let l = Object.entries(obj).length;  // calculate lenght of the string
    return l;
}

// Take input from the user using form
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let str = form.elements[0].value;
    try {
        let object = JSON.parse(str) // convert in object
        let res = fun(object);
        result.innerHTML = `<h2> Lenght of Object is : ${res} </h2>`         // show on the web page
    } catch (error) {
        result.textContent = `Invalid object input. Please enter a valid JSON object format.`;
    }

})

