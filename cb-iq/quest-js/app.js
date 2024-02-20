let count = 0;
let interval;
const pTag = document.getElementById("count");
function startTimer() {
  interval = setInterval(() => {
    count = ++count;
    pTag.innerText = count;
    console.log(count);
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function makeAFetchCall() {
  /* const data = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const _data = await response.json();
    return _data;
  };

  return data; */

  fetch("https://jsonplaceholder.typicode.com/users/1").then((data)=>{
    return data.json()
  })
  .then((data)=>{
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

function makeAPromise() {
  return new Promise((resolve, reject) => {
    resolve("Resolved");
    reject("Rejected");
  });
}

function firePromise(){
    makeAPromise().then(data=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}
