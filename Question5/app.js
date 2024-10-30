const result = document.getElementById('result');
const btn = document.getElementById('btn');




btn.addEventListener('click', (e) => {
    let r = Math.floor(Math.random()*10+1);   // generate random no. from 1 to 10 
    const userInput = parseInt(prompt("Enter the number between 1 to 10"));
    if(userInput < 1 || userInput > 10){
        alert("Please enter a number between 1 to 10");
    } else if(userInput == NaN) {
        alert("Please enter a number between 1 to 10");
    }   
        // above case will check for the wrong input 
    else if(r === parseInt(userInput)){
        result.innerHTML = "Good Work"
    } else {
        result.innerHTML = "Not matched"
    }
});