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
    try {
        const arr = JSON.parse(str);  // input as json
        if (!Array.isArray(arr)) throw new Error("Input is not an array");
        const ans = RemoveDuplicate(arr);
        console.log(ans);
        output.innerHTML = `<h1>[ ${ans} ]</h1>`
    } catch (error) {
        result.textContent = "Invalid array input. Please enter a valid JSON array format.";
    }
})