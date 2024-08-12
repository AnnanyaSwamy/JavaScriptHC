//Dates
//from jan 1 1970

let myDate=new Date();
console.log(myDate);//unreadable

console.log(myDate.toString())

// Create a new Date object for demonstration
let date = new Date();

// Date() constructor
console.log("// Date() constructor:");
// Creates a new Date object with the current date and time.
console.log(new Date()); // e.g., "Sun Aug 11 2024 12:34:56 GMT+0000 (Coordinated Universal Time)"

// getDate()
console.log("// getDate():");
// Returns the day of the month (1-31) for the specified date.
console.log(date.getDate()); // e.g., 11

// getDay()
console.log("// getDay():");
// Returns the day of the week (0-6) for the specified date (0 = Sunday).
console.log(date.getDay()); // e.g., 0 (Sunday)

// getMonth()
console.log("// getMonth():");
// Returns the month (0-11) for the specified date (0 = January).
console.log(date.getMonth()); // e.g., 7 (August)

// getFullYear()
console.log("// getFullYear():");
// Returns the year of the specified date.
console.log(date.getFullYear()); // e.g., 2024

// getHours()
console.log("// getHours():");
// Returns the hour (0-23) of the specified date.
console.log(date.getHours()); // e.g., 12

// getMinutes()
console.log("// getMinutes():");
// Returns the minutes (0-59) of the specified date.
console.log(date.getMinutes()); // e.g., 34

// getSeconds()
console.log("// getSeconds():");
// Returns the seconds (0-59) of the specified date.
console.log(date.getSeconds()); // e.g., 56

// getMilliseconds()
console.log("// getMilliseconds():");
// Returns the milliseconds (0-999) of the specified date.
console.log(date.getMilliseconds()); // e.g., 789

// getTime()
console.log("// getTime():");
// Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
console.log(date.getTime()); // e.g., 1714532096789

// toDateString()
console.log("// toDateString():");
// Returns a string representing the date portion of the Date object.
console.log(date.toDateString()); // e.g., "Sun Aug 11 2024"

// toTimeString()
console.log("// toTimeString():");
// Returns a string representing the time portion of the Date object.
console.log(date.toTimeString()); // e.g., "12:34:56 GMT+0000 (Coordinated Universal Time)"

// toLocaleDateString()
console.log("// toLocaleDateString():");
// Returns a string representing the date in the local timezone.
console.log(date.toLocaleDateString()); // e.g., "8/11/2024"

// toLocaleTimeString()
console.log("// toLocaleTimeString():");
// Returns a string representing the time in the local timezone.
console.log(date.toLocaleTimeString()); // e.g., "12:34:56 PM"

// toISOString()
console.log("// toISOString():");
// Returns a string representing the date in ISO 8601 format.
console.log(date.toISOString()); // e.g., "2024-08-11T12:34:56.789Z"

// toUTCString()
console.log("// toUTCString():");
// Returns a string representing the date in UTC time zone.
console.log(date.toUTCString()); // e.g., "Sun, 11 Aug 2024 12:34:56 GMT"

// setDate(day)
console.log("// setDate(day):");
// Sets the day of the month (1-31) for a specified date.
date.setDate(15);
console.log(date.getDate()); // 15

// setMonth(month)
console.log("// setMonth(month):");
// Sets the month (0-11) for a specified date (0 = January).
date.setMonth(11); // December
console.log(date.getMonth()); // 11

// setFullYear(year)
console.log("// setFullYear(year):");
// Sets the year for a specified date.
date.setFullYear(2025);
console.log(date.getFullYear()); // 2025

// setHours(hours)
console.log("// setHours(hours):");
// Sets the hour (0-23) for a specified date.
date.setHours(23);
console.log(date.getHours()); // 23

// setMinutes(minutes)
console.log("// setMinutes(minutes):");
// Sets the minutes (0-59) for a specified date.
date.setMinutes(45);
console.log(date.getMinutes()); // 45

// setSeconds(seconds)
console.log("// setSeconds(seconds):");
// Sets the seconds (0-59) for a specified date.
date.setSeconds(30);
console.log(date.getSeconds()); // 30

// setMilliseconds(milliseconds)
console.log("// setMilliseconds(milliseconds):");
// Sets the milliseconds (0-999) for a specified date.
date.setMilliseconds(500);
console.log(date.getMilliseconds()); // 500


//Specific Date
let myCreatedDate=new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString())


let myTimeStamp=Date.now()
console.log(myTimeStamp);//can easily be comapred now
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate.getDay());