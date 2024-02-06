import { months, weekdays } from "./contants.js";
import { getDates } from "./compute-dates.js";

export function renderDates(currentDate, selectedDate) {
    let { prevMonthDates, currMonthDates, nextMonthDates } = getDates(currentDate);
    let template = "";

    prevMonthDates.forEach(date => {
        template += `<div class="date-item disabled">${date}</div>`
    });

    currMonthDates.forEach((date) => {
        if(date === selectedDate.getDate() 
            && currentDate.getMonth() === selectedDate.getMonth()
            && currentDate.getFullYear() === selectedDate.getFullYear()
        ) {
            template += `<div class="date-item picked"
            data-month=${currentDate.getMonth()} data-year=${currentDate.getFullYear()}
            >${date}</div>`;
            return;
        }
        template += `<div 
        class="date-item" 
        data-month=${currentDate.getMonth()} data-year=${currentDate.getFullYear()}>${date}</div>`
    })

    nextMonthDates.forEach(date => {
        template += `<div class="date-item disabled">${date}</div>`
    });

    document.querySelector("#dates").innerHTML = template;
}

export function renderWeekDays() {
    let template = ""
    weekdays.forEach(day => template += `<h4>${day}</h4>`)
    document.querySelector("#week").innerHTML = template;
}

export function renderMonth(currentDate) {
    const monthIdx = currentDate.getMonth();
    const year = currentDate.getFullYear();

    let value = months[monthIdx] + " " + year;
    document.querySelector("#month-year").innerHTML = 
        `<h4 id="month-year" data-month=${monthIdx} data-year=${year}>${value}</h4>`;
}
