let count = 0;
let interval;
const pTag = document.getElementById('count');
function startTimer() {
  interval = setInterval(() => {
    count = ++count;
    pTag.innerText = count;
    console.log(count);
  }, 1000);
}

function stop() {
    clearInterval(interval)
}
