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

// *Functions
function initDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var dateObj = new Date();

    dateInfo = {
        "month": months[dateObj.getMonth()],
        "day": days[dateObj.getDay()],
        "date": dateObj.getDate(),
        "year": dateObj.getFullYear(),
        "time": `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`
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
    const node = document.createTextNode(`You have Completed The Task ${title} at ${dateInfo.time}`);

    div.appendChild(node);
    document.querySelector(".activity").appendChild(div);

    cardBody.querySelector(".complete-btn").classList.add("btn-disabled")
}

function changeBg() {
    color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    console.log(color);
    document.querySelector('html').style.cssText = `background-color: ${color} !important;`
}