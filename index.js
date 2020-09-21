const date = new Date();

const days = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

// console.log(prevLastDay)

const firstDayIndex = date.getDay();
// console.log(firstDayIndex)

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
console.log(lastDayIndex);
const nextDays = 7 - lastDayIndex;

// console.log(lastDay);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let newDate = document.querySelector(".date p");
newDate.innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

// console.log(document.querySelector(".date p"))

let newDays = "";

for (let j = firstDayIndex; j > 0; j--) {
  newDays += `<div class="prev">${prevLastDay - j + 1}</div>`
}

for (let i = 1; i <= lastDay; i++) {

  newDays += `<div>${i}</div>`
}

for (let k = 1; k <= nextDays; k++) {
  newDays += `<div class="next">${k}</div>`;
  days.innerHTML = newDays;
}

document.querySelector("#prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
});

// document.querySelector("#next").addEventListener("click", () => {
//   date.setMonth(date.getMonth() + 1);
// });

