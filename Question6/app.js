const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

function mergeObjects(obj1, obj2) {
    const res = { ...obj1 }; // obj1 copied 

    for (let key in obj2) {
        if (res.hasOwnProperty(key)) {
            res[key] = Array.isArray(res[key]) ? res[key] : [res[key]]; // Convert to array of values if match
            res[key].push(obj2[key]); // Add the value from obj2
        } else {
            res[key] = obj2[key]; // Key not matched
        }
    }
    return res; // Return the merged result
}

btn.addEventListener('click', () => {
    const input1 = inp1.value;
    const input2 = inp2.value;

    try {
        const obj1 = JSON.parse(input1); // Input as JSON
        const obj2 = JSON.parse(input2);

        // Merge the objects
        const mergedResult = mergeObjects(obj1, obj2);
        
        // Display the result
        result.innerHTML = `<h2>Merged Object: ${JSON.stringify(mergedResult)}</h2>`;
    } catch (error) {
        result.textContent = "Invalid object input. Please enter a valid JSON object format.";
    }
});