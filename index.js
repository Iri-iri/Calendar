const date = new Date();

const displayCalendar = () => {
date.setDate(1);

const days = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // последний день месяца

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); // последний день предыдущего месяца

const firstDayIndex = date.getDay();


const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // индекс последнего дня месяца

const nextDays = 7 - lastDayIndex-1;

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

let newDate = document.querySelector("#date");
newDate.innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

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

}

document.querySelector("#prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  displayCalendar();
});

document.querySelector("#next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  displayCalendar();
});

displayCalendar();