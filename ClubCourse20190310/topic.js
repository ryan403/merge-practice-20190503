var topic = [
  "課程介紹",
  "不上課",
  "不上課",
  "亂數選擇、自動排課",
  "不上課",
  "心理測驗"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,23);