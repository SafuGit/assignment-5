console.log("test");
let dateInfo;
main();

// *Main Function
function main() {
    initDate();
}

// *Event Listeners
console.log(document.querySelector(".complete-btn"))
document.querySelectorAll(".complete-btn").forEach(button => {
    button.addEventListener('click', completeTask)
})

// *Functions
function initDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var dateObj = new Date();

    dateInfo = {
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

function completeTask() {
    console.log("test2");
    console.log(dateInfo);
}