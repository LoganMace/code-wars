// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
  if(seconds === 0) return 'now';
  let secondsLeft = seconds;
  let years = Math.floor(seconds / (60*60*24*365))
  secondsLeft = secondsLeft % (60*60*24*365);
  let days = Math.floor(secondsLeft / (60*60*24));
  secondsLeft = secondsLeft % (60*60*24);
  let hours = Math.floor(secondsLeft / (60*60));
  secondsLeft = secondsLeft % (60*60);
  let minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  let sayYears = (years > 1) ? `${years} years` : (years === 1) ? `${years} year`: '0 years';
  let sayDays = (days > 1) ? `${days} days` : (days === 1) ? `${days} day`: '0 days';
  let sayHours = (hours > 1) ? `${hours} hours` : (hours === 1) ? `${hours} hour`: '0 hours';
  let sayMinutes = (minutes > 1) ? `${minutes} minutes` : (minutes === 1) ? `${minutes} minute`: '0 minutes';
  let saySeconds = (secondsLeft > 1) ? `${secondsLeft} seconds` : (secondsLeft === 1) ? `${secondsLeft} second`: '0 seconds';
  
  let message = (seconds % (60*60*24*365) === 0) ? `${sayYears}` :
        (years) ? `${sayYears}, ${sayDays}, ${sayHours}, ${sayMinutes}, ${saySeconds}` :
        (days) ? `${sayDays}, ${sayHours}, ${sayMinutes}, ${saySeconds}` :
        (hours) ? `${sayHours}, ${sayMinutes}, ${saySeconds}` :
        (minutes) ? `${sayMinutes}, ${saySeconds}` :
        `${saySeconds}`;

  let newMessage = (message.includes(`, 0 hours, 0 minutes, 0 seconds`)) ? message.split(`, 0 hours, 0 minutes, 0 seconds`) :
    (message.includes(`, 0 minutes, 0 seconds`)) ? message.split(', 0 minutes, 0 seconds') :
    (message.includes(`, 0 seconds`)) ? message.split(', 0 seconds') :
    message;
  newMessage = [...newMessage].join('');
  newMessage = newMessage.split('');
  let andIndex = (newMessage.lastIndexOf(','));
  // console.log(andIndex, newMessage);
  if(andIndex !== -1) {
    newMessage.splice(andIndex, 1, ' ', 'a','n','d');
  }

  return newMessage.join('');
}