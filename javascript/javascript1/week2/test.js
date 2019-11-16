
const TheDayToday = new Date();
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekDate = TheDayToday.getDay();
let nextEventweekDay;

function getEventWeekDay (eventDay) {
   nextEventweekDay = daysOfTheWeek [(eventDay + weekDate) % 7 ];
    // console.log(eventDay)
    return nextEventweekDay;

  }

getEventWeekDay (1)
 console .log (`The event will be on:  ${nextEventweekDay}`);






