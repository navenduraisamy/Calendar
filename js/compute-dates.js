export function getDates(currentDate) {
    let date = currentDate.getDate();
    let monthIdx = currentDate.getMonth();
    let year = currentDate.getFullYear();

    let prevMonthLastDate = new Date(year, monthIdx, 0);
    let currMonthLastDate = new Date(year, monthIdx+1, 0);
    let nextMonthFirstDate = new Date(year, monthIdx+1, 1);

    let prevMonthDates = getPreviousMonthDates(prevMonthLastDate);
    let nextMonthDates = getNextMonthDates(nextMonthFirstDate);
    let currMonthDates = getCurrentMonthDates(currMonthLastDate);

    return {
        prevMonthDates,
        currMonthDates,
        nextMonthDates
    }

}

function getPreviousMonthDates(prevMonthLastDate) {
    if (prevMonthLastDate.getDay() === 6)
        return [];
     
    let dates = [];
    for(let i = 0; i<=prevMonthLastDate.getDay(); i++) {
        let d = prevMonthLastDate.getDate() - i;
        dates.unshift(d)
    }
    return dates;
}

function getNextMonthDates(nextMonthFirstDate) {
    if (nextMonthFirstDate.getDay() === 0)
        return [];

    let dates = [];
    for (let i = nextMonthFirstDate.getDate(); i <= 7 - nextMonthFirstDate.getDay(); i++) {
        dates.push(i);
    }
    return dates;
}

function getCurrentMonthDates(currMonthLastDate) {
    let dates = []
    for(let i=1; i<=currMonthLastDate.getDate(); i++) {
        dates.push(i);
    }
    return dates;
}