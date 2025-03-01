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
    button.addEventListener('click', (event) => completeTask(event.target.closest(".card-body")))
})
document.querySelector(".nav-color-img").addEventListener('click', changeBg);
document.querySelector("#clear-btn").addEventListener('click', clearHistory);

// *Functions
function initDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var dateObj = new Date();
    const options = {hour12: true};
    const date12hr = dateObj.toLocaleString('en-US', options).split(",");
    console.log(date12hr);

    dateInfo = {
        "month": months[dateObj.getMonth()],
        "day": days[dateObj.getDay()],
        "date": dateObj.getDate(),
        "date12hr": date12hr[0],
        "year": dateObj.getFullYear(),
        "time": `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`,
        "time12hr": date12hr[1]
    }

    var dateElem = document.querySelector("#date");
    var dateYearElem = document.querySelector("#date-year");
    dateElem.innerHTML = `${dateInfo.day} ${dateInfo.month} ${dateInfo.date}`
    dateYearElem.innerHTML = `${dateInfo.year}`
}

function completeTask(cardBody) {
    console.log("test2");
    console.log(cardBody);
    const title = cardBody.querySelector(".card-title").innerText;
    console.log(title);

    const div = document.createElement("div");
    div.classList.add("text-sm", "bg-[#F4F7FF]", "ml-4", "mr-4", "mt-4", "p-3", "rounded-md")
    initDate();
    const node = document.createTextNode(`You have Completed The Task ${title} at ${dateInfo.time12hr}`);

    div.appendChild(node);
    alert("Board Updated Successfully");
    document.querySelector("#completed-tasks-container").appendChild(div);

    cardBody.querySelector(".complete-btn").classList.add("btn-disabled")

    const taskAmountElem = document.querySelector("#task-assigned-amount");
    var taskAmount = taskAmountElem.innerHTML;
    taskAmountElem.innerHTML = taskAmount - 1;

    const taskCompletedElem = document.querySelector("#nav-tick-span");
    const taskCompleteAmount = taskCompletedElem.innerHTML;
    taskCompletedElem.innerHTML = parseInt(taskCompleteAmount) + 1;
}

function clearHistory() {
    document.querySelector("#completed-tasks-container").innerHTML = "";
}

function changeBg() {
    color = "hsl(" + Math.random() * 360 + ", 50%, 75%)";
    console.log(color);
    document.querySelector('html').style.cssText = `background-color: ${color} !important;`
}