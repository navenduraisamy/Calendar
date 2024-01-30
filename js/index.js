import { renderDates, renderMonth, renderWeekDays } from "./render.js";

let selectedDate = new Date();
// used while navigating between months; set to 1st date of month
// while the selected date can still remain in other months
let currentDate = new Date();
renderMonth(currentDate);
renderWeekDays();
renderDates(currentDate, selectedDate);
setFormControl(selectedDate);

function setFormControl(date) {
    const formatOptions = { day:"2-digit", month: "2-digit", year: "numeric"};
    document.querySelector("#date-control").value = date.toLocaleDateString("en-IN", formatOptions);
}


document.querySelector("#dates").addEventListener("click", (e) => {
    if (e.target.classList.contains("disabled"))
        return;

    const {month, year} = e.target.dataset;
    const day = e.target.textContent.trim();
    selectedDate = new Date(year, month, day);
    currentDate = selectedDate;
    renderDates(currentDate, selectedDate);
    console.log(selectedDate);
    setFormControl(selectedDate);
});

document.querySelector("#prev").addEventListener("click", () => {
    currentDate = new Date(currentDate.getFullYear(), 
        currentDate.getMonth() - 1, 
        1);
    renderDates(currentDate, selectedDate);
    renderMonth(currentDate);
});

document.querySelector("#next").addEventListener("click", () => {
    currentDate = new Date(currentDate.getFullYear(), 
        currentDate.getMonth() + 1, 
        1);
    renderDates(currentDate, selectedDate);
    renderMonth(currentDate);
});








