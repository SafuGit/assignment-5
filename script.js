console.log("test");
main();

// *Main Function
function main() {
    initDate();
}

// *Functions
function initDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var dateObj = new Date();

    const dateInfo = {
        "month": months[dateObj.getMonth()],
        "day": days[dateObj.getDay()],
        "date": dateObj.getDate(),
        "year": dateObj.getFullYear()
    }

    var dateElem = document.querySelector("#date");
    var dateYearElem = document.querySelector("#date-year");
    dateElem.innerHTML = `${dateInfo.day} ${dateInfo.month} ${dateInfo.date}`
    dateYearElem.innerHTML = `${dateInfo.year}`
}