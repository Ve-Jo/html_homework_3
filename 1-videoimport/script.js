const progressBar = document.querySelector(".progress-bar .progress");
const percentage = document.querySelector(".percentage");
const remainingTime = document.querySelector(".remaining-time");
let i = 30;
const interval = setInterval(() => {
  i++;

  progressBar.style.width = `${i}%`;
  percentage.textContent = `${i}%`;

  if (i === 100) {
    clearInterval(interval);
  }

  remainingTime.textContent = `${Math.floor((100 - i) * 0.23)} хв`;
}, 1000);
