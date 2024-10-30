const result = document.getElementById('result');
const btn = document.getElementById('btn');

function invokeAfterDelay(callback) {
    setTimeout(() => {
        callback();
    }, 2000); 
}

function callback() {
  result.innerHTML += "<h2>This message is displayed after 2 seconds! </h2>";
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("clicked");
    invokeAfterDelay(callback);
});