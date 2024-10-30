const result = document.getElementById('result');
const inp = document.getElementById('arrayInput');
const cloneBtn = document.getElementById('cloneBtn');
// Function to deep clone an array
function array_Clone(arr) {
    return JSON.parse(JSON.stringify(arr)); 
}

// Event listener for button click
cloneBtn.addEventListener('click', () => {
    const input = inp.value;
    try {
        const arr = JSON.parse(input);  // input as json
        if (!Array.isArray(arr)) throw new Error("Input is not an array");
        const clonedArray = array_Clone(arr);
        console.log(clonedArray);
        result.innerHTML = `<h2>Cloned Array: ${JSON.stringify(clonedArray)}</h2>`;
    } catch (error) {
        result.textContent = "Invalid array input. Please enter a valid JSON array format.";
    }
});