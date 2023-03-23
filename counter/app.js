let counterValue = document.querySelector(".counter_value");
let pauseBtn = document.querySelector(".pauseBtn");
let napCls = document.querySelector(".napCls");
let ourClock = document.querySelector(".ourClock");

let count = 0;
let interVal;
let pause = false;

const counterStart = () => {
  interVal = setInterval(counterIncre, 100);
};

function counterIncre() {
  count++;
  counterValue.innerHTML = count;
}

const pauseInterVal = () => {
  if (pause === false) {
    clearInterval(interVal);
    pauseBtn.innerHTML = "Resume";
    pause = true;
  } else {
    interVal = setInterval(counterIncre, 100);
    pauseBtn.innerHTML = "Pause";
    pause = false;
  }
};

const resetInterval = () => {
  count = 0;
  counterValue.innerHTML = count;
};
const napValue = () => {
  napCls.innerHTML += `<li>Nav Value : ${count}</li>`;
};




// console.log(date.toLocaleDateString())
// console.log()

let myTime;

const dateFnc = () =>{
    let date = new Date();
    myTime = date.toLocaleTimeString()
    console.log(myTime)
    ourClock.innerHTML = myTime
}
let setData = setInterval(dateFnc, 1000)

