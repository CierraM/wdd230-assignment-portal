function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("hide")
}

// get the date in form of Wednesday, 24 July 2020.
function dateCalc(){
let todayDate = new Date()

let todayWeekday = todayDate.getDay()
let todayDay = todayDate.getDate()
let todayMonth = todayDate.getMonth()
let todayYear = todayDate.getFullYear()

let weekday = new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";

let month = new Array(12)
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let fullDate = `${weekday[todayWeekday]}, ${todayDay} ${month[todayMonth]} ${todayYear}`
console.log(fullDate)

document.getElementById('date').textContent = fullDate;
}