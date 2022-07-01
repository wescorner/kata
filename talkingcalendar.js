function talkingCalendar(date){
  let arr = date.split("/");
  let month = arr[1];
  let day = arr[2];
  let year = arr[0];

  switch(month){
    case '01':
      month = "January ";
      break;
    case '02':
      month = "February ";
      break;
    case '03':
      month = "March ";
      break;
    case '04':
      month = "April ";
      break;
    case '05':
      month = "May ";
      break;
    case '06':
      month = "June ";
      break;
    case '07':
      month = "July ";
      break;
    case '08':
      month = "August ";
      break;
    case '09':
      month = "September ";
      break;
    case '10':
      month = "October ";
      break;
    case '11':
      month = "November ";
      break;
    case '12':
      month = "December ";
  }
  switch(day){
    default:
      day += "th, ";
      break;
    case '01':
      day += "st, ";
      break;
    case '02':
      day += "nd, ";
      break;
    case '03':
      day += "rd, ";
  }
  if(day[0] === '0'){
    day = day.substring(1);
  }
  return month + day + year;
};